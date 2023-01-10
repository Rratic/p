# 皇后棋
!!! note
	[关于该游戏的详细说明](http://hywiki.xyz/wiki/%E7%9A%87%E5%90%8E%E6%A3%8B)

您可以移动“皇后”（横、竖或斜），并可以吃掉对方，走过的地方会产生障碍物。
如果路径上经过了障碍物或敌方“皇后”（而不是去吃它），你会被挡住

```insert-html
<canvas id="queen_game" width="576" height="512" onclick="clicks(event)"></canvas>
<hr />
<button onclick="new_game()">开始游戏</button>
<button onclick="changeorder()">强制切换先后手</button>
<span id="info">轮到红方</span>
<script src="../../script/queen_main.js"></script>
```
