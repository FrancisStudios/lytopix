/**
 *  ------ [ Property of Francis Studios ] ------
 * ===========================
 * github: https://github.com/francisstudios
 * ©2025 Francis Studios Softwares by L.
*/

import config from '../../config/engine.config.json' with {type: 'json'};

/**
 * Gets the default screen DOM object
 * @returns {HTMLCanvasElement}
 */
const getScreen = () => {
    return document.getElementById('screen');
}

/**
 * Sets config default screen value to handler
 * @param {HTMLCanvasElement} screenHandler
 */
const setScreenDefaultSize = (screenHandler) => {
    screenHandler.width = config.screen.width;
    screenHandler.height = config.screen.height;
    screenHandler.style = 'zoom: 200%';
}

export {
    getScreen,
    setScreenDefaultSize
}