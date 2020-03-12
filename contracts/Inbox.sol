pragma solidity ^0.4.17; //version specifies
contract Inbox{
    string public message;
    string public data;
    function Inbox(string initialMessage) public{
        message = initialMessage;
    }
    function setMessage(string newMessage) public{
        message = newMessage;
    }
    function getMessage() public view returns (string){
        return message; 
    }
}
