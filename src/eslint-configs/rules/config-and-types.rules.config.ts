import { Rules } from '../../common/rules.interface'


export const objectKeysSpacedAndSortedRules: Partial<Rules> = {
	'key-spacing' : [
		'error',
		{
			multiLine : {
				beforeColon : true,
				// eslint-disable-next-line @hetchet/sort-keys/sort-keys
				afterColon  : true,
				align       : 'colon'
			},
			singleLine : {
				beforeColon : false,
				// eslint-disable-next-line @hetchet/sort-keys/sort-keys
				afterColon  : true
			}
		}
	],
	'no-multi-spaces' : 'error',

	'@hetchet/sort-keys/sort-keys' : ['error', 'asc', { allowLineSeparatedGroups: true }]
}
