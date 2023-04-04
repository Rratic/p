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

function pos(x: number, y: number): Pos {
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
