const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;


app.on('ready',function(){
  var mainWindow = new BrowserWindow({
    height:600,
    width:800
  });
});
