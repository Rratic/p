CONST VERSION = "v"

INCLUDE 1_1.ink
INCLUDE 1_2.ink
INCLUDE endings.ink

VAR chapter = ""
VAR player_name = "Anonymous"
VAR player_sanity = 10
VAR player_awareness = 8

// 辅助指令
VAR random = 0
VAR t_target_name = ""

// 流程
-> menu
== menu ==
#CLEAR
#APPEAR: main-title
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
		使用工具：<a href="https:\/\/www.inklestudios.com/ink">Ink</a>
		当前版本：{VERSION}
		当前更新至：1-2
		+ + + [返回] -> menu
	+ + [许可信息] -> permission

== beginning ==
#CLEAR
注意多存档；要保存的非导出存档储存在浏览器中，请勿清理 #CLASS: help
确定要使用名称“{player_name}”吗？
+ [前往设置] -> setting.name
+ [确定] -> jump

= jump
第壹章 秩序：秩序的天平倒向秩序 #CLASS: help
+ [故事就此开始……] -> 1_1

== setting ==
-> main

= main
#CLEAR
+ [命名] -> name
+ [调节文本出现速度]
	+ + [慢]
		#SET: textSpeed 400.0
	+ + [普通]
		#SET: textSpeed 200.0
	+ + [快]
		#SET: textSpeed 100.0
	+ + [瞬间]
		#SET: textSpeed "instant"
+ [调节选项出现速度]
	+ + [普通]
		#SET: optionSpeed 200.0
	+ + [瞬间]
		#SET: optionSpeed "instant"
+ [设置随机模式]
	+ + [正常随机]
		#SET: randomMode "normal"
	+ + [显示随机发生位置]
		#SET: randomMode "shiny"
	+ + [自主设置随机结果]
		#SET: randomMode "editable"
+ [调节图片显示]
	+ + [显示]
		#SET: displayImage true
	+ + [不显示]
		#SET: displayImage false
+ [返回] -> menu
-
-> main

= name
#INPUT: player_name
+ [确定]
{player_name == "":
	~ player_name = "Anonymous"
}
{player_name == "Rratic":
	-> r_end_god_name
}
-> main

== statistics ==
#CLEAR
#DISPLAY: statistics
#DISPLAY: awards
+ [返回] -> menu

== permission ==
#CLEAR
本作品按照 CC BY-SA 协议许可。使用的资源包括：
<h3>来自 Wikidot（scp-cn）的设定参考（CC BY-SA）</h3>
注：作者信息可见于对应的页面中 #CLASS: help
#LIST: begin
<a href="https:\/\/scp-wiki-cn.wikidot.com/goc-hub-page">全球超自然联盟档案</a>（1-2 中参考）
<a href="https:\/\/scp-wiki-cn.wikidot.com/scp-cn-2458">scp-cn-2458 - 曲奇就是这样碎的</a>（在 1-2 概率分支中出现）
<a href="https:\/\/scp-wiki-cn.wikidot.com/anomaly-classification-system-guide">异常分类系统（ACS）指南</a>
<a href="https:\/\/scp-wiki-cn.wikidot.com/goc-supplemental-thaumatology">████████████教授的讲座摘要：关于应用奇术</a>
<a href="https:\/\/scp-wiki-cn.wikidot.com/another-goddamn-magic-system">魔法指南</a>
<a href="https:\/\/scp-wiki-cn.wikidot.com/introduction-to-pataphysics">超形上学导论</a>（在 1-2 分支中出现）
<a href="https:\/\/scp-wiki-cn.wikidot.com/dr-host">模因学入门讲座\(2020-9-15\)</a>
#LIST: end

<h3>SCP Universe 相关其它来源的资料参考</h3>
（在 1-2 中参考）
+ [返回] -> menu
