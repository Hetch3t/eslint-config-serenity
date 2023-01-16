const tsConfig = require('./ts')


module.exports = {
	...tsConfig,
	rules: {
		...tsConfig.rules,
		'key-spacing': [
			'error',
			{
				singleLine: {
					beforeColon: false,
					afterColon: true
				},
				multiLine: {
					beforeColon: false,
					afterColon: true
				}
			}
		],
		'no-multi-spaces': 'off'
	}
}
