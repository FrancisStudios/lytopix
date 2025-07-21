/**
 *  ------ [ Property of Francis Studios ] ------
 * ===========================
 * github: https://github .com/francisstudios
 * ©2025 Francis Studios Softwares by L.
*/

const Tokenizer = {

    output: [], /**@type {Array<TokenObject>} */

    /**
     * Tokenize text and output (return) a long list of token objects
     * for guide on token objects refer to the documentation pls. ^^
     * @param {string} sourceFile
     * @returns {Array<TokenObject>}
     */
    source: async (sourceFile) => {
        const expressionList = sourceFile.split(';');

        for (let expression of expressionList) {
            Tokenizer.expressionChecker(expression);
        }

        console.log(Tokenizer.output);
        return Tokenizer.output;
    },

    /**
     * Checks and evaluates expressions 
     * @param {expression} expression 
     */
    expressionChecker: (expression) => {
        expression = expression.trim();

        if (expression == '') return;

        switch (expression) {
            case /\[([a-zA-Z0-9]*)\]/g.test(expression) ? expression : false:
                Tokenizer
                    .tokenBuilder(
                        Tokenizer.EXPRESSION_TYPES.label,
                        expression
                            .replace('[', '')
                            .replace(']', ''),
                        []
                    );
                break;

            default:
                Tokenizer
                    .tokenBuilder(
                        Tokenizer.EXPRESSION_TYPES.invalid,
                        Tokenizer.EXPRESSION_IDENTIFIERS.invalid,
                        expression
                    );
                break;
        }
    },

    /**
     * Builds proper tokens from data
     * @param {EXPRESSION_TYPES} expressionType 
     * @param {EXPRESSION_IDENTIFIERS} expressionIdentifier 
     * @param {?Array} expressionParameters 
     */
    tokenBuilder: (expressionType, expressionIdentifier, expressionParameters) => {

        const address = Tokenizer.output.length;

        const token = {
            address,
            expressionType,
            expressionIdentifier,
            expressionParameters
        }

        Tokenizer.output.push(token);
    },

    /**
     * ENUMS in poor JavaScript way. They are just objects
     * ... always has been
     */
    EXPRESSION_TYPES: {
        label: 'label',
        command: 'command',
        definition: 'definition',
        invalid: 'invalid',
    },

    EXPRESSION_IDENTIFIERS: {
        start: 'start',
        end: 'end',
        sprite: 'sprite',
        decal: 'decal',
        invalid: 'invalid',
    }

}

export default Tokenizer;