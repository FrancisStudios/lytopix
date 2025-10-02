/**
 *  ------ [ Property of Francis Studios ] ------
 * ===========================
 * github: https://github.com/francisstudios
 * ©2025 Francis Studios Softwares by L.
*/

import { REGISTERS, TOKEN_TYPES, TOKEN_VERBS } from "../ENUM.js"

export default class LytopixTokenBuilder {
    static tokenTemplate = {
        type: TOKEN_TYPES,
        verb: TOKEN_VERBS,
        name: '',
        params: []
    }

    /**
     * Label syntax processing
     * @param {string} syntax 
     * @returns {Token<Label>}
     */
    static label(syntax) {
        const labelName = syntax
            .replace('.', '')
            .replace(':', '')

        return {
            type: TOKEN_TYPES.LABEL,
            verb: TOKEN_VERBS.MEMORY_ADDR,
            name: labelName,
            params: []
        };
    }

    /**
    * Directive syntax processing
    * @param {string} syntax 
    * @returns {Token<Directive>}
    */
    static directive(syntax) {
        const directiveVerb = syntax.replace('.', '')
        return {
            type: TOKEN_TYPES.DIRECTIVE,
            verb: directiveVerb,
            name: '',
            params: []
        };
    }

    /**
    * Load register syntax processing
    * @param {REGISTERS} register 
    * @param {string} syntax 
    * @returns {Token<Instruction>}
    */
    static loadRegister(register, syntax) {
        let target;
        switch (register) {
            case REGISTERS.A:
                target = TOKEN_VERBS.LOAD_ACCUMULATOR;
                break;

            case REGISTERS.X:
                target = TOKEN_VERBS.LOAD_XINDEX;
                break;

            case REGISTERS.Y:
                target = TOKEN_VERBS.LOAD_YINDEX;
                break;
        }
        const params = syntax
            .replace(target, '')
            .trim()
            .toLowerCase();
        return {
            type: TOKEN_TYPES.INSTRUCTION,
            verb: target,
            name: register,
            params: [params]
        }
    }

    /**
    * Store register syntax processing
    * @param {REGISTERS} register 
    * @param {string} syntax 
    * @returns {Token<Instruction>}
    */
    static storeRegister(register, syntax) {
        let verb;
        switch (register) {
            case REGISTERS.A:
                verb = TOKEN_VERBS.STORE_ACCUMULATOR;
                break;

            case REGISTERS.X:
                verb = TOKEN_VERBS.STORE_XINDEX;
                break;

            case REGISTERS.Y:
                verb = TOKEN_VERBS.STORE_YINDEX;
                break;
        }
        const params = syntax
            .replace(verb, '')
            .trim()
            .toLowerCase();
        return {
            type: TOKEN_TYPES.INSTRUCTION,
            verb: verb,
            name: register,
            params: [params]
        }
    }

    /**
    * RTS instruction processing
    * @param {string} syntax 
    * @returns {Token<Instruction>}
    */
    static returnFromSubroutine() {
        return {
            type: TOKEN_TYPES.INSTRUCTION,
            verb: TOKEN_VERBS.RETURN_FROM_SUB,
            name: TOKEN_VERBS.RETURN_FROM_SUB,
            params: []
        }
    }

}