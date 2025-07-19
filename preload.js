/**
 *  ------ [ Property of Francis Studios ] ------
 * ===========================
 * github: https://github.com/francisstudios
 * ©2025 Francis Studios Softwares by L.
*/

import { contextBridge } from 'electron';
import fs from 'fs';

/**
 * Expose File System functions into the Main World :) 
 * might add some more options in future enrichments
 */
contextBridge.exposeInMainWorld('fsAPI', {
    readFile: (path, encoding = 'utf-8') => {
        return new Promise((resolve, reject) => {
            fs.readFile(path, encoding, (err, data) => {
                if (err) reject(err);
                else resolve(data);
            });
        });
    },
});