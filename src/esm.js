const jsConfig = require('./js')


module.exports = {
	...jsConfig,
	parserOptions: {
		...jsConfig.parserOptions,
		sourceType: 'module'
	}
}
