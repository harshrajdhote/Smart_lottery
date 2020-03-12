const assert = require('assert')
const ganache = require('ganache-cli'); //web3 can be used for other purpose also
const Web3 = require('web3'); //web3 imports constructor thats why it is capital W
const web3 = new Web3(ganache.provider()); //ganache is netwrok and web3 is interface ganeche provider is intermediatery
//web3 is instance
const {interface,bytecode} = require('../compile');
//interface is js api
/* mocha
it - run a test and make an assertion (assertion means assumption in progrM must be valid)
describe - groups together 'it' functions
beforeEach - Execute some general setup code. 
like if all it are using some functionality then add there so that all can use


class Car{
    park(){
        return 'stopped';
    }
    drive(){
        return 'vroom';
    }
}
let car;
beforeEach(()=>{
     car = new Car();  

});
describe('CAR class',()=>{
    it('can park function',()=>{
        //const car = new Car();
        assert.equal(car.park(),'stopped');

    })
    it('can drive function',()=>{
       // const car = new Car();
        assert.equal(car.drive(),'vroom');

    })

})
contract is created through transcation*/
let accounts;
beforeEach(async ()=>{
    //Get a list of all accounts
    //every function is async in web3
     accounts = await web3.eth.getAccounts();//await becau control doesnt goes to next state without ref
     inbox = await new web3.eth.Contract(JSON.parse(interface))
     .deploy({data : bytecode, arguments: ['Hi there!']}) // second para is arguments to constructor of contract
     .send({from:accounts[0],gas:'1000000'})        //gas ask gas can used to deploy the contract 
});
describe('Inbox',()=>{ 
 it('deploys contract',()=>{
   // console.log(inbox);
   assert.ok(inbox.options.address); //check for existence
   
 });
 it("has a default message",async ()=>{
     const message = await inbox.methods.message().call(); //message call mehtod created by default
     assert.equal(message,"Hi there!")
 
 })
 it('can change the message',async ()=>{
    await inbox.methods.setMessage('bye').send({from:accounts[0]})//because for modification transcation executes
    const message = await inbox.methods.message().call();
    assert.equal(message,"bye"); 
})
});
//ABI code is code js to run contract its encoded contract in js which is here provided with interface
//thats why we are passing interface
/* javascript is sync , browser is a async , js code executed in sync manner
so whenever the things like callbacks occur browser make our code async
like with event queue when IO it take other function to execute
nd execute call back when it is pushed on to the queue.*/