const jsConfig = require('./js')


module.exports = {
	root: true,
	env : {
		node  : true,
		es2022: true,
		jest  : true
	},

	extends: [...jsConfig.extends, 'plugin:@typescript-eslint/recommended'],
	plugins: [...jsConfig.plugins, '@typescript-eslint'],

	settings: {
		...jsConfig.settings,
		...{
			'import/parsers' : { '@typescript-eslint/parser': ['.ts', '.tsx']},
			'import/resolver': {
				typescript: {
					alwaysTryTypes: true,
					project       : [
						'tsconfig.json',
						'packages/*/tsconfig.json'
					]
				}
			}
		}
	},

	parser       : '@typescript-eslint/parser',
	parserOptions: { ecmaVersion: 'latest' },

	rules: { ...jsConfig.rules },

	overrides: [
		{
			files: ['*.ts', '*.tsx'],
			rules: {
				'@typescript-eslint/array-type': 'error',

				/* Overrides */
				'function-paren-newline': ['error', { minItems: 2 }]
			}
		}
	]
}
