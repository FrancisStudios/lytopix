/**
 *  ------ [ Property of Francis Studios ] ------
 * ===========================
 * github: https://github.com/francisstudios
 * ©2025 Francis Studios Softwares by L.
*/
import CNF from '../config/config.json' with {type: 'json'};;

document.addEventListener('DOMContentLoaded', ()=>{
    document.querySelector('title').innerHTML = CNF.App.window.title;
});
