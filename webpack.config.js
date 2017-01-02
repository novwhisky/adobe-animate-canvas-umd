var webpack = require('webpack');

module.exports = {
    entry: './index.js',
    output: {
        path: __dirname + '/dist',
        filename: 'canvas-umd.js',
        libraryTarget: 'umd'
    },
    externals: {
        'createjs': 'createjs'
    }
};