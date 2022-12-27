// ETH-CRYPTO TEST 0 - TESTING THE LIBRARY WITH ETHEREUM
//SETUP
const EthCrypto = require('eth-crypto');

// BEGIN ENCRYPTION

// create identitiy with key-pairs and address
// copied and pasted values directly from ganache
const alicePublicKey = 'd77866ac4e402edfec982e6f413e71258367ed8e600df58b349b57012063d7128e8f3ce482e1495d4b406e102fa12cbab200ec7542bdafb42714c9cff224d9cf';
// address with this pub key = 
// 0x13b0431c309f23cae4cb7362b95317f1fbad40ce


const secretMessage = 'EAT MY ASS!';

// Call start
(async () => {
    console.log('before start');

    const encrypted = await EthCrypto.encryptWithPublicKey(
        alicePublicKey, // encrypt with alice's publicKey
        secretMessage
    );

    console.log('Encrypted message:\n', encrypted);

    console.log('after start');
})();

// END ENCRYPTION
