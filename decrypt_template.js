// ETH-CRYPTO TEST 0 - TESTING THE LIBRARY WITH ETHEREUM
//SETUP
const EthCrypto = require('eth-crypto');

// BEGIN DECRYPTION

// START BY COPYING ALICE AND SECRET MESSAGE INFO OVER FROM
// WHAT IS CONSOLE LOGGED DURING encrypte_template.js

const alice = {
    address: '0xdCB94679aC28c6902E105F34E97d9182002481CD',
    privateKey: '0xb7c28c5ca0fbc09aae100797a519e808086e3c84ae3892e8435b95c7b33eb2a3',
    publicKey: '7826416e4981875ce132b8f8f96d8227ed3c4cf1ec22e277a4de8b94e108f2b601040291c820977754d826832f51ed76f13a28ff4f78c9d3cb4622662008e291'
};

const secretMessageHash = {
    iv: 'eb9e1d4f36c80391f6ac901c278ac394',
    ephemPublicKey: '04e37566b0a5277f89e415c93770464fe5b4b63bc0909bc6f3b17824c54d6ac1ab1a8f976bc8cf2c6aa35bf89e95562f0698fa356d726f522a013baa516a2a8154',
    ciphertext: 'f876edcae822681507e6c60850be593a',
    mac: '5e7e39ce1e8a179559b3544090f0ecb5eafdf0f809ee04221909472ef807581f'
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