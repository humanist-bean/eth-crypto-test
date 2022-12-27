/* PROVE ENCRYPT/DECRYPT CONCEPT BY CONNECTING REMIX TO GANACHE AND RUNNING THIS CODE */
// NOTE!!!!! THIS CODE DOESN'T SEEM TO WORK! USE recover_pubkey.js instead?

const EthUtil = require('ethereumjs-util');
const EthTx = require('ethereumjs-tx');

// signed tx
const signedTx = "0xca89373f0000000000000000000000002736c5be05ee52a855080024be52894e00b24cdb0000000000000000000000000000000000000000000000000000000000000032";
// Create a tx object from signed tx 
const tx = EthTx.EthTx(signedTx); //DO SOME FIX HERE!
// Get an address of sender
const address = EthUtil.bufferToHex(tx.getSenderAddress());
// get a public key of sender
const publicKey = EthUtil.bufferToHex(tx.getSenderPublicKey());
console.log(address);
// => 0x89c24a88bad4abe0a4f5b2eb5a86db1fb323832c
console.log(publicKey);
// => 0xfff49b58b83104ff16875452852466a46c7169ba4e368d11830c9170624e0a9509080a05a38c18841718ea4fc13483ac467d3e2d728d41ff16b73b9c943734f8