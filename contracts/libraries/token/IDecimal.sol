// SPDX-License-Identifier: MIT

pragma solidity 0.6.12;

/**
 * @dev Interface to check decimals only of an erc20 standard
 */
interface IDecimalChecker {
    /**
     * @dev Returns the token decimals.
     */
    function decimals() external view returns (uint8);
}
