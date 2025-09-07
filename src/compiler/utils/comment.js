/**
 *  ------ [ Property of Francis Studios ] ------
 * ===========================
 * github: https://github.com/francisstudios
 * ©2025 Francis Studios Softwares by L.
*/

const LytopixCommentExcluder = (syntaxWebWithComments) => {
    return new Promise((resolve, _) => {
        const uncommentedSyntaxWeb = [];

        for (let i = 0; i <= syntaxWebWithComments.length - 1; i++) {
            const element = syntaxWebWithComments[i];

            switch (element) {
                case /^;[a-zA-Z0-9]*/.test(element) ? element : false:
                    break;

                default:
                    const expression = element.split(';', 1);
                    let resultExpres = expression[0].trim();
                    if (resultExpres)
                        uncommentedSyntaxWeb.push(resultExpres);
                    break;
            }
        }
        resolve(uncommentedSyntaxWeb);
    });
}

export default LytopixCommentExcluder;