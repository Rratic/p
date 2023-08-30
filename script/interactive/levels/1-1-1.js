Levels.prototype.load_1_1_1 = function(){
	chatbox.announce("第一章 秩序", "秩序的天平倒向秩序")
	chatbox.announce("第一节 仪式", "神灵是否是诡术的仆从")
	chatbox.introduce("你走在公园的小路上，太阳已行将就木，你似乎感受到太阴的躁动。忽然，你发现前方隐隐约约有阴绿的火光，伴随阵阵压抑的呢喃。")
	options.t_add({ // wait 单独处理
		investigate: 0,
		runaway: 1,
		callpolice: 2,
	})
	options.ask()
	if (options.option == 1) {
		chatbox.introduce("你转身逃离、奔跑……")
		while (true) {
			player.sanity.drop(0.1)
			chatbox.alert("理智降低")
		}
	}
	if (options.option == 0){
		chatbox.introduce("")
	}
	else if(options.option==2){}
	// 电话监听
	chatbox.divine_word("汝是否接受我的恩典？")
	options.t_add({ // #yes, #no
		yes: function () {
			give(item("橘颂", "1-1-1 staff-1", {
				type: "典籍",
				read: function () {
					player.sanity.drop(5)
					chatbox.help(`使用 <code>/pray([东皇太一], "橘颂")</code> 施展神术，可以以理智为代价`)
				}
			}))
			chatbox.help("使用 <code>[橘颂].read()</code> 开始修炼")
			pause()
		},
		no: null
	})
}
