/**
 *  ------ [ Property of Francis Studios ] ------
 * ===========================
 * github: https://github.com/francisstudios
 * ©2025 Francis Studios Softwares by L.
*/

import { TOKEN_TYPES, TOKEN_VERBS } from "../ENUM.js"

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

}