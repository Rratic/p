const version = "v0.1.0"
var catreact = null
function userspeak(text, react = true) {
	let div = document.createElement("div")
	let p = document.createElement("p")
	p.innerText = text
	div.append(p)
	div.className = "message-box"
	div.style.backgroundColor = "#95ec69"
	let db = document.getElementById("dialog-box")
	db.append(div)
	db.scrollTo({ top: db.scrollHeight })
	if (react && catreact != null) {
		catreact.call(text)
	}
}
function catspeak(text, html = false) {
	let div = document.createElement("div")
	let p = document.createElement("p")
	if (html) p.innerHTML = text
	else p.innerText = text
	div.append(p)
	div.className = "message-box"
	div.style.backgroundColor = "#fff"
	let db = document.getElementById("dialog-box")
	db.append(div)
	db.scrollTo({ top: db.scrollHeight, behavior: "smooth" })
}

let store = localStorage.getItem("cattalk")
if (store == undefined) {
	catspeak("欢迎和我聊天~ 你可以叫我「锂」，我是一只虚拟的衔蝉，且不具有智能，但你可以使用指令控制我说的话！<br>你可以输入：<code>/help</code> 以阅读更多关于指令的内容！", true)
	localStorage.setItem("cattalk", { "version": version })
}
else {
	catspeak("欢迎回来！当你输入 <code>/help</code> 时，锂始终会给你帮助！")
}

function submit(event) {
	commander(event.target.previousSibling.value)
	event.target.previousSibling.value = ""
}

function commander(command) {
	if (command == "") return
	if (command[0] != '/') {
		userspeak(command)
		return
	}
	let v = command.substring(1).split(' ')
	let l = v.length
	let arguments = [], attributes = {}
	for (let i = 1; i < l; i++) {
		let x = v[i]
		if (x[0] == '-') attributes[x.substring(1)] = true
		else arguments.push(x)
	}
	let f = window["_" + v[0]]
	f.call(null, attributes, ...arguments)
}

function _autoreply(_, level) {
	if (level == "0") catreact = null
	else if (level == "1") catreact = function (_) { catspeak("喵呜") }
}
function _cat(attributes, text) {
	if (attributes["b"] == true) userspeak(text, false)
	catspeak(text)
}
function _clear(_) {
	document.getElementById("dialog-box").replaceChildren()
}
function _color(attributes, color) {
	let div = document.getElementById("dialog-box")
	if (attributes["f"] == true) div.style.color = color
	else div.style.backgroundColor = color
}
function _discuss(_) {
	catspeak(questions[Math.floor(Math.random() * questions.length)][1])
}
function _feed(_, food = "猫粮") {
	catspeak(food.concat("好吃，喵呜"))
}
function _kill(_) {
	catspeak("喵——呜——")
	document.getElementById("input").disabled = true
}
function _help(_) {
	catspeak(`当前支持的命令有：<ul style='font-size:75%'>
	<li><code>/autoreply mode</code>&nbsp;设置自动回复模式，0 表示关闭，1 表示每次回复“喵呜”</li>
	<li><code>/cat text [-b]</code>&nbsp;让我说指定的话，设置 <code>-b</code> 时你会在我之前也说这句话</li>
	<li><code>/clear</code>&nbsp;清屏</li>
	<li><code>/color color [-f]</code>&nbsp;设置颜色，无 -f 为背景色，否则为前景色</li>
	<li><code>/discuss</code>&nbsp;让我提出一个值得讨论的问题</li>
	<li><code>/feed [food = 猫粮]</code>&nbsp;投喂</li>
	<li><code>/kill</code>&nbsp;杀死猫猫……真的吗</li>
	<li><code>/help</code>&nbsp;显示这个帮助</li>
	<li><code>/quote</code>&nbsp;从随机引用库（与欢迎页一致）中引用一句</li>
	<li><code>/say text</code>&nbsp;说话，但不触发自动回复</li>
	</ul>`, true)
}
function _quote(_) {
	fetch(`../extra/data_random_word/main_display.json`)
		.then(response => {
			if (!response.ok) {
				let msg = "HTTP error " + response.status
				catspeak(msg)
				throw new Error(msg)
				return
			}
			return response.json()
		})
		.then(data => {
			let ind = Math.floor(Math.random() * data.length)
			let chosen = data[ind]
			let text = chosen.text
			if (chosen["source"] != undefined) text += "<br>来源：" + chosen["source"]
			catspeak(text, true)
		})
}
function _say(_, text) {
	userspeak(text, false)
}
const questions = [
	[0.7, "人们总是想要成为什么，但或许，我们真正需要思考的是自己真正想要什么。所以……你认为，你真正想要什么？"],
	[0.7, "如果我们在一场大梦中，那么如何才能醒来？"],
	[0.6, "一个「庞加莱回归」之后，我们能否再次相见？"],
	[0.32, "如果没有人爱你，那么锂可以爱你！"],
	[0.3, "明天打算吃什么？"],
	[0.3, "对于本项目，有/还有什么建议吗？（请写在 issue 里喵）"],
]
