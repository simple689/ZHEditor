const md5 = require('js-md5');
var a = md5('Message to hash');
var hash = md5.create();
a = hash.update('Message to hash');
a = hash.hex();

a = md5(''); // d41d8cd98f00b204e9800998ecf8427e
a = md5('The quick brown fox jumps over the lazy dog'); // 9e107d9d372bb6826bd81d3542a419d6
a = md5('The quick brown fox jumps over the lazy dog.'); // e4d909c290d0fb1ca068ffaddf22cbd0
 
// It also supports UTF-8 encoding
a = md5('中文'); // a7bac2239fcdcb3a067903d8077c4a07
 
// It also supports byte `Array`, `Uint8Array`, `ArrayBuffer`
a = md5([]); // d41d8cd98f00b204e9800998ecf8427e
a = md5(new Uint8Array([])); // d41d8cd98f00b204e9800998ecf8427e
 
// Different output
a = md5(''); // d41d8cd98f00b204e9800998ecf8427e
a = md5.hex(''); // d41d8cd98f00b204e9800998ecf8427e
a = md5.array(''); // [212, 29, 140, 217, 143, 0, 178, 4, 233, 128, 9, 152, 236, 248, 66, 126]
a = md5.digest(''); // [212, 29, 140, 217, 143, 0, 178, 4, 233, 128, 9, 152, 236, 248, 66, 126]
a = md5.arrayBuffer(''); // ArrayBuffer
a = md5.buffer(''); // ArrayBuffer, deprecated, This maybe confuse with Buffer in node.js. Please use arrayBuffer instead.
a = md5.base64(''); // 1B2M2Y8AsgTpgAmY7PhCfg==