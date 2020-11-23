const redis = require('redis');
const client = redis.createClient();

client.on('error', function (err) {
  console.log('Error ' + err);
});

client.set('name', 'Junha');

client.get('name', (err, val) => {
  console.log(val);
  client.quit();
});
