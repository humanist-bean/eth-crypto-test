// USE THE INFO CONSOLE LOGGED IN generate_account.js TO RECOVER A 
// PUBLIC KEY FROM A TRANSACTION HASH THAT WE CAN THEN USE TO ENCRYPT / DECRYPT
// A MESSAGE USING encrypt_eth_test.js and decrypt_eth_test.js

// below code was copied and pasted from this medium article:
// https://piyopiyo.medium.com/how-to-get-senders-ethereum-address-and-public-key-from-signed-transaction-44abe17a1791

const EthUtil = require('ethereumjs-util');
const EthTx = require('ethereumjs-tx').Transaction

// signed tx - Tested and works with this hash that was obtained from local test chain
// const signedTx1 = "0xf8711c8504a817c800836691b794fafbb1b11db14cf84fa6e5c60d0789ef0d99b74a887ce66c50e284000084d7bb99ba25a08d7d869106b635e6aa13cc6b7caefe914e4de7db1e122146edd276283fdc2e49a0367018baaf378c055df5ca09b7fdbd03b5a85fe393c0fea3be9461b10703ea4b"

// signed tx #2 - signed text obtained from eth_getRawTransactionByHash json-rpc
// DOESN'T WORK - THROWS 'ERROR: INVALID REMAINDER'
// const signedTx2 = "0x02f87301278459682f0085156ba0980082520894224093d4ea35cd22c027ec9d3bf18c919eb7a9d088017508f1956a800080c001a03fb9b7f774f14d04c73295427339216f79331e7bb56a62785130d2fe67d784d0a0629663201b21e63c277527deade6177493bd117dc8ab794ecc8c0e4c83a4946a"

// signed tx #3 - signed text of same transaction as above obtained from etherscan.io
// THROWS SAME ERROR AS #2
//const signedTx3 = "0x02f87301278459682f0085156ba0980082520894224093d4ea35cd22c027ec9d3bf18c919eb7a9d088017508f1956a800080c001a03fb9b7f774f14d04c73295427339216f79331e7bb56a62785130d2fe67d784d0a0629663201b21e63c277527deade6177493bd117dc8ab794ecc8c0e4c83a4946a"

// signed tx #4 - signed text of random regular eth transaction obtained from etherscan.io
// eth tx hash = '0xe81ebe6a4feceae881477f87cac33852eb116a06b1947b59749ade27714c99a5'
// TESTED AND WORKS! at least it logs the correct address and a public key
// I don't know if the key actually works for encryption yet...
const signedTx4 = "0xf86c808509502f900082520894fd9bbd5abef7b0dc60204d3f683c3d7d6e070b1b8803dfc68a7b7f80008025a0c6668607aef0c9740991d5cc518fbb719bc03fb3841e289f53ac7d134acb4b2ea072e08662dfdeec0267046ad3a87bb4cb777fbe021584b6e8f9bb54962d229b64"

// signed tx #5 - signed text of random ERC-721 token transfer obtained from etherscan.io
// throws same error as #3, perhaps I should try recovering the public key from the 
// v, r, s values instead since I can obtain them for ERC-721 using eth_getTransactionByHash
 const signedTx5 = "0x02f8d101018459682f00850c61d0c5038301716c94a08126f5e1ed91a635987071e6ff5eb2aeb67c4880b86423b872dd000000000000000000000000c67c28abec0da24f44c0dbbe380c5b212374bfa60000000000000000000000007cc37198e085f6da8c8306965d6edbfcba96813200000000000000000000000000000000000000000000000000000000000003e0c001a038b1c3d51c94d18b4c8e2c1c7da51df662d7789a4e2e7b1cea4d32fa43e85e38a0358d782534143a8ed08836c477c40c25e4ee772bab6e7c86531bd7a4ebd5c53e"

// signed tx #6 - signed text of Dan's ERC - 721 token transfer (dan = buyer) obtained from etherscan.io
// LMAO IT WORKS!!!! 
// Note: this was from a "Purchase" Event, not just a "Transfer"
const signedTx6 = "0xf892820463850342770c008305e1f194fbeef911dc5821886e1dda71586d90ed28174b7d87354a6ba7a18000a4efef39a1000000000000000000000000000000000000000000000000000000000008252825a0f644d61e8b48a757ce8b7076ef83a7362b481b8f2ce93c51362c664836f71bc0a065a921d66a3db5b6826b06a20cd6bbc3e429b0ab3457988d264fa3e7c0b69617";

// signed tx #7 - signed text of Dan's ERC - 721 token transfer (dan = buyer) obtained from etherscan.io
// Note: this is from a "Transfer" Event that was initated as part of the above "Purchase" event
const signedTx6 = "0xf892820463850342770c008305e1f194fbeef911dc5821886e1dda71586d90ed28174b7d87354a6ba7a18000a4efef39a1000000000000000000000000000000000000000000000000000000000008252825a0f644d61e8b48a757ce8b7076ef83a7362b481b8f2ce93c51362c664836f71bc0a065a921d66a3db5b6826b06a20cd6bbc3e429b0ab3457988d264fa3e7c0b69617";

// BELOW CODE WORKS FOR RAW TRANSACTION HASHES - CONVERTS THEM TO PUBLIC KEYS AND ADDRESS
// Create a tx object from signedTx# hash obtained from eth_getRawTransactionByHash json-rpc
const opts1 = { chain: 1, hardfork: 'istanbul' };

const tx = new EthTx(signedTx6, opts1)

