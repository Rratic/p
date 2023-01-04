# IOCCC 的启示
!!! note
	此文曾发布于洛谷博客，并尝试进入日报，然而失败了；部分内容有删改

!!! warn
	部分内容过时或有误

## 前言
[IOCCC](https://www.ioccc.org) 大赛全称：The International Obfuscated C Code Contest，
国际 C 语言混乱代码大赛，目的是写出最有创意的最让人难以理解的 C 语言代码

本博客挑选了部分有代表性的代码

## 1984 anonymous
代码作用：输出 `hello, world!`

代码较短，**注意：此代码过于古老，部分语法不符合现在的标准（当时甚至没有C89）**，但也反映了当时的C状况
```cpp
int i;main(){for(;i["]<i;++i){--i;}"];read('-'-'-',i+++"hell\
o, world!\n",'/'/'/'));}read(j,i,p){write(j/p+p,i---j,i/i);}
```

* 第一行末尾的`\`表示这行没有写完，剩余部分在下一行，可以无缝衔接，第二行前面可以加空格（此时不能拆字），
这个技巧可以用于在写复杂状态转移方程时不影响视觉
* `i["]<i;++i){--i;}"]` 是一个少见的指针用法，写法 `a[i]` 等价于 `i[a]`（不建议使用），
也就是说，此处代码相当于 `char c[a]="]<i;++i){--i;}";for(int i=0;c[i]<i;...i++...);`
* `write` 函数在 C++ 中被移动到 `unistd.h`，不在标准库中，请勿使用
* 换行建议用 `\n` 而不是 `endl`，因为 `endl` 会刷新流

# 2020 yang
代码作用：通过 `命令行参数` 获取 `PIN`，然后根据输入生成编译时间很长的代码（代码主要是预处理）
```cpp
#\
                                define C(c           /**/)#c
                               /*size=3173*/#include<stdio.h>
                            /*crc=b7f9ecff.*/#include<stdlib.h>
                           /*Mile/Adele_von_Ascham*/#include<time.h>
                           typedef/**/int(I);I/*:3*/d,i,j,a,b,l,u[16],v
                           [18],w[36],x,y,z,k;char*P="\n\40(),",*p,*q,*t[18],m[4];
                          void/**/O(char*q){for(;*q;q++)*q>32?z=111-*q?z=(z+*q)%185,(k?
                          k--:(y=z%37,(x=z/37%7)?printf(*t,t[x],y?w[y-1]:95):y>14&&y<33?x
                          =y>15,printf(t[15+x],x?2<<y%16:l,x?(1<<y%16)-1:1):puts(t[y%28])))
                          ,0:z+82:0;}void/**/Q(I(p),I*q){for(x=0;x<p;x++){q[x]=x;}for(;--p
    >1;q[p]=y)y          =q[x=rand()%-~p],q[x]=q[p];}char/**/n[999]=C(Average?!nQVQd%R>Rd%
  R%          %RNIPRfi#VQ}R;TtuodtsRUd%RUd%RUOSetirwf!RnruterR{RTSniamRtniQ>h.oidts<edulc
 ni                   #V>rebmun<=NIPD-RhtiwRelipmocResaelPRrorre#QNIPRfednfi#V__ELIF__R_
Re               nifed#V~-VU0V;}V{R= R][ORrahcRdengisnuRtsnocRcitatsVesle#Vfidne#V53556
 .           .1RfoRegnarRehtRniRre   getniRnaRsiR]NIP[R erehwQQc.tuptuoR>Rtxt.tupniR
 <         R]NIP[R:egasuV_Redulcn i#VfednfiVfednuVenife dVfedfiVQc%Rs%#V);I/**/main(
  I(      f),char**e){if(f){for(i=    time(NULL),p=n,q=  n+998,x=18;x;p++){*p>32&&!(
         *--q=*p>80&&*p<87?P[*p-   81]:*     p)?t  [( --  x)]=q+1:q;}if(f-2||(d=atoi
        (e[1]))<1||65536<d){;O("   \"");             goto  O;}srand(i);Q(16,u);i=0;Q(
       36,w);for(;i<36; i++){w[i]   +=w           [i]<26 ? 97:39; }O(C(ouoo9oBotoo%]#
      ox^#oy_#ozoou#o{ a#o|b#o}c#                o~d#oo-e   #oo.  f#oo/g#oo0h#oo1i#oo
     2j#oo3k#oo4l#o   p));for(j                   =8;EOF   -(i=   getchar());l+=1){a=1+
    rand()%16;for(b  =0;b<a||i-                           main   (0,e);b++)x=d^d/4^d/8^d/
    32,d=  (d/  2|x<<15)&65535;                          b|=   !l<<17;Q(18,v);for(a=0;a<18;
    a++     ){if( (b&(1<<(i=v[a]      ))))*                 m=75+i,O(m),j=i<17&&j<i?i:j;}O(C(
    !)           ); }O(C(oqovoo97o    /n!));i=           0;for(;i<8;O(m))m[2]=35,*m=56+u[i],m[1
    ]=          75   +i++;O(C(oA!oro   oqoo9)          );k=112-j*7;O(C(6o.!Z!Z#5o-!Y!Y#4~!X!X#3}
     !W  !W     #2    |!V!V#1{!U!U#0z!            T!T#/y!S!S#.x!R!R#-w!Q!Q#ooAv!P!P#+o#!O!O#*t!N!
       N#      oo       >s!M!M#oo=r!L!L#oo<q!K!K#   &pIo@:;= oUm#oo98m##oo9=8m#oo9oUm###oo9;=8m#o
               o9   oUm##oo9=oUm#oo98m####          o09]    #o1:^#o2;_#o3<o  ou#o4=a#o5>b#o6?c#o
             7@d#o8A e#o    9B    f#o:Cg#o;          D     h#o<Ei #o=Fj#o>   Gk#o?Hl#oo9os#####
           ));d=0                                          ;}          O:    for(x=y=0;x<8;++
          x)y|=                                                               d&(1<<u[x])?
          1<<                                                               x:0;return
           /*                                                               :9    */
            y                                                                ;    }
```
* [这里有一个（可能）帮助理解的东西](https://www.ioccc.org/2020/yang/spoiler.html)
* 第一行的 `#define C(c /**/) #c` 中的 `/**/` 同样会被当作注释处理，而 `#` 表示“字符串化”，也就是说 `C(qwerty)` 会被替换成 `"qwerty"`
* 标准中主函数不允许递归，但 `gcc` 部分版本中可以编译并正确运行（注：洛谷当前使用gcc编译）
* 如果使用 C++11 及以上，不要再写 `NULL` 了！在C中，`NULL` 被定义为空指针，而C++中被定义为 `0`，只是因为被自动转换成了空指针而看起来没有问题，请使用 `nullptr` 作空指针

`__FILE__`等是编译器预设的参数：
* `__FILE__` 包含当前程序文件名的字符串
* `__LINE__` 表示当前行号的整数
* `__DATE__` 包含当前日期的字符串
* `__STDC__` 设置为非零时，要求编译器遵循ANSI C标准
* `__TIME__` 包含当前时间的字符串
* `__cplusplus`如果是 C++，是包含当前使用版本的整数

例如
```cpp
#ifdef __cplusplus
extern "C":{
#endif
...
#ifdef __cplusplus
}
#endif
```

是典型的C与C++混合的例子，又比如
```cpp
#if __cplusplus < 201103L
...
#endif
```
表示该部分代码适用于 C++11 之前

使用 time, srand, rand 创建随机数已经过时了！C++11中加入了新的头文件 `random`，示例代码：
```cpp
#include <random>
#include <iostream>
using namespace std;
int main()
{
	random_device rd;  // 随机种子生成：来自设备
	mt19937_64 gen(rd()); // 随机引擎：64位梅森缠绕器
	uniform_int_distribution<long long>dis(-123,123456);//生成标准：均匀，[-123,123456]间的整数
	for(int i=0;i<10;++i)cout<<dis(gen)<<' ';
	cout<<'\n';
}
```

## 2020 carlini
井字棋

**注意：windows不支持**
```cpp
#include <stdio.h>

#define N(a)       "%"#a"$hhn"
#define O(a,b)     "%10$"#a"d"N(b)
#define U          "%10$.*37$d"
#define G(a)       "%"#a"$s"
#define H(a,b)     G(a)G(b)
#define T(a)       a a 
#define s(a)       T(a)T(a)
#define A(a)       s(a)T(a)a
#define n(a)       A(a)a
#define D(a)       n(a)A(a)
#define C(a)       D(a)a
#define R          C(C(N(12)G(12)))
#define o(a,b,c)   C(H(a,a))D(G(a))C(H(b,b)G(b))n(G(b))O(32,c)R
#define SS         O(78,55)R "\n\033[2J\n%26$s";
#define E(a,b,c,d) H(a,b)G(c)O(253,11)R G(11)O(255,11)R H(11,d)N(d)O(253,35)R
#define S(a,b)     O(254,11)H(a,b)N(68)R G(68)O(255,68)N(12)H(12,68)G(67)N(67)

char* fmt = O(10,39)N(40)N(41)N(42)N(43)N(66)N(69)N(24)O(22,65)O(5,70)O(8,44)N(
            45)N(46)N    (47)N(48)N(    49)N( 50)N(     51)N(52)N(53    )O( 28,
            54)O(5,        55) O(2,    56)O(3,57)O(      4,58 )O(13,    73)O(4,
            71 )N(   72)O   (20,59    )N(60)N(61)N(       62)N (63)N    (64)R R
            E(1,2,   3,13   )E(4,    5,6,13)E(7,8,9        ,13)E(1,4    ,7,13)E
            (2,5,8,        13)E(    3,6,9,13)E(1,5,         9,13)E(3    ,5,7,13
            )E(14,15,    16,23)    E(17,18,19,23)E(          20, 21,    22,23)E
            (14,17,20,23)E(15,    18,21,23)E(16,19,    22     ,23)E(    14, 18,
            22,23)E(16,18,20,    23)R U O(255 ,38)R    G (     38)O(    255,36)
            R H(13,23)O(255,    11)R H(11,36) O(254    ,36)     R G(    36 ) O(
            255,36)R S(1,14    )S(2,15)S(3, 16)S(4,    17 )S     (5,    18)S(6,
            19)S(7,20)S(8,    21)S(9    ,22)H(13,23    )H(36,     67    )N(11)R
            G(11)""O(255,    25 )R        s(C(G(11)    ))n (G(          11) )G(
            11)N(54)R C(    "aa")   s(A(   G(25)))T    (G(25))N         (69)R o
            (14,1,26)o(    15, 2,   27)o   (16,3,28    )o( 17,4,        29)o(18
            ,5,30)o(19    ,6,31)o(        20,7,32)o    (21,8,33)o       (22 ,9,
            34)n(C(U)    )N( 68)R H(    36,13)G(23)    N(11)R C(D(      G(11)))
            D(G(11))G(68)N(68)R G(68)O(49,35)R H(13,23)G(67)N(11)R C(H(11,11)G(
            11))A(G(11))C(H(36,36)G(36))s(G(36))O(32,58)R C(D(G(36)))A(G(36))SS

#define arg d+6,d+8,d+10,d+12,d+14,d+16,d+18,d+20,d+22,0,d+46,d+52,d+48,d+24,d\
            +26,d+28,d+30,d+32,d+34,d+36,d+38,d+40,d+50,(scanf(d+126,d+4),d+(6\
            -2)+18*(1-d[2]%2)+d[4]*2),d,d+66,d+68,d+70, d+78,d+80,d+82,d+90,d+\
            92,d+94,d+97,d+54,d[2],d+2,d+71,d+77,d+83,d+89,d+95,d+72,d+73,d+74\
            ,d+75,d+76,d+84,d+85,d+86,d+87,d+88,d+100,d+101,d+96,d+102,d+99,d+\
            67,d+69,d+79,d+81,d+91,d+93,d+98,d+103,d+58,d+60,d+98,d+126,d+127,\
            d+128,d+129

char d[538] = {1,0,10,0,10};

int main() {
    while(*d) printf(fmt, arg);
}
```

`\033[2J` 作用是清屏，`\033` 控制符可以用于许多屏幕特效，比如

```cpp
cout<<"\033[33mYELLOW";
```

输出黄色文字

在linux下可以直接显出效果，但在windows中，你需要先执行一次system，例如将`system("");`放在控制符使用前，控制符才有效

## 面向printf编程
虽然printf的主要作用是输出，但它是「图灵完备」的，简单来说，你可以使用 printf 的参数实现分支和循环：

众所周知，
* `%d`接受一个整数参数并输出它
* `%s`接受一个字符串参数并输出它
* `%n`参数必须是一个有符号整数的指针，存储它出现之前打印的所有字符数（有些编译器windows下会出问题）
* 还有很多奇奇怪怪的东西
	* `%hhn`存储写入字符指针的字节数模256
	* `%2$d`打印参数2到printf(而不是顺序的下一个参数)
	* `%8d`将打印的整数填充为8个字符
	* `%3$.*4$d`打印参数3，其中的0和参数4中的一样多

举个例子
```cpp
int x=10;
printf("%1$.*2$d%3$hhn",5,10,&x);
```
输出 `0000000005`

我们可以把字符串当作布尔数组，`0000`当作0，`xx00`（x非0）当作1，利用字符串格式化实现位运算

* 按位或：`printf("%1$s%2$s%3$hhn",a,b,c)` 将产生 `*c=strlen(a)+strlen(b)`，相当于 `c=a|b`
* 取反：`printf("%1$255d%1$s%hhn",a,b)` 将产生 `*b=(strlen(a)+255)%256=strlen(a)-1`，相当于 `b=!a`
* 按位与：众所周知，`A&B=!((!A)|(!B))`
* 本程序使用 18 位存储，每个玩家 9 位，并有一个在 2 个玩家间交替的计数器
* I/O 控制的伪代码：
```cpp
while(*ok){
  scanf();
  printf();
}
```

[假如你想看亿点更*讽刺*的东西](https://github.com/HexHive/printbf)

## 2020 endoh2
代码作用：字符画，需要导入文件
```cpp
              /* A long time ago in a galaxy far, far away.... */

int*d,D[9999],N=20,L=4,n,m,k,a[3],i;char*p,*q,S[2000]="L@X-SGD-HNBBB-AD-VHSG-\
-XNT\x1b[2J\x1b[H",*s=S,*G="r2zZX!.+@KBK^yh.!:%Bud!.+Jyh.!6.BHBhp!6.BHBh!:%Bu\
v{VT!.hBJ6p!042ljn!284b}`!.hR6Dp!.hp!h.T6p!h.p6!2/LilqP72!h.+@QB!~}lqP72/Lil!\
h.+@QBFp!:)0?F]nwf!,82v!.sv{6!.l6!,j<n8!.xN6t!&NvN*!.6hp";/*Stay_on_target.**/
#include/**/<complex.h>/**//*Oh,my_dear_friend.How_I've_missed_you.--C-3PO***/
typedef/**/complex/**/double(c);c(X)[3],P,O;c/**/B(double t){double s=1-t,u;P=
s*s*X[1]            +2        *s*t*        *X+t        *t*X       [2]+O;u=I*P;
return+48*((    s=P)+   48*I   )/(   1<u?   u:   1);}   /*   1977  IOCCC2020*/
#include/**    Do.Or   do_not   .   There_is_   no_try...   --Yoda**/<stdio.h>
void/**/b(    double   t,/***   *   **/double   u){double   s=P=B(t)-B(u);(s=P
*(2*s-P))    <1?m=P=B   ((t+   u)/   2),k   =-   I*P,   m>   -41&&m<39&&9<k&&k
<48?             m+=k/        2*80+        73,S        [m]=               S[m]
-73?k%2?S[m]-94?95:73:S[m]-95?94:73:73:1:(b(t,(t+u)/2),b((t+u)/2,u),0);}/*<oo>
_No.             _I_am_            IOCCC           1977                   ***/
#include/*****    your   father..   --DarthVader   **/   <time.h>/****   ****/
int(main)(int    (x),   char**V){;   clock_t(c)=   /*   */clock();;;   for(d=D
;m<26;m++,s    ++)*s>   63?*d++=m%   7*          16-7   *8,*d++=m/   7*25,*d++
=*s-64:0;;    if(V[1])   {;;;FILE   *F   =fopen(V[+1],   "r");for   (d=D,L=N=m
=0;(x=/**             *            ***              **/            fgetc(F))>0
||fclose(F);)if(x>13?64<x&&x<91?*d++=m*16,*d++=L*25,*d++=x%26:0,m++,0:1)for(++
L;d-D>N*3||(m=0);N++)D[N*3]-=m*8;}for(;i<200+L*25;i++){for(n=0,p=S+33;n<1920;*
p++=n++%80>78?10:32){}for(*p=x=0,d=D;x<N;x++,d+=3){O=(d[1]-i-40)*I+*d;n=d[2];p
=G;for(;n--;)for(;*p++>33;);*a=a[1]=*p++;for(;*p>33;p++)if(*p%2?*a=*p,0:1){a[2
]=*p;for(m=0;m<3;m++){k=a[m]/2-18;q="/&&&##%%##.+),A$$$$'&&'&&((%-((#'/#%%#&#\
&&#D&";for(n=2;k--;)n+=*q++-34;X[m]=n%13+n/13*I;}b(0,1);*a=a[1]=*p;}}for(puts(
s),s=S+30;(clock()-c)*10<i*CLOCKS_PER_SEC;);}return 0;}/*Nevertellmetheodds*/
```
`\x1b` 与前文提到的 `\033` 是同一个意思，都表示第27个ASCLL码

下面详细介绍一下转义规则：
1. \\+普通符号
	* `\a`铃声
	* `\b`退格
	* `\t`水平制表符
	* `\n`换行
	* `\v`垂直制表符
	* `\f`换页
	* `\r`回车
	* `\"`双引号
	* `\'`单引号
	* `\?`问号
	* `\\`反斜杠
	* `\c`是条件转译（**注：找到的唯一资料来自英文cppreference，未找到更多说明**）
2. \\+3个数字8进制数字
3. \\x+2个16进制数字
4. \\u+4个16进制数字（C++11新增）
5. \\U+8个16进制数字（C++11新增）

``````hide "既然标题是“启发”，那么读者不妨思考一下：为什么要支持转义问号呢？"
原因在于三字符组。

1972年，在ISO 646标准中，规定了键盘中可以不保持原状的12个字符
```plain
# $ @ [ \ ] ^ ` { | } ~
```
于是各国纷纷把它们定义为自己语言的字符

因此规定了三字符组，用以替代部分符号

| 字符组 | 替代品 |
| :-: | :-: |
| `??=` | `#` |
| `??/` | `\` |
| `??'` | `^` |
| `??(` | `[` |
| `??)` | `]` |
| `??!` | `|` |
| `??<` | `{` |
| `??>` | `}` |
| `??-` | `~` |

为了防止不必要的处理，需要添加 `\?`

**注：三字符组在 C++17 中被移除**
``````

同样地，1994 年加入了双字符组

| 字符组 | 替代品 |
| :-: | :-: |
| `<:` | `[` |
| `:>` | `]` |
| `<%` | `{` |
| `%>` | `}` |
| `%:` | `#` |

C++ 还包含了关键字 `and`、`bitor`、`or`、`xor`、`compl`、`bitand`、`and_eq`、`or_eq`、`xor_eq`、`not` 与 `not_eq`

你可以使用 `FILE *` 方式操作文件，使用函数 `fopen(文件名, 模式)`，`fclose(指针)`，`fgetc(指针)`，还有 `fputc`，`fprintf`，`fscanf` 等等

[^1]: https://www.ioccc.org/years.html
[^2]: https://blog.csdn.net/paulkg12/article/details/85233310
[^3]: https://zh.cppreference.com/w/cpp/header/random
[^4]: https://github.com/carlini/printf-tac-toe
[^5]: https://en.cppreference.com/w/cpp/language/escape
[^6]: https://blog.csdn.net/canguanxihu/article/details/45535491
