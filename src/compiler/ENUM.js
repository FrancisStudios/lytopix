/**
 *  ------ [ Property of Francis Studios ] ------
 * ===========================
 * github: https://github.com/francisstudios
 * ©2025 Francis Studios Softwares by L.
*/

const TOKEN_TYPES = {
    DIRECTIVE: 'directive',
    INSTRUCTION: 'instruction',
    LABEL: 'label',
    DATA: 'data'
}

const TOKEN_VERBS = {
    START: 'start',
    MEMORY_ADDR: 'memory_addr',
    LOAD_ACCUMULATOR: 'lda',
    LOAD_XINDEX: 'ldx',
    LOAD_YINDEX: 'ldy',
    STORE_ACCUMULATOR: 'sta',
    STORE_XINDEX: 'stx',
    STORE_YINDEX: 'sty',
    RETURN_FROM_SUB: 'rts'
}

const REGISTERS = {
    A: 'accumulator',
    X: 'xindex',
    Y: 'yindex'
}

const ERROR_TYPES = {
    INVALID_TOKEN: 'invalid token',
    INVALID_PARAM: 'invalid parameter',
    MATH_ERROR: 'math error',
    SEGMENTATION_ERROR: 'segmentation error'
}

const ERROR_LOCATIONS = {
    LEXER: 'lexer',
    HEXER: 'hexer',
    PARAM_RESOLVER_GENERIC: 'generic numerical parameter resolver',
    MATH: 'lytopix math resolver',
    BYTE_TRANSFORMER: 'byte transformer'
}

const CONSTANTS = {
    SCREEN_MEMORY_SIZE_BYTES : 1228800,
}

export {
    TOKEN_TYPES,
    TOKEN_VERBS,
    REGISTERS,
    ERROR_TYPES,
    ERROR_LOCATIONS,
    CONSTANTS
}