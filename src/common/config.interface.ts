import { Linter } from 'eslint'

import { Rules } from './rules.interface'


export type EslintConfig = Linter.Config<Rules>
