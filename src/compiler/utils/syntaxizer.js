/**
 *  ------ [ Property of Francis Studios ] ------
 * ===========================
 * github: https://github.com/francisstudios
 * ©2025 Francis Studios Softwares by L.
*/

const LytopixSyntaxizer = (_asm_source) => {
    return new Promise((resolve, _) => {
        let result = [];
        const sourceArraySplitBySpace = _asm_source.split('\n');
        sourceArraySplitBySpace.forEach(token => {
            const cleanedToken = token.trim();

            if (cleanedToken && cleanedToken != '')
                result.push(cleanedToken);
        });
        resolve(result)
    });
}

export default LytopixSyntaxizer;