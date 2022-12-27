// take the signed transaction from "recover_signedTxFromTxHash.js" and convert to RawTransaction Hex
// so that we can recover public key

const Tx = require('ethereumjs-tx').Transaction

var signedTx = { "hash": "0x64ad50e10c4bb7268c4b5399126bd7abbf1968c0d92838b18b6dbad17639fa33", "nonce": "0x1c", "blockHash": "0x39f9adc24558e43a6464b2a52e0d32654eb23713f4bb6f446c9b2bf975762ee5", "blockNumber": "0x23", "transactionIndex": "0x0", "from": "0x47fa8874b1707456c2f342c424303b6732a31090", "to": "0xfafbb1b11db14cf84fa6e5c60d0789ef0d99b74a", "value": "0x7ce66c50e2840000", "gas": "0x6691b7", "gasPrice": "0x4a817c800", "input": "0xd7bb99ba", "v": "0x25", "r": "0x8d7d869106b635e6aa13cc6b7caefe914e4de7db1e122146edd276283fdc2e49", "s": "0x367018baaf378c055df5ca09b7fdbd03b5a85fe393c0fea3be9461b10703ea4b" };

// signedTx2 is a signed transaction actually recovered from the ethereum 
// blockchain using json-rpcs "eth_getTransactionByHash" 
var signedTx2 = { "blockHash": "0x8b7b29aea4c8bbcc6bb78a207001dbfb8ba0efc63094d871b7b85628b3ebff1a", "blockNumber": "0xc9bdee", "from": "0x38006e2fb44627138be3817feea44f7d9ebd2e62", "gas": "0x5208", "gasPrice": "0xc4b48bf5c", "maxFeePerGas": "0x156ba09800", "maxPriorityFeePerGas": "0x59682f00", "hash": "0x00d36b395923624cb9e54c51825b1b3dd77e3f470a64b35af1e788dd7bf6638d", "input": "0x", "nonce": "0x27", "to": "0x224093d4ea35cd22c027ec9d3bf18c919eb7a9d0", "transactionIndex": "0xef", "value": "0x17508f1956a8000", "type": "0x2", "accessList": [], "chainId": "0x1", "v": "0x1", "r": "0x3fb9b7f774f14d04c73295427339216f79331e7bb56a62785130d2fe67d784d0", "s": "0x629663201b21e63c277527deade6177493bd117dc8ab794ecc8c0e4c83a4946a" }
// using the above code genereates an "Error("Incompatible EIP155-based V " + vInt + " and chain id " + this.getChainId()"

// signedTx3 is same as signedTx2 except it has some stuff like "chainId removed"
var signedTx3 = { "blockHash": "0x8b7b29aea4c8bbcc6bb78a207001dbfb8ba0efc63094d871b7b85628b3ebff1a", "blockNumber": "0xc9bdee", "from": "0x38006e2fb44627138be3817feea44f7d9ebd2e62", "gas": "0x5208", "gasPrice": "0xc4b48bf5c", "hash": "0x00d36b395923624cb9e54c51825b1b3dd77e3f470a64b35af1e788dd7bf6638d", "input": "0x", "nonce": "0x27", "to": "0x224093d4ea35cd22c027ec9d3bf18c919eb7a9d0", "value": "0x17508f1956a8000", "v": "0x1", "r": "0x3fb9b7f774f14d04c73295427339216f79331e7bb56a62785130d2fe67d784d0", "s": "0x629663201b21e63c277527deade6177493bd117dc8ab794ecc8c0e4c83a4946a" }
// seems to throw same error as before, I will need to specify chain id 
// in the Transaction Constructor's second parameter


var tx = new Tx(signedTx3); 

var serializedTx = tx.serialize();
console.log(serializedTx.toString('hex'));