var Client = require('node-ssdp').Client
    , client = new Client({explicitSocketBind: true});

client.on('response', function (headers, statusCode, rinfo) {
    console.log('Got a response to an m-search.');
});

// search for a service type
// client.search('urn:schemas-upnp-org:service:ContentDirectory:1');

// Or get a list of all services on the network

client.search('ssdp:all');

// Wait a bit for results to come in...
console.log("Scanning...")
setTimeout(function () {
    console.log('Done!');
}, 5000);
