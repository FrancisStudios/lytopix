/**
 *  ------ [ Property of Francis Studios ] ------
 * ===========================
 * github: https://github.com/francisstudios
 * ©2025 Francis Studios Softwares by L.
*/

import { CONSTANTS } from "../compiler/ENUM.js"; // FOREIGN IMPORT
import BYTE_DICTIONARY from "../compiler/utils/byte-dict.js";

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
     * benne vagyok Endre :D (Sopronból)
     */
    load = (BYTES) => {
        return new Promise((resolve, reject) => {
            let isLoaded = false;

            /** RESERVE SCREEN MEMORY SPACE 1228800 bytes */
            for (let _address = 0; _address < CONSTANTS.SCREEN_MEMORY_SIZE_BYTES; _address++) {
                this.memory.push(0x00);
            }

            /** RESERVE GENERAL PURPOSE MEMORY SPACE */
            const spaceAllocatorSignalByteIndex =
                BYTES
                    .indexOf(BYTE_DICTIONARY.SPACE_ALLOCATOR_SIGNAL.hex[0]);

            const _posI = spaceAllocatorSignalByteIndex;

            const memoryToBeReservedInBytes = parseInt(
                `${BYTES[_posI + 1]}${BYTES[_posI + 2]}${BYTES[_posI + 3]}${BYTES[_posI + 4]}`,
                10
            );

            for (let _v_allocator = 0; (_v_allocator < memoryToBeReservedInBytes); _v_allocator++) {
                this
                    .memory.push(0x00);
            }

            /** LOAD PROGRAM INTO MEMORY */
            for (
                let ProgrramCounterForLoader = 0;
                ProgrramCounterForLoader <= BYTES.length - 1;
                ProgrramCounterForLoader++
            ) {
                this
                    .memory
                    .push(BYTES[ProgrramCounterForLoader]);
            }

            console.log(this.memory);
            if (isLoaded) resolve(isLoaded);
        });
    }

    run = (BYTES) => {

    }
}