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
                    const issue = ErrorParser.createIssue(label);
                    ErrorParser.issuesList.push(issue);

                } else existingTokens.push(label);
            });

        console.log(ErrorParser.issuesList);
        return true
    },


    /**
     * Creates fromal issue and pushes into
     * issueList[]
     */
    createIssue: () => {
        return {
            description: "",
            lineOfFault: label.address
        }
    }
}

export default ErrorParser;