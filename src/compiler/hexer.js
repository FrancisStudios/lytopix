/**
 *  ------ [ Property of Francis Studios ] ------
 * ==============================================
 * github: https://github.com/francisstudios
 * ©2025 Francis Studios Softwares by L.
*/

import { TOKEN_TYPES, TOKEN_VERBS } from "./ENUM.js";
import BYTE_DICTIONARY from "./utils/byte-dict.js";

export default class LytopixASMHexer {
    instance
    BYTES = '00'

    static getInstance = () => {
        if (!this.instance) this.instance = new LytopixASMHexer();
        return this.instance
    }

    constructor() { }

    /* Formats bytes to two spaces like 1 -> 01 */
    byteFormat = (byte) => {
        let output;
        byte = byte.toString(16)
        byte.length == 1
            ? output = `0${byte}`
            : output = byte
        return output
    }

    /* Builds hexadecimal map like 01 1a 1b and so forth */
    hex = (_lexedTokenList) => {
        return new Promise((resolve, reject) => {
            for (let i = 0; i <= _lexedTokenList.length - 1; i++) {
                const target = _lexedTokenList[i];

                switch (target) {
                    /* .start                                                  */
                    case (target.type == TOKEN_TYPES.DIRECTIVE && target.verb == TOKEN_VERBS.START) ? target : false:
                        this.BYTES += ` ${this.byteFormat(BYTE_DICTIONARY.START_DIRECTIVE.hex[0])}`;
                        break;


                    default:
                        break;
                }
            }
            console.log('BYTES', this.BYTES);
        });
    }
}

