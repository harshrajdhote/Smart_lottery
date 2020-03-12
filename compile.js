const path = require('path');
const fs = require('fs');
const solc = require('solc');
const inboxPath = path.resolve(__dirname,'contracts','Inbox.sol');
const source = fs.readFileSync(inboxPath,'utf8');
//console.log(solc.compile(source,1)); //object of contract interface is abi in object
module.exports = solc.compile(source,1).contracts[':Inbox']; //our contract name
//testrpc older version of ganache
//web3 lib is used to iteract with the deployed contact
