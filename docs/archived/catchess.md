# 猫猫棋
规则：
* 【白猫】类似跳棋，在周围 8 个方向若有棋子、跳过棋子是空格则可以跳过，会改变跳过棋子的毛色（白=>黑=>橘=>白）
* 【黑猫】类似国际象棋的兵，处于开始状态可以向前两步；可以向前走一步；只能向侧前方吃；没有【吃过路兵】规则
* 【橘猫】可以向周围 4 个方向移动/吃
* 棋盘的上下边界是循环的

```insert-html
<script src="../../script/chess/chess_base.js"></script>
<script src="../../assets/ink/adventure/catchess.js"></script>
<canvas id="cat_game" width="512" height="512" style="background-color:#C19B6F"></canvas>
<br/>
<button onclick="initialize_chess('cat_game')">初始化</button>
```
