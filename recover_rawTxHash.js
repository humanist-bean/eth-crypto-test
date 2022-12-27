// Recover the Raw Transaction Hash From the ETH Blockchain for use in recover_pubkey.js


// TRUFFLE COMMAND LINE STUFF BELOW

// USE "npx truffle migrate --reset" to recompile contracts with file changes

// initialize dm object which is an instance of Demo contract
var dm; Demo.at("0xfaFBb1B11Db14cf84fa6E5C60D0789ef0D99b74a").then(function (x) { dm = x });

// send some money to the demo contract
dm.contribute({ from: "0x47fA8874B1707456c2f342C424303b6732a31090", value: 5000000000000000000 });
// END TRUFFLE STUFF


// BELOW IS AN RPC CALL THAT YOU CAN SIMPLY COPY AND PASTE INTO TERMINAL WHILE
// WHILE GANACHE IS RUNNING (ganache is RPC provider see "http:...:7545" at end) TO
// GET A FULL RAW TRANSACTION HASH GIVEN THE SHORTENED TRANSACTION HASH WHICH IS 
// THE STRING IN "params"
curl -H "Content-Type: application/json" -X POST --data \
'{"jsonrpc":"2.0","method":"eth_getTransactionByHash","params":["0x64ad50e10c4bb7268c4b5399126bd7abbf1968c0d92838b18b6dbad17639fa33"],"id":1}' http://localhost:7545
// eth_getTransactionByHash is built in ETH JSON-RPC method

// SEE DOCS HERE: https://etclabscore.github.io/core-geth/JSON-RPC-API/modules/eth/#eth_getrawtransactionbyhash