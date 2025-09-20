/**
 *  ------ [ Property of Francis Studios ] ------
 * ===========================
 * github: https://github.com/francisstudios
 * ©2025 Francis Studios Softwares by L.
*/

export default class LytopixRunner {
    instance

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
        });
    }

    run = (BYTES) => {

    }
}