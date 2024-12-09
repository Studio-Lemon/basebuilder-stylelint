module.exports = {
  extends: ["stylelint-config-standard-scss", "stylelint-config-recess-order"],
  plugins: ["stylelint-order", "stylelint-prettier"],
  customSyntax: 'postcss-scss',
  rules: {
    "prettier/prettier": [true, { "trailingComma": "all", "tabWidth": 4, "semi": true, "singleQuote": true, "printWidth": 150 }],
    "custom-property-pattern": null,
    "no-empty-source": null,
    "no-duplicate-selectors": null,
    "color-hex-length": "long",
    "color-function-notation": null,
    "selector-class-pattern": null,
    "selector-id-pattern": null,
    "selector-attribute-quotes": "always",
    "declaration-block-no-duplicate-properties": true,
    "declaration-block-no-redundant-longhand-properties": null,
    "max-nesting-depth": 6,
    "property-no-vendor-prefix": true,
    "value-no-vendor-prefix": true,
    "function-url-quotes": "always",
    "font-weight-notation": "numeric",
    "comment-empty-line-before": "always",
    "at-rule-no-vendor-prefix": true,
    "no-descending-specificity": null,
    "scss/no-global-function-names": null,
    "scss/at-extend-no-missing-placeholder": null,
    "scss/dollar-variable-empty-line-before": null,
    "at-rule-empty-line-before": [
      "always",
      {
        except: ["blockless-after-blockless", "first-nested"],
      },
    ],
    "order/properties-alphabetical-order": null,
    "order/order": [
      "dollar-variables",
      "at-rules",
      {
        name: "include",
        type: "at-rule",
        hasBlock: false,
      },
      {
        name: "extend",
        type: "at-rule",
        hasBlock: false,
      },
      "custom-properties",
      "declarations",
      "at-rules",
      {
        name: "include",
        type: "at-rule",
        hasBlock: true,
      },
      "at-rules",
      {
        name: "media",
        type: "at-rule",
        hasBlock: true,
      },
      "at-rules",
      {
        name: "supports",
        type: "at-rule",
        hasBlock: true,
      },
      "rules",
    ],
    "unit-allowed-list": [
      "em",
      "rem",
      "vw",
      "vh",
      "px",
      "%",
      "s",
      "ms",
      "deg",
      "fr",
    ],
    "at-rule-no-unknown": [
      true,
      {
        ignoreAtRules: [
          "extend",
          "use",
          "at-root",
          "debug",
          "warn",
          "error",
          "if",
          "else",
          "for",
          "each",
          "while",
          "mixin",
          "include",
          "content",
          "return",
          "function",
        ],
      },
    ],
    "prettier/prettier": [
      true, {
        "singleQuote": false,
        "useTabs": true,
        "plugins": []
      }],
  },
};
