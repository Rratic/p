# To Level 9
## Level 0
游玩 <https://overthewire.org/wargames/bandit> 笔记

让我看看 git bash 能不能当 ssh 用
```shell
$ ssh bandit0@bandit.labs.overthewire.org -p 2220
                         _                     _ _ _
                        | |__   __ _ _ __   __| (_) |_
                        | '_ \ / _` | '_ \ / _` | | __|
                        | |_) | (_| | | | | (_| | | |_
                        |_.__/ \__,_|_| |_|\__,_|_|\__|


                      This is an OverTheWire game server.
            More information on http://www.overthewire.org/wargames

bandit0@bandit.labs.overthewire.org's password:

      ,----..            ,----,          .---.
     /   /   \         ,/   .`|         /. ./|
    /   .     :      ,`   .'  :     .--'.  ' ;
   .   /   ;.  \   ;    ;     /    /__./ \ : |
  .   ;   /  ` ; .'___,/    ,' .--'.  '   \' .
  ;   |  ; \ ; | |    :     | /___/ \ |    ' '
  |   :  | ; | ' ;    |.';  ; ;   \  \;      :
  .   |  ' ' ' : `----'  |  |  \   ;  `      |
  '   ;  \; /  |     '   :  ;   .   \    .\  ;
   \   \  ',  /      |   |  '    \   \   ' \ |
    ;   :    /       '   :  |     :   '  |--"
     \   \ .'        ;   |.'       \   \ ;
  www. `---` ver     '---' he       '---" ire.org


Welcome to OverTheWire!

...

  Enjoy your stay!
```

## To Level 1
```shell
bandit0@bandit:~$ ls
readme
bandit0@bandit:~$ cat readme
```

用 `logout` / `exit` 可以退出远程登录

## To Level 2
```shell
bandit1@bandit:~$ cat ./-
```

因为一开始调了 `cat -` 把它 `Ctrl+Z` 停掉，所以退出时遇到 `There are stopped jobs.`，用了 `jobs -l` 再 `kill`。

## To Level 3
用 `cat spaces\ in\ this\ filename`

## To Level 4
```shell
bandit3@bandit:~$ ls inhere -a
.  ..  .hidden
bandit3@bandit:~$ cd inhere
bandit3@bandit:~/inhere$ cat .hidden
```

## To Level 5
`inhere` 下有 `-file01` - `-file09`，依次读一遍即可。
屏幕太乱了 `clear` 一遍。

## To Level 6
好像有可执行文件，是会骗过去？
拿 `du` 依次查一遍。

算了太多了，用 `find . -size 1033c`。

## To Level 7
`find / -user bandit7 -group bandit6 -size 33c`

一堆文件中只有一个是有权限的，打开即可。

## To Level 8
`grep millionth data.txt`

## To Level 9
`sort data.txt | uniq -u`

## Keys (Save)
```hide
* 6: `P4L4vucdmLnm8I7Vl7jG1ApGSfjYKqJU`
* 7: `z7WtoNQU2XfjmMtWA8u5rN4vzqu4v99S`
* 8: `TESKZC0XvTetK0S9xNwm25STk5iWrBvP`
* 9: `EN632PlfYiZbn3PhVK3XOGSlNInNE00t`
```
