/**
 *  ------ [ Property of Francis Studios ] ------
 * ===========================
 * github: https://github.com/francisstudios
 * ©2025 Francis Studios Softwares by L.
*/
import config from '../config/engine.config.json' with {type: 'json'};
export default class Interpreter {
    instance;
    fileContents;
    fileSyntaxMap;

    _interpreter = {
        ROMLocation: '',
    }

    static getInstance() {
        if (!this.instance)
            this.instance = new Interpreter();

        return this.instance
    }

    constructor() { }

    init() {
        this._interpreter.ROMLocation = config.interpreter.ROMLocation;
    }

    async executeROM() {
        return new Promise((resolve, reject) => {
            window
                .fsAPI
                .readFile(this._interpreter.ROMLocation)
                .then(data => resolve(data))
                .catch(err => reject(err));
        });
    }
}