# BANDIT. 2
## To Level 10
`strings data.txt | grep ^=`

## To Level 11
`base64 -d data.txt`

## To Level 12
`cat data.txt | tr [a-zA-Z] [n-za-mN-ZA-M]`

## To Level 13
先用 `mktemp -d` 在 `/tmp/` 下创建临时目录，然后 `xxd -r data.txt /tmp/tmp.../1`，切到临时目录去处理。
为什么这些解压器只能识别特定后缀呢？
```shell
bandit12@...$ file 1
1: gzip compressed data, was "data2.bin", last modified: Sun Apr 23 18:04:23 2023, max compression, from Unix, original size modulo 2^32 581
bandit12@...$ gzip -d 1
gzip: 1: unknown suffix -- ignored
bandit12@...$ gzip -d ./1
gzip: ./1: unknown suffix -- ignored
bandit12@...$ mv 1 1.gz
bandit12@...$ gzip -d 1.gz
bandit12@...$ ls
1
bandit12@...$ file 1
1: bzip2 compressed data, block size = 900k
bandit12@...$ mv 1 1.bz2
bandit12@...$ bzip2 -d 1.bz2
bandit12@...$ file 1
1: gzip compressed data, was "data4.bin", last modified: Sun Apr 23 18:04:23 2023, max compression, from Unix, original size modulo 2^32 20480
bandit12@...$ mv 1 1.gz
bandit12@...$ gzip -d 1.gz
bandit12@...$ file 1
1: POSIX tar archive (GNU)
bandit12@...$ mv 1 1.tar
bandit12@...$ tar -xvf 1.tar
data5.bin
```

这个 `tar` 解压出来结果还和别的名字不一样。

……

反复操作。

最后 `rm -r` 把临时目录干掉。

## To Level 14
` ssh bandit14@bandit.labs.overthewire.org -p 2220 -i sshkey.private`

## To Level 15
`nc localhost 30000`

## Keys (Save)
```hide
* 10: `G7w8LIi6J3kTb8A7j9LgrywtEUlyyp6s`
* 11: `6zPeziLdR2RKNdNYFNb6nVCKzphlXHBM`
* 12: `JVNBBFSmZwKKOP0XbFXOoW8chDz5yVRv`
* 13: `wbWdlBxEir4CaE8LaPhauuOo6pwRmrDw`
* 14: `fGrHPx402xGC7U7rXKDaxiWFTOiF0ENq`
* 15: `jN2kgmIXJ6fShzhT2avhotn4Zcka6tnt`
```
