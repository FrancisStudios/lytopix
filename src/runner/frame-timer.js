/**
 *  ------ [ Property of Francis Studios ] ------
 * ===========================
 * github: https://github.com/francisstudios
 * ©2025 Francis Studios Softwares by L.
*/

//import CNF from './config/config.json' with {type: 'json'};

import ENGINE_CONFIG from '../../config/engine.config.json' with {type: 'json'};

const LytopixFrameTimer = (_cb) => {
    const FPS = ENGINE_CONFIG.engine.targetFPS;

    let _refreshRate = Math.floor(1000 / FPS);
    let _startTime = performance.now();
    let previousTime = _startTime;

    let currentTime = 0;
    let deltaTime = 0;

    const callbackLoop = (_tstamp) => {
        currentTime = _tstamp;
        deltaTime = currentTime - previousTime;

        if (deltaTime > _refreshRate) {
            previousTime = currentTime - (deltaTime % _refreshRate);

            _cb(deltaTime);
        }

        requestAnimationFrame(callbackLoop);
    }
    requestAnimationFrame(callbackLoop);
}

export default LytopixFrameTimer;