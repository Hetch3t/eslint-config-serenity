# 🪷 serenity

[![npm][npm-image]][npm-url]
[![downloads][downloads-image]][downloads-url]
[![test][serenity-image]][serenity-url]

[npm-image]: https://img.shields.io/npm/v/@hetchet/eslint-config-serenity.svg?style=flat
[npm-url]: https://npmjs.org/package/@hetchet/eslint-config-serenity
[downloads-image]: https://img.shields.io/npm/dm/@hetchet/eslint-config-serenity.svg?style=flat
[downloads-url]: https://npmjs.org/package/@hetchet/eslint-config-serenity
[serenity-image]: https://img.shields.io/badge/code%20style-%F0%9F%AA%B7%20serenity-4AD3BA?style=flat
[serenity-url]: https://npmjs.org/package/@hetchet/serenity

## 👀 Motivation

Every time starting new project I was catching frustration due to ESLint / Prettier / Standard etc. setup. So decided to have a single source of truth for linting and formatting purposes for my fullstack JS / TS projects.

## ✨ Features

- Very opinionated (though can be overriden (discouraged))
- Tabs + double quotes + no semicolons
- Focus on **readability** and **consistency**
- Easy setup for new projects
- Support for both JS and TS
- Support for both backend and frontend

## 🤔 Variants
- `js` - default JS projects
- `esm` - projects with `type: module`
- `js-object-spaced` - ads specific `key-spacing` for `objects`. Prefered option for projects that heavily rely on objects.
- `ts` - default option for TS projects
- `ts-object-spaced` - ads specific `key-spacing` for `objects`. Preferred option for NestJS or Angular projects due to readability improvements of objects (e.g. in decorators).

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
		"extends": "@hetchet/serenity/(js|esm|js-object-spaced|esm|ts|ts-object-spaced)"
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
	extends: "@hetchet/serenity/(js|js-object-spaced|esm|ts|ts-object-spaced)"),
	// Any ESLint overrides go here
}
```

## <img src="https://camo.githubusercontent.com/ebb0d9ad69ba4b2024aec00a7a89db22fc028200e215c164d751ae99d577f042/68747470733a2f2f636f64652e76697375616c73747564696f2e636f6d2f6173736574732f757064617465732f315f33352f6c6f676f2d737461626c652e706e67" width="20"> VSCode

For the best experience in VSCode code editor, I can recommend installing these two extensions:

- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) - to show linting errors
- [Prettier-ESLint](https://marketplace.visualstudio.com/items?itemName=rvest.vs-code-prettier-eslint) - to format code based on Prettier and ESLint settings. Be aware that `>=5.0.0` version is required, which currently is _Pre-Release_.
