import { item } from "../item";
class i_backpack extends item {
	nslots: number
	content: item[]
	count: number[]
	apply_itemdrag(it: item): boolean {
		return (this._put(it) != this.nslots)
	}
	_clear(): void {
		for (let i = 0; i < this.nslots; i++) {
			this.count[i] = 0
		}
	}
	_put(it: item): Number {
		let i = 0
		while (i < this.nslots) {
			if (this.count[i] == 0) this.content[i] = it
			else if (this.content[i] == it && this.count[i] < it.maxstack()) {
				this.count[i]++
			}
			i++
		}
		return i
	}
}

export { i_backpack }
