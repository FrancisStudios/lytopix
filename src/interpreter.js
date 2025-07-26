/**
 *  ------ [ Property of Francis Studios ] ------
 * ===========================
 * github: https://github.com/francisstudios
 * ©2025 Francis Studios Softwares by L.
*/
import config from '../config/engine.config.json' with {type: 'json'};
import ErrorParser from './util/error-parser.util.js';
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


        const TokenMap = await Tokenizer.source(this.fileContents); //Parses code into a TokenMap
        const isErrorsDetected = await ErrorParser.parse(TokenMap); //Parses TokenMap if there are any errors

        if (!isErrorsDetected)
            await this.startExecution(TokenMap);
    }

    /**
     * Execution Entry Point after error checks
     * @param {Array<TokenObject>} TokenMap 
     */
    startExecution = async (TokenMap) => {
        for(let instructionToken of TokenMap){
            await this.pullNextFrame(instructionToken);
        }
    }

    /**
     * Pulls next frame with instruction. This will have
     * to set a fixed framerate too. 
     * @param {TokenObject} instructionToken 
     */
    pullNextFrame = async (instructionToken) => {
       return new Promise((resolve, reject) => {
        setTimeout(()=>{
            console.log(instructionToken);
            resolve();
        }, 5000);
       });
    }
}