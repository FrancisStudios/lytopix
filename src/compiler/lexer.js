/**
 *  ------ [ Property of Francis Studios ] ------
 * ===========================
 * github: https://github.com/francisstudios
 * ©2025 Francis Studios Softwares by L.
*/

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
        });
    }

    static _syntaxRuleFinder = (syntax) => {
        switch (syntax) {
            /* Labels */
            case /\.\w+:/.test(syntax) ? syntax : false:
                break;

            /* Directives */
            case /\.\w+/.test(syntax) ? syntax : false:
                return LytopixTokenBuilder.directive(syntax);
                

            default:
                break;
        }
    }
}