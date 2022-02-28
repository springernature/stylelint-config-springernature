# stylelint-config-springernature
[![NPM version][badge-npm]][info-npm]
[![MIT licensed][badge-license]][info-license]

[Stylelint](https://stylelint.io/) shareable config used at Springer Nature for linting `sass` using the `scss` syntax.

## Requirements

This package requires:
- `stylelint@^14.5.3`
- `postcss-scss@^4.0.3`

## Installation

1. Install `stylelint` and config to your devDependencies
```
npm install --save-dev stylelint @springernature/stylelint-config
```

2. Add the `stylelint` option to your `package.json` file, and point it to the shared `.stylelintrc.json`

```json
{
  "name": "my-project",
  "version": "1.0.0",
  "stylelint": {
    "extends": "./node_modules/@springernature/stylelint-config/config/.stylelintrc.json"
  }
}
```

4. Run `stylelint`, specifying the `scss` syntax

```
stylelint './path/to/scss/*.scss' --custom-syntax postcss-scss
```

## Contributing

This package is used by many active Springer Nature projects. We always welcome issues and pull requests, but we may not always be able to merge your suggestions.

If we decide that we can't merge your PR or act on your issue, it's nothing personal! We love to see new contributors, and we strive to provide a welcoming and inclusive environment.

## License

The frontend-toolkits repository is licensed under the [MIT License][info-license].    
All packages within this repository are licensed under the [MIT License][info-license].    
Copyright &copy; 2022, Springer Nature

[info-license]: LICENCE
[badge-license]: https://img.shields.io/badge/license-MIT-blue.svg
[info-npm]: https://www.npmjs.org/package/%40springernature%2Fstylelint-config
[badge-npm]: http://img.shields.io/npm/v/%40springernature%2Fstylelint-config.svg

