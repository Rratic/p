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
你用力一扯，带子断了。你惊讶地发现里面弹出了一块曲奇。
* [告诉 Dgeros]
	“”
	“这个能不能修一下。”
	Dgeros 深深地看了你一眼。
	-> conversation

= conversation
你想问什么
没问题
你确定没问题
-> test1

= test1
如果测试未通过，我们会妥善处理
进入一个房间第一项测试，这把枪可以塞入普通子弹，使用时思考见过名请用此枪杀死
如果重名？
-> done

= caught_pataphysics
<b>无限嵌入叙事层</b>、<b>回旋跨层（cyclical-transgression）</b>与<b>亚叙事层（sub-diegesis）</b>理论
-> r_end_experimented

= done
-> END
