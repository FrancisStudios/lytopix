/**
 *  ------ [ Property of Francis Studios ] ------
 * ===========================
 * github: https://github.com/francisstudios
 * ©2025 Francis Studios Softwares by L.
*/

const BYTE_DICTIONARY = {
    START_DIRECTIVE: { symbol: '.start', hex: [0x01], space: 1 },
    RETURN_FROM_SUB: { symbol: 'rts', hex: ['xx'], space: 1 }, // TODO: this should be replaced by a jump to an engine defined address or back to caller
    LOAD_ACCUMULATOR: { symbol: 'lda', hex: [0x11], space: 5 }, // 1byte is the instruction and 
    LOAD_XINDEX: { symbol: 'ldx', hex: [0x12], space: 5 },      // 4 bytes of data can be as parameter (address or exact value)
    LOAD_YINDEX: { symbol: 'ldy', hex: [0x13], space: 5 },      // (address or exact value)
    STORE_ACCUMULATOR: { symbol: 'sta', hex: [0x1c], space: 5 },
    STORE_XINDEX: { symbol: 'stx', hex: [0x1d], space: 5 },
    STORE_YINDEX: { symbol: 'sty', hex: [0x1e], space: 5 },
}

export default BYTE_DICTIONARY;