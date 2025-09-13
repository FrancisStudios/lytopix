/**
 *  ------ [ Property of Francis Studios ] ------
 * ===========================
 * github: https://github.com/francisstudios
 * ©2025 Francis Studios Softwares by L.
*/

import { ERROR_LOCATIONS, ERROR_TYPES } from "../ENUM.js";
import LytopixLogger from "./logger.js";

const Logger = LytopixLogger.getInstance();
export default class LytopixMath {


    /**
     * Returns the base system 2 | 10 | 16 depending on incoming
     * parameter string (used for processing fn parametes in lexer)
     * @param {String<Number<Bin|Dec|Hex>>} _number 
     * @returns {Integer} 
     */
    static figureOutBaseSystem = (_number) => {
        switch (_number) {
            case /^%[01]{0,32}$/.test(_number) ? _number : false:
                return 2;

            case /^(?:0|[1-9]\d{0,9})$/.test(_number) ? _number : false:
                return 10;

            case /^[$]{1}[0123456789abcdefABCDEF]{0,8}$/.test(_number) ? _number : false:
                return 16;

            default:
                return 0;   // ERROR CASE
        }
    }

    /**
     * Converts decimal numbers (or strs) to hex
     * @param {Number|String<Number>} _number 
     * @returns {String<Number<Hex>>} 
     */
    static decimal2Hex = (_number) => {
        if (!/^[0123456789]+$/.test(_number))
            Logger.error(
                ERROR_TYPES.MATH_ERROR,
                ERROR_LOCATIONS.MATH,
                'Can not parse input number as decimal'
            );
        return parseInt(_number, 10)
            .toString(16);
    }

    /**
    * Converts binary numbers (or strs) to hex
    * @param {Number|String<Number>} _number 
    * @returns {String<Number<Bin>>} 
    */
    static binary2Hex = (_number) => {
        const _bin = _number
            .replace('%', '')
            .trim();

        if (!/^[01]+$/.test(_bin))
            Logger.error(
                ERROR_TYPES.MATH_ERROR,
                ERROR_LOCATIONS.MATH,
                'Can not parse input number as binary'
            );

        const hexadecimal = parseInt(_bin, 2).toString(16);
        const Hex4ByteSpace = LytopixMath
            .stringBytePadding(hexadecimal, 4);

        return Hex4ByteSpace;
    }

    static stringBytePadding = (_hexadecimalNumber, byteSpace) => {
        let leadingZeros
        if ((byteSpace * 2) >= _hexadecimalNumber.length) {
            const numberOfZerosToAddInFront = (byteSpace * 2) - (_hexadecimalNumber.length)
            leadingZeros = '0'.repeat(numberOfZerosToAddInFront);
        } else {
            leadingZeros = '';
        }

        return `${leadingZeros}${_hexadecimalNumber}`;
    }

    /**
     * Checks if hexadecimal number | string<number> can fit 
     * into a four byte frame
     * @param {String<NumberHex>} _number 
     * @returns {Boolean}
     */
    static isFourBytes = (_number) => {
        return _number.length <= 8;
    }
}