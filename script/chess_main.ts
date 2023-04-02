class Board{
	length: number
	height: number
	contents: Array<GridItem>
	config: object
}

class Pos{
	x: number
	y: number
}
function add(a: Pos, b: Pos): Pos {
	return pos(a.x+b.x, a.y+b.y)
}
function multi(p: Pos, n: number): Pos {
	return pos(p.x*n, p.y*n)
}

function pos(x: number, y: number){
	let p = new Pos()
	p.x = x
	p.y = y
	return p
}

function getindex(b: Board, pos: Pos): GridItem {
	return b.contents[pos.x * b.length + pos.y]
}
function setindex(b: Board, pos: Pos, x: GridItem): void {
	b.contents[pos.x * b.length + pos.y] = x
}
function moveitem(b: Board, src: Pos, dest: Pos): void {
	let x = getindex(b, src)
	setindex(b, src, new air())
	setindex(b, dest, x)
}
function isinbounds(b: Board, pos: Pos): boolean {
	return 0 <= pos.x && pos.x < b.length && 0 <= pos.y && pos.y < b.height
}
function isreachable(b: Board, pos: Pos): boolean {
	return isinbounds(b, pos) && !b.contents[pos.x * b.length + pos.y].block()
}
function isreachable2(b: Board, pos: Pos, me: number): boolean {
	if(!isinbounds(b, pos))return false
	let x = getindex(b, pos)
	return !x.block() || ((x instanceof Piece) && b.config["rival"](x.ownership, me))
}
/*
+---- x >
|  4
| 301
|  2
y
v
*/
const move = [pos(0, 0), pos(1, 0), pos(0, 1), pos(-1, 0), pos(0, -1)]
const turnleft = [0, 4, 1, 2, 3]
const turnright = [0, 2, 3, 4, 1]





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
	onmove(b: Board, src: Pos, dest: Pos){
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
	destinations(b: Board, pos: Pos){
		let vec: Pos[] = []
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
	destinations(b: Board, pos: Pos){
		let vec: Pos[] = []
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