// Get an address of sender
const address = EthUtil.bufferToHex(tx.getSenderAddress())
// get a public key of sender
const publicKey = EthUtil.bufferToHex(tx.getSenderPublicKey())
console.log('The address of signedTx6 (DANS ADDRESS) is:\n', address)
// => 0x89c24a88bad4abe0a4f5b2eb5a86db1fb323832c 
console.log('The public key of signedTx6 (DANS PUBKEY) is:\n', publicKey)
// => 0xfff49b58b83104ff16875452852466a46c7169ba4e368d11830c9170624e0a9509080a05a38c18841718ea4fc13483ac467d3e2d728d41ff16b73b9c943734f8
// END CODE BLOCK FOR RAW TRANSACTION HASHES


// BELOW CODE IS FOR TRANSACTION OBJECTS, NOT HASHES, e.g. objects via eth_getTransactionByHash
// txObject1 = txObject returned as 'result: {...}' from eth_getTransactionByHash
// note - it was a random ERC-721 transfer transaction off etherscan.io
const txObject1 = { "blockHash": "0xf177268f13b0da5eda9a2bbbd9aed83c61be2bdb600f7c9130e6cb0a8c82de0d", "blockNumber": "0xc9c34e", "from": "0xc67c28abec0da24f44c0dbbe380c5b212374bfa6", "gas": "0x1716c", "gasPrice": "0xc61d0c503", "maxFeePerGas": "0xc61d0c503", "maxPriorityFeePerGas": "0x59682f00", "hash": "0xf622489482dd58a4fe531db7ad3dd1fc2b4349d522b6013d9f13dac61606188d", "input": "0x23b872dd000000000000000000000000c67c28abec0da24f44c0dbbe380c5b212374bfa60000000000000000000000007cc37198e085f6da8c8306965d6edbfcba96813200000000000000000000000000000000000000000000000000000000000003e0", "nonce": "0x1", "to": "0xa08126f5e1ed91a635987071e6ff5eb2aeb67c48", "transactionIndex": "0xfb", "value": "0x0", "type": "0x2", "accessList": [], "chainId": "0x1", "v": "0x1", "r": "0x38b1c3d51c94d18b4c8e2c1c7da51df662d7789a4e2e7b1cea4d32fa43e85e38", "s": "0x358d782534143a8ed08836c477c40c25e4ee772bab6e7c86531bd7a4ebd5c53e" };

// BELOW IS COPIED AND PASTED THEN MODIFIED FROM
// https://ethereum.stackexchange.com/questions/53078/extracting-public-key-from-signed-ethereum-message-or-transaction-in-javascript
// const Transaction = require('ethereumjs-tx')
// const tx = web3.eth.getTransaction(txHash) // insert txhash here
const txObject1Refined = {
    nonce: txObject1.nonce,
    gasPrice: txObject1.gasPrice,
    gasLimit: txObject1.gas,
    to: txObject1.to,
    value: txObject1.value,
    data: txObject1.input,
    // chainId: txObject1.chainId, i think this needs to be in 2nd parameter
    r: txObject1.r,
    s: txObject1.s,
    v: '0x1C' // txObject1.v, test different values ('0x26' works!), see comments below opts
    // although '0x26' makes it so we get and address and public key from txObject1,
    // the address and key it returns don't seem to match that on etherscan
    // perhaps to get the correct ones its just a matter of matching up 
    // the correct: 'hardfork', 'chain', and 'v' values. 
    // KEEP TRYING DIFFERENT VALUES TILL THEY MATCH UP!
};

// REALIZATION - THE V VALUE IS BEING CONVERTED FROM HEX TO DECIMAL SO: '0x25' = 37, etc...

/* CHAINID, V, AND HARDFORK VALUES AND THEIR RETURN/ERRORS LIST:
1. v: '0x26', chain: 1, hardfork: 'spuriousDragon' => 
SUCCESSFULLY COMPUTES VALUES BUT THEY DON'T MATCH ETHERSCAN, SEE:
'The address obtained from txObject1 is:
 0x612c12d69e18b7871e27a68e08759af8f4860661
The public key obtained from txObject1 is:
 0x3efd1fefc41f26e96cf...'

2. v: '0x26', chain: 1, hardfork: 'istanbul' =>
same results as 1. 

2. v: '0x25', chain: 1, hardfork: 'istanbul' =>
same effect as 1, except returns different address and key values:
The address obtained from txObject1 is:
 0x8bb40f66a7aa74c4df355acc66c82051bd4f9d1c
The public key obtained from txObject1 is:
 0xd68cb424b8bbde1d1412

END LIST*/


const opts2 = { chain: 1 /*, hardfork: 'istanbul' */};
// chainging from
// 'byzantium' to 'homestead' made us get a new error, 'Invalid Signature'
// instead of 'Incompatible EIP155-based V 1 and chain id 1'
// also try v = chained_id * 2 + (35 or 36), see:
// https://ethereum.stackexchange.com/questions/69008/eip155-how-chainid-works
// and https://github.com/ethereumjs/ethereumjs-tx/blob/5c81b38b366c8548f9601d8c60a29f0af394db63/src/transaction.ts

// TEST!
txObject1.v = '0x26'

const tx2 = new EthTx(txObject1, opts2); // changed from txObject1Refined for testing

const address2 = EthUtil.bufferToHex(tx2.getSenderAddress());
const pubkey = EthUtil.bufferToHex(tx2.getSenderPublicKey());


console.log('The address obtained from txObject1 is:\n', address2);

console.log('The public key obtained from txObject1 is:\n', pubkey);