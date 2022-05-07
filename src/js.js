module.exports = {
	root: true,
	env : {
		node  : true,
		es2022: true,
		jest  : true
	},

	extends: ['eslint:recommended'],
	plugins: ['simple-import-sort', 'import'],

	rules: {
		/* Code-style */
		'indent'                 : ['error', 'tab'],
		'quotes'                 : ['error', 'single'],
		'semi'                   : ['error', 'never'],
		'comma-dangle'           : 'error',
		'comma-style'            : 'error',
		'comma-spacing'          : 'error',
		'eol-last'               : 'error',
		'no-multiple-empty-lines': [
			'error',
			{
				max   : 2,
				maxEOF: 0
			}
		],
		'max-len': [
			'error',
			{
				code    : 80,
				comments: 120
			}
		],
		'linebreak-style'   : ['error', 'unix'],
		'no-trailing-spaces': 'error',
		'no-multi-spaces'   : 'error',
		'no-tabs'           : ['error', { allowIndentationTabs: true }],
		'no-useless-rename' : 'error',
		'spaced-comment'    : ['error', 'always', { exceptions: ['*', '-']}],
		'block-spacing'     : 'error',
		'brace-style'       : 'error',

		'dot-location'            : ['error', 'property'],
		'newline-per-chained-call': ['error', { ignoreChainWithDepth: 1 }],

		'no-extra-parens': 'error',

		/* Imports / exports rules */
		'no-duplicate-imports'       : 'error',
		// From plugins
		'import/no-unresolved'       : 'error',
		'import/newline-after-import': ['error', { count: 2 }],
		'simple-import-sort/imports' : [
			'error',
			{
				groups: [
				// Side effect imports.
					['^\\u0000'],
					// Packages.
					['^[a-zA-Z0-9]'],
					// Company packages.
					['^@[a-zA-Z0-9]'],
					// Anything not matched in another group.
					['^'],
					// Relative imports.
					['^\\.']
				]
			}
		],

		/* Variables rules */
		'no-var'        : 'error',
		'no-unused-vars': [
			'error',
			{
				vars              : 'all',
				args              : 'all',
				ignoreRestSiblings: false,
				argsIgnorePattern : '^_'
			}
		],
		'prefer-const'        : 'error',
		'prefer-destructuring': ['error', { object: true }],
		'multiline-ternary'   : ['error', 'always-multiline'],
		'operator-linebreak'  : [
			'error',
			'after',
			{
				overrides: {
					'?': 'before',
					':': 'before'
				}
			}
		],
		'template-curly-spacing': 'error',

		/* Object rules */
		'quote-props'     : ['error', 'consistent-as-needed'],
		'object-shorthand': ['error', 'consistent-as-needed'],
		'dot-notation'    : 'error',
		'key-spacing'     : [
			'error',
			{
				align    : { },
				multiLine: { }
			}
		],
		'object-curly-newline'   : ['error', { multiline: true }],
		'object-property-newline': 'error',
		'object-curly-spacing'   : [
			'error',
			'always',
			{
				arraysInObjects : false,
				objectsInObjects: false
			}
		],
		'prefer-object-spread': 'error',

		/* Array rules */
		'array-bracket-spacing': ['error', 'never'],
		'array-bracket-newline': ['error', { multiline: true }],
		'array-element-newline': ['error', 'consistent'],

		/* Function rules */
		'func-style'                    : 'error',
		'space-before-function-paren'   : 'error',
		'func-call-spacing'             : 'error',
		'function-paren-newline'        : 'error',
		'function-call-argument-newline': ['error', 'consistent'],
		'arrow-spacing'                 : 'error',
		'arrow-parens'                  : 'error',
		'arrow-body-style'              : ['error', 'as-needed'],
		'require-await'                 : 'error',
		'no-return-await'               : 'error',
		'no-return-assign'              : 'error',
		'no-useless-return'             : 'error',

		/* Keyword rules */
		'keyword-spacing': 'error',
		'curly'          : ['error', 'multi', 'consistent'],
		'no-else-return' : 'error'
	}
}
