const clientID = "1b64cf309a86bd5f5a4d817e728c4dc5682463397d23b24a8f2f06f4ab433678";
const clientSecret = "4514e203850ae432ce980d16ba56b7c06b2c5726ac7bb7c28a50bc8aaea721d0";
const redirectURL = "http://localhost:5000/"

const authURL = "https://www.coinbase.com/oauth/authorize?response_type=code&client_id="+clientID+"&redirect_uri="+redirectURL+"&state=134ef5504a94&scope=wallet:accounts:read";

const myKey = 'uikHmVg1bjwSaFqr';
const mySecret = 'oW0fqj7qiqL08OyJ9ViFSlDCBLzfUvrx';

var coinbase = require('coinbase');
var client = new coinbase.Client({'apiKey': myKey, 'apiSecret': mySecret, strictSSL: false});
let deposited = 0;

const returnDeposited = () => {
    console.log(deposited);
}

client.getAccounts({limit: 200}, function (err, accounts) {
    accounts.forEach(function (acct) {
        if (parseFloat(acct.balance.amount)) {
            console.log('my bal: ' + acct.balance.amount + ' for ' + acct.name + ' ' + acct.id);
        }
    });
});

//need to make in to a promise so the api call happens before deposit summation
const getDeposited = () => {
    client.getAccounts({limit: 200}, function (err, accounts) {
        accounts.forEach(function (acct) {
            acct.getTransactions(null, function (err, txns) {
                if (txns !== null) {
                    txns.forEach(function (txn) {
                        if (txn.type === 'buy') {
                            console.log(parseFloat(txn.native_amount.amount));
                        }
                    });
                }
            });
        });
    })
};