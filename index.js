'use strict';

module.exports = {
	plugins: [
        "stylelint-declaration-block-order"
    ],
    extends: ["stylelint-config-standard", "stylelint-config-standard-scss"],
	rules: {
        "at-rule-empty-line-before": [
            "always",  {
                "except": [
                    "after-same-name",
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
        "declaration-empty-line-before": null,
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
        "no-descending-specificity": null,
        "number-no-trailing-zeros": true,
        "plugin/declaration-block-order": [
            {
                "type": "at-rule",
                "name": "extend"
            },
            {
                "type": "at-rule",
                "name": "include"
            },
            "declarations"
        ],
        "property-no-vendor-prefix": null,
        "scss/at-else-closing-brace-newline-after": null,
        "scss/at-else-closing-brace-space-after": null,
        "scss/at-else-empty-line-before": null,
        "scss/at-if-closing-brace-newline-after": null,
        "scss/at-if-closing-brace-space-after": null,
        "scss/at-if-no-null": null,
        "scss/load-no-partial-leading-underscore": true,
        "scss/at-mixin-argumentless-call-parentheses": null,
        "scss/at-rule-conditional-no-parentheses": null,
        "scss/comment-no-empty": null,
        "scss/double-slash-comment-empty-line-before": null,
        "scss/double-slash-comment-whitespace-inside": null,
        "selector-attribute-operator-space-after": "never",
        "selector-attribute-operator-space-before": "never",
        "selector-attribute-quotes": null,
        "selector-class-pattern": null,
        "selector-list-comma-newline-after": "always",
        "selector-no-qualifying-type": [
            true,
            {
                "ignore": [
                    "attribute",
                    "class"
                ]
            }
        ],
        "selector-pseudo-element-colon-notation": "single",
        "shorthand-property-no-redundant-values": true,
        "string-no-newline": null,
        "value-keyword-case": [
            "lower",
            {
                "camelCaseSvgKeywords": true
            }
        ]
	},
};
