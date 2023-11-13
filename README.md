# stylelint-config-springernature
[![MIT licensed][badge-license]][info-license]

[Stylelint Plugin](https://stylelint.io/) used at Springer Nature for linting `sass` using the `scss` syntax.

This plugin extends standard stylelint configurations with rules used by SpringerNature.

## Requirements

This package requires:
- `stylelint@^15.11.0`

## Installation

1. Install `stylelint` and config to your devDependencies

```
npm install --save-dev stylelint @springernature/stylelint-config
```

2. Create a file called `.stylelintrc.json` in your root folder. 

3. Inside the file add:

```json
{
    "extends": ["@springernature/stylelint-config"]  
}
```

You can add more rules or plugins in this section following the [styleint config format](https://stylelint.io/user-guide/configure).


4. Run `stylelint`, specifying the `scss` syntax

```
stylelint './path/to/scss/*.scss'
```

5. Run stylelint fixing issues automatically (not all are fixable).

```
stylelint './path/to/scss/*.scss' --fix
```


6. Add `stylelint` scripts to your package.json

```json
    "stylelint": "stylelint '**/*.scss'",
    "stylelint-fix": "stylelint '**/*.scss' --fix"

```

## Gulp

If your project used Gulp to compile SCSS you can integrate Stylelint using

```
npm install @adorade/gulp-stylelint -save-dev
```

and use a config similar to the following

```js
function stylelintTask() {
	return gulp
		.src('src/**/*.scss')
		.pipe(gulpStylelint({
			reporters: [
				{ formatter: 'string', console: true }
			]
		}));
}

```

## IDE Plugins

One of the big advantages of Stylelint is that most of the major IDE's have a plugin that can help you write the code without the need to run Stylelint.

- VScode has a very good plugin for Stylelint. The setup is not straight forward, but is simple if you follow [this article](https://kumardeepak.xyz/blog/stylelint-scss-and-visual-studio-code/).
- Inteliji has also a plugin for [Stylelint](https://www.jetbrains.com/help/idea/using-stylelint-code-quality-tool.html#ws_stylelint_lint_your_code).


## Contributing

This package is used by many active Springer Nature projects. We always welcome issues and pull requests, but we may not always be able to merge your suggestions.

If we decide that we can't merge your PR or act on your issue, it's nothing personal! We love to see new contributors, and we strive to provide a welcoming and inclusive environment.

## License

The frontend-toolkits repository is licensed under the [MIT License][info-license].    
All packages within this repository are licensed under the [MIT License][info-license].    
Copyright &copy; 2022, Springer Nature

[info-license]: LICENSE
[badge-license]: https://img.shields.io/badge/license-MIT-blue.svg
[info-npm]: https://www.npmjs.org/package/%40springernature%2Fstylelint-config
[badge-npm]: http://img.shields.io/npm/v/%40springernature%2Fstylelint-config.svg

