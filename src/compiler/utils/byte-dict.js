/**
 *  ------ [ Property of Francis Studios ] ------
 * ===========================
 * github: https://github.com/francisstudios
 * ©2025 Francis Studios Softwares by L.
*/

const BYTE_DICTIONARY = {
    START_DIRECTIVE: { symbol: '.start', hex: [0x01], space: 1 },
    RETURN_FROM_SUB: { symbol: 'rts', hex: [0x23], space: 1 },
    LOAD_ACCUMULATOR: { symbol: 'lda', hex: [0x17], space: 5 }, // 1byte is the instruction and 
    LOAD_XINDEX: { symbol: 'ldx', hex: [0x18], space: 5 },      // 4 bytes of data can be as parameter (address or exact value)
    LOAD_YINDEX: { symbol: 'ldy', hex: [0x19], space: 5 },      // (address or exact value)
    STORE_ACCUMULATOR: { symbol: 'sta', hex: [0x28], space: 5 },
    STORE_XINDEX: { symbol: 'stx', hex: [0x29], space: 5 },
    STORE_YINDEX: { symbol: 'sty', hex: [0x30], space: 5 },
}

export default BYTE_DICTIONARY;