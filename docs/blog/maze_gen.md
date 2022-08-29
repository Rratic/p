# 一种迷宫生成算法
思路：
```jl
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

上代码
```cpp
#include<bits/stdc++.h>
using namespace std;
#define isin(x,y) (x>=0&&y>=0&&x<m&&y<n)
template<unsigned short l=15,unsigned short w=15>
void prim(unsigned short maze_len,unsigned short maze_wid,array<array<unsigned short,l>,w>&a){
    int m=maze_len,n=maze_wid;
    short mox[4]={0,0,1,-1},moy[4]={1,-1,0,0};
    vector<pair<unsigned short,unsigned short>>li;
    bool was[21][21];
    for(int i=0;i<m;++i)for(int j=0;j<n;++j){a[i][j]='#';was[i][j]=0;}
    unsigned short stx,sty,enx,eny;
    stx=rand()%m;sty=rand()%n;
    a[stx][sty]='.';li.push_back(make_pair(stx,sty));
    while(!li.empty()){
        auto rr=rand()%li.size();
        auto r=li[rr];
        li.erase(li.begin()+rr);
        if(was[r.first][r.second])continue;
        was[r.first][r.second]=1;
        unsigned short c=0;
        for(int i=0;i<4;++i)if(isin(r.first+mox[i],r.second+moy[i])&&a[r.first+mox[i]][r.second+moy[i]]=='.')++c;
        if(c<=1){
            a[r.first][r.second]='.';
            for(int i=0;i<4;++i){
                if(!was[r.first+mox[i]][r.second+moy[i]]&&isin(r.first+mox[i],r.second+moy[i])){
                    li.push_back(make_pair(r.first+mox[i],r.second+moy[i]));
                }
            }
        }
        enx=r.first;
        eny=r.second;
    }
    a[stx][sty]='@';
    a[enx][eny]='%';
}
int main(){
    //srand(123456);
    array<array<unsigned short,15>,15>a;
    prim<15,15>(15,15,a);
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
