#title: Adventure
#author: Rratic

INCLUDE 1_1.ink
INCLUDE 1_2.ink
INCLUDE endings.ink

VAR chapter = ""
VAR player_name = "Anonymous"
VAR player_sanity = "10"

* [主菜单] -> menu

== menu ==
#CLEAR
+ [新的开始] -> beginning
+ [章节选择]
	* * [1-1] -> 1_1
    * * [1-2] -> 1_2
	* * [返回] -> menu
+ [游戏设置] -> setting
+ [统计数据] -> statistics
+ [作品信息]
	+ + [关于]
		作者：Rratic
		使用工具：Ink #LINK: www.inklestudios.com/ink
		当前版本：v0.1.0 (dev)
		当前更新至：1-2
		+ + + [返回] -> menu
	+ + [许可信息] -> permission

== beginning ==
#CLEAR
+ [请给自己命名] #INPUT: player_name
{player_name == "Rratic":
	-> r_end_god_name
}
- 设置完成
+ [故事就此开始……] -> 1_1

== setting ==
#CLEAR
+ [返回] -> menu

== statistics ==
#CLEAR
+ [返回] -> menu

== permission ==
#CLEAR
本作品按照 CC BY-SA 协议许可。使用的资源包括：
Wikidot (scp-cn)
> 注：“；”前的是站点下的路径，其后是标题、说明。作者信息可见于对应的页面中。
> scp-cn-2458；曲奇就是这样碎的；在 1-2 中出现 #LINK: scp-wiki-cn.wikidot.com/scp-cn-2458
+ [返回] -> menu
