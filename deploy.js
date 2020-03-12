const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('Web3');
const {interface,bytecode} = require('./compile')
const provider = new HDWalletProvider(
    'boss tongue spring sibling dirt enemy vehicle little unique aspect unit remain',
    'https://ropsten.infura.io/v3/2c5f62168b9548859f19b2d6385fd31f',

);
const web3 = new Web3(provider);

const deploy = async () =>{
    
    const accounts = await web3.eth.getAccounts();
    //console.log("adss")
    console.log("Attempting to deploy from account",accounts[0])
    const result = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({data : '0x' + bytecode})//0x not mentioned in the video
    .send({gas : '1000000',from : accounts[0]}); //max gas for given transaction
   console.log('Contract deployed to',result.options.address);
};
deploy()
//if we pay then anyone can change the values of var as by loading the contract
//on the remix and calling function 
//we cant access array of array directly from solidity into web3 commnn gap