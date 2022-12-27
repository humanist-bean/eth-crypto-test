// ETH-CRYPTO TEST 0 - TESTING THE LIBRARY WITH ETHEREUM
//SETUP
const EthCrypto = require('eth-crypto');

// BEGIN DECRYPTION

// START BY COPYING ALICE AND SECRET MESSAGE INFO OVER FROM
// WHAT IS CONSOLE LOGGED DURING encrypte_template.js

const alice = {
    address: '0xdCB94679aC28c6902E105F34E97d9182002481CD',
    privateKey: '0x13cd1df8b8843767106c374c86624c165e7df1a9a95c953464398c0e9bcd8d0b',
    publicKey: '7826416e4981875ce132b8f8f96d8227ed3c4cf1ec22e277a4de8b94e108f2b601040291c820977754d826832f51ed76f13a28ff4f78c9d3cb4622662008e291'
};

const secretMessageHash = {
    iv: '602da9d1765318aa65d8a7b12dcec8a0',
    ephemPublicKey: '04e75e55c2d4fa863c7424de8d976033d29e6849efd46d898abc467e1d4fdc1534ee3fa26d0ada876b48060fdef1a304b09086daeb56fe6b9308ce84f2194fbdf4',
    ciphertext: '7911fcd4fb540a016d15584b76588da4',
    mac: '06bbb2a7ee1f0fa072a952496d67237f9d84f4fc50a127ddccfe010089f3304a'
};

// Call start
(async () => {
    console.log('before start');

    const decrypted = await EthCrypto.decryptWithPrivateKey(
        alice.privateKey,
        secretMessageHash
    ); 

    console.log('Decrypted Message:\n', decrypted);

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