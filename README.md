# eth-crypto-test
### This repository has some code from No Cash Value LLC and Tree Cloud Product's 2021 NFTKEY project. Specifically, it contains the code from 0_eth_crypto_test, which pertains to testing whether it is possible to encrypt and decrypt messages using ethereum's public and private keys and also send said messages over the blockchain as transaction data.  
### It is indeed possible, as this code can demonstrate. In fact, we actually tested this on the actual Ethereum blockchain in September of 2021 by adding a message encrypted with my public key in the "input" section of a NFT transaction, and then decrypting the message using my private key and the code in this repository. This is the link to that ethereum transaction: https://etherscan.io/tx/0x8d71b9e84f76dc2c4ee6200307cce6e6e750ac55e039bc3117728187f5194d58
### So just to be clear, it is possible to extract an Ethereum user's public key from one of their transactions, use this public key to encrypt a message, put that message in a transaction's "input" section, and then decrypt the message after it has been posted to the blockchain using the private key associated with the public key used to encrypt the message. The code in this repository does all that. 


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

