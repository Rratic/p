== 1_2 ==
#CLEAR
<h4>第二节 招魂：黎明也可以折断羽翼</h4>
<hr>
-> introduction

= introduction
Dgeros：“欢迎来到……呃……你先把这个戴上。”
- (opts)
	* [◇认知危害过滤器]
	    这是
	+ (lefthand) [戴在左手]
		左手已经戴了表，于是卡住了
	* [戴在右手] -> conversation
- (loop)
	{lefthand > 2:
		-> break_wearable
	- else:
		-> opts
	}

= break_wearable
然后过滤器坏了。
Dgeros 深深地看了你一眼。
-> conversation

= conversation
