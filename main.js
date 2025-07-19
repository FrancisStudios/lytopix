/**
 *  ------ [ Property of Francis Studios ] ------
 * ===========================
 * github: https://github.com/francisstudios
 * ©2025 Francis Studios Softwares by L.
*/
import { app, BrowserWindow } from 'electron';
import CNF from './config/config.json' with {type: 'json'};

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: CNF.App.window.width,
    height: CNF.App.window.height,
    webPreferences: {
      nodeIntegration: true
    }
  })

  mainWindow.loadFile('index.html');


  console.log(CNF.App.window.menu);

  if (!CNF.App.window.menu) mainWindow.setMenu(null);
  if (CNF.App.developer.activated) mainWindow.webContents.openDevTools();

  mainWindow.on('closed', function () {
    mainWindow = null
  })
}

app.on('ready', createWindow)
app.on('window-all-closed', function () { if (process.platform !== 'darwin') app.quit() });
app.on('activate', function () { if (mainWindow === null) createWindow() });