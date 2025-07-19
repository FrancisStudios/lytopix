/**
 *  ------ [ Property of Francis Studios ] ------
 * ===========================
 * github: https://github.com/francisstudios
 * ©2025 Francis Studios Softwares by L.
*/

export default class FileOPS {

    /**
     * Reads in the whole ROM file and returns its contents
     * This might be good for the whole app (or if not, might
     * be upgraded to some async chunk / line-by-line readup)
     * @param {ResourceURL} ROMLocation 
     * @returns {Promise<File>}
     */
    static readROM(ROMLocation) {
        return new Promise((resolve, reject) => {
            window
                .fsAPI
                .readFile(ROMLocation)
                .then(data => resolve(data))
                .catch(err => reject(err));
        });
    }
}