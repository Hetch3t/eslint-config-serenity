# serenity

## Motivation

Every time starting new project I was catching frustration due to ESLint / Prettier / Standard etc. setup. So decided to have a single source of truth for linting and formatting purposes for my fullstack JS / TS projects.

## Features

- Very opinionated (though can be overriden)
- Tabs by default
- Focus on code consistency and readability
- Easy setup for new projects
- Support for both JS and TS

## Installation

### Package dependencies

To get this config working it is required to have installed several packages:

- `eslint:>=8`
- `prettier:>=2`
- `prettier-eslint:>=14`

To install of these with single lint:

```sh
npx install-peerdeps --dev @hetchet/serenity
```

Even if you use `yarn`, this utility will detect that and use `yarn` instead of `npm`.

### Config inheritance

`.prettierrc.js`:

```js
module.exports = {
	...require('@hetchet/serenity/prettier')
	// Any Prettier overrides
}
```

`.eslintrc.js`:

```ts
module.exports = {
	...require('@hetchet/serenity/ts')
	// Any ESLint overrides
}
```
