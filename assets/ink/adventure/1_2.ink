== 1_2 ==
{~ chapter = "1-2"}
#CLEAR
<h3>02 招魂</h3>
<h4>黎明也可以折断羽翼</h4>
<hr>
-> introduction

= introduction
你来到一座
Dgeros：“欢迎来到……呃……你先把这个戴上。”
- (opts)
	* (explanation) [◇认知危害过滤器]
	    “这是用来消除一般的认知危害的，戴在手腕上就可以了。”
	* {explanation} “认知危害[？”]是什么？”
		“通过你的认知来污染你的东西。例如我们最常见的模因触媒，可以杀死未被授权的入侵者。总之，接下来你需要佩戴。”
	+ (lefthand) [戴在左手]
		左手已经戴了表，而过滤器的带子太宽太短，扣不上。
	* [戴在右手] -> conversation
- (loop)
	{lefthand > 2:
		-> break_wearable
	- else:
		-> opts
	}

= break_wearable
你用力一扯，带子断了。
* [看向 Dgeros]
	“这个能不能修一下。”
	Dgeros 深深地看了你一眼。
	然后打开了电脑
	#RANDOM: uniform_int_distribution 1 3
	{random == 1:
		怔了一下，打开托盘
		你惊讶地发现里面弹出了一块曲奇。
	}
	-> conversation

= conversation
你想问什么
没问题
你确定没问题
-> test1

= test1
如果测试未通过，我们会妥善处理你的记忆。
你进入了一个房间
<hr>
第一项测试，这把枪可以塞入普通子弹，在使用时思考你见过的生物的名字，就可以杀死它。
请用此枪杀死
* 那如果重名会发生什么？
	你猜猜看。
#INPUT: t_target_name
{t_target_name == ".*"
	#AWARD: 正则表达式大师
}
-> done

= caught_pataphysics
<hr>
“欢迎来到超形上学部。”
“或许你会好奇为什么你没有杀死那位存在，现在的解释包括<b>无限嵌入叙事层</b>、<b>回旋跨层（cyclical-transgression）</b>与<b>亚叙事层（sub-diegesis）</b>理论。”
“不过这都不重要，总之……”
-> r_end_experimented

= done
-> END
