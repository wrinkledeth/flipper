pragma solidity >=0.7.0 <0.9.0;
// SPDX-License-Identifier: MIT

import "hardhat/console.sol";

contract Flipper{
    bool private value;

    constructor(bool _initvalue){
        console.log("Deploying a Flipper with initvalue set to:", _initvalue);
        value = _initvalue;
    }

    function flip() public {
        console.log("Flipping bit from", value, " to ", !value);
        value = !value;
    }

    function get() public view returns (bool){
        return value;
    }
}