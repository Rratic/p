const version = "v0.3.0"
const catnames = ["锂", "征途", "时光", "墨", "星辰", "馈赠"]
const welcome1 = "欢迎和我聊天~ 你可以叫我「锂」，我是一只虚拟的衔蝉，且不具有智能，但你可以使用指令控制我说的话！<br>你可以输入：<code>/help</code> 以阅读更多关于指令的内容！"
const welcome2 = "欢迎回来！当你输入 <code>/help</code> 时，锂始终会给你帮助！"
const help1 = "指令的基本格式为 <code>/命令名 参数 -辅助参数 --赋值参数=值</code>。对于具体的命令，可以使用 <code>/help 该命令名</code> 查看其帮助。"
var catreact = null
var store = undefined
function userspeak(text, react = true) {
	let div = document.createElement("div")
	let p = document.createElement("p")
	p.innerText = text
	div.append(p)
	div.className = "message-box user-speak"
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
	div.className = "message-box cat-speak"
	let db = document.getElementById("dialog-box")
	db.append(div)
	db.scrollTo({ top: db.scrollHeight, behavior: "smooth" })
}
function catspeakwith(f) {
	let div = document.createElement("div")
	let p = document.createElement("p")
	f(p)
	div.append(p)
	div.className = "message-box cat-speak"
	let db = document.getElementById("dialog-box")
	db.append(div)
	db.scrollTo({ top: db.scrollHeight, behavior: "smooth" })
}
function catspeak_v(v) {
	catspeakwith(function (e) {
		for (let str of v) {
			let span = document.createElement("span")
			span.innerHTML = str
			let br = document.createElement("br")
			e.append(span)
			e.append(br)
		}
	})
}

store = JSON.parse(localStorage.getItem("cattalk"))
function save() { localStorage.setItem("cattalk", JSON.stringify(store)) }
if (store == undefined) {
	catspeak(welcome1, true)
	store = { "version": version }
	save()
}
else {
	let regi = store["register"]
	if (regi == undefined) catspeak(welcome2, true)
	else {
		if (!regi["force"]) catspeak(welcome2, true)
		catspeak(regi["text"])
	}
}

function random_select(list) {
	return list[Math.floor(Math.random() * list.length)]
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
		if (x[0] == '-') {
			if (x[1] == '-') {
				let split = x.search('=')
				attributes[x.substring(2, split)] = x.substring(split + 1)
			}
			else attributes[x.substring(1)] = true
		}
		else arguments.push(x)
	}
	let f = window["_" + v[0]]
	if (f == undefined) {
		catspeak("该命令不存在，请重新检查")
		return
	}
	f(attributes, ...arguments)
}

const help_text = {
	"autoreply": {
		description: "设置自动回复模式",
		args: { level: "模式，0：关闭；1：每次回复“喵呜”" },
	},
	"cat": {
		description: "让猫猫我说指定的话",
		args: { text: null },
		attributes: { b: "你会在我之前也说这句话" },
	},
	"clear": {
		description: "清屏",
	},
	"delete": {
		description: "清除数据",
		type: "dangerous",
	},
	"discuss": {
		description: "让我提出一个值得思考的问题",
	},
	"feed": {
		description: "投喂食物",
		args: { food: "默认为猫粮" }
	},
	"kill": {
		description: "杀死猫猫……真的吗",
	},
	"help": {
		description: "显示帮助",
		args: { command: "帮助的特定指令名称" }
	},
	"quote": {
		description: "从随机引用库（与欢迎页一致）中引用一句",
	},
	"register": {
		description: "设置我的见面语",
		args: { text: "可留空" },
		attributes: {
			f: "覆盖原来的话",
			r: "删除已注册的话，不会设置新的",
			rand: "随机挑选一句，会覆盖 <code>text</code> 中值",
		},
	},
	"say": {
		description: "说话，但不触发自动回复",
		args: { text: null },
	},
	"style": {
		description: "设置本框中的 CSS 样式",
		assigns: { stylename: "对特定的 style 键设置值，如 <code>backgroundColor = black</code>" }
	},
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
function _delete(_) {
	localStorage.removeItem("cattalk")
}
function _discuss(_) {
	catspeak(random_select(questions))
}
function _feed(_, food = "猫粮") {
	catspeak(food.concat("好吃，喵呜"))
}
function _kill(_) {
	catspeak("喵——呜——")
	document.getElementById("input").disabled = true
}
function _help(_, command = "") {
	if (command == "") {
		let p = document.createElement("p")
		p.innerHTML = help1
		let ul = document.createElement("ul")
		ul.style.fontSize = "75%"
		for (let i of Object.keys(help_text)) {
			let li = document.createElement("li")
			let code = document.createElement("code")
			code.innerText = "/" + i
			li.append(code)
			li.innerHTML += " " + help_text[i]["description"]
			if (help_text[i]["type"] == "dangerous") {
				li.style.color = "red"
			}
			ul.append(li)
		}
		catspeakwith(function (e) {
			e.append(p)
			e.append(ul)
		})
	}
	else {
		if (help_text[command] == undefined) {
			catspeak("该命令不存在")
			return
		}
		let data = help_text[command]
		let strings = []
		strings.push(`<code>${command}</code> - ${data["description"]}`)
		let pd = `原型为 <code>/${command}`
		let args = data["args"]
		if (args != undefined) {
			for (let k of Object.keys(args)) {
				pd += ` ${k}`
				if (args[k] != null) strings.push(`\u3000<code>${k}</code>：${args[k]}`)
			}
		}
		let attributes = data["attributes"]
		if (attributes != undefined) {
			for (let k of Object.keys(attributes)) {
				pd += ` -${k}`
				strings.push(`\u3000<code>-${k}</code>：${attributes[k]}`)
			}
		}
		let assigns = data["assigns"]
		if (assigns != undefined) {
			for (let k of Object.keys(assigns)) {
				pd += ` --${k}=x`
				strings.push(`\u3000<code>--${k}</code>：${assigns[k]}`)
			}
		}
		strings.splice(1, 0, pd + "</code>")
		catspeak_v(strings)
	}
}
function _register(attributes, text) {
	if (attributes["r"] == true) {
		delete store["register"]
		save()
		return
	}
	if (attributes["rand"] == true) text = random_select(registertexts)
	store["register"] = {
		text: text,
		force: (attributes["f"] == true),
	}
	save()
}
function _quote(_) {
	fetch(`../extra/data_random_word/main_display.json`)
		.then(response => {
			if (!response.ok) {
				let msg = "HTTP error " + response.status
				catspeak(msg)
				throw new Error(msg)
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
function _style(attributes) {
	let div = document.getElementById("dialog-box")
	for (let key of Object.keys(attributes)) {
		div.style[key] = attributes[key]
	}
}

const registertexts = [
	"愿你安好",
	"今日快乐！",
]
const questions = [
	"人们总是想要成为什么，但或许，我们真正需要思考的是自己真正想要什么。所以……你认为，你真正想要什么？",
	"如果我们在一场大梦中，那么如何才能醒来？",
	"一个「庞加莱回归」之后，我们能否再次相见？",
	"如果没有人爱你，那么锂可以爱你！",
	"明天打算吃什么？",
	"对于本项目，有/还有什么建议吗？（请写在 issue 里喵）",
]
