const tsConfig = require("./ts")


module.exports = {
	...tsConfig,
	rules: {
		...tsConfig.rules,
		"key-spacing": [
			"error",
			{
				singleLine: {
					beforeColon: false,
					afterColon: true
				},
				multiLine: {
					beforeColon: true,
					afterColon: true,
					align: "colon"
				}
			}
		]
	}
}
