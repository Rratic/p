== 1_1 ==
{~ chapter = "1-1"}
#CLEAR
<h3>01 仪式</h3>
<h4>神灵是否是诡术的仆从</h4>
<hr>
-> introduction

= introduction
那是一个夏日的傍晚。太阳已行将就木，可以感受到太阴的躁动。
你独自一人走在公园的小路上。
你看了看表，是时候回去了。
忽然，你发现前方隐隐约约有阴绿的火光，伴随阵阵压抑的呢喃。
“东皇……” #CLASS: distort
周遭的现实开始微微颤动，那些文字在你脑海中扭曲。
你抑制自己不去听，这绝对是超自然现象。
* [前往调查]
    你离火光越来越近，这也使你看清了更多细节：一座灰黑色的祭坛、三位灰袍人。祭台上方摊开着一本书，散溢出几个阴绿的符号。
    <i>靠近些……再靠近些……看清那些符号……</i>
    * * [逃跑] -> runaway
    * * [看清那些符号]
        “【符文】禁锢” #CLASS: neon
        -> investigate
* [逃跑] -> runaway
* [报警]
    你迅速拨打电话，说明了这里的情况。
    -> callpolice
+ ->
	你似乎只能原地等死 -> END

= investigate
你不知道那个信息从哪里来，为什么知道那个图形是什么，甚至那几个字还仿佛在闪闪发亮。
不过面前的三位灰袍人肯定不知道这一点。他们还在空洞地看着祭台上的书，嘴里无意识地发出呢喃。
- (opts)
    * (ex_1) “你是谁？”
        “奇术造物：天问”
        。。。
    * {ex_1} “奇术造物[？”]是什么？”
        “字面意思。”
        。。。
    * {ex_1} “我为什么要相信你？”
        “你没有别的选择。” #CLASS: warning
        。。。
    * (ex_2) “符文是什么？”
        “符文术法的媒介。可以被铭刻在灵魂或灵性器物上。”
    * (ex_3) {ex_2} “如何铭刻符文？”
        “你已经知道了。”
    * (stone) [捡起石头]
        你从碎石堆里捡起数块石头。
    * (stick) [折下树枝]
        你折下一根树枝。
        那棵树在你面前碎成一地粉末。
    * [逃跑]
        {loop == 0:
            -> runaway
        - else:
            已经逃不掉了。
            -> c_end_too_late
        }
    * {ex_3} [尝试铭刻符文]
        你试着呼唤它们，于是阴绿色的火焰向你缠绕过来，把你淹没。
        -> u_end_backfire
    + [也许可以尝试……]
        * * [攻击灰袍人]
            他们身前似乎有一道屏障，你过不去。
        * * [打不过就加入]
            你尝试辨别那些语言，那是：
            “东皇太一” #CLASS: distort
            “打开天国的” #CLASS: distort
            “理智降低。” #CLASS: warning
            -> u_end_why
        * * [触碰符文] -> bitten
        + + (throw) {stone} [朝符文扔石头]
            “攻击生效。” #CLASS: help
        * * {stick} [用树枝打符文]
            {throw > 1:
                -> action
            }
            你刚用树枝接触到符文，就感受到一股强大的吸力。
            然后你被蚕食殆尽。
            {throw == 0:
                -> u_end_why
            - else:
                -> c_end_give_up_halfway
            }
- (loop)
    {loop == 10:
        -> ritual
    - else:
        -> opts
    }

= bitten
你试着触碰符文，突然感到手指被什么东西咬住了，并且身体动弹不得。
然后你被蚕食殆尽。
-> u_end_why

= ritual
忽然，稠密至极的阴绿色火焰从符文中喷涌出来。
-> c_end_time_limit_exceeded

= action
你试着打下那些闪光的符文……
它们落了下来，洒得祭台上到处都是，然后忽然变成深青色的下陷痕迹。
随着符文的一一落下，中间包裹的东西露了出来：
“东皇太一”的残骸 #CLASS: holy
那是一本书，上面涂满了三个灰袍人的躯壳；
那是被你的石头打死的。
#RANDOM: uniform_int_distribution 1 3
{random == 1:
    一丝灵感缠绕到你身上：那就是所谓的“神”。
}
* 一只聪慧的乌鸦拍打着翅膀飞开了。
-> meet

= runaway
这诡异的场景把你惊住了。你赶忙转身奔跑……
可是，来时的那条小路一直延申到视野尽头。
你的力量逐渐耗尽，眼前的景象开始模糊。
“理智降低。”#CLASS: warning
* “[谁？”]你是谁？” ->
    。。。
    或许本该有回答的，但你已经听不见了。
    -> c_end_why
* [尽力前进] ->
    #CLEAR
    忽然间，场景破碎，记忆中的小路镜头出现在眼前。
    <hr>
    后来，你的生活回归了正常。这次事件掀起的波澜没过多久就被现实的熙熙攘攘消磨了。只要你……
    * 缄默 -> c_end_a
    * 公之于众 -> u_end_why
* [原地休息] ->
    休息一下或许可以恢复体力？
    就在你这么想着的时候，阴绿吞噬了你。
    -> c_end_why

= callpolice
“我们已经派「专业人员」去处理了。说说看，为什么觉得报警可以解决？”
* “反正我处理不了。” -> meet
* “既然有这样的事件，就会有这样的组织[。”]
    <>，那监测电话应该是小菜一叠。”
    -> meet

= meet
<hr>
几分钟后，三个穿着制服的人走了过来。
“很抱歉你被卷入……”
“一批‘邪教徒’在尝试举行仪式。”
{action:
    “你做得很好。”
}
- (opts)
    * “邪教？”
        “他们信仰的神叫“东皇太一”，据说拥有联结、禁锢的力量，也即橘子的力量。”
        “啊？”
        。。。
    * “你们怎么来得这么快？”
        “我们早就推测到他们在这一带，放出了乌鸦并随时待命。乌鸦们构成了我们‘乌鸦网络’的一部分。”
    * [说明未知来源的信息的事]
        这应该只是副效应，不用担心。
    * [没有问题了] -> break
- (loop)
    -> opts
- (break)
“你们告诉了我这么多，所以……
你们可以抹除我这一段的记忆？”
“当然。”
* [接受记忆删除]
    -> u_end_dream
* {action} “我可以加入你们吗？”
    * * [QwQ] -> done

= done
……
“你跟着我们走。”
“谢谢”
-> 1_2
