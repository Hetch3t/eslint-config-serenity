module.exports = {
	root: true,
	env: {
		node: true,
		es2022: true,
		jest: true
	},

	extends: ['eslint:recommended'],
	plugins: [],

	rules: {
		/* Code-style */
		'indent': [ 'error', 'tab' ],
		'quotes': [ 'error', 'single' ],
		'semi': [ 'error', 'never' ],
		'comma-dangle': ['error'],
		'comma-style': [ 'error', 'last' ],
		'no-multiple-empty-lines': [
			'error',
			{
				max: 2,
				maxEOF: 0
			}
		],
		'max-len': [
			'error',
			{
				code: 80,
				comments: 120
			}
		],
		'linebreak-style': [ 'error', 'unix' ],
		'no-trailing-spaces': 'error',

		/* Imports / exports rules */
		'no-duplicate-imports': 'error',

		/* Variables rules */
		'no-unused-vars': [
			'error',
			{
				vars: 'all',
				args: 'all',
				ignoreRestSiblings: false,
				argsIgnorePattern: '^_'
			}
		],

		/* Object rules */
		'quote-props': [ 'error', 'consistent-as-needed' ],
		'object-shorthand': [ 'error', 'consistent-as-needed' ],
		'key-spacing': [ 'error', { mode: 'strict' }],
		'object-curly-newline': [ 'error', { minProperties: 2 }],
		'object-property-newline': ['error'],
		'object-curly-spacing': [
			'error',
			'always',
			{
				arraysInObjects: false,
				objectsInObjects: false
			}
		],

		/* Array rules */
		'array-bracket-spacing': [
			'error',
			'always',
			{
				singleValue: false,
				objectsInArrays: false,
				arraysInArrays: false
			}
		],
		'array-bracket-newline': [ 'error', { multiline: true }],
		'array-element-newline': [ 'error', { multiline: true }],

		/* Function rules */
		'space-before-function-paren': [ 'error', 'always' ],

		/* Keyword rules */
		'keyword-spacing': ['error'],
		'curly': [ 'error', 'multi', 'consistent' ]
	}
}
