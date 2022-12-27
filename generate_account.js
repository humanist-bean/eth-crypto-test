/* PROVE ENCRYPT/DECRYPT CONCEPT BY ENCRYPTING / DECRYPTING USING PUBLIC/PRIVATE KEYS*/
// generate_account.js => generates the account components we need to prove our concept
// specifically, it provides a signed transaction that we can use to recover the public key
// that we will then use to encrypt a message. Thus it will also provide the private key that
// we will then use to decrypt a message

// NOTE!!! WHEN CONNECTED TO GANACHE, THE BELOW CODE GENERATES V, R, AND S SIGNATURES
// THAT ARE ALL 0S. THIS IS WEIRD BUT THE rawTransaction HASH GENERATED IS STILL VALID!
// I.E. IF YOU USE IT TO RECOVER A PUBLIC KEY IN recover_pubkey.js,
// THAT PUBLIC KEY WILL WORK WITH encrypt_eth_test.js AND decrypt_eth_test.js !
// I KNOW THIS DOESN'T MAKE VERY MUCH SENSE, BUT I TESTED IT AND IT WORKS!
// (even though the public key recovered is 222 characters long instead of 220!)

// TEST 2 WITH HARDCODED VALUES COPIED AND PASTED STRAIGHT FROM GANACHE


const Web3 = require('web3');

// connect to ganache
var web3 = new Web3(Web3.givenProvider || 'http://127.0.0.1:7545');

//set up environment variables and constants
const recipientAdd = '0x1f1DeF4d586CfBD8b46c8325B3853E6D5b047758';
const senderAdd = '0x13b0431C309F23CaE4cB7362B95317F1Fbad40ce';
const senderPrivateKey = '0x57644cc36aadddbe94c3ab293d407d1ef195acb01414b4e79607d36dbc926f77';
var current_nonce = web3.eth.getTransactionCount(senderAdd);

web3.eth.accounts.signTransaction({
    to: recipientAdd,
    value: '50000000000000000',
    gas: 2000000,
    nonce: current_nonce,
    chainId: 1,
}, senderPrivateKey )
    .then(function (signedTx) {
        console.log(signedTx);
        return web3.eth.sendSignedTransaction(signedTx.rawTransaction);
    }, err => console.log(err))
    .then(receipt => console.log("Transaction receipt: ", receipt))
    .catch(err => console.error(err));

// LOGS MORE MOTHERFUCKING 0 VRS NUMBERS!
// END TEST 2

// TEST 1
/* FOR SOME REASON THE BELOW CODE WORKS,
EXCEPT!!! THAT THE V, R, AND S VALUES GENERATED ARE ALL 0... WTF!!!

var ganacheAlice = web3.eth.accounts.privateKeyToAccount('0x13cd1df8b8843767106c374c86624c165e7df1a9a95c953464398c0e9bcd8d0b');
// console.log(ganacheAlice); // TESTED AND WORKING!

console.log("Alice's Address generated from that private key is: ", ganacheAlice.address); //TESTED - THIS LOGS ALICE'S ADDRESS
// console.log(alice); //TESTED - THIS LOGS ALICE'S OBJECT

// Create a raw transaction
var rawTransaction = {
    "from": ganacheAlice.address,
    "to": "0xe96805d5901d41112315a7BA53823C6b2Cf08930",
    "value": web3.utils.toHex(web3.utils.toWei("0.01", "ether")),
    "gas": 200000,
    "chainId": 13
}; 

// SIGN TRANSACTION

ganacheAlice.signTransaction(rawTransaction)
    .then(function(signedTx) {
        console.log(signedTx); 
        return web3.eth.sendSignedTransaction(signedTx.rawTransaction);
    }, err => console.log(err))
    .then(receipt => console.log("Transaction receipt: ", receipt))
    .catch(err => console.error(err));

END OF 0S V R AND S VALUES CODE SHIT */




// USE THE INFO THAT IS CONSOLE LOGGED ABOVE TO RECOVER THE PUBLIC KEY
// THAT WE WILL USE FOR ENCRYPTION FROM THE TRANSACTION HASH
// SEE recover_pubkey.js



