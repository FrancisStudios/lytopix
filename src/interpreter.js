/**
 *  ------ [ Property of Francis Studios ] ------
 * ===========================
 * github: https://github.com/francisstudios
 * ©2025 Francis Studios Softwares by L.
*/
import config from '../config/engine.config.json' with {type: 'json'};
import FileOPS from './util/file-ops.util.js'
import Tokenizer from './util/tokenizer.util.js';
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
        this.fileContents = await FileOPS
            .readROM(this._interpreter.ROMLocation);

        
        Tokenizer.source(this.fileContents); // Tokenizing code TODO: this should return the token map
    }
}