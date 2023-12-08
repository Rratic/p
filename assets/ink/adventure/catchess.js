function moveWhiteCat(b, pos) {
	let me = b.getIndex(pos).ownership
	let list = []
	for (let rx = -1; rx <= 1; rx++) {
		for (let ry = -1; ry <= 1; ry++) {
			if (rx == 0 && ry == 0) continue
			let np = b.tryMoveBy(pos, pos(rx, ry))
			if (np == null)
				continue
			if (b.isPiece(np, me)) {
				let np2 = b.tryMoveBy(pos, pos(rx * 2, ry * 2))
				if (np2 == null)
					continue
				if (b.isVoid(np2)) {
					list.push({
						target: np2,
						on: function () {
							np2.id = np2.id == 3 ? 1 : np2.id + 1
							b.moveTo(pos, np2)
						}
					})
				}
			}
		}
	}
	return list
}
function moveBlackCat(b, pos) {
	let flag = b.getIndex(pos).flag == "true"
	if (flag) {
	}
}
function __init__() {
	let board = new Board()
	board.length = 8
	board.height = 8
	board.contents = new Array(64)
	board.config = {
		"ctrans": { "void": 0, "white": 1, "black": 2, "orange": 3 },
		"cells": [
			{ type: "e", block: false },
			{ type: "p", block: true, moves: moveWhiteCat },
			{ type: "p", block: true, },
			{ type: "p", block: true, },
		],
		"rival": function (a, b) { a != b },
		"move": function (pos, delta) {
			let np = pos(pos.x + delta.x, pos.y + delta.y)
			if (np.x < 0 || np.x >= 8) return null
			if (np.y >= 8) np.y -= 8
			if (np.y < 0) np.y += 8
			return np
		}
	}
}
