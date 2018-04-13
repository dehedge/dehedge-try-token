pragma solidity ^0.4.18;

import './BaseContracts.sol';


contract DHTT is MintableToken {
    
    string public constant name = "go to https://try.dehedge.com";
    
    string public constant symbol = "DHTT";
    
    uint32 public constant decimals = 0;
    
    function DHTTCoin() public {        
        totalSupply = 3000000;
       balances[owner] = totalSupply;
    }
    
    function transferMany(uint256 _value, address[] receivers) onlyOwner public returns (bool) {
        for (uint i = 0; i < receivers.length; i++) {
             // Need to ve sure that balance is not less than 0 
             // SafeMath.sub will throw if there is not enough balance. 
             balances[receivers[i]] = balances[receivers[i]].add(_value);
             emit Transfer(owner, receivers[i], _value);
        }
        balances[owner] = balances[owner].sub(_value * receivers.length);
        
        return true; 
    }    
}

