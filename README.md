# serenity

## Motivation

Every time starting new project I was catching frustration due to ESLint / Prettier / Standard etc. setup. So decided to have a single source of truth for linting and formatting purposes for my fullstack JS / TS projects.

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

It is possible to set inheritance either via `package.json` or with config files.

#### Via `package.json`

```json
"prettier": "@hetchet/serenity/prettier"
"eslintConfig": {
	"extends": [
		"@hetchet/serenity/ts"
	]
},
```

#### Via configuration files

`.prettierrc.js`:

```js
module.exports = {
	...require('@hetchet/serenity/prettier')
}
```

`.eslintrc.js` (or whatever):

```js
module.exports = {
	extends: ['@hetchet/serenity/ts']
}
```
