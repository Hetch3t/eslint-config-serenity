import { Rules } from '../../common/rules.interface'


export const typescriptRules: Partial<Rules> = {
	'@typescript-eslint/array-type'                      : 'error',
	'@typescript-eslint/class-literal-property-style'    : 'error',
	'@typescript-eslint/consistent-generic-constructors' : 'error',
	'@typescript-eslint/consistent-indexed-object-style' : 'error',
	'@typescript-eslint/consistent-type-assertions'      : [
		'error',
		{ assertionStyle: 'as', objectLiteralTypeAssertions: 'never' }
	],
	'@typescript-eslint/consistent-type-definitions' : 'error',
	// TODO: parserOptions.project
	// '@typescript-eslint/consistent-type-exports'     : 'error',
	'@typescript-eslint/consistent-type-imports'     : [
		'error',
		{
			prefer : 'no-type-imports'
		}
	],
	'@typescript-eslint/member-delimiter-style' : 'error',
	'@typescript-eslint/naming-convention'      : [
		'error',
		{
			format   : null,
			selector : 'objectLiteralProperty'
		}
	],
	// TODO: parserOptions.project
	// '@typescript-eslint/no-unnecessary-boolean-literal-compare' : 'error',
	// '@typescript-eslint/no-unnecessary-condition'               : 'error',
	// '@typescript-eslint/non-nullable-type-assertion-style'      : 'error',
	'@typescript-eslint/prefer-optional-chain'   : 'error',
	'@typescript-eslint/type-annotation-spacing' : 'error',

	/* Overrides */
	'@typescript-eslint/no-empty-function' : 'off',
	'no-empty-function'                    : 'off',

	'indent' : 'off',

	'@typescript-eslint/lines-between-class-members' : [
		'error',
		'always',
		{ exceptAfterSingleLine: true }
	],
	'lines-between-class-members' : 'off',

	'@typescript-eslint/comma-spacing' : 'error',
	'comma-spacing'                    : 'off',

	// TODO: parserOptions.project
	// '@typescript-eslint/dot-notation' : 'error',
	'dot-notation' : 'off',

	'@typescript-eslint/no-dupe-class-members' : 'error',
	'no-dupe-class-members'                    : 'off',

	'@typescript-eslint/object-curly-spacing' : [
		'error',
		'always',
		{
			arraysInObjects  : true,
			objectsInObjects : false
		}
	],
	'object-curly-spacing' : 'off',

	'@typescript-eslint/no-useless-constructor' : 'error',
	'no-useless-constructor'                    : 'off',

	'@typescript-eslint/keyword-spacing' : 'error',
	'keyword-spacing'                    : 'error',

	'@typescript-eslint/padding-line-between-statements' : [
		'error',
		{ blankLine: 'always', next: '*', prev: ['const', 'let', 'var'] },
		{
			blankLine : 'always',
			next      : ['interface', 'type'],
			prev      : '*'
		},
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
	'padding-line-between-statements' : 'off',

	// TODO: parserOptions.project
	// '@typescript-eslint/no-throw-literal' : 'error',
	'no-throw-literal' : 'off',

	'@typescript-eslint/no-magic-numbers' : [
		'error',
		{
			ignoreArrayIndexes            : true,
			ignoreClassFieldInitialValues : true,
			ignoreDefaultValues           : true,
			ignoreEnums                   : true,
			ignoreNumericLiteralTypes     : true,
			ignoreReadonlyClassProperties : true,
			ignoreTypeIndexes             : true
		}
	],
	'no-magic-numbers' : 'off',

	'@typescript-eslint/no-extra-parens' : 'error',
	'no-extra-parens'                    : 'off',

	'@typescript-eslint/no-unused-vars' : 'error',
	'no-unused-vars'                    : 'off'
}
