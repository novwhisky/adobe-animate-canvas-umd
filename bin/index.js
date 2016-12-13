#!/usr/bin/env node
var fs = require('fs');
var path = require('path');

process.stdin.resume();
process.stdin.setEncoding('utf8');

function Animate2UMD(exportJS) {
  var template = fs.readFileSync(path.join(process.cwd(), 'src', 'template.js'));
  var replaceToken = '/**REPLACE**/';
  var moduleNamespace = 'something';
  var moduleExport = exportJS+ '\n' + 'exports["' + moduleNamespace + '"] = lib';
  return template.toString().replace(replaceToken, moduleExport)  + '\n';
}

process.stdin.on('data', function(data){
  process.stdout.on('error', function(err) {
    if (err.code === 'EPIPE') return process.exit();
    process.emit('error', err)
  });

  process.stdout.write(Animate2UMD(data));
});