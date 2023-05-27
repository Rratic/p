function userspeak(text) {
	let div = document.createElement("div")
	let p = document.createElement("p")
	p.innerText = text
	div.append(p)
	div.className = "message-box"
	div.style.backgroundColor = "#95ec69"
	document.getElementById("dialog-box").append(div)
}
$(document).ready(function () {
	$("#submit").click(function (event) {
		commander(event.target.previousSibling.value)
	})
})

function commander(command) {
	if (command == "") return
	if (command[0] != '/') {
		userspeak(command)
		return
	}
}
function _cat(attributes, text) {
	if (attributes["b"]) userspeak(text)
	catspeak(text)
}
function _say(_, text) {
	userspeak(text)
}
const questions = [
	[0.7, "人们总是想要成为什么，但或许，我们真正需要思考的是自己真正想要什么。所以……您认为，您真正想要什么？"],
	[0.7, "如果我们在一场大梦中，如何才能醒来？"],
	[0.6, "一个「庞加莱回归」后，我们能否再相见？"],
	[0.32, "爱"],
	[0.3, "您明天打算吃什么"],
	[0.3, "对本项目，您有/还有什么建议吗？（请写在 issue 里喵）"],
]
