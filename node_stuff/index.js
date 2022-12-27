// NODE JS APP THAT LISTENS TO ETH TRANSACTIONS TO RECOVER TRANSACTION HASHES 4 'recover_rawTxHash.js'

// TESTED AND WORKING

// THIS SHOULD CONNECT TO THE LOCAL GANACHE BLOCKCHAIN AND PRINT ALL THE TRANSACTIONS
// MADE TO OUR 'DEMO' SMART CONTRACT

var Web3 = require('web3');
var provider = 'ws://127.0.0.1:7545'; // changed from http to ws
var web3Provider = new Web3.providers.WebsocketProvider(provider); // changed from 'HttpProvider'
var web3 = new Web3(web3Provider);

// TEST 1 = log latest block number to console
// TESTED AND WORKING!
web3.eth.getBlockNumber().then((result) => {
    console.log("Latest Ethereum Block is ", result);
});


// TEST 2 = log all transaction data of transactions sent to our DEMO smart contract
// TESTED AND WORKING!
let options = {
    address: ['0xfaFBb1B11Db14cf84fa6E5C60D0789ef0D99b74a']   //Only get events from specific addresses
    // topics: []                              //What topics to subscribe to
};

let subscription = web3.eth.subscribe('logs', options, (err, event) => {
    if (!err)
        console.log(event);
});

subscription.on('data', event => console.log(event));
subscription.on('changed', changed => console.log(changed));
subscription.on('error', err => { throw err });
subscription.on('connected', nr => console.log(nr));

