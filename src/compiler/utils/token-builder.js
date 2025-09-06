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

        const params = syntax.replace(target, 1);

        return {
            type: TOKEN_TYPES.INSTRUCTION,
            verb: target,
            name: register,
            params: [params]
        }
    }

}