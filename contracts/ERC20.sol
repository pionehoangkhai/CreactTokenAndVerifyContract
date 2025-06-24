// SPDX-License-Identifier: MIT
pragma solidity 0.8.30;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";

contract Dogs is ERC20 {
     address public owner;
    constructor() ERC20("Dogs", "DOGS") {
         owner = msg.sender;
        _mint(msg.sender, 1000000000e18);
    }

     function mint(address to, uint amount) external {
        require(
            msg.sender == owner,
            "Function must be called by the contract owner!"
        );
        _mint(to, amount);
    }
}
