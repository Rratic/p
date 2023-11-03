#title: Adventure
#author: Rratic

INCLUDE 1_1.ink
INCLUDE 1_2.ink
INCLUDE endings.ink

CONST VERSION = "v"

VAR chapter = ""
VAR player_name = "Anonymous"
VAR player_sanity = "10"

* [主菜单] -> menu

== menu ==
#CLEAR
+ [新的开始] -> beginning
+ [章节选择]
	+ + [1-1] -> 1_1
    + + [1-2] -> 1_2
	+ + [返回] -> menu
+ [游戏设置] -> setting
+ [统计数据] -> statistics
+ [作品信息]
	+ + [关于]
		作者：Rratic
		使用工具：Ink #LINK: www.inklestudios.com/ink
		当前版本：{VERSION}
		当前更新至：1-2
		+ + + [返回] -> menu
	+ + [许可信息] -> permission

== beginning ==
#CLEAR
注意多存档；非导出存档储存在浏览器中，请勿清理 #CLASS: help
{player_name == "Anonymous":
	确定要使用名称“Anonymous”吗？
	+ [前往设置] -> setting
	+ [确定] -> jump
}
= jump
+ [故事就此开始……] -> 1_1

== setting ==
#CLEAR
+ [命名]
	#INPUT: player_name
	{player_name == "Rratic":
		-> r_end_god_name
	}
+ [调节文本出现速度]
	+ + [手动]
	+ + [慢]
	+ + [普通]
	+ + [快]
	+ + [瞬间]
+ [调节选项出现速度]
	+ + [普通]
	+ + [瞬间]
+ [返回] -> menu
-> setting

== statistics ==
#CLEAR
#DISPLAY: statistics
+ [返回] -> menu

== permission ==
#CLEAR
本作品按照 CC BY-SA 协议许可。使用的资源包括：
<h3>来自 Wikidot（scp-cn）的设定参考（CC BY-SA）</h3>
注：作者信息可见于对应的页面中 #CLASS: help
> scp-cn-2458 - 曲奇就是这样碎的；在 1-2 中出现； #LINK: scp-wiki-cn.wikidot.com/scp-cn-2458
> 异常分类系统（ACS）指南；#LINK: scp-wiki-cn.wikidot.com/anomaly-classification-system-guide
+ [返回] -> menu
