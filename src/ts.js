const jsConfig = require('./js')


module.exports = {
	root: true,
	env : {
		node  : true,
		es2022: true,
		jest  : true
	},

	extends: [
		...jsConfig.extends,
		'plugin:@typescript-eslint/recommended'
	],
	plugins: [
		...jsConfig.plugins,
		'@typescript-eslint',
		'typescript-enum'
	],

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
				'@typescript-eslint/array-type'                  : 'error',
				'@typescript-eslint/class-literal-property-style': [
					'error',
					'fields'
				],
				'@typescript-eslint/member-ordering'                  : 'error',
				'@typescript-eslint/no-unnecessary-condition'         : 'error',
				'@typescript-eslint/non-nullable-type-assertion-style': 'error',
				'@typescript-eslint/prefer-optional-chain'            : 'error',
				'@typescript-eslint/type-annotation-spacing'          : 'error',
				// Plugin rule
				'typescript-enum/no-enum'                             : 'error',

				/* Overrides */
				'function-paren-newline': ['error', { minItems: 2 }],

				'no-unused-vars'                   : 'off',
				'@typescript-eslint/no-unused-vars': [
					'error',
					{
						vars              : 'all',
						args              : 'all',
						ignoreRestSiblings: false,
						argsIgnorePattern : '^_'
					}
				]
			}
		}
	]
}
