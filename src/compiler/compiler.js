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

    /**
     * The external output of the compiler - expects an asm source
     * and returns a file or a string of bytes as an artifact
     * @param {String<ASM>} _asm_source 
     * @param {String<FilePath>} fileOutput 
     * @returns 
     */
    compile = (_asm_source, fileOutput = false) => {
        return new Promise(
            async (r, _) => {
                const HEXER = LytopixASMHexer.getInstance();

                const syntaxWebWithComments = await LytopixSyntaxizer(_asm_source);
                const syntaxWeb = await LytopixCommentExcluder(syntaxWebWithComments);
                const lexedTokenList = await LytopixASMLexer.tokenize(syntaxWeb);
                const hexadecimalFile = await HEXER.hex(lexedTokenList);

                if (!fileOutput) r(hexadecimalFile);
            }
        );
    }
}