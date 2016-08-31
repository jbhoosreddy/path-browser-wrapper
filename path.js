/**
 * This module is a wrapper which mapps to the nodeJS path library.
 * Note: `resolve` and `relative` methods are not accessible through this module.
 * @author Jaideep Bhoosreddy <jaideepb@buffalo.edu> (http://github.com/jbhoosreddy)
 */

const path = require('path');
const isWin = require('./os') === "WINNT";
const win32 = Object.assign({}, path.win32);
const posix = Object.assign({}, path.posix);

win32.resolve = posix.resolve = undefined;
win32.relative = posix.relative = undefined;

function isURL(url) {
  try {
    new URL(url);

    return true;
  } catch (e) {
    if (e instanceof TypeError) {
      return false;
    }
  }
}

if (isWin) {
  module.exports = win32;
} else {
  module.exports = posix;
}

module.exports.isURL = isURL;
module.exports.win32 = win32;
module.exports.posix = posix;