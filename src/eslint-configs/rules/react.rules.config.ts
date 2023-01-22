import { Rules } from '../../common/rules.interface'


export const reactRules: Partial<Rules> = {
	'react/function-component-definition' : ['error', { namedComponents: 'arrow-function' }],
	'react/hook-use-state'                : ['error', { allowDestructuredState: true }],
	'react/jsx-boolean-value'             : 'error',
	'react/jsx-closing-bracket-location'  : 'error',
	'react/jsx-closing-tag-location'      : 'error',
	'react/jsx-curly-brace-presence'      : 'error',
	'react/jsx-curly-newline'             : 'error',
	'react/jsx-curly-spacing'             : 'error',
	'react/jsx-equals-spacing'            : 'error',
	'react/jsx-fragments'                 : 'error',
	'react/jsx-handler-names'             : ['error', { checkLocalVariables: true }],
	'react/jsx-no-useless-fragment'       : 'error',
	'react/jsx-pascal-case'               : 'error',
	'react/jsx-props-no-multi-spaces'     : 'error',
	'react/jsx-sort-props'                : [
		'error',
		{
			callbacksLast        : true,
			noSortAlphabetically : false,
			reservedFirst        : true,
			shorthandLast        : true
		}
	],
	'react/jsx-tag-spacing'   : 'error',
	'react/jsx-uses-vars'     : 'error',
	'react/no-unused-state'   : 'error',
	'react/self-closing-comp' : 'error',
	'react/sort-prop-types'   : 'error',
	'react/style-prop-object' : 'error'
}
