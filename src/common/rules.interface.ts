/* eslint-disable @typescript-eslint/naming-convention */
import { Linter } from 'eslint'
import { ESLintRules } from 'eslint/rules'


export interface Rules extends Omit<ESLintRules, 'no-magic-numbers' | 'curly'> {
	'@hetchet/sort-keys/sort-keys': Linter.RuleEntry<
		[
			'asc' | 'desc',
			Partial<{
				caseSensitive: boolean;
				minKeys: number;
				allowLineSeparatedGroups: boolean;
				natural: boolean;
			}>
		]
	>;

	'no-magic-numbers': Linter.RuleEntry<
		[
			Partial<{
				/**
				 * @default []
				 */
				ignore: number[]
				/**
				 * @default false
				 */
				ignoreArrayIndexes: boolean
				/**
				 * @default false
				 */
				ignoreDefaultValues: boolean
				/**
				 * @default false
				 */
				ignoreClassFieldInitialValues: boolean
				/**
				 * @default false
				 */
				enforceConst: boolean
				/**
				 * @default false
				 */
				detectObjects: boolean
			}>
		]
	>;

	curly: Linter.RuleEntry<['all' | 'multi' | 'multi-line' | 'multi-or-nest', 'consistent']>;
}
