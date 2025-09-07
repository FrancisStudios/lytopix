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
    STORE_YINDEX: 'sty'
}

const REGISTERS = {
    A: 'accumulator',
    X: 'xindex',
    Y: 'yindex'
}

export {
    TOKEN_TYPES,
    TOKEN_VERBS,
    REGISTERS
}