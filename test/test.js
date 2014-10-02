'use strict';
var fs = require('fs');
var assert = require('assert');

var hashes = {
  'test/fixtures/file.png' : 'test/tmp/file.26365248.png',
  'test/fixtures/cfgfile.png' : 'test/tmp/cfgfile.da63.png',
  'test/fixtures/dir/file.js' : 'test/tmp/transverse/test/fixtures/dir/file.2ded9e7f.js',
  'test/fixtures/folder.js/file.js' : 'test/tmp/transverse/test/fixtures/folder.js/file.afc8810f.js'
};

it('should revision files based on content', function () {
  var file = 'test/fixtures/file.png';
  var original = fs.statSync(file).size;
  var revisioned= fs.statSync(hashes[file]).size;
  assert(revisioned === original);
});

it('should accept options', function () {
  var file = 'test/fixtures/cfgfile.png';
  var original = fs.statSync(file).size;
  var revisioned= fs.statSync(hashes[file]).size;
  assert(revisioned === original);
});

it('should allow a dest directory option', function () {
  var file = 'test/fixtures/file.png';
  var original = fs.statSync(file).size;
  var revisioned= fs.statSync(hashes[file]).size;
  assert(revisioned === original);
});

it('should allow sources defined with expand', function () {
  var file = 'test/fixtures/file.png';
  var original = fs.statSync(file).size;
  var revisioned= fs.statSync(hashes[file]).size;
  assert(revisioned === original);
});

describe('File Transversing', function () {
  it('should go into directories', function () {
    var file = 'test/fixtures/dir/file.js';
    var original = fs.statSync(file).size;
    var revisioned = fs.statSync(hashes[file]).size;
    assert(revisioned === original);
  });

  it('should go into directory folder.js/', function () {
    var file = 'test/fixtures/folder.js/file.js';
    var original = fs.statSync(file).size;
    var revisioned = fs.statSync(hashes[file]).size;
    assert(revisioned === original);
  });

});
