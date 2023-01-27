import { Rules } from '../../common/rules.interface'


export const defaultRules: Partial<Rules> = {
	'block-spacing'               : 'error',
	'brace-style'                 : ['error', '1tbs', { allowSingleLine: true }],
	'comma-spacing'               : 'error',
	'comma-style'                 : 'error',
	'eol-last'                    : 'error',
	'eqeqeq'                      : ['error', 'always', { null: 'ignore' }],
	'indent'                      : ['error', 'tab'],
	'linebreak-style'             : ['error', 'unix'],
	'lines-between-class-members' : ['error', 'always', { exceptAfterSingleLine: true }],
	'max-len'                     : [
		'error',
		{
			code           : 100,
			ignoreComments : true,
			tabWidth       : 4,

			ignoreRegExpLiterals : true,

			ignorePattern : '^(import\\s|const\\s.*require\\()',
			// ignoreStrings: true,
			ignoreUrls    : true
		}
	],
	'no-extra-parens'  : 'error',
	'no-magic-numbers' : [
		'error',
		{
			ignoreArrayIndexes            : true,
			ignoreClassFieldInitialValues : true,
			ignoreDefaultValues           : true
		}
	],
	'no-multi-spaces'         : 'error',
	'no-multiple-empty-lines' : [
		'error',
		{
			max    : 2,
			maxEOF : 0
		}
	],
	'no-throw-literal'                : 'error',
	'no-trailing-spaces'              : 'error',
	'no-useless-rename'               : 'error',
	'padded-blocks'                   : ['error', { blocks: 'never', classes: 'always' }],
	'padding-line-between-statements' : [
		'error',
		{ blankLine: 'always', next: '*', prev: ['const', 'let', 'var'] },
		{ blankLine: 'always', next: 'return', prev: '*' },
		{
			blankLine : 'any',
			next      : ['const', 'let', 'var'],
			prev      : ['const', 'let', 'var']
		},
		{
			blankLine : 'always',
			next      : ['export'],
			prev      : '*'
		},
		{
			blankLine : 'any',
			next      : ['export'],
			prev      : ['export']
		}
	],
	'quotes'         : ['error', 'single'],
	'semi'           : ['error', 'never'],
	'spaced-comment' : [
		'error',
		'always',
		// Wrong types in ESLint for this rule
		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-ignore
		{
			exceptions : ['*', '-']
		}
	],

	/* Imports / exports rules */
	'import/newline-after-import' : ['error', { count: 2 }],
	'import/no-duplicates'        : 'error',
	'import/no-unresolved'        : 'error',
	'simple-import-sort/exports'  : 'error',
	'simple-import-sort/imports'  : [
		'error',
		{
			groups : [
				// Side effect imports.
				['^\\u0000'],
				// Node.js builtins prefixed with `node:`.
				['^node:'],
				// Things that start with a letter (or digit or underscore), or `@` followed by a letter.
				['^@?\\w'],
				// Anything not matched in another group.
				['^'],
				// Relative imports.
				['^\\.']
			]
		}
	],

	/* Variables rules */
	'multiline-ternary'  : ['error', 'always-multiline'],
	'no-unused-vars'     : 'error',
	'no-var'             : 'error',
	'operator-linebreak' : [
		'error',
		'after',
		{
			overrides : {
				':' : 'before',
				'?' : 'before'
			}
		}
	],
	'prefer-const'           : 'error',
	'prefer-destructuring'   : ['error', { object: true }],
	'template-curly-spacing' : 'error',

	/* Object rules */
	'dot-notation'         : 'error',
	'key-spacing'          : 'error',
	'object-curly-newline' : ['error', { consistent: true }],
	'object-curly-spacing' : [
		'error',
		'always',
		{
			arraysInObjects  : true,
			objectsInObjects : false
		}
	],
	'object-property-newline' : ['error', { allowAllPropertiesOnSameLine: true }],
	'prefer-object-spread'    : 'error',
	'quote-props'             : ['error', 'consistent-as-needed'],
	// Not sure about that one. Still figuring it out.
	// "object-shorthand": ["error", "consistent-as-needed"],

	/* Array rules */
	'array-bracket-newline' : ['error', 'consistent'],
	'array-bracket-spacing' : ['error', 'never'],
	'array-element-newline' : ['error', 'consistent'],

	/* Function rules */
	'arrow-body-style'               : 'off',
	'arrow-parens'                   : ['error', 'as-needed'],
	'arrow-spacing'                  : 'error',
	'default-param-last'             : 'error',
	'func-call-spacing'              : 'error',
	'func-style'                     : 'error',
	'function-call-argument-newline' : ['error', 'consistent'],
	'function-paren-newline'         : ['error', 'consistent'],
	'no-return-assign'               : 'error',
	'no-return-await'                : 'error',
	'no-useless-return'              : 'error',
	'prefer-arrow-callback'          : 'error',
	'require-await'                  : 'error',

	/* Keyword rules */
	'curly'           : ['error', 'multi-or-nest', 'consistent'],
	'keyword-spacing' : 'error',
	'no-else-return'  : 'error'
}
