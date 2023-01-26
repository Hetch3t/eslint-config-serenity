import { EslintConfig } from '../common/config.interface'
import { defaultRules, objectKeysSpacedAndSortedRules, reactRules, typescriptRules } from './rules'


const eslintTsConfig: EslintConfig = {
	env : {
		es2022 : true,
		node   : true
	},
	extends       : ['eslint:recommended', 'prettier'],
	parserOptions : { ecmaVersion: 'latest' },
	plugins       : ['simple-import-sort', 'import', 'newline-destructuring', 'prettier'],
	rules         : defaultRules,

	overrides : [
		{
			files : ['*.ts', '*.tsx'],

			extends       : ['plugin:@typescript-eslint/recommended', 'plugin:import/typescript'],
			parser        : '@typescript-eslint/parser',
			parserOptions : {
				project : [
					'./tsconfig.json',
					'./packages/**/tsconfig.json',
					'./apps/**/tsconfig.json'
				],
				tsconfigRootDir : __dirname.split('node_modules')[0]
			},
			plugins  : ['@typescript-eslint'],
			rules    : typescriptRules,
			settings : {
				'import/parsers' : {
					'@typescript-eslint/parser' : ['*.ts', '*.tsx']
				},
				'import/resolver' : {
					typescript : {
						alwaysTryTypes : true,
						node           : [
							// default
							'tsconfig.json',
							// lerna
							'packages/*/tsconfig.json',
							// nx
							'apps/*/tsconfig.json'
						],
						project : [
							// default
							'tsconfig.json',
							// lerna
							'packages/*/tsconfig.json',
							// nx
							'apps/*/tsconfig.json'
						]
					}
				}
			}
		},
		{
			files : ['*.interface.ts', '*.type.ts', '*.d.ts', '*.config.+(js|ts)'],

			plugins : ['@hetchet/sort-keys'],
			rules   : objectKeysSpacedAndSortedRules
		},
		{
			files : ['*.tsx', '*.jsx'],

			extends : [
				'plugin:react/recommended',
				'plugin:react-hooks/recommended',
				'plugin:react/jsx-runtime'
			],
			parserOptions : {
				ecmaFeatures : {
					jsx : true
				}
			},
			plugins : ['react'],
			rules   : reactRules
		},
		{
			files : ['*.+(spec|test).+(ts|tsx|js|jsx)'],

			env : {
				jest : true
			}
		}
	]
}

export = eslintTsConfig
