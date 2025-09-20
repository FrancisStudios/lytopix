/**
 *  ------ [ Property of Francis Studios ] ------
 * ===========================
 * github: https://github.com/francisstudios
 * ©2025 Francis Studios Softwares by L.
*/

/**
 * Converts String<Hex> into BYTES
 * @param {String} _hexString 
 * @returns {Array<Number> | null}
 */
const hexStringToBytes = (_hexString) => {
    const cleanedString = _hexString.replace(/\s/g, '');

    if (
        cleanedString.length % 2 !== 0
        || !/^[0-9a-fA-F]+$/.test(cleanedString)
    ) {
        console.error("Invalid input string. It must contain only valid hexadecimal characters and have an even number of digits.");
        return null;
    }

    const bytes = [];
    for (let i = 0; i < cleanedString.length; i += 2) {
        const hexByte = cleanedString.substring(i, i + 2);
        const byteValue = parseInt(hexByte, 16);
        bytes.push(byteValue);
    }

    return bytes;
}


export default hexStringToBytes;