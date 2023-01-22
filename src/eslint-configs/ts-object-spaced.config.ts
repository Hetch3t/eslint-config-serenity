import defaultEslintConfig from './default.config'
import { defaultRules, objectKeysSpacedAndSortedRules } from './rules'


const eslintObjectSpacedConfig = {
	...defaultEslintConfig,
	rules : { ...defaultRules, ...objectKeysSpacedAndSortedRules }
}

export = eslintObjectSpacedConfig
