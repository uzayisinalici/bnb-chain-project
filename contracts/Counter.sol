//SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

contract Counter{
    uint public total;
    uint public substracted;
    uint public multiplied;
    uint public divided;

    function add(uint a,uint b) public  returns(uint){
        return  total = a + b;
    } 

    function substract(uint a, uint b) public returns(uint){
        return substracted = a - b;
    }

    function multiply(uint a, uint b) public returns(uint){
        return multiplied = a * b;
    }

    function divide(uint a, uint b) public returns(uint){
        require(b != 0, "Division by zero is not allowed.");
        return divided = a / b;
    }

    function allFunctions() public view returns(uint,uint,uint,uint){
        return (total,substracted,multiplied,divided);
    }
}