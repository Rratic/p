var catreact = null
function userspeak(text, react = true) {
	let div = document.createElement("div")
	let p = document.createElement("p")
	p.innerText = text
	div.append(p)
	div.className = "message-box"
	div.style.backgroundColor = "#95ec69"
	document.getElementById("dialog-box").append(div)
	if (react && catreact != null) {
		catreact(text)
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
	document.getElementById("dialog-box").append(div)
}

catspeak("欢迎和我说话~ 我是一只虚拟的猫，且不具有智能，但您可以使用指令控制我说的话！<br>您可以输入：<code>/help</code> 以阅读更多关于指令的内容！", true)

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
	let attributes = {}
}

function _autoreply(_, level) {
	if (level == 0) catreact = null
	else if (level == 1) catreact = function (_) { catspeak("喵呜") }
}
function _cat(attributes, text) {
	if (attributes["b"]) userspeak(text, false)
	catspeak(text)
}
function _clear(_) {
	document.getElementById("dialog-box").replaceChildren()
}
function _discuss(_) {
	catspeak(questions[Math.floor(Math.random() * questions.length)][1])
}
function _say(_, text) {
	userspeak(text, false)
}
const questions = [
	[0.7, "人们总是想要成为什么，但或许，我们真正需要思考的是自己真正想要什么。所以……您认为，您真正想要什么？"],
	[0.7, "如果我们在一场大梦中，如何才能醒来？"],
	[0.6, "一个「庞加莱回归」后，我们能否再相见？"],
	[0.32, "爱"],
	[0.3, "您明天打算吃什么"],
	[0.3, "对本项目，您有/还有什么建议吗？（请写在 issue 里喵）"],
]
