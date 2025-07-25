import Tokenizer from "./tokenizer.util.js";

const ErrorParser = {

    issuesList: [],

    /**
     * Parses TokenMap for issues (syntactic and
     * programmatic) and returns if all set or 
     * if issues have been found
     * @param {Array<TokenObject>} TokenMap 
     * @returns {boolean}
     */
    parse: async (TokenMap) => {

        const existingTokens = [];

        TokenMap
            .filter(token => token.expressionType == Tokenizer.EXPRESSION_TYPES.label)
            .forEach(token => {
                existingTokens.includes(token.expressionIdentifier)
                    ? ErrorParser.createIssue(token)
                    : existingTokens.push(token.expressionIdentifier);
            });

        return true;
    },


    /**
     * Creates fromal issue and pushes into
     * issueList[]
     * @param {TokenObject} labelToken
     */
    createIssue: (labelToken) => {

        console.log('error blin');

        return {
            description: "",
            lineOfFault: labelToken.address
        }
    }
}

export default ErrorParser;