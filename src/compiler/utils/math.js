/**
 *  ------ [ Property of Francis Studios ] ------
 * ===========================
 * github: https://github.com/francisstudios
 * ©2025 Francis Studios Softwares by L.
*/

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

            case /^-?(?:0|[1-9]\d{0,9})$/.test(_number) ? _number : false:
                return 10;

            case /^[$]{1}[0123456789abcdefABCDEF]{0,8}$/.test(_number) ? _number : false:
                return 16;

            default:
                return 0;   // ERROR CASE
        }

    }
}