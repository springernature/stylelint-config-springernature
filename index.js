'use strict';

module.exports = {
	plugins: [
        "stylelint-order"
    ],
	extends: ["stylelint-config-recommended-scss"],
	rules: {
		// Turning off rules from stylelint-config-recommended-scss
		"no-descending-specificity": null,
		"no-duplicate-selectors": null,
		"no-descending-specificity": null,
		"scss/at-extend-no-missing-placeholder": null,
		// Springer Nature Ruleset
        "at-rule-empty-line-before": [
            "always",  {
                "except": [
                    "inside-block"
                ],
                "ignore": [
                    "after-comment",
                    "inside-block",
                    "blockless-after-same-name-blockless"
                ]
            }
        ],
        "block-no-empty": true,
        "block-opening-brace-newline-after": "always-multi-line",
        "block-opening-brace-space-before": "always",
        "color-hex-case": "lower",
        "color-hex-length": "short",
        "color-no-invalid-hex": true,
        "declaration-bang-space-after": "never",
        "declaration-bang-space-before": "always",
        "declaration-block-semicolon-newline-after": "always",
        "declaration-block-trailing-semicolon": "always",
        "declaration-colon-space-after": "always",
        "declaration-colon-space-before": [
            "never",
            {
                "ignore": [
                    "after-comment",
                    "first-nested",
                    "inside-block"
                ]
            }
        ],
        "font-family-name-quotes": "always-unless-keyword",
        "function-comma-space-after": "always",
        "function-name-case": "lower",
        "function-parentheses-space-inside": "never",
        "function-url-quotes": [
            "always",
            {
                "except": [
                    "empty"
                ]
            }
        ],
        "indentation": [
            "tab",
            {
                "indentInsideParens": "once-at-root-twice-in-block"
            }
        ],
        "length-zero-no-unit": true,
        "max-nesting-depth": 3,
        "media-feature-range-notation": "prefix",
        "number-no-trailing-zeros": true,
        "order/order": [
            {
                "type": "at-rule",
                "name": "extend"
            },
            "declarations"
        ],
        "scss/load-no-partial-leading-underscore": true,
		"selector-attribute-operator-space-after": "never",
		"selector-attribute-operator-space-before": "never",
        "selector-list-comma-newline-after": "always",
        "selector-no-qualifying-type": [
            true,
            {
                "ignore": [
                    "attribute",
                    "class"
                ]
            }
        ]
	},
};
