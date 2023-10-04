var knife = item("", "", "Knife 01", {
	c_level: 0, // 位格
	f_level: 'common',
}, {
	cut: function (subject, object, subtrace, arguments) {
		if (subtrace != null)
			if (object.c_level < 8 && object.hardness)
				object.break(this, object, null, { time_count: subject, })
	},
	strike: function (subject, object, subtrace, arguments) {
	}
})
