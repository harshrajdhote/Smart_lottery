pragma solidity ^0.4.17; //version specifies
contract Lottery{
    address public manager;
    address[] public players;
    function Lottery() public {
       /* global object has some properties on it that 
        describe both who just sent in a transcatio to the network
         msg available with any function invocation*/
         manager = msg.sender;
    } 
    function enter() public payable{
        require(msg.value > .01 ether);/* to implement condition if condn not satisfied then function doesnt execute*/
        /*msg value is in wei -- ether keyword auto convert ether to wei*/
        players.push(msg.sender);
    }
    function random() private view returns (uint256){
        return uint(sha3(block.difficulty,now,players));
    }
    function pickWinner() public restricted {
        
        uint index = random() % players.length;
        players[index].transfer(this.balance); //transfer method available on every address, balance gives the amount of money available in smart contract
        players = new address[](0); //for reset after first round and balance is already transfered
        
    } 
   
    modifier restricted(){
        require(msg.sender == manager);
        _;
    } //fun modifiers are used to reduces the code write, all function code added inplace of _ here;
    function getPlayers() public restricted returns (address []){
        return players;
    }
    
}
