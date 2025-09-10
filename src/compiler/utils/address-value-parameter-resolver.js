/**
 *  ------ [ Property of Francis Studios ] ------
 * ===========================
 * github: https://github.com/francisstudios
 * ©2025 Francis Studios Softwares by L.
*/

const LytopixGenericParameterResolver = (_parameters) => {
    switch (_parameters) {
        case /[0123456789abcdef$]+[+ -]+[0123456789abcdef$]+/.test(_parameters)
            ? _parameters : false:
            // composite
            break;

        case /^[0123456789abcdef$]+$/.test(_parameters) ? _parameters : false:
            // single
            break;
    }
}

export default LytopixGenericParameterResolver;