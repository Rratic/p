TODO: 可以随时插入的东西，如 SAN CHECK, MAGIC USE
VAR chapter = "1.1"
VAR player_name = "Anonymous"
VAR player_sanity = "10"
#title: Adventure
#author: Rratic
* [新的开始] -> 1_1
* [章节选择]
    * * [1-2] -> 1_2
* [作品信息]
	本作品按照 CC BY-SA 协议许可
	-> END

INCLUDE 1_1.ink
INCLUDE 1_2.ink
INCLUDE endings.ink
