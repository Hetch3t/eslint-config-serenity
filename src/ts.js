const jsConfig = require('./js')

module.exports = {
	root: true,
	env: {
		node: true,
		jest: true
	},

	extends: [ ...jsConfig.extends, 'plugin:@typescript-eslint/recommended' ],
	plugins: [ ...jsConfig.plugins, '@typescript-eslint' ],

	parser: '@typescript-eslint/parser',
	parserOptions: { ecmaVersion: 'latest' },

	rules: { ...jsConfig.rules }
}
