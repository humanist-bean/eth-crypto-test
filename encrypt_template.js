// ETH-CRYPTO TEST 0 - TESTING THE LIBRARY WITH ETHEREUM
//SETUP
const EthCrypto = require('eth-crypto');

// BEGIN ENCRYPTION

// create identitiy with key-pairs and address
const alice = EthCrypto.createIdentity();

console.log("Alice's shit:\n", alice);

const secretMessage = 'EAT MY ASS!';

// Call start
(async () => {
    console.log('before start');

    const encrypted = await EthCrypto.encryptWithPublicKey(
        alice.publicKey, // encrypt with alice's publicKey
        secretMessage
    );

    console.log('Encrypted message:\n', encrypted);

    console.log('after start');
})();

// END ENCRYPTION