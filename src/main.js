/**
 *  ------ [ Property of Francis Studios ] ------
 * ===========================
 * github: https://github.com/francisstudios
 * ©2025 Francis Studios Softwares by L.
*/

import LytopixCompiler from "./compiler/compiler.js";
import LytopixFrameTimer from "./runner/frame-timer.js";
import LytopixRunner from "./runner/run.js";

const Compiler = LytopixCompiler.getInstance();
const Runner = LytopixRunner.getInstance();

const main = async () => {
    const BYTES = await Compiler.compile(`
                            .start
                                                        ;;non-inline comment
                                    lda #$ffe1ffe4     
                                    sta $00000001         ;;inline comment
                                    rts
                                                        ;;
                        `);


    console.log(BYTES);
    const codeLoaded = await Runner.load(BYTES);


}

main();