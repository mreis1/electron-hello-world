var electron = require('electron');

var win;

function createWindow(){
	win = new electron.BrowserWindow({
		width: 1280,
		height: 720,
		maximizable: true,
		minimizable: true
	})
	win.maximize();
	win.loadURL('file://' + __dirname + '/index.html');
}

electron.app.on('ready', createWindow);