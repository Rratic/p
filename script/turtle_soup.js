/*
e.g.
    id: "std",
    vHard: 4, // 难度
    vLogic: 7, // 逻辑链完整、有道理程度
    vPleasant: 6, // 感受
*/
const data = [
    {
        id: "A1",
        surface: "A 邀请 B、C 参加一次聚会，但是 B 拒绝了，而 C 半路有事没有去，甚至 A 自己也没有去。\n一个月后 B 邀请 A、C 参加一次聚会，但是 A 联系不到，而 C 拒绝了。\n一个月后有人发现 A、B、C 都呈死亡状态。",
        bottom: "A、B 与 C 使用了人工智能系统替代自己参与社交，这包含了在死后假装自己还活着的功能。<br/><quote>参考了一篇科幻 David Eagleman《死亡的故事·死亡开关》</quote>",
        vHard: 5,
        vLogic: 5,
        vPleasant: 5,
        visTag: ["死亡"],
        hidTag: ["误导"],
    },
    {
        id: "A2",
        surface: "你在看电视上的魔术师 A 表演：只见 B 把 A 切碎放进一个箱子里，过了一会 A 爬了出来。",
        bottom: "视频可以剪辑。",
        vHard: 4,
        vLogic: 6,
        vPleasant: 4,
        visTag: ["死亡"],
        hidTag: ["误导"],
    },
    {
        id: "B1",
        surface: "A 死在了实验室里，一些东西被撞翻了。",
        bottom: "A 想尝试倒着做实验，在拿试管时习惯性地用手正握，于是寄了。因挣扎从天花板上摔下来时把一些东西撞翻了。",
        vHard: 7,
        vLogic: 4,
        vPleasant: 2,
        visTag: ["死亡", "实验"],
        hidTag: [],
    },
]
