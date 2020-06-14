//This file ins't transpiled, so must use CommonJS and ES5

//Register babel to transpile beefore our test run.
require('babel-register')();

//Disable webpack features that Mocha doesn't understand. here css
require.extensions['.css'] = function () {};