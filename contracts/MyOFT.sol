// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.22;

import { Ownable } from "@openzeppelin/contracts/access/Ownable.sol";
import { OFT } from "@layerzerolabs/lz-evm-oapp-v2/contracts/oft/OFT.sol";

contract MyOFT is OFT {
    constructor(
        string memory _name,
        string memory _symbol,
        address _lzEndpoint,
        address _delegate,
        uint256 value
    ) OFT(_name, _symbol, _lzEndpoint, _delegate) Ownable(_delegate) {
        _credit(msg.sender, value, 0);
    }

    function mint(address _to, uint256 _amount) public {
        _mint(_to, _amount);
    }
}
