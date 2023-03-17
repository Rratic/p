const length = 9, height = 8, qsize = 64
const mox = [-1, 0, 1, -1, 1, -1, 0, 1]
const moy = [1, 1, 1, 0, 0, -1, -1, -1]

class Pos{
	x
	y
	constructor(x, y){
		this.x = x
		this.y = y
	}
}
var red, green, current = 0
var thiscanvas
var draw
var img_cache = {}
var map = new Uint8Array(72)

// 图像函数
function cache_pic(name){
	let image = new Image()
	image.src = `../../assets/images/queen_${name}.png`
	return img_cache[name] = image
}
function fill_pic(x, y, name){
	let img = img_cache[name]
	draw.drawImage(img, x<<6, y<<6)
}
function showmove(step, fx, fy, x, y){
	setmap(fx, fy, 3)
	fill_pic(fx, fy, current==1 ? "darkred" : "darkgreen")
	let tx = fx, ty = fy
	for(let i = 1; i < step; ++i){
		tx += x
		ty += y
		setmap(tx, ty, 1)
		fill_pic(tx, ty, "fence")
	}
	setmap(tx+x, ty+y, 2)
	fill_pic(tx+x, ty+y, current==1 ? "red" : "green")
}

// 工具函数
const notify = (str) => window.alert(str)
const loadmo = (e) => new Pos(e.offsetX>>6, e.offsetY>>6)
const tellwiner = (num) => notify([ "红方食用了绿方", "绿方食用了红方", "红方无路可走", "绿方无路可走" ][num-1])
const changeorder = () => { current=3-current; showinfo() }
const showinfo = () => document.getElementById("info").innerText = `轮到${["红", "绿"][current-1]}方`

// 流程函数
function new_game(){
	red = new Pos(0, 0)
	green = new Pos(length-1, height-1)
	current = 1
	thiscanvas = document.getElementById("queen_game")
	draw = thiscanvas.getContext("2d")
	draw.fillStyle = draw.createPattern(img_cache["grid"], "repeat")
	draw.fillRect(0, 0, qsize * length, qsize * height)
	fill_pic(0, 0, "red")
	fill_pic(length-1, height-1, "green")
	map.fill(0)
	setmap(0, 0, 2)
	setmap(length-1, height-1, 2)
	showinfo()
}
function clicks(e){
	if(current==0)return
	let mouse = loadmo(e)
	let mx = mouse.x, my = mouse.y
	let fx, fy // from
	let ex, ey // enemy
	if(current==1){ fx=red.x; fy=red.y; ex=green.x; ey=green.y }
	else{ fx=green.x; fy=green.y; ex=red.x; ey=red.y }
	if(mx==fx && my==fy){ notify("禁止原地不动"); return }
	let dx = mx-fx, dy = my-fy // diff
	let pdx = Math.abs(dx), pdy = Math.abs(dy)
	if(mx!=fx && my!=fy && pdx!=pdy){ notify("不合规的移动"); return }
	let step = Math.max(pdx, pdy)
	if(!canmove(step, fx, fy, dx/step, dy/step)){ notify("路径被挡住了"); return }
	showmove(step, fx, fy, dx/step, dy/step)
	if(mx==ex&&my==ey){ tellwiner(current); new_game(); return }
	if(istrapped(mx, my)){ tellwiner(current+2); new_game(); return }
	if(istrapped(ex, ey)){ tellwiner(5-current); new_game(); return }
	if(current==1){ red.x=mx; red.y=my }
	else{ green.x=mx; green.y=my }
	current = 3-current
	showinfo()
}

// 地图函数
// 空 0 墙 1 当前皇后 2 过去皇后 3
const getmap = (x, y) => map[x<<3|y]
const setmap = (x, y, v) => map[x<<3|y]=v
function canmove(step, fx, fy, x, y){
	let tx = fx, ty = fy;
	for(let i = 1; i <= step; ++i){
		tx += x
		ty += y
		let tempb = getmap(tx, ty)
		if(tempb == 1 || tempb == 3 || (i != step && tempb == 2))return false
	}
	return true
}
const inbounds = (x, y) => 0<=x && x<length && 0<=y && y<height
function istrapped(x, y){
	let flag = true
	for (let i = 0; i < 8; ++i) {
		let tx = x + mox[i]
		let ty = y + moy[i]
		if(inbounds(tx, ty)){
			let b = getmap(tx, ty)
			if(b==0 || b==2){
				flag=false
				break
			}
		}
	}
	return flag
}

cache_pic("grid")
cache_pic("fence")
cache_pic("red")
cache_pic("green")
cache_pic("darkred")
cache_pic("darkgreen")
