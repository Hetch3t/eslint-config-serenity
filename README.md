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

## Motivation

Every time starting new project I was catching frustration due to ESLint / Prettier / Standard etc. setup. So decided to have a single source of truth for linting and formatting purposes for my fullstack JS / TS projects.

## Features

- Very opinionated (though can be overriden)
- Tabs by default
- Focus on readability and consistent code style
- Easy setup for new projects
- Support for both JS and TS

## Installation

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

#### Prettier

`.prettierrc.js`:

```js
module.exports = {
	...require("@hetchet/eslint-config-serenity/prettier")
	// Any Prettier overrides go here
}
```

or

`package.json`:

```jsonc
{
	//...
	"prettier": "@hetchet/eslint-config-serenity/prettier"
	//...
}
```

#### ESLint

`.eslintrc.js`:

```ts
module.exports = {
	...require("@hetchet/serenity/(js|js-object-spaced|esm|ts|ts-object-spaced)")
	// Any ESLint overrides go here
}
```

or

`package.json`:

```jsonc
{
	//...
	"eslintConfig": {
		"extends": "@hetchet/serenity/(js|esm|js-object-spaced|esm|ts|ts-object-spaced)"
	}
	//...
}
```

## VSCode

For the best experience in VSCode code editor, I can recommend installing these two extensions:

- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) - to show linting errors
- [Prettier-ESLint](https://marketplace.visualstudio.com/items?itemName=rvest.vs-code-prettier-eslint) - to format code based on Prettier and ESLint settings. Be aware that `>=5.0.0` version is required, which currently is _Pre-Release_.
