/**
 *  ------ [ Property of Francis Studios ] ------
 * ===========================
 * github: https://github.com/francisstudios
 * ©2025 Francis Studios Softwares by L.
*/

import LytopixASMLexer from "./lexer.js";
import LytopixSyntaxizer from "./utils/syntaxizer.js";
import LytopixCommentExcluder from "./utils/comment.js";
import LytopixASMHexer from "./hexer.js";

export default class LytopixCompiler {

    instance;

    static getInstance = () => {
        if (!this.instance) this.instance = new LytopixCompiler();
        return this.instance;
    }

    compile = (_asm_source) => {
        return new Promise(
            async (r, _) => {
                const HEXER = LytopixASMHexer.getInstance();

                const syntaxWebWithComments = await LytopixSyntaxizer(_asm_source);
                const syntaxWeb = await LytopixCommentExcluder(syntaxWebWithComments);
                const lexedTokenList = await LytopixASMLexer.tokenize(syntaxWeb);
                const hexadecimalFile = await HEXER.hex(lexedTokenList);
            }
        );
    }
}