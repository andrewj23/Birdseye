const myKey = 'uikHmVg1bjwSaFqr';
const mySecret = 'oW0fqj7qiqL08OyJ9ViFSlDCBLzfUvrx';
var Client = require('coinbase').Client;
var client = new Client({'apiKey': myKey, 'apiSecret': mySecret});
var coinbase = require('coinbase');
var client   = new coinbase.Client({'apiKey': myKey, 'apiSecret': mySecret, strictSSL: false});

client.getAccounts({})
// client.getAccounts({}, function(err, accounts) {
//     accounts.forEach(function(acct) {
//         console.log('my bal: ' + acct.balance.amount + ' for ' + acct.name);
//     });
// });