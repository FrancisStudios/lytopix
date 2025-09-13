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
            lda 4294967295      
            sta $00000001         ;;inline comment
            rts
                                ;;
    `)