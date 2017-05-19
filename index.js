const electron = require('electron')
const {app, BrowserWindow} = electron

app.on('ready', function(){
  var mainWindow = new BrowserWindow({
    width: 800,
    height: 600
  })
})
