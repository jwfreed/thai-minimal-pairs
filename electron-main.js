const path = require('path');
const { app, BrowserWindow } = require('electron');

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    // The "icon" option here is used primarily for Windows and Linux.
    icon: path.join(__dirname, 'assets', 'icon.icns'),
  });
  mainWindow.loadFile('public/index.html');
}

app.whenReady().then(() => {
  if (process.platform === 'darwin') {
    const iconPath = path.resolve(__dirname, 'assets', 'icon.icns');
    console.log('Setting dock icon from:', iconPath);
    try {
      app.dock.setIcon(iconPath);
    } catch (e) {
      console.error('Error setting dock icon:', e);
    }
  }
  createWindow();
});

// Quit the app when all windows are closed (except on macOS).
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
