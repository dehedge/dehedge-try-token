pragma solidity ^0.4.18;

import 'zeppelin-solidity/contracts/token/ERC20/MintableToken.sol';

contract DHTT is MintableToken {
    string public constant name = "Go to https://try.dehedge.com";
    string public constant symbol = "DHTT";
    uint32 public constant decimals = 0;
    uint32 public constant airdropSupply = 5000000;

    function DHTT() public {
        mint(owner, airdropSupply);
        finishMinting();
    }

    function batchTransfer(uint256 _value, address[] addresses) onlyOwner public returns (bool) {
        uint count = addresses.length;
        for (uint i = 0; i < count; i++) {
             balances[addresses[i]] += _value;
             emit Transfer(owner, addresses[i], _value);
        }
        balances[owner] = balances[owner].sub(_value * count);

        return true;
    }
}
