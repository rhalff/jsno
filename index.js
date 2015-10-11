'use strict';

var sep = '.';

/**
 *
 * Encodes json into jsno format
 *
 * @param {Object} json
 */
function encode(json) {
  var r, l, s, d;
  var jsno = [[],[]];
  Object.keys(json).forEach(function(k, i) {
    if (k.indexOf(sep) >= 0) {
      r = k.split(sep);
      l = r.pop();
      s = [i];
      for (var j = 0; j < r.length; j++) {
        jsno[0].push(r[j]);
        d = s.slice();
        jsno[1].push(d.length > 1 ? d : d.pop());
        s.push(j);
      }
      jsno[1].push(s);
      jsno[0].push([l, json[k]]);
    } else {
      jsno[1].push(i);
      jsno[0].push([k, json[k]]);
    }
  });
  return jsno;
}

/**
 *
 * Takes a jsno object and converts it back to JSON
 * (unfinished)
 *
 * @param {Object} jsno
 */
function decode(jsno) {
  var obj = {};
  var index, key;

  for (var i = 0; i < jsno[1].length; i++) {
    index = jsno[1][i];
    key = jsno[0][index];
    if (Array.isArray(key)) {
      // key/primitive value pair
      obj[key[0]] = key[1];
    } else {
      // it's a key
      // the first key if structure is not an array.
      if (Array.isArray(index)) {
        /*
        var c = obj;
        for (var j = 0; j < index.length; j++) {
          c = c[jsno[0][index[j]]] = {};
        }
        */
      } else {
        obj[key] = {};
      }
    }
  }
  return obj;
}

module.exports = {
  encode: encode,
  decode: decode
};
