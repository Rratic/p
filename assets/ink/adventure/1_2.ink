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
……
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
“在测试开始前，你想问些什么？我大体介绍一下，细节以后再说。”
- (opts)
	* (asked) “你们这个组织叫什么？”
		“<span class="ruby">特殊收容措施基金会（SCP 基金会）<span class="rt">Special Containment Procedures Foundation</span></span>。”
		<img src="https:\/\/scp-wiki-cn.wikidot.com/local--favicon/favicon.gif"/>
	* “你们是做什么的？”
		“我们以<span class="ruby">收容<span class="rt">Secure</span></span>、<span class="ruby">控制<span class="rt">Contain</span></span>、<span class="ruby">保护<span class="rt">Protect</span></span>为宗旨，其对象是被我们称之为收容物/SCP 的……东西。”
	* “你们对于世界持有怎样的态度？”
		“我们所做的被称作‘必要之恶’。”
	* {asked} “我们有哪些同行组织？”
		“其实还挺多……我们最大的同行组织是<span class="ruby">全球超自然联盟（GOC）<span class="rt">Global Occult Coalition</span></span>。”
		<img src="https:\/\/scp-wiki.wdfiles.com/local--files/goc-hub-page/GOC-Logo-v4.png"/>
		“他们由 GOC 部门与 108 议会构成，游离在纯粹自由组织与个体政治组织之间；强项在于奇术。而我们比他们更加「超自然」。”
		“其它还有蛇之手、欲肉教、破碎之神教会、地平线倡议、混沌分裂者等等。”
	* “没问题了。”
		{asked != 1:
			“你确定没问题？”
			-> u_end_why
		}
		-> break
- (loop)
	-> opts
- (break)
-> test1

= test1
“如果测试未通过，我们会妥善处理你的记忆。”
你进入了一个房间。唯一的光源是天花板上有些昏暗的灯光，房间中央有一张桌子，上面摆放了一个棋盘和几排棋子。
<hr>
“第一项测试，这把枪可以塞入普通子弹，在使用时思考你见过的生物的名字，就可以杀死它。”
“请用此枪杀死附身在棋子上的恶灵。”
* (asked) 那如果重名会发生什么？
	你猜猜看。
#SCRIPT: catchess_test init
#INPUT: t_target_name
#SCRIPT: catchess_test check
// RANDOM EVENT: 恶灵已附身你 ⇒ 出师未捷身先死
{t_target_name == ".*":
	#AWARD: give regex_master
	“你为什么会觉得它支持正则表达式呢？”
	-> fail
}
{t_target_name == "Dgeros":
	{asked:
		“好吧我告诉你，如果有重名，什么也不会发生。”
	}
	-> u_end_demonify
}
{t_target_name == livevar_password:
	#SCRIPT: catchess_test check2
	{script_check:
		-> test2
	}
	恶灵附身在了另一颗棋子上。
	你失败了。
	-> fail
}
-> fail

= test2
-> done

= caught_pataphysics
<hr>
“欢迎来到超形上学部。”
“或许你会好奇为什么你没有杀死那位存在，可能是因为无限嵌入叙事层、<span class="ruby">回旋跨层<span class="rt">cyclical-transgression</span></span>或者<span class="ruby">亚叙事层<span class="rt">sub-diegesis</span></span>理论，甚至，是因为「设定」中那个枪不可能做得很强大。”
+ “你这‘超形上学’明明是实在论，是前反思的！……”
	“……”
+ “……”
	“不过这都不重要，总之……”
-
-> r_end_experimented

= fail
-> u_end_fail

= done
-> END
