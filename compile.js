const path = require('path');
const fs = require('fs');
const solc = require('solc');
const lotteryPath = path.resolve(__dirname,'contracts','Lottery.sol');
const source = fs.readFileSync(lotteryPath,'utf8');
//console.log(solc.compile(source,1)); //object of contract interface is abi in object
module.exports = solc.compile(source,1).contracts[':Lottery']; //our contract name
//testrpc older version of ganache
//web3 lib is used to iteract with the deployed contact
