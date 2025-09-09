/**
 *  ------ [ Property of Francis Studios ] ------
 * ===========================
 * github: https://github.com/francisstudios
 * ©2025 Francis Studios Softwares by L.
*/

export default class LytopixLogger {
    instance
    errorList = [];

    static getInstance = () => {
        if (!this.instance) this.instance = new LytopixLogger();
        return this.instance;
    }

    constructor() { }

    info = (LOG_TYPE, LOG_LOCATION, MESSAGE) => {
        console.log(MESSAGE);
    }

    warn = (LOG_TYPE, LOG_LOCATION, MESSAGE) => {
        console.warn(MESSAGE);
    }

    error = (ERROR_TYPE, ERROR_LOCATION, MESSAGE) => {
        console.error(MESSAGE);
    }
}