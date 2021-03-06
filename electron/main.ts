import * as url from "url";
import { app, BrowserWindow } from "electron"
import path from "path"

function main() {
  if (require('electron-squirrel-startup')) return app.quit();

  require('electron-reload')(path.join(__dirname, "main.js"), {
    electron: require('${__dirname}/../../node_modules/electron')
  });

  function createWindow() {
    const win = new BrowserWindow({
      width: 800,
      height: 600,
      webPreferences: {
        preload: path.join(__dirname, "preload.js")
      }
    })

    const startUrl = process.env.ELECTRON_START_URL || url.format({
      pathname: path.join(__dirname, 'build/index.html'),
      protocol: 'file:',
      slashes: true
    });
    win.loadURL(startUrl);
  }

  app.whenReady().then(createWindow)

  app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
      app.quit()
    }
  })

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
}

main()

require("./listener")