import defaultEslintConfig from './default.config'
import { objectKeysSpacedAndSortedRules } from './rules'


const eslintObjectSpacedConfig = {
	...defaultEslintConfig,
}

Object.assign(eslintObjectSpacedConfig.rules!, objectKeysSpacedAndSortedRules)
eslintObjectSpacedConfig.plugins?.push('@hetchet/sort-keys')

export = eslintObjectSpacedConfig
