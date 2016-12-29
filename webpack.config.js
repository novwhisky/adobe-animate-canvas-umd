var webpack = require('webpack');

module.exports = {
    entry: './index.js',
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js',
        libraryTarget: 'umd'
    },
    resolve: {
        alias: {
            createjs: 'CreateJS/builds/createjs-2015.11.26.combined'
        }
    },
    externals: {
        'createjs': 'createjs'
    }
};