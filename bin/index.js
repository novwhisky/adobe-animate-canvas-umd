#!/usr/bin/env node
var fs = require('fs');
var path = require('path');

var argv = require('minimist')(process.argv.slice(2));

var template = fs.readFileSync(path.join(process.cwd(), 'src', 'template.js'));
var inFile = argv._[0];
var moduleNamespace = argv['module-name'] || path.parse(inFile).name;

function Animate2UMD(exportJS) {
  var replaceToken = '/**REPLACE**/';
  var moduleExport = exportJS+ '\n' + 'exports["' + moduleNamespace + '"] = lib';
  return template.toString().replace(replaceToken, moduleExport)  + '\n';
}

var strm = fs.createReadStream(argv._[0]);

  strm.on('data', function(data) {
    var umd = Animate2UMD(data);

    process.stdout.on('error', function(err) {
      if (err.code === 'EPIPE') return process.exit();
      process.emit('error', err)
    });

    process.stdout.write(umd);
  });
