// Take a public key and keccack256 hash it to find its associated address

const web3 = require('web3');

const publicKey = "0x79a461800a2a8e8e85bfe6ab456184355f6ddb4e5136bf5599654b6184d37041959675069b0d70591d2f6559770801ca9fefa0b2ce7b6438ebde1d33185ed5ef";

const derivedAddressLong = web3.utils.sha3Raw(publicKey);

console.log(derivedAddressLong);