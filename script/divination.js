class Milfoil {
	name
	count
	constructor(n, c) {
		this.name = n
		this.count = c
	}
	remove(num) {
		this.count -= num
	}
	divide(name, num) {
		this.count -= num
		return new Milfoil(name, num)
	}
	randomly_divide(name) {
		let num = Math.floor(Math.random() * (count - 1)) + 1
		return this.divide(name, num)
	}
	rename(name) {
		this.name = name
	}
	rem_to_pool(mil) {
		let rem = this.count & 3
		if (rem == 0) rem = 4
		mil.count += rem
		this.count -= rem
	}
	merge(mil) {
		this.count += mil.count
	}
}

function run_divination() {
	let manifestation = []
	let mil = new Milfoil("源蓍草", 50)
	mil.remove(1)
	for (let i = 0; i < 6; i++) {
		manifestation.push(getbit() - 6)
	}
	// ["老阴", "少阳", "少阴", "老阳"]
	let line_change_count = 0
	let hexagram_original = []
	let hexagram_changed = []
	let changed = []
	let unchanged = []
	for (let i in manifestation) {
		x = manifestation[i]
		let isyang = (x == 1 || x == 3)
		let ispolar = (x == 0 || x == 3)
		if (ispolar) {
			line_change_count += 1
			changed.push(i | isyang << 3)
		}
		else unchanged.push(i | isyang << 3)
		hexagram_original.push(isyang)
		hexagram_changed.push(x == 0 || x == 1)
	}
	// ;
	let p = document.getElementById("result")
	p.innerText = get_divination_word(line_change_count,
		hexagram_original, hexagram_changed,
		changed, unchanged)
}
function getbit(mil) {
	// 一变
	let mil2 = mil.randomly_divide("地")
	mil.rename("天")
	let mil3 = mil2.divide("人", 1)
	mil3.rename("余")
	mil.rem_to_pool(mil3)
	mil2.rem_to_pool(mil3)
	mil.merge(mil2)
	// 二变
	mil2 = mil.randomly_divide("地")
	mil.rem_to_pool(mil3)
	mil2.rem_to_pool(mil3)
	mil.merge(mil2)
	// 三变
	mil2 = mil.randomly_divide("地")
	mil.rem_to_pool(mil3)
	mil2.rem_to_pool(mil3)
	mil.merge(mil2)
	// ;
	let res = mil.count >> 2
	mil.merge(mil3)
	return res
}

/*
0 ~ 5 初六 六二 六三 六四 六五 上六
8 ~ 13 初九 九二 九三 九四 九五 上九
*/
const words = [ // https://ctext.org/book-of-changes
	/* 0 */ {
		name: "坤",
		i: "元亨，利牝马之贞。君子有攸往，先迷后得主，利西南得朋，东北丧朋。安贞，吉。",
		ii: {
			0: "履霜，坚冰至。",
			1: "直，方，大，不习无不利。",
			2: "含章可贞。或从王事，无成有终。",
			3: "括囊；无咎，无誉。",
			4: "黄裳，元吉。",
			5: "龙战于野，其血玄黄。",
			// 用六：利永贞。
		},
	},
	/* 17 */ {
		name: "屯",
		i: "元亨，利贞，勿用有攸往，利建侯。",
		ii: {
			8: "磐桓；利居贞，利建侯。",
			1: "屯如邅如，乘马班如。匪寇婚媾，女子贞不字，十年乃字。",
			2: "即鹿无虞，惟入于林中，君子几不如舍，往吝。",
			3: "乘马班如，求婚媾，往吉，无不利。",
			12: "屯其膏，小贞吉，大贞凶。",
			5: "乘马班如，泣血涟如。",
		},
	},
	/* 34 */ {
		name: "蒙",
		i: "亨。匪我求童蒙，童蒙求我。初筮告，再三渎，渎则不告。利贞。",
		ii: {
			0: "发蒙，利用刑人，用说桎梏，以往吝。",
			9: "包蒙吉；纳妇吉；子克家。",
			2: "勿用取女；见金夫，不有躬，无攸利。",
			3: "困蒙，吝。",
			4: "童蒙，吉。",
			13: "击蒙；不利为寇，利御寇。",
		},
	},
	/* 63 */ {
		name: "乾",
		i: "元亨，利贞",
		ii: {
			8: "潜龙，勿用。",
			9: "见龙在田，利见大人。",
			10: "君子终日乾乾，夕惕若厉，无咎。",
			11: "或跃在渊，无咎。",
			12: "飞龙在天，利见大人。",
			13: "亢龙有悔。",
			// 用九：见群龙无首，吉。
		},
	},
]

function get_divination_word(c, ori, cha, cd, ucd) {
	let main = ""
	let assist = ""
	let int1 = ori[0] | ori[1] << 1 | ori[2] << 2 | ori[3] << 3 | ori[4] << 4 | ori[5] << 5
	let int2 = cha[0] | cha[1] << 1 | cha[2] << 2 | cha[3] << 3 | cha[4] << 4 | cha[5] << 5
	switch (c) {
		case 0: // 本卦卦辞
			main = words[int1].i
			break
		case 1: // 本卦变爻爻辞
			main = words[int1].ii[cd[0]]
			break
		case 2: // 本卦变爻爻辞，以上爻爻词为主
			main = words[int1].ii[cd[1]]
			assist = words[int1].ii[cd[0]]
			break
		case 3: // 本卦卦词为主，之卦卦词为辅
			main = words[int1].i
			assist = words[int2].i
			break
		case 4: // 本卦未变爻爻词，以下爻爻词为主
			main = words[int1].ii[ucd[0]]
			assist = words[int1].ii[ucd[1]]
			break
		case 5: // 之卦未变爻爻词
			main = words[int2].ii[ucd[0]]
			break
		case 6: // 之卦卦词
			main = words[int2].i
			break
		default:
			break
	}
	if (assist == "") return main
	else return `主：${main}\n辅：${assist}`
}
