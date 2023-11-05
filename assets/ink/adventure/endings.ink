== ending ==
#APPEAR: main-title
-> choice
= choice
+ [重新开始]
	#RESTART
	-> DONE // won't run
+ [结束] ->
	结束会抹除所有统计数据，确定继续吗？ #CLASS: warning
	+ + [确定] -> END
	+ + [取消] -> choice

== c_end_give_up_halfway ==
半途而废 #END: common
-> ending

== c_end_time_limit_exceeded ==
来不及了 #END: common
-> ending

== c_end_too_late ==
太晚了 #END: common
-> ending

== c_end_why ==
为什么 #END: common
或许，你应该直面什么？ #CLASS: help
-> ending

== u_end_backfire ==
反噬 #END: unusual
你高估了自己的承受能力。 #CLASS: help
-> ending

== u_end_dream ==
// 触发：清除记忆
浮生一梦 #END: unusual
不失为一个选择。又或许，有办法继续推进？ #CLASS: help
-> ending
// + 梦、幻、泡、影结局

== u_end_why ==
为什么 #END: unusual
为什么呢？ #CLASS: help
-> ending

== r_end_god_name ==
不可妄称神的名 #END: rare
不要作死。 #CLASS: help
-> ending
