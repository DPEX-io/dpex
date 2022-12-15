// SPDX-License-Identifier: MIT

pragma solidity 0.6.12;

import "../tokens/MintableBaseToken.sol";

contract DPLP is MintableBaseToken {
    constructor() public MintableBaseToken("DPEX LP", "DPLP", 0) {
    }

    function id() external pure returns (string memory _name) {
        return "DPLP";
    }
}
