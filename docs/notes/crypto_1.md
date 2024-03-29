# CRYPTO. 1
## 关于
* 原发布于 <https://github.com/JuliaRoadmap/zh/tree/master/docs/blog/crypto>，包含 1-1 至 1-6 及整合包
* 题源 [the cryptopals crypto challenges](https://cryptopals.com/)

## 7
参考 <https://zhuanlan.zhihu.com/p/397940508>
```jl
### AES
function add_round_key(x::Matrix, k::Matrix)
    m = Matrix{UInt8}(undef, 4, 4)
    for i in 1:4
        for j in 1:4
            m[i, j] = xor(x[i, j], k[i, j])
        end
    end
    return m
end

const s_box = [
    0x63 0x7c 0x77 0x7b 0xf2 0x6b 0x6f 0xc5 0x30 0x01 0x67 0x2b 0xfe 0xd7 0xab 0x76
    0xca 0x82 0xc9 0x7d 0xfa 0x59 0x47 0xf0 0xad 0xd4 0xa2 0xaf 0x9c 0xa4 0x72 0xc0
    0xb7 0xfd 0x93 0x26 0x36 0x3f 0xf7 0xcc 0x34 0xa5 0xe5 0xf1 0x71 0xd8 0x31 0x15
    0x04 0xc7 0x23 0xc3 0x18 0x96 0x05 0x9a 0x07 0x12 0x80 0xe2 0xeb 0x27 0xb2 0x75
    0x09 0x83 0x2c 0x1a 0x1b 0x6e 0x5a 0xa0 0x52 0x3b 0xd6 0xb3 0x29 0xe3 0x2f 0x84
    0x53 0xd1 0x00 0xed 0x20 0xfc 0xb1 0x5b 0x6a 0xcb 0xbe 0x39 0x4a 0x4c 0x58 0xcf
    0xd0 0xef 0xaa 0xfb 0x43 0x4d 0x33 0x85 0x45 0xf9 0x02 0x7f 0x50 0x3c 0x9f 0xa8
    0x51 0xa3 0x40 0x8f 0x92 0x9d 0x38 0xf5 0xbc 0xb6 0xda 0x21 0x10 0xff 0xf3 0xd2
    0xcd 0x0c 0x13 0xec 0x5f 0x97 0x44 0x17 0xc4 0xa7 0x7e 0x3d 0x64 0x5d 0x19 0x73
    0x60 0x81 0x4f 0xdc 0x22 0x2a 0x90 0x88 0x46 0xee 0xb8 0x14 0xde 0x5e 0x0b 0xdb
    0xe0 0x32 0x3a 0x0a 0x49 0x06 0x24 0x5c 0xc2 0xd3 0xac 0x62 0x91 0x95 0xe4 0x79
    0xe7 0xc8 0x37 0x6d 0x8d 0xd5 0x4e 0xa9 0x6c 0x56 0xf4 0xea 0x65 0x7a 0xae 0x08
    0xba 0x78 0x25 0x2e 0x1c 0xa6 0xb4 0xc6 0xe8 0xdd 0x74 0x1f 0x4b 0xbd 0x8b 0x8a
    0x70 0x3e 0xb5 0x66 0x48 0x03 0xf6 0x0e 0x61 0x35 0x57 0xb9 0x86 0xc1 0x1d 0x9e
    0xe1 0xf8 0x98 0x11 0x69 0xd9 0x8e 0x94 0x9b 0x1e 0x87 0xe9 0xce 0x55 0x28 0xdf
    0x8c 0xa1 0x89 0x0d 0xbf 0xe6 0x42 0x68 0x41 0x99 0x2d 0x0f 0xb0 0x54 0xbb 0x16
]

const inv_s_box = [
    0x52 0x09 0x6a 0xd5 0x30 0x36 0xa5 0x38 0xbf 0x40 0xa3 0x9e 0x81 0xf3 0xd7 0xfb
    0x7c 0xe3 0x39 0x82 0x9b 0x2f 0xff 0x87 0x34 0x8e 0x43 0x44 0xc4 0xde 0xe9 0xcb
    0x54 0x7b 0x94 0x32 0xa6 0xc2 0x23 0x3d 0xee 0x4c 0x95 0x0b 0x42 0xfa 0xc3 0x4e
    0x08 0x2e 0xa1 0x66 0x28 0xd9 0x24 0xb2 0x76 0x5b 0xa2 0x49 0x6d 0x8b 0xd1 0x25
    0x72 0xf8 0xf6 0x64 0x86 0x68 0x98 0x16 0xd4 0xa4 0x5c 0xcc 0x5d 0x65 0xb6 0x92
    0x6c 0x70 0x48 0x50 0xfd 0xed 0xb9 0xda 0x5e 0x15 0x46 0x57 0xa7 0x8d 0x9d 0x84
    0x90 0xd8 0xab 0x00 0x8c 0xbc 0xd3 0x0a 0xf7 0xe4 0x58 0x05 0xb8 0xb3 0x45 0x06
    0xd0 0x2c 0x1e 0x8f 0xca 0x3f 0x0f 0x02 0xc1 0xaf 0xbd 0x03 0x01 0x13 0x8a 0x6b
    0x3a 0x91 0x11 0x41 0x4f 0x67 0xdc 0xea 0x97 0xf2 0xcf 0xce 0xf0 0xb4 0xe6 0x73
    0x96 0xac 0x74 0x22 0xe7 0xad 0x35 0x85 0xe2 0xf9 0x37 0xe8 0x1c 0x75 0xdf 0x6e
    0x47 0xf1 0x1a 0x71 0x1d 0x29 0xc5 0x89 0x6f 0xb7 0x62 0x0e 0xaa 0x18 0xbe 0x1b
    0xfc 0x56 0x3e 0x4b 0xc6 0xd2 0x79 0x20 0x9a 0xdb 0xc0 0xfe 0x78 0xcd 0x5a 0xf4
    0x1f 0xdd 0xa8 0x33 0x88 0x07 0xc7 0x31 0xb1 0x12 0x10 0x59 0x27 0x80 0xec 0x5f
    0x60 0x51 0x7f 0xa9 0x19 0xb5 0x4a 0x0d 0x2d 0xe5 0x7a 0x9f 0x93 0xc9 0x9c 0xef
    0xa0 0xe0 0x3b 0x4d 0xae 0x2a 0xf5 0xb0 0xc8 0xeb 0xbb 0x3c 0x83 0x53 0x99 0x61
    0x17 0x2b 0x04 0x7e 0xba 0x77 0xd6 0x26 0xe1 0x69 0x14 0x63 0x55 0x21 0x0c 0x7d
]

function sub_bytes!(m::Matrix)
    for i in 1:4
        for j in 1:4
            dat = m[i, j]
            m[i, j] = s_box[dat>>4+1, dat&15+1]
        end
    end
end
function inv_sub_bytes!(m::Matrix)
    for i in 1:4
        for j in 1:4
            dat = m[i, j]
            m[i, j] = inv_s_box[dat>>4+1, dat&15+1]
        end
    end
end

const shift_box = [
    2 3 4 1
    3 4 1 2
    4 1 2 3
    1 2 3 4
]
function shift!(m::Matrix, i, Δj) # move left by Δj
    n = Vector{UInt8}(undef, 4)
    for j in 1:4
        n[j] = m[shift_box[Δj, j]]
    end
    for j in 1:4
        m[i, j] = n[j]
    end
end
function shift_rows!(m::Matrix)
    shift!(m, 2, 1)
    shift!(m, 3, 2)
    shift!(m, 4, 3)
end
function inv_shift_rows!(m::Matrix)
    shift!(m, 2, 3)
    shift!(m, 3, 2)
    shift!(m, 4, 1)
end

const c_box = [
    0x02 0x03 0x01 0x01
    0x01 0x02 0x03 0x01
    0x01 0x01 0x02 0x03
    0x03 0x01 0x01 0x02
]
function special_multiply(l, x)
    l == 0x01 ? x :
    l == 0x02 ? (iszero(x >> 7) ? x << 1 : ((x << 1) & 0xff)^(0x1b)) :
    xor(x, iszero(x >> 7) ? x << 1 : ((x << 1) & 0xff)^(0x1b))
end
function mix_columns(m::Matrix)
    n = Matrix{UInt8}(undef, 4, 4)
    for i in 1:4
        for j in 1:4
            x = zero(UInt8)
            for k in 1:4
                y = special_multiply(c_box[i, k], m[k, j])
                x = xor(x, y)
            end
            n[i, j] = x
        end
    end
    return n
end

const rc_box = [0x01, 0x02, 0x04, 0x08, 0x10, 0x20, 0x40, 0x80, 0x1b, 0x36]
function new_key_matrix_low(w::Vector, ind)
    return [
        xor(rc_box[ind], s_box[w[2]>>4+1, w[2]&15+1]),
        s_box[w[3]>>4+1, w[3]&15+1],
        s_box[w[4]>>4+1, w[4]&15+1],
        s_box[w[1]>>4+1, w[1]&15+1]
    ]
end
function new_key_matrix(k::Matrix, ind)
    w0 = [k[1, 1], k[2, 1], k[3, 1], k[4, 1]]
    w1 = [k[1, 2], k[2, 2], k[3, 2], k[4, 2]]
    w2 = [k[1, 3], k[2, 3], k[3, 3], k[4, 3]]
    w3 = [k[1, 4], k[2, 4], k[3, 4], k[4, 4]]
    w4 = xor.(w0, new_key_matrix_low(w0, ind))
    w5 = xor.(w4, w1)
    w6 = xor.(w5, w2)
    w7 = xor.(w6, w3)
    return [
        w4[1] w5[1] w6[1] w7[1]
        w4[2] w5[2] w6[2] w7[2]
        w4[3] w5[3] w6[3] w7[3]
        w4[4] w5[4] w6[4] w7[4]
    ]
end

function aes_encode(x::Vector, k::Vector)
    xmat = [
        x[1] x[5] x[9] x[13]
        x[2] x[6] x[10] x[14]
        x[3] x[7] x[11] x[15]
        x[4] x[8] x[12] x[16]
    ]
    kmat = [
        k[1] k[5] k[9] k[13]
        k[2] k[6] k[10] k[14]
        k[3] k[7] k[11] k[15]
        k[4] k[8] k[12] k[16]
    ]
    y = add_round_key(xmat, kmat)
    for count in 1:9
        sub_bytes!(y)
        shift_rows!(y)
        y = mix_columns(y)
        kmat = new_key_matrix(kmat, count)
        y = add_round_key(y, kmat)
    end
    sub_bytes!(y)
    shift_rows!(y)
    kmat = new_key_matrix(kmat, 10)
    y = add_round_key(y, kmat)
    vec = Vector{UInt8}(undef, 16)
    for i in 1:4
        for j in 1:4
            vec[i+(j-1)*4] = y[i, j]
        end
    end
    return vec
end

# Padding
# DCB
```

测试样例（`NoPadding`）
| 密钥 | 明文 | 密文 |
| :-: | :-: | :-: |
| `00112233445566778899aabbccddeeff` | `000102030405060708090a0b0c0d0e0f` | `69c4e0d86a7b0430d8cdb78070b4c55a` |
| = | `000102030405060708090a0b0c0d0e0f1011121314151617` | `dda97ca4864cdfe06eaf70a0ec0d7191` |
| = | `000102030405060708090a0b0c0d0e0f101112131415161718191a1b1c1d1e1f` | `8ea2b7ca516745bfeafc49904b496089` |
