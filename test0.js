// ETH-CRYPTO TEST 0 - TESTING THE LIBRARY WITH ETHEREUM
//SETUP
const EthCrypto = require('eth-crypto');

// BEGIN ENCRYPTION

// create identitiy with key-pairs and address
const alice = EthCrypto.createIdentity();

const secretMessage = 'My name is Satoshi Buterin';

// Call start
(async () => {
    console.log('before start');

    const encrypted = await EthCrypto.encryptWithPublicKey(
        alice.publicKey, // encrypt with alice's publicKey
        secretMessage
    );

    console.log('Encrypted message:\n', encrypted);
    
    /* const decrypted = await EthCrypto.decryptWithPrivateKey(
        alice.privateKey,
        secretMessage
    ); 

    console.log('Decrypted Message:\n', decrypted); */

    console.log('after start');1
})();


/*
const encrypted = /* await / EthCrypto.encryptWithPublicKey(
    alice.publicKey, // encrypt with alice's publicKey
    secretMessage
);

const decrypted = /* await / EthCrypto.decryptWithPrivateKey(
    alice.privateKey,
    encrypted
);

if (decrypted === secretMessage) console.log('success'); */
// END ENCRYPTION