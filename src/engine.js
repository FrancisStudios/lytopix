/**
 *  ------ [ Property of Francis Studios ] ------
 * ===========================
 * github: https://github.com/francisstudios
 * ©2025 Francis Studios Softwares by L.
*/

import config from '../config/engine.config.json' with { type: 'json'};

export default class Engine {
    instance;
    v_screen;

    static getInstance() {
        if (!this.instance)
            this.instance = new Engine();

        return this.instance;
    }

    constructor() { }

    /**
     * Returns the virtual screen 2D context 
     * @param {HTMLCanvasElement} HTMLCanvasElementScreen 
     * @returns {HTMLCanvas2DContext}
     */
    getVirtualScreen(HTMLCanvasElementScreen) {
        this.v_screen = HTMLCanvasElementScreen.getContext('2d');
        return this.v_screen;
    }

    /**
     * CLRSCR routine.
     * Clears screen... What do you expect? :D 
     */
    get cls() {
        this.v_screen.fillStyle = '000000';
        this.v_screen.fillRect(0, 0, config.screen.width, config.screen.height);
        return true;
    }

}