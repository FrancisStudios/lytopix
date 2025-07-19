/**
 *  ------ [ Property of Francis Studios ] ------
 * ===========================
 * github: https://github.com/francisstudios
 * ©2025 Francis Studios Softwares by L.
*/

import Engine from './engine.js';
import Interpreter from './interpreter.js';
import { getScreen, setScreenDefaultSize } from './util/screen.util.js';

/* Screen setup */
const engine = Engine.getInstance();
const HTMLCanvasElementScreen = getScreen();
engine.getVirtualScreen(HTMLCanvasElementScreen);
setScreenDefaultSize(HTMLCanvasElementScreen);
engine.cls;

/* Interpreter setup */
const _interpreter = Interpreter.getInstance();

_interpreter.init();
_interpreter.executeROM().then(d => console.log(d));