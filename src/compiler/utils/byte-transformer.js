/**
 *  ------ [ Property of Francis Studios ] ------
 * ===========================
 * github: https://github.com/francisstudios
 * ©2025 Francis Studios Softwares by L.
*/
import { ERROR_LOCATIONS, ERROR_TYPES } from "../ENUM.js";
import LytopixLogger from "./logger.js";

const Logger = LytopixLogger.getInstance();
/**
 * Converts String<Hex> into BYTES
 * @param {String} _hexString 
 * @returns {Uint8Array<BYTES> | null}
 */
const hexStringToBytes = (_hexString) => {
    const cleanedString = _hexString.replace(/\s/g, '');

    if (
        cleanedString.length % 2 !== 0
        || !/^[0-9a-fA-F]+$/.test(cleanedString)
    ) {
        Logger.error(
            ERROR_TYPES.SEGMENTATION_ERROR,
            ERROR_LOCATIONS.BYTE_TRANSFORMER,
            'Invalid hex notation detected - internal error!')
        return null;
    }

    const _bytesLength = (cleanedString.length / 2);
    const bytes = new Uint8Array(_bytesLength);

    let counter = 0;
    for (let i = 0; i < cleanedString.length; i += 2) {
        const hexByte = cleanedString.substring(i, i + 2);
        const byteValue = parseInt(hexByte, 16);
        bytes[counter] = byteValue;
        counter++;
    }

    return bytes;
}


export default hexStringToBytes;