// This is for the server & client-building code only; browser code is linted in build.js

export default {
	'env': {
	  'es6': true,
	  'node': true
	},
	'parserOptions': {
	  'sourceType': 'module',
	  'ecmaVersion': 2018
	},
	'extends': 'eslint:recommended',
	'rules': {
	  'no-unused-vars': 0,
	  'no-console': 0,
	  'no-mixed-spaces-and-tabs': 0
	}
}