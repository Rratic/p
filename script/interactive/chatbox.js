class Chatbox {
	x
	constructor(x) { this.x = x }
	message(div, scroll = false) {
		this.x.append(div)
		if (scroll == false) return
		this.x.scrollTo({
			top: this.x.scrollHeight,
			behaviour: this.scroll
		})
	}
	speak(speaker, content, className = "speaker-mortal") {
		let div = document.createElement("div")
		let sp = document.createElement("span")
		sp.className = className
		sp.innerText = `[${speaker}]`
		let p = document.createElement("p")
		p.innerHTML = content
		div.append(sp)
		div.append(p)
		this.message(div)
	}
	announce(content) { this.speak("公告", content, "speaker-system") }
	introduce(content) { this.speak("", `<i>${content}</i>`, "speaker-system") }
	help(content) { this.speak("帮助", content, "speaker-system-help") }
	alert(content) { this.speak("公告", content, "speaker-system-alert") }
	divine_word(content) { this.speak("神明", content, "speaker-godness") } // 神明
	// display
}
var chatbox = new Chatbox()
