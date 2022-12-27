// recover_pubkey_live.js = recover a pubkey from a compelete txData object or txHash obtained from
// the real ETH mainnet. 

//import { FeeMarketEIP1559Transaction } from 'ethereumjs/tx';
const EthUtil = require('ethereumjs-util');
const FeeMarketEIP1559Transaction = require('@ethereumjs/tx').FeeMarketEIP1559Transaction;
const Common = require('@ethereumjs/common').default; // Common object is NECCESSARY to specifying hardfork

const common = new Common({ chain: 'mainnet', hardfork: 'london' });

// 1. use txFromHash from txHash which = serialized raw transaction hash

// txHash (previously signedTx5) - signed text of random ERC-721 token transfer obtained from etherscan.io
const txHash = "0x02f8d101018459682f00850c61d0c5038301716c94a08126f5e1ed91a635987071e6ff5eb2aeb67c4880b86423b872dd000000000000000000000000c67c28abec0da24f44c0dbbe380c5b212374bfa60000000000000000000000007cc37198e085f6da8c8306965d6edbfcba96813200000000000000000000000000000000000000000000000000000000000003e0c001a038b1c3d51c94d18b4c8e2c1c7da51df662d7789a4e2e7b1cea4d32fa43e85e38a0358d782534143a8ed08836c477c40c25e4ee772bab6e7c86531bd7a4ebd5c53e";

const txFromHash = FeeMarketEIP1559Transaction.fromSerializedTx(txHash, { common });

const addressFromHash = txFromHash.getSenderAddress();
const pubkeyFromHash = txFromHash.getSenderPublicKey();


console.log('The address of txFromHash is:\n', addressFromHash);
console.log('The pubkey of txFromHash is:\n', pubkeyFromHash);
// END 1. */

// 2. use txFromData from txData = object with transaction data as properties

// txData = txObject returned as 'result: {...}' from eth_getTransactionByHash
// note - it was a random ERC-721 transfer transaction off etherscan.io
// const txData = { "blockHash": "0xf177268f13b0da5eda9a2bbbd9aed83c61be2bdb600f7c9130e6cb0a8c82de0d", "blockNumber": "0xc9c34e", "from": "0xc67c28abec0da24f44c0dbbe380c5b212374bfa6", "gas": "0x1716c", "gasPrice": "0xc61d0c503", "maxFeePerGas": "0xc61d0c503", "maxPriorityFeePerGas": "0x59682f00", "hash": "0xf622489482dd58a4fe531db7ad3dd1fc2b4349d522b6013d9f13dac61606188d", "input": "0x23b872dd000000000000000000000000c67c28abec0da24f44c0dbbe380c5b212374bfa60000000000000000000000007cc37198e085f6da8c8306965d6edbfcba96813200000000000000000000000000000000000000000000000000000000000003e0", "nonce": "0x1", "to": "0xa08126f5e1ed91a635987071e6ff5eb2aeb67c48", "transactionIndex": "0xfb", "value": "0x0", "type": "0x2", "accessList": [], "chainId": "0x1", "v": "0x1", "r": "0x38b1c3d51c94d18b4c8e2c1c7da51df662d7789a4e2e7b1cea4d32fa43e85e38", "s": "0x358d782534143a8ed08836c477c40c25e4ee772bab6e7c86531bd7a4ebd5c53e" };

const dansTxData1 = { "blockHash": "0x838b867eb23180773495080fdeb1de93a6ffa65fa3c5bac91b6149499caad681", "blockNumber": "0xc8c1ab", "from": "0xfe4169540c727b9e8a6b99392fabd98f85cf1f2f", "gas": "0x4ede2", "gasPrice": "0x1a5a747d9e", "maxFeePerGas": "0x1a8aedfa19", "maxPriorityFeePerGas": "0x8f29bd33", "hash": "0x8d71b9e84f76dc2c4ee6200307cce6e6e750ac55e039bc3117728187f5194d58", "input": "0x9cec6392000000000000000000000000bde61412ca9f899239671118fd1ec99e70195de75a5e58a0551015583132fd656d3f1ebd52472ddb2d060876188d1f9d2739315500000000000000000000000060f80121c31a0d46b5279700f9df786054aa5ee5000000000000000000000000000000000000000000000000000000000001093700000000000000000000000000000000000000000000000000000000000000030000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000009184e72a00000000000000000000000000000000000000000000000000000000000000000fa000000000000000000000000000000000000000000000000000000000000001be271750ec2c13cdd13d0c54330b4b3d44b978a0b22f9ffbf454c4d94d113970814eede57bfd5cd72cb18acbd8d716c5068e9db8ac54244c0cee05a8ea210911900000000000000000000000000000000000000000000000000000000000000fa000000000000000000000000000000000000000000000000000000000000001c3e95c4987202e7007b2bf048468246da618a7a0365b5db8d6ef57f575868272233382e087aaef9224538e7caf6a4ea1ec087f1936cd74ba58b728ffac23eb66200000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000000", "nonce": "0xc", "to": "0x09eab21c40743b2364b94345419138ef80f39e30", "transactionIndex": "0x102", "value": "0x952839be400", "type": "0x2", "accessList": [], "chainId": "0x1", "v": "0x1", "r": "0x8251834038f91cfab923cecc01acadaaff7e84d1ad69df61f457f12fdb10a3c1", "s": "0x7107a538585b7be3d3d4b4ceb3cdcdbd8be22ebb0d1c8ac9b1e674b9e74cc885" };


const txFromData = FeeMarketEIP1559Transaction.fromTxData(dansTxData1, { common });

const addressFromData = EthUtil.bufferToHex(txFromData.getSenderAddress());
const pubkeyFromData = EthUtil.bufferToHex(txFromData.getSenderPublicKey());


console.log('The address of txFromData is:\n', addressFromData);
console.log('The pubkey of txFromData is:\n', pubkeyFromData); // */


/* 3. attempt to recover the public key using ethereumjs-utils ecrecover method

const inputBuffered = EthUtil.toBuffer(dansTxData1.input);
const vBuffered = EthUtil.toBuffer(dansTxData1.v);
const vInt = EthUtil.bufferToInt(dansTxData1.v);
const rBuffered = EthUtil.toBuffer(dansTxData1.r);
const sBuffered = EthUtil.toBuffer(dansTxData1.s);
const chainidBuffered = EthUtil.toBuffer(dansTxData1.chainId);

console.log('\nvInt = ', vInt, ', rBuffered = ', rBuffered, ', chainidBuffered = ', chainidBuffered, '\n');

const addressEC = EthUtil.ecrecover( dansTxData1.hash, vInt, rBuffered, sBuffered, chainidBuffered);


console.log('The public key from dans shit recovered using ecrecover is:\n', addressFromData);
END 3. */
