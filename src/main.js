/**
 *  ------ [ Property of Francis Studios ] ------
 * ===========================
 * github: https://github.com/francisstudios
 * ©2025 Francis Studios Softwares by L.
*/

import LytopixCompiler from "./compiler/compiler.js";

const Compiler = LytopixCompiler.getInstance();


Compiler.compile(`
    .start
                                ;;non-inline comment
            lda $00ff00         ;;inline comment
            sta $000000
            rts
                                ;;
    `)