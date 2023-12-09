class Pos {
	x
	y
}

function pos(x, y) {
	let p = new Pos()
	p.x = x
	p.y = y
	return p
}

class Board {
	length
	height
	contents
	config
	getindex(pos) {
		return this.contents[pos.x * b.length + pos.y]
	}
	setindex(pos, x) {
		this.contents[pos.x * b.length + pos.y] = x
	}
	moveTo(src, dest) {
		let x = this.getindex(src)
		this.setindex(src, { id: config.ctrans["void"].id })
		this.setindex(dest, x)
	}
	tryMoveBy(pos, delta) { return this.config.move(pos, delta) }
	isVoid(pos) { return this.config.cells[this.getindex(pos).id].type == "v" }
	isPiece(pos) { return this.config.cells[this.getindex(pos).id].type == "p" }
	isAlly(pos, me) {
		let x = this.getindex(pos)
		return this.config.cells[x.id].type == "p" && !this.config.rival(x.ownership, me)
	}
	isEnemy(pos, me) {
		let x = this.getindex(pos)
		return this.config.cells[x.id].type == "p" && this.config.rival(x.ownership, me)
	}
}

function initialize_chess(cvsid) {
	let board = __init__()
	let canvas = document.getElementById(cvsid)
	let context = canvas.getContext("2d")
	let xw = Math.floor(canvas.width / board.length)
	let yw = Math.floor(canvas.height / board.height)
}
