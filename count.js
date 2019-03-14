var fetch = require('node-fetch');
var url = "https://api-v3.mbta.com/vehicles?api_key=7b4d0b0cae4146da93cbe785936db9ff&filter[route]=1&include=trip";
var low     = require('lowdb');
var fs      = require('lowdb/adapters/FileSync');
var adapter = new fs('db.json');
var db      = low(adapter);
db.defaults({ posts: [] }).write();
console.log('number of posts:' + db.get('posts').length);
