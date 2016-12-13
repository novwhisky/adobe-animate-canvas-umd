#!/usr/bin/env node
var fs = require('fs');
var path = require('path');

var argv = require('minimist')(process.argv.slice(2));

var template = fs.readFileSync(path.join(process.cwd(), 'src', 'template.js'));
var inFile = argv._[0];
// Input JS filename must match original FLA/XFL because of Animate file export implicit structure
var baseName = path.parse(inFile).name;

function removeCreateJSVar(exportJS) {
  var lines = exportJS.toString().split('\n');
  var noGoodVeryBadGlobals = lines.pop().replace(/(,\s+)?createjs/, '');
  lines.push('//// "var createjs" filtered out by canvas-umd to allow encapsulated interop', noGoodVeryBadGlobals);
  return lines.join('\n');
}

function Animate2UMD(exportJS) {
  var replaceToken = '/**REPLACE**/';
  var moduleExport = '\t//// Animate export wrapped by canvas-umd\n'+
    '\texports["lib"] = lib;\n' +
    '\texports["createInstance"] = function() { return new lib["'+baseName+'"](); };';

  var wrappedModule = exportJS + '\n\n' + moduleExport;
  return template.toString().replace(replaceToken, wrappedModule)  + '\n';
}

var strm = fs.createReadStream(argv._[0]);

  strm.on('data', function(data) {
    // ...yuck...
    var sanitized = removeCreateJSVar(data);
    var umd = Animate2UMD(sanitized);

    process.stdout.on('error', function(err) {
      if (err.code === 'EPIPE') return process.exit();
      process.emit('error', err)
    });

    process.stdout.write(umd);
  });
