/**
 *  ------ [ Property of Francis Studios ] ------
 * ===========================
 * github: https://github.com/francisstudios
 * ©2025 Francis Studios Softwares by L.
*/

const BYTE_DICTIONARY = {
    NIL: { symbol: 'nil', hex: [0x00], space: 1 },
    START_DIRECTIVE: { symbol: '.start', hex: [0x01], space: 1 },
    END_PROGRAM: { symbol: 'rts', hex: [0x19], space: 1 },
    LOAD_ACCUMULATOR: { symbol: 'lda', hex: [0x11], space: 6 }, // 1byte is the instruction and \
    LOAD_XINDEX: { symbol: 'ldx', hex: [0x12], space: 6 },      // 4 bytes of data can be as parameter (address or exact value) \
    LOAD_YINDEX: { symbol: 'ldy', hex: [0x13], space: 6 },      // +1 (address 0xa9 or exact value 0x00 )
    STORE_ACCUMULATOR: { symbol: 'sta', hex: [0x1c], space: 5 },
    STORE_XINDEX: { symbol: 'stx', hex: [0x1d], space: 5 },
    STORE_YINDEX: { symbol: 'sty', hex: [0x1e], space: 5 },
    ADDRESS_SIGNATURE: { symbol: '!#', hex: [0xa9], space: 1 }, // If parameter is not an actual number but an address
    SPACE_ALLOCATOR_SIGNAL: { symbol: '$#', hex: [0x20], space: 5 }
}

export default BYTE_DICTIONARY;