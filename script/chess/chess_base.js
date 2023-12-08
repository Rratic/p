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
	isInbounds(pos) {
		return 0 <= pos.x && pos.x < this.length && 0 <= pos.y && pos.y < this.height
	}
	isReachable(pos) {
		let x = this.getindex(pos)
		return this.isInbounds(pos) && !this.config.cells[x.id].block
	}
	isReachable2(pos, me) {
		if (!this.isInbounds(pos)) return false
		let x = this.getindex(pos)
		let cd = this.config.cells[x.id]
		return !cd.block || (cd.type == "p" && this.config.rival(x.ownership, me))
	}
}
