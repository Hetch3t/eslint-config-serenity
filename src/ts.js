const jsConfig = require('./js.js')


module.exports = {
	root: true,
	env: {
		node: true,
		es2022: true,
		jest: true
	},

	extends: [
		...jsConfig.extends,
		'plugin:@typescript-eslint/recommended',
		'plugin:@typescript-eslint/strict',
		'plugin:import/typescript'
	],
	plugins: [...jsConfig.plugins, '@typescript-eslint'],

	parser: '@typescript-eslint/parser',

	settings: {
		...jsConfig.settings,
		'import/parsers': {
			'@typescript-eslint/parser': ['.ts', '.tsx']
		},
		'import/resolver': {
			typescript: {
				alwaysTryTypes: true,
				project: ['tsconfig.json', 'packages/*/tsconfig.json']
			}
		}
	},

	rules: jsConfig.rules,
	overrides: [
		{
			files: ['*.ts', '*.tsx'],
			rules: {
				'@typescript-eslint/array-type': 'error',
				'@typescript-eslint/prefer-optional-chain': 'error',
				'@typescript-eslint/type-annotation-spacing': 'error',
				'@typescript-eslint/no-empty-function': 'off',
				'@typescript-eslint/no-explicit-any': 'warn',

				/* Overrides */
				'no-unused-vars': 'off',
				'@typescript-eslint/no-unused-vars': [
					'error',
					{
						vars: 'all',
						args: 'all',
						ignoreRestSiblings: true,
						argsIgnorePattern: '^_'
					}
				]
			}
		}
	]
}
