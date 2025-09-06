/**
 *  ------ [ Property of Francis Studios ] ------
 * ===========================
 * github: https://github.com/francisstudios
 * ©2025 Francis Studios Softwares by L.
*/

import LytopixASMLexer from "./lexer.js";
import LytopixSyntaxizer from "./utils/syntaxizer.js";

export default class LytopixCompiler {

    instance;

    static getInstance = () => {
        if (!this.instance) this.instance = new LytopixCompiler();
        return this.instance;
    }

    compile = (_asm_source) => {
        return new Promise(
            async (r, _) => {

                const syntaxWeb = await LytopixSyntaxizer(_asm_source);
                const whatever = await LytopixASMLexer.tokenize(syntaxWeb);
                
            }
        );
    }
}