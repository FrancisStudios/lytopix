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
        const ERROR_PARSERS = ErrorParser.parsers;

        await ERROR_PARSERS.duplicateTokenParser(TokenMap);

        return (!ErrorParser.issuesList.length == 0);
    },


    /**
     * Creates fromal issue and pushes into
     * issueList[]
     * @param {TokenObject} token
     * @param {ISSUE_TYPE} ISSUE_TYPE
     */
    createIssue: (token, ISSUE_TYPE) => {
        const issue = {
            issue: ISSUE_TYPE,
            token: token
        };

        ErrorParser.issuesList.push(issue);
    },

    parsers: {
        duplicateTokenParser: async (TokenMap) => {
            const existingTokens = [];

            TokenMap
                .filter(token => token.expressionType == Tokenizer.EXPRESSION_TYPES.label)
                .forEach(token => {
                    existingTokens.includes(token.expressionIdentifier)
                        ? ErrorParser.createIssue(token, ErrorParser.ISSUE_TYPE.labelDuplication)
                        : existingTokens.push(token.expressionIdentifier);
                });
        }
    },

    ISSUE_TYPE: {
        labelDuplication: 'label_duplication'
    }
}

export default ErrorParser;