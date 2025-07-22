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
            .forEach(label => {
                if (existingTokens.includes(label)) {
                    //createIssue() => duplicate token (check wording from docs)
                    // break;
                } else {
                    ErrorParser.issuesList.push(label);
                }
            });

        return true
    },


    /**
     * Creates fromal issue and pushes into
     * issueList[]
     */
    createIssue: () => {

    }
}

export default ErrorParser;