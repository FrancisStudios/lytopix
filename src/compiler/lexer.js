/**
 *  ------ [ Property of Francis Studios ] ------
 * ===========================
 * github: https://github.com/francisstudios
 * ©2025 Francis Studios Softwares by L.
*/

import { REGISTERS } from "./ENUM.js";
import LytopixTokenBuilder from "./utils/token-builder.js";

/**
 * Input ASM -> Output Array<Instruction>?
 */
export default class LytopixASMLexer {
    static tokenize = (syntaxWeb) => {
        return new Promise((resolve, reject) => {
            const TokenCollection = [];

            for (let i = 0; i <= syntaxWeb.length - 1; i++) {
                const syntax = syntaxWeb[i];
                const token = LytopixASMLexer._syntaxRuleFinder(syntax);
                if (token) TokenCollection.push(token);

                console.log(syntax);
            }

            console.log(TokenCollection);
            resolve(TokenCollection);
        });
    }

    static _syntaxRuleFinder = (syntax) => {
        switch (syntax) {

            case /\.\w+:/.test(syntax) ? syntax : false:
                return LytopixTokenBuilder.label(syntax);

            case /\.\w+/.test(syntax) ? syntax : false:
                return LytopixTokenBuilder.directive(syntax);

            case /^lda\s[a-zA-Z0-9]*/.test(syntax) ? syntax : false:
                return LytopixTokenBuilder.loadRegister(REGISTERS.A, syntax);

            case /^ldx\s[a-zA-Z0-9]*/.test(syntax) ? syntax : false:
                return LytopixTokenBuilder.loadRegister(REGISTERS.X, syntax);

            case /^ldy\s[a-zA-Z0-9]*/.test(syntax) ? syntax : false:
                return LytopixTokenBuilder.loadRegister(REGISTERS.Y, syntax);

            case /^sta\s[a-zA-Z0-9]*/.test(syntax) ? syntax : false:
                return LytopixTokenBuilder.storeRegister(REGISTERS.A, syntax);

            case /^stx\s[a-zA-Z0-9]*/.test(syntax) ? syntax : false:
                return LytopixTokenBuilder.storeRegister(REGISTERS.X, syntax);

            case /^sty\s[a-zA-Z0-9]*/.test(syntax) ? syntax : false:
                return LytopixTokenBuilder.storeRegister(REGISTERS.Y, syntax);

            default:
                break;
        }
    }
}