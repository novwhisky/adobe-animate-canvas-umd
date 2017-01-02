var webpack = require('webpack');

module.exports = {
    entry: './index.js',
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js',
        libraryTarget: 'umd'
    },
    externals: {
        'createjs': 'createjs'
    }
};