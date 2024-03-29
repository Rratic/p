# 迷宫生成算法
## 1
思路：
```plain
初始全部为墙
随机选一格，标记一下，加入列表
while 列表非空
    随机从列表中挑一格
    从列表中删除
    如果已标记，删除跑路
    标记
    if 周围墙数≤1
        将周围4面墙加入列表
    end
end
```

代码：
```cpp
#include <bits/stdc++.h>
using namespace std;
#define isin(x,y) (x>=0 && y>=0 && x<m && y<n)
template<unsigned short l=15,unsigned short w=15>
void prim(unsigned short maze_len, unsigned short maze_wid, array<array<unsigned short,l>,w>&a){
    int m = maze_len;
    int n = maze_wid;
    short mox[4] = {0,0,1,-1}
    short moy[4] = {1,-1,0,0};
    vector<pair<unsigned short,unsigned short>>li;
    bool was[21][21];
    for(int i=0;i<m;++i){
        for(int j=0;j<n;++j){
            a[i][j]='#';
            was[i][j]=0;
        }
    }
    unsigned short stx,sty,enx,eny;
    stx = rand()%m;
    sty = rand()%n;
    a[stx][sty] = '.';
    li.push_back(make_pair(stx, sty));
    while(!li.empty()){
        auto rr = rand()%li.size();
        auto r = li[rr];
        li.erase(li.begin()+rr);
        if(was[r.first][r.second])continue;
        was[r.first][r.second]=1;
        unsigned short c=0;
        for(int i=0;i<4;++i){
            if(isin(r.first+mox[i], r.second+moy[i]) && a[r.first+mox[i]][r.second+moy[i]]=='.')++c;
        }
        if(c<=1){
            a[r.first][r.second] = '.';
            for(int i=0;i<4;++i){
                if(!was[r.first+mox[i]][r.second+moy[i]] && isin(r.first+mox[i], r.second+moy[i])){
                    li.push_back(make_pair(r.first+mox[i], r.second+moy[i]));
                }
            }
        }
        enx = r.first;
        eny = r.second;
    }
    a[stx][sty]='@';
    a[enx][eny]='%';
}
int main(){
    array<array<unsigned short,15>,15>a;
    prim<15, 15>(15, 15, a);
    for(int i=0;i<15;++i){
        for(int j=0;j<15;++j){
            cout<<char(a[i][j]);
        }
        cout<<'\n';
    }
}
```

栗子：
```plain
..#.#..#.##.#%.
.##..#.#.....#.
...#.#...###...
#.#...#.##..###
#..#.#..#..#...
..##...#.#..#.#
#...#.##...#...
..##.....##.#.#
#..##.##..#.#..
..#.#.#.##..#.#
#.........#.#..
..###.#.#.....#
#....##..#.##..
.@#.#...#....#.
.#..#.##..#.#..
```

## 2
思路：
```plain
分割 64×64 区域
for 区块 in 所有区域
    横竖阻隔
    挖三个洞
    对四块递归
end
```

代码：
```js
// C-flavour random
let gsrand = 0
function srand(x) { gsrand = x }
function rand() {
    gsrand = (gsrand*1103515245+12345)&0xffffffff
    return gsrand>>16 & 32767
}

class Chunk {
    matrix
    constructor() {
        // suppose the map is divided into 64×64 chunks
        this.matrix = new Uint8Array(4096)
    }
}

Chunk.prototype.put = function(x, y, type) {
    this.matrix[x<<6|y] = type == 'space' ? 0 : 1
}

/* * * Core * * */
Chunk.prototype.generate__infmaze_4 = function (lx, ly, rx, ry) { // split the map recursively
	let x0 = rx - lx
	let y0 = ry - ly
	// room small enough (width = 1)
	if (x0 == 0 || y0 == 0) {
		for (let i = lx; i <= rx; i++) {
			for (let j = ly; j <= ry; j++) this.put(i, j, 'space')
		}
		return
	}
	let mx = lx + 2 * (rand() % (x0 >> 1)) + 1
	let my = ly + 2 * (rand() % (y0 >> 1)) + 1
	for (let i = lx; i <= rx; i++) this.put(i, my, 'wall')
	for (let i = ly; i <= ry; i++) this.put(mx, i, 'wall')
	// split the map into four smaller rooms
	this.generate__infmaze_4(lx, ly, mx - 1, my - 1)
	this.generate__infmaze_4(lx, my + 1, mx - 1, ry)
	this.generate__infmaze_4(mx + 1, ly, rx, my - 1)
	this.generate__infmaze_4(mx + 1, my + 1, rx, ry)
	// three exits serve as passages through rooms
	let d = rand() % 4
	let myl = (my - ly + 1) >> 1
	let myr = (ry - my + 1) >> 1
	let mxl = (mx - lx + 1) >> 1
	let mxr = (rx - mx + 1) >> 1
	if (d == 0) {
		this.put(rx - 2 * (rand() % mxr), my, 'space')
		this.put(mx, ly + 2 * (rand() % myl), 'space')
		this.put(mx, ry - 2 * (rand() % myr), 'space')
	}
	else if (d == 1) {
		this.put(lx + 2 * (rand() % mxl), my, 'space')
		this.put(mx, ly + 2 * (rand() % myl), 'space')
		this.put(mx, ry - 2 * (rand() % myr), 'space')
	}
	else if (d == 2) {
		this.put(lx + 2 * (rand() % mxl), my, 'space')
		this.put(rx - 2 * (rand() % mxr), my, 'space')
		this.put(mx, ry - 2 * (rand() % myr), 'space')
	}
	else {
		this.put(lx + 2 * (rand() % mxl), my, 'space')
		this.put(rx - 2 * (rand() % mxr), my, 'space')
		this.put(mx, ly + 2 * (rand() % myl), 'space')
	}
}
Chunk.prototype.generate__infmaze = function(x, y) {
    // chunks are isolated at first
    for(let i = 0; i < 64; i++) {
        this.put(i, 0, 'wall')
        this.put(0, i, 'wall')
    }
    // use the seed
    srand((x<<15 + y) ^ seed<<3)
    this.generate__infmaze_4(1, 1, 63, 63)
    // break the isolation between chunks
    let r1 = rand()%32
    this.put(2*(rand()%32) + 1, 0, 'space')
    this.put(0, 2*(rand()%32) + 1, 'space')
}
```
