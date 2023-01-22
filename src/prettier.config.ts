import { Options } from 'prettier'


const prettierOptions: Options = {
	arrowParens     : 'avoid',
	bracketSameLine : false,
	printWidth      : 100,
	quoteProps      : 'consistent',
	semi            : false,
	singleQuote     : true,
	tabWidth        : 4,
	trailingComma   : 'none',
	useTabs         : true
}

export = prettierOptions
