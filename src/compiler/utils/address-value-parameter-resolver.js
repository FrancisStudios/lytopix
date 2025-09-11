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
 * @param {Param<Instruction>} _parameters 
 * @returns {String<HexadecimalUnit32>}
 */
const LytopixGenericParameterResolver = (_parameters) => {

    switch (_parameters) {
        case /[0123456789abcdef$%]+[+ -]+[0123456789abcdef$%]+/.test(_parameters)
            ? _parameters : false:
            // composite
            break;

        case /^[0123456789abcdef$%]+$/.test(_parameters) ? _parameters : false:
            return singleNumberParameter(_parameters);

        default:
            Logger.error(
                ERROR_TYPES.INVALID_PARAM,
                ERROR_LOCATIONS.PARAM_RESOLVER_GENERIC,
                `trying to resolve ${_parameters} but can not process as a single or composite parameter!`
            );
            break;
    }

}

const singleNumberParameter = (_param) => {
    const base = LytopixMath.figureOutBaseSystem(_param);
    console.log(base, _param)

    switch (base) {
        case 2: // CONTINUE HERE NEXT TIME - math.js
            break;

        case 10: // CONTINUE HERE NEXT TIME - math.js
            break;

        case 16:
            return ` ${hexToStringFormat(_param)}`;
    }
}

export default LytopixGenericParameterResolver;