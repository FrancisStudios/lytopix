/**
 *  ------ [ Property of Francis Studios ] ------
 * ===========================
 * github: https://github.com/francisstudios
 * ©2025 Francis Studios Softwares by L.
*/

import { CONSTANTS } from "../compiler/ENUM.js"; // FOREIGN IMPORT

export default class LytopixRunner {
    instance
    memory = [];

    static getInstance = () => {
        if (!this.instance) this.instance = new LytopixRunner();
        return this.instance;
    }

    /**
     * Loads bytes into memory && prepares for 
     * execution -> next step is running now
     * @param {String<Bytes>} BYTES 
     * @returns {Promise<Boolean>}
     */
    load = (BYTES) => {
        return new Promise((resolve, reject) => {
            /** TODO: load bytes into memory */
            const computedMaxAddress = 1228800; //TODO: precalculate necessary space for program and other variables

            /** RESERVE SCREEN MEMORY SPACE 1228800 bytes */
            for (let _address = 0; _address < CONSTANTS.SCREEN_MEMORY_SIZE_BYTES; _address++) {
                this.memory.push('00');
            }
            console.log(this.memory);
            /** RESERVE GENERAL PURPOSE MEMORY SPACE */
            // TODO: determine necessary size for variables

            /** LOAD PROGRAM INTO MEMORY */


        });
    }

    run = (BYTES) => {

    }
}