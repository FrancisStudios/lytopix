import CNF from '../config/config.json' with {type: 'json'};;

document.addEventListener('DOMContentLoaded', ()=>{
    document.querySelector('title').innerHTML = CNF.App.window.title;
});
