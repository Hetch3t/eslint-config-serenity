# 🪷 serenity

[![npm][npm-image]][serenity-url]
[![downloads][downloads-image]][serenity-url]
[![serenity][serenity-image]][serenity-url]

[npm-image]: https://img.shields.io/npm/v/@hetchet/eslint-config-serenity.svg?style=flat
[downloads-image]: https://img.shields.io/npm/dm/@hetchet/eslint-config-serenity.svg?style=flat
[serenity-image]: https://img.shields.io/badge/code%20style-%F0%9F%AA%B7%20serenity-4AD3BA?style=flat
[serenity-url]: https://npmjs.org/package/@hetchet/eslint-config-serenity

## 👀 Motivation

Every time starting new project I was catching frustration due to ESLint / Prettier / Standard etc. setup. So decided to have a single source of truth for linting and formatting purposes for my fullstack JS / TS projects.

## ✨ Features

- Very (VERY) opinionated
- Tabs + single quotes + no semicolons => minimalism
- Focused on **readability** and **consistency**
- Easy setup for new projects
- Supports JS, TS, CSS
- Support for both backend and frontend

## 🪐 Object key spacing
- Default (`@hetchet/serenity`):
	- Keys in objects are spaced only after semicolon. E.g.:
	```js
	const obj = {
		a: 1,
		some_key: 2,

		b: 3,
		key: 55
	}
	```
	- For `['*.interface.ts', '*.type.ts', '*.d.ts', '*.config.+(js|ts)']` object keys spacing is aligned on the longest key, new line breaks alignment. E.g.:
	```js
	const obj = {
		a        : 1,
		some_key : 2,

		b   : 3,
		key : 55
	}
	```
- Always spaced (`@hetchet/serenity/object-key-spaced`) = second variant from above for all files. Personal preference for NestJS projects.

## 📦 Installation

### Package dependencies

To get this config working it is required to have installed several packages:

- `eslint: >=8`
- `prettier: >=2`
- `prettier-eslint: >=15`

To install of these with single lint:

```sh
npx install-peerdeps --dev @hetchet/eslint-config-serenity
```

Even if you use `yarn`, this utility will detect that and use `yarn` instead of `npm`.

### Config inheritance

There are several options how to use this linting/formatting/styling configuration. Preferred one is via `package.json` because of minimalism.

#### Via `package.json`

`package.json`:

```jsonc
{
	...
	"prettier": "@hetchet/eslint-config-serenity/prettier",
	"eslintConfig": {
		"extends": "@hetchet/serenity"
	},
	...
}
```

#### Via config files

`.prettierrc.js`:

```js
module.exports = {
	...require("@hetchet/eslint-config-serenity/prettier")
	// Any Prettier overrides go here
}
```

`.eslintrc.json` (or whatever you prefer, [see options in ESLint docs](https://eslint.org/docs/user-guide/configuring/configuration-files#configuration-file-formats)):

```jsonc
{
	extends: "@hetchet/serenity"),
	// Any ESLint overrides go here
}
```

## <img src="https://camo.githubusercontent.com/ebb0d9ad69ba4b2024aec00a7a89db22fc028200e215c164d751ae99d577f042/68747470733a2f2f636f64652e76697375616c73747564696f2e636f6d2f6173736574732f757064617465732f315f33352f6c6f676f2d737461626c652e706e67" width="20"> VSCode

For the best experience in VSCode code editor, I can recommend installing these two extensions:

- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) - to show linting errors
- [Prettier-ESLint](https://marketplace.visualstudio.com/items?itemName=rvest.vs-code-prettier-eslint) 
