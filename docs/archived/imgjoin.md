# 图片合并
此程序在网课期间（2022/3/22）用于交作业时的图片合并
```jl
using FileIO
using FixedPointNumbers
using ColorTypes
function work(name::String; range::Union{Nothing,Vector}=nothing, dir::String=homedir() * "/Desktop", wid::Union{Nothing,Int}=nothing, type::String="jpg", result::String=name * "0." * type)
    num = 0
    opened = Vector{Matrix{RGB{N0f8}}}()
    if isnothing(range)
        v = readdir(dir; sort=false)
        cd(dir)
        for i in 1:32
            fname = "$name$i.$type"
            if in(fname, v)
                push!(opened, load(fname))
            else
                num = i - 1
                break
            end
        end
    else
        num = length(range::Vector)
        cd(dir)
        for i in range
            push!(opened, load("$name$i.$type"))
        end
    end
    if isnothing(wid)
        wid = num & 1 == 1 ? 1 : 2
    end
    k1 = div(num, wid)
    k2 = num % wid
    grw = 0
    grh = 0
    maxgrw = 0
    grhs = Vector{Int}()
    count = 1
    for img in opened
        tup = size(img)
        h = tup[1]
        w = tup[2]
        grw += w
        grh = max(h, grh)
        if count % wid == 0
            maxgrw = max(maxgrw, grw)
            push!(grhs, grh)
            grw = 0
            grh = 0
        end
        count += 1
    end
    if k2 != 0
        maxgrw = max(maxgrw, grw)
        push!(grhs, grh)
    end
    res = fill(RGB(0, 0, 0), sum(grhs), maxgrw)
    curline = 0
    curcol = 0
    for i in 1:k1
        for j in 1:wid
            img = opened[(i-1)*wid+j]
            tup = size(img)
            for x in 1:tup[1]
                for y in 1:tup[2]
                    res[x+curline, y+curcol] = img[x, y]
                end
            end
            curcol += tup[2]
        end
        curline += grhs[i]
        curcol = 0
    end
    for j in 1:k2
        img = opened[k1*wid+j]
        tup = size(img)
        for x in 1:tup[1]
            for y in 1:tup[2]
                res[x+curline, y+curcol] = img[x, y]
            end
        end
        curcol += tup[2]
    end
    save(result, res)
end
```
