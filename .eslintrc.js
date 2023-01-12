module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'prefer-template': 0,
    'react/no-children-prop': [0],
    'linebreak-style': 0,
    "global-require": 0,
    "jsx-a11y/label-has-associated-control": [
      2,
      {
        "labelComponents": [
          "FormLabel"
        ],
        "labelAttributes": [
          "label"
        ],
        "controlComponents": [
          "input"
        ],
        "depth": 1
      }
    ]
  },
};
