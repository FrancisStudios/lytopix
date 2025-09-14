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

    run = (BYTES) => {
        
    }
}