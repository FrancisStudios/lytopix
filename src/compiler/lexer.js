/**
 *  ------ [ Property of Francis Studios ] ------
 * ===========================
 * github: https://github.com/francisstudios
 * ©2025 Francis Studios Softwares by L.
*/

/**
 * Input ASM -> Output Array<Instruction>?
 */
export default class LytopixASMLexer {
    static tokenize = (syntaxWeb) => {
        return new Promise((resolve, reject) => {
            for (let i = 0; i <= syntaxWeb.length - 1; i++) {
                const syntax = syntaxWeb[i];
                console.log(syntax);
            }
        });
    }

    static _syntaxRuleFinder = (syntax) => {
        
    }
}