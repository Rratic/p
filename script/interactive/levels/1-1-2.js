Levels.prototype.load_1_1_2 = function(){
	chatbox.announce("第二节 招魂", "逐步蚕食的曙光")
	chatbox.speak("Eros", "欢迎来到……呃……你先把这个戴上")
	give(item("认知危害过滤器", "1-1-1 staff-2", {
		"wearable": true,
	}))
	// 摔坏，换新，纸条？
	waituntil
	// █ 按照正常时间读出，可按照原字扭曲
	// 可丧失实时性
	// Mekhane（μηχανή） 给出可读方式？
	h1.speak("……呃……你叫什么来着？")
	player.name = player.input() // + end 不可妄称祂的名
	h1.speak("，欢迎来到█████████，Area-██ 参加测试，它是一个█████，因此不用在意安全问题。") // 世界异常联盟
	h1.speak("如果测试未通过，我们会")
	h2 = passerby("Fox")
	box = new box("房间", [])
	h1.speak(`第一项测试，请用此枪杀死${h2.text_direct()}`)
	i2
	give(i2)
	i2.reveal()
	// 允许打破墙（.fire([system])）；同名攻击
	i2.vanish()
	// 说明 收容等级、扰动等级、风险等级、威胁等级、机密等级
	// 泄露
	h3.speak("据说我们 有一个可以向过去发送消息的") // 711, l5
}
