/**
 *  ------ [ Property of Francis Studios ] ------
 * ==============================================
 * github: https://github.com/francisstudios
 * ©2025 Francis Studios Softwares by L.
*/

import { ERROR_LOCATIONS, ERROR_TYPES, TOKEN_TYPES, TOKEN_VERBS } from "./ENUM.js";
import LytopixGenericParameterResolver from "./utils/address-value-parameter-resolver.js";
import BYTE_DICTIONARY from "./utils/byte-dict.js";
import LytopixLogger from "./utils/logger.js";

export default class LytopixASMHexer {
    instance
    BYTES = '00'
    logger = LytopixLogger.getInstance();
    subroutineHistory = [];

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

    /**
     * If target.params[0] is an actual number or address
     * it will process it differently and add address byte if needed
     * @param {String<Parameter>} target 
     * @param {Number<Index>} nthParameter - previously target.params[0]
     */
    processAddressOrNumberParameter = (target, nthParameter = 0) => {
        /* Resolve if Parameter is an actual number */
        const processActualNumberParameter = (parameter) => {
            target.params[nthParameter] = parameter.replace('#', '')
            this.BYTES += ` ${this.byteFormat(BYTE_DICTIONARY.NIL.hex[0])}`;
        }

        const processAddressNumberParameter = () => {
            this.BYTES += ` ${this.byteFormat(BYTE_DICTIONARY.ADDRESS_SIGNATURE.hex[0])}`;
        }

        /^#[%$0-9a-fA-F][0-9a-fA-F]+$/.test(target.params[nthParameter])
            ? processActualNumberParameter(target.params[nthParameter])
            : processAddressNumberParameter();
    }

    /* Builds hexadecimal map like 01 1a 1b and so forth */
    hex = (_lexedTokenList) => {
        return new Promise((resolve, reject) => {
            for (let i = 0; i <= _lexedTokenList.length - 1; i++) {
                const target = _lexedTokenList[i];

                switch (target) {

                    /* .start                                                  */
                    case (
                        target.type == TOKEN_TYPES.DIRECTIVE
                        && target.verb == TOKEN_VERBS.START
                    )
                        ? target : false:

                        this.BYTES += ` ${this.byteFormat(BYTE_DICTIONARY.START_DIRECTIVE.hex[0])}`;
                        break;


                    /* lda, ldx, ldy                                           */
                    case (
                        target.type == TOKEN_TYPES.INSTRUCTION
                        && /^ld[axy]$/.test(target.verb)
                    )
                        ? target : false:
                        switch (target.verb) {
                            case 'lda':
                                this.BYTES += ` ${this.byteFormat(BYTE_DICTIONARY.LOAD_ACCUMULATOR.hex[0])}`;
                                break;
                            case 'ldx':
                                this.BYTES += ` ${this.byteFormat(BYTE_DICTIONARY.LOAD_XINDEX.hex[0])}`;
                                break;
                            case 'ldy':
                                this.BYTES += ` ${this.byteFormat(BYTE_DICTIONARY.LOAD_YINDEX.hex[0])}`;
                                break;
                        }
                        /* RESOLVE PARAMETERS FOR LDA, LDX, LDY */
                        this.processAddressOrNumberParameter(target);
                        this.BYTES += LytopixGenericParameterResolver(
                            this.byteFormat(target.params[0])
                        );
                        break;


                    /* sta, stx, sty                                           */
                    case (
                        target.type == TOKEN_TYPES.INSTRUCTION
                        && /^st[axy]$/.test(target.verb)
                    )
                        ? target : false:
                        switch (target.verb) {
                            case 'sta':
                                this.BYTES += ` ${this.byteFormat(BYTE_DICTIONARY.STORE_ACCUMULATOR.hex[0])}`;
                                break;
                            case 'stx':
                                this.BYTES += ` ${this.byteFormat(BYTE_DICTIONARY.STORE_XINDEX.hex[0])}`;
                                break;
                            case 'sty':
                                this.BYTES += ` ${this.byteFormat(BYTE_DICTIONARY.STORE_YINDEX.hex[0])}`;
                                break;
                        }
                        /* RESOLVE PARAMETERS FOR STA, STX, STY */
                        this.processAddressOrNumberParameter(target);
                        this.BYTES += LytopixGenericParameterResolver(
                            this.byteFormat(target.params[0])
                        );
                        break;

                    /* rts                                                   */
                    case target.verb == TOKEN_VERBS.RETURN_FROM_SUB ? target : false:
                        /**
                         * If there are subroutines we are already in jump to the caller's memory address
                         * In other ways it should signify the end of the program
                         *  */

                        if (this.subroutineHistory.length == 0)
                            this.BYTES += ` ${this.byteFormat(BYTE_DICTIONARY.END_PROGRAM.hex[0])}`;

                        break;

                    default:
                        this.logger.error(
                            ERROR_TYPES.INVALID_TOKEN, ERROR_LOCATIONS.HEXER,
                            ` trying to find byte representation for '${target.verb}' with name '${target.name}'`
                        );
                        break;
                }
            }
            resolve(this.BYTES);
        });
    }
}

