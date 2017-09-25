// ===================================================
// FOR PRODUCTION
// Total.js - framework for Node.js platform
// https://www.totaljs.com
// ===================================================

const options = {};

// options.ip = '127.0.0.1';
// options.port = parseInt(process.argv[2]);
// options.config = { name: 'Total.js' };
// options.sleep = 3000;

var fs = require('fs');
options.ip = 'auto';
options.port = process.env.PORT;
var framework = require('total.js');
framework.http('release', options);

require('total.js').http('release', options);
// require('total.js').cluster.http(5, 'release', options);