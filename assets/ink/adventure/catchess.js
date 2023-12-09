function moveWhiteCat(b, pos) {
	let me = b.getIndex(pos).ownership
	let list = []
	for (let rx = -1; rx <= 1; rx++) {
		for (let ry = -1; ry <= 1; ry++) {
			if (rx == 0 && ry == 0) continue
			let np = b.tryMoveBy(pos, pos(rx, ry))
			if (np == null)
				continue
			if (b.isPiece(np)) {
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
	let me = b.getIndex(pos).ownership
	let list = []
	let front = b.config.front(me)
	let np = b.tryMoveBy(pos, pos(0, front))
	if (np != null && b.isVoid(np)) // front
		list.push({ target: np })
	np = b.tryMoveBy(pos, pos(1, front)) // front-l
	if (np != null && b.isEnemy(np))
		list.push({ target: np })
	np = b.tryMoveBy(pos, pos(-1, front)) // front-r
	if (np != null && b.isEnemy(np))
		list.push({ target: np })
	let flag = b.getIndex(pos).flag == true
	if (flag) {
		np = b.tryMoveBy(pos, pos(0, front * 2))
		if (np != null && b.isVoid(np))
			list.push({ target: np })
	}
	return list
}
function moveOrangeCat(b, pos) {
	let me = b.getIndex(pos).ownership
	let list = []
	for (let i = 0; i < 4; i++) {
		let rx = [0, 0, 1, -1][i]
		let ry = [1, -1, 0, 0][i]
		let np = b.tryMoveBy(pos, pos(rx, ry))
		if (np == null || b.isAlly(np, me))
			continue
		list.push({ target: np })
	}
	return list
}
function __init__() {
	let board = new Board()
	board.length = 8
	board.height = 8
	board.contents = new Array(64)
	board.config = {
		"ctrans": { "void": 0, "white": 1, "black": 2, "orange": 3 },
		"cells": [
			{ type: "v", },
			{ type: "p", moves: moveWhiteCat },
			{ type: "p", moves: moveBlackCat },
			{ type: "p", moves: moveOrangeCat },
		],
		"rival": function (a, b) { a != b },
		"move": function (pos, delta) {
			let np = pos(pos.x + delta.x, pos.y + delta.y)
			if (np.x < 0 || np.x >= 8) return null
			if (np.y >= 8) np.y -= 8
			if (np.y < 0) np.y += 8
			return np
		},
		"front": function (ownership) { ownership == 0 ? 1 : -1 }
	}
	return board
}
