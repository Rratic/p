TODO: 可以随时插入的东西，如 SAN CHECK, MAGIC USE
VAR chapter = "1.1"
VAR player_name = "Anonymous"
VAR player_sanity = "10"
#title: Adventure
#author: Rratic

INCLUDE 1_1.ink
INCLUDE 1_2.ink
INCLUDE endings.ink

-> menu
== menu ==
* [新的开始] -> beginning
* [章节选择]
	* * [1-1] -> 1_1
    * * [1-2] -> 1_2
	* * [返回] -> menu
* [作品信息]
	本作品按照 CC BY-SA 协议许可。使用的资源包括：
	||| Wikidot (scp-cn) |||
	注：“|”前的是站点下的路径，其后是标题。作者信息可见于对应的页面中。
	scp-cn-2458 | 曲奇就是这样碎的
	* * [已读] -> menu

== beginning ==
你醒来了。
熙熙攘攘的街道
算命
-> 1_1
