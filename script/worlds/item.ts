class item {
	apply_itemdrag(_: item): boolean {
		return false
	}
	maxstack(): number {
		return 1
	}
	rarity(): number {
		return 1
	}
	ratitystr(): string {
		return ["temporary", "common", "uncommon", "epic", "legendary", "mythic"][this.rarity()]
	}
}
const i_null = new item()

export { item, i_null }
