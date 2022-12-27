# eth-crypto-test
### This repository has some code from No Cash Value LLC and Tree Cloud Product's 2021 NFTKEY project. Specifically, it contains the code from 0_eth_crypto_test, which pertains to testing whether it is possible to encrypt and decrypt messages using ethereum's public and private keys and also send said messages over the blockchain as transaction data.  
### It is indeed possible, as this code can demonstrate on a ganache virtual blockchain. This has also been tested on the Rinkeby (now deprecated) blockchain using the same code in December of 2021, so hypothetically there is no reason why it should not be possible to do the same thing on the actual Ethereum blockchain. 

## HOW TO SECTION (copied from guide.txt)

0_eth-crypto_test

summary: tests our ETH encrypt/decrypt pipeline, from emitting an event in our smart contract to decrypting a encrypted message sent to that smart contract
user

steps:

1. Run 'Demo' contract in ganache and use 'index.js' to listen to events and recover txhash

2. Use the txHash recovered from step 1. with 'recover_signedTxfromTxHash.js' to get full signed transaction data in human readable form with JSON-RPC calls

3. then take the full signed transaction data from step 2. and convert it into the rawTransaction hash using 'signedTxToRawTransaction.js', which will return the full RawTransaction hash

4. take the rawTransaction hash from step 3. and use it with 'recover_pubkey.js' to get the msg.sender's public key

5. use the public key from step 4. to encrypt a message with 'encrypt_eth_test.js'

6. decrypt the message from step 5. with the msg.sender's private key using 'decrypt_eth_test.js'

