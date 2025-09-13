/**
 *  ------ [ Property of Francis Studios ] ------
 * ===========================
 * github: https://github.com/francisstudios
 * ©2025 Francis Studios Softwares by L.
*/

import { ERROR_LOCATIONS, ERROR_TYPES } from "../ENUM.js";
import LytopixLogger from "./logger.js";
import LytopixMath from "./math.js";

const Logger = LytopixLogger.getInstance();

/**
 * Transform string hexes into the correct
 * format '00000000' -> '00 00 00 00' 
 * @param {sring} _input 
 * @returns 
 */
const hexToStringFormat = (_input) => {
    return _input
        .replace('$', '')
        .match(/.{1,2}/g)
        .join(' ');
}

/**
 * Receives a parameter as a string of '$0ef10000' or composite  '$0ef10000 + $0ba1034f0'
 * can be hexadecimal or decimal or binary (only these systems are supported by Lytopix)
 * @param {Param<Instruction>} _param_ 
 * @returns {String<HexadecimalUnit32>}
 */
const LytopixGenericParameterResolver = (_param_) => {

    switch (_param_) {
        case /[0123456789abcdef$%]+[+ -]+[0123456789abcdef$%]+/.test(_param_)
            ? _param_ : false:
            // composite
            break;

        case /^[0123456789abcdef$%]+$/.test(_param_) ? _param_ : false:
            return singleNumberParameter(_param_);

        default:
            Logger.error(
                ERROR_TYPES.INVALID_PARAM,
                ERROR_LOCATIONS.PARAM_RESOLVER_GENERIC,
                `Trying to resolve ${_param_} but can not process as a single or composite parameter!`
            );
            break;
    }

}

/**
 * Gets a single number parameter from an instruction like xxx #$ff00ff00 or
 * xxx $ff00ff00 -> and processes the bytes into -> ff 00 ff 00 format
 * @param {String<Number>} _param 
 * @returns {String<FormattedHex>} 
 */
const singleNumberParameter = (_param) => {
    const base = LytopixMath.figureOutBaseSystem(_param);
    let hexValue;

    switch (base) {
        case 2:
            hexValue = LytopixMath.binary2Hex(_param);
            return ` ${hexToStringFormat(hexValue)}`;

        case 10:
            hexValue = LytopixMath.decimal2Hex(_param)
            if (parseInt(_param, 10) <= 4294967295)
                return ` ${hexToStringFormat(hexValue)}`;
            else
                Logger.error(
                    ERROR_TYPES.SEGMENTATION_ERROR,
                    ERROR_LOCATIONS.PARAM_RESOLVER_GENERIC,
                    'Decimal number is larger than 0xffffffff - can not fit in frame'
                );
            break;

        case 16:
            return ` ${hexToStringFormat(_param)}`;

        /* ERROR HANDLING FOR LARGER THAN FRAME NUMBERS */
        case 0:
            Logger.error(
                ERROR_TYPES.MATH_ERROR,
                ERROR_LOCATIONS.PARAM_RESOLVER_GENERIC,
                `Base system determination error - wrong numerical signature or value exceeds the 4 byte frame!`
            )
            break;
    }
}

export default LytopixGenericParameterResolver;