import { app, BrowserWindow, ipcMain, Menu } from 'electron';
import { MainProcess } from './mainProcess/JobsProces'
// This allows TypeScript to pick up the magic constants that's auto-generated by Forge's Webpack
// plugin that tells the Electron app where to look for the Webpack-bundled app code (depending on
// whether you're running in development or production).
declare const MAIN_WINDOW_WEBPACK_ENTRY: string;
declare const MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY: string;

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require('electron-squirrel-startup')) {
  app.quit();
}
console.log(MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY)
const jobProces = new MainProcess()
const createWindow = (): void => {
  const mainWindow = new BrowserWindow({
    height: 600,
    width: 800,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      preload: MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY,
    },
  });

  mainWindow.loadURL(MAIN_WINDOW_WEBPACK_ENTRY);
  // Menu.setApplicationMenu(null)
};


app.on('ready', () => {
  createWindow();

  ipcMain.handle("create:job", (_, job) => jobProces.createJobs(job))
  ipcMain.handle("getAll:job", (_) => jobProces.getAllJobs())
  ipcMain.handle("findJob:job", (_, id) => jobProces.findIdJobs(id))

});


app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});


