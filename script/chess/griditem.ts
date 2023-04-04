class GridItem{
	block(): boolean{
		return true
	}
}

class air extends GridItem{
	block(): boolean{
		return false
	}
}

/* * * * 障碍物 * * * */
class Barrier extends GridItem{}

class rock extends Barrier{}
class pass extends Barrier{
	facing: number
	closed: boolean
	key: any
	block(): boolean{
		return this.closed
	}
}

/* * * * 棋子 * * * */
class Piece extends GridItem{
	ownership: number
	onkilled(_: Board, __: Pos): void {}
	onmove(b: Board, src: Pos, dest: Pos): void {
		let x = getindex(b, dest)
		if(x instanceof Piece){
			if(b.config["rival"](x.ownership, this.ownership)){
				x.onkilled(b, dest)
			}
		}
		moveitem(b, src, dest)
	}
}

class cs_king extends Piece{
	onkilled(b: Board, __: Pos): void {
		b.config["kill"](this.ownership)
	}
	destinations(b: Board, pos: Pos): Array<Pos> {
		let vec = new Array<Pos>()
		for(let i=1;i<=8;i++){
			let to = add(pos, move[i])
			if(isreachable2(b, pos, this.ownership)){
				vec.push(to)
			}
		}
		return vec
	}
}

class cs_soldier extends Piece{
	rushed: boolean
	destinations(b: Board, pos: Pos): Array<Pos> {
		let vec = new Array<Pos>()
		let ow = this.ownership
		let fa: number = b.config["facing"][ow]
		let front: Pos = add(pos, move[fa])
		if(!this.rushed){
			let rush: Pos = add(pos, multi(move[fa], 2))
			if(isreachable(b, rush)){
				vec.push(rush)
			}
		}
		return vec
	}
}
