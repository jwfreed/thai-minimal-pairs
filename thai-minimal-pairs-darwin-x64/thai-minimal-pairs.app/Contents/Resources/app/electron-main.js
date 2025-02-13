// electron-main.js
const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
  // Create a new browser window.
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      // Depending on your needs you may enable or disable nodeIntegration and contextIsolation.
      nodeIntegration: false,
      contextIsolation: true,
    },
  });

  // Load your app's index.html from the public folder.
  win.loadFile(path.join(__dirname, 'public', 'index.html'));

  // Optionally, open the DevTools for debugging:
  // win.webContents.openDevTools();
}

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    // On macOS it’s common to re-create a window when the dock icon is clicked
    // and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

// Quit the app when all windows are closed (except on macOS).
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
