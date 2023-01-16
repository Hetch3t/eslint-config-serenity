const jsConfig = require('./js')


module.exports = {
	...jsConfig,
	rules: {
		...jsConfig.rules,
		'key-spacing': [
			'error',
			{
				singleLine: {
					beforeColon: false,
					afterColon: true
				},
				multiLine: {
					beforeColon: true,
					afterColon: true,
					align: 'colon'
				}
			}
		],
		'no-multi-spaces': 'off'
	}
}
