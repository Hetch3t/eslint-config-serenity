module.exports = {
	root: true,
	env: {
		node: true,
		es2022: true,
		jest: true
	},
	parserOptions: {
		ecmaVersion: "latest"
	},

	extends: ["eslint:recommended", "prettier"],
	plugins: [
		"simple-import-sort",
		"import",
		"newline-destructuring",
		"prettier"
	],

	settings: {},

	rules: {
		/* Code-style */
		"comma-style": "error",
		"comma-spacing": "error",
		"semi": ["error", "never"],
		"quotes": ["error", "double"],
		"eol-last": "error",
		"no-multiple-empty-lines": [
			"error",
			{
				max: 2,
				maxEOF: 0
			}
		],
		"max-len": [
			"error",
			{
				code: 80,
				tabWidth: 2,
				ignoreComments: true,
				ignoreStrings: true,
				ignoreUrls: true,
				ignoreTemplateLiterals: true,
				ignoreRegExpLiterals: true,
				ignorePattern: "^(import\\s|const\\s.*require\\()"
			}
		],
		"linebreak-style": ["error", "unix"],
		"no-trailing-spaces": "error",
		"no-multi-spaces": "error",
		"no-useless-rename": "error",
		"spaced-comment": [
			"error",
			"always",
			{
				exceptions: ["*", "-"]
			}
		],
		"lines-between-class-members": [
			"error",
			"always",
			{ exceptAfterSingleLine: true }
		],
		"block-spacing": "error",
		"brace-style": ["error", "1tbs", { allowSingleLine: true }],
		"eqeqeq": ["error", "always", { null: "ignore" }],

		"dot-location": ["error", "property"],
		"newline-per-chained-call": ["error", { ignoreChainWithDepth: 2 }],

		"no-extra-parens": "error",

		/* Imports / exports rules */
		"no-duplicate-imports": "error",
		// From plugins
		"import/no-unresolved": "error",
		"import/newline-after-import": ["error", { count: 2 }],
		"simple-import-sort/imports": [
			"error",
			{
				groups: [
					// Side effect imports.
					["^\\u0000"],
					// Packages.
					["^[a-zA-Z0-9]"],
					// Company packages.
					["^@[a-zA-Z0-9]"],
					// Anything not matched in another group.
					["^"],
					// Relative imports.
					["^\\."]
				]
			}
		],

		/* Variables rules */
		"no-var": "error",
		"no-unused-vars": [
			"error",
			{
				vars: "all",
				args: "all",
				ignoreRestSiblings: false,
				argsIgnorePattern: "^_"
			}
		],
		"prefer-const": "error",
		"prefer-destructuring": ["error", { object: true }],
		"multiline-ternary": ["error", "always-multiline"],
		"operator-linebreak": [
			"error",
			"after",
			{
				overrides: {
					"?": "before",
					":": "before"
				}
			}
		],
		"template-curly-spacing": "error",
		"newline-destructuring/newline": ["error", { items: 2, itemsWithRest: 2 }],

		/* Object rules */
		"quote-props": ["error", "consistent-as-needed"],
		//
		// Not sure about that one. Still figuring it out.
		// "object-shorthand": ["error", "consistent-as-needed"],
		"dot-notation": "error",
		"key-spacing": ["error"],
		"object-curly-newline": ["error", { consistent: true }],
		"object-property-newline": [
			"error",
			{ allowAllPropertiesOnSameLine: true }
		],
		"object-curly-spacing": [
			"error",
			"always",
			{
				arraysInObjects: true,
				objectsInObjects: false
			}
		],
		"prefer-object-spread": "error",

		/* Array rules */
		"array-bracket-spacing": ["error", "never"],
		"array-bracket-newline": ["error", "consistent"],
		"array-element-newline": ["error", "consistent"],

		/* Function rules */
		"func-style": "error",
		"default-param-last": "error",
		"func-call-spacing": "error",
		"function-paren-newline": ["error", "consistent"],
		"function-call-argument-newline": ["error", "consistent"],
		"arrow-spacing": "error",
		"arrow-parens": ["error", "as-needed"],
		"arrow-body-style": "off",
		"prefer-arrow-callback": "off",
		"require-await": "error",
		"no-return-await": "error",
		"no-return-assign": "error",
		"no-useless-return": "error",

		/* Keyword rules */
		"keyword-spacing": "error",
		"curly": ["error", "multi-line", "consistent"],
		"no-else-return": "error"
	}
}
