#!/usr/bin/env node
var fs = require('fs');
var path = require('path');
var CanvasUmd = require('../index').default;

var argv = require('minimist')(process.argv.slice(2));

//var template = fs.readFileSync(path.join(process.cwd(), 'src', 'template.js'));
var inFile = argv._[0];

// Input JS filename must match original FLA/XFL because of Animate file export implicit structure
var baseName = path.parse(inFile).name;

var strm = fs.createReadStream(argv._[0]);

strm.on('data', function(data) {
  process.stdout.on('error', function(err) {
    if(err.code === 'EPIPE') return process.exit();
    process.emit('error', err);
  });

  var opts = Object.assign({}, { 'module-name': baseName }, argv);
  var umd = CanvasUmd(opts).convert(data.toString());
  process.stdout.write(umd);
})