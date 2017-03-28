module.exports = {
    entry: {
        'dist/canvas-umd': './index.js',
        'docs/scripts/upload-demo': './src/demo/upload.js',
        'docs/scripts/createjs-2015.11.26.combined': 'script-loader!CreateJS/builds/createjs-2015.11.26.combined'
    },
    output: {
        path: __dirname,
        filename: '[name].js',
        libraryTarget: 'umd'
    }
};