function commander(command) {
}
function _cat(attributes, text) {
	if (attributes["b"]) userspeak(text)
	catspeak(text)
}
const questions = [
	[0.7, "人们总是想要成为什么，但或许，我们真正需要思考的是自己真正想要什么。所以……您认为，您真正想要什么？"],
	[0.7, "如果我们在一场大梦中，如何才能醒来？"],
	[0.6, "一个「庞加莱回归」后，我们能否再相见？"],
	[0.32, "爱"],
	[0.3, "您明天打算吃什么"],
	[0.3, "对本项目，您有/还有什么建议吗？（请写在 issue 里喵）"],
]
