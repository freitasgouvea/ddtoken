//SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.6.8;

import './libraries/SafeMath.sol';
import "./ownership/Ownable.sol";
import "./lifecycle/Pausable.sol";

contract Vault is Ownable, Pausable {

    using SafeMath for uint;

    string internal _name;
    address internal _coinAddress;

    mapping (address => uint256) internal _balances;

    event Deposit(address indexed account, uint256 amount);
    event Withdraw(address indexed account, uint256 amount);

    constructor (
        string memory name, 
        string memory coinAddress
    ) public
    {
        _name = name;
        _coinAddress = coinAddress;
    }

    function name(
    ) public view returns (string memory)
    {
        return _name;
    }

    function coinAddress(
    ) public view returns (string memory)
    {
        return _coinAddress;
    }


   function balanceOf(
       address _owner
    ) public override view returns (uint256 balance) 
    {
        return _balances[_owner];
    }
    

    function deposit(
        uint256 _value
    ) public payable override
        whenNotPaused 
      returns (bool)
    {
        require(_value <= _balances[msg.sender], 'Vault: insufficient balance');
        
        //...
        
        emit Deposit(msg.sender, _value);
        
        return true;
    }
    

   function withDraw(
        uint256 _value
    ) public payable override
        whenNotPaused
      returns (bool) 
    {
        require(_value <= _balances[_from], 'Vault: insufficient balance');

        //...
        
        emit Transfer(msg.sender, _value);
        
        return true;
   }

}
