module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
		"node": true,
		"es6": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2017
    },
    "rules": {
        "indent": [
            "error",
            "tab"
        ],
        'no-console': 'off',
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": ["error","double"],
        "semi": [
            "error",
            "never"
		],
		"no-unused-vars":0,
		"indent": 0,
		"semi":0
    }
};