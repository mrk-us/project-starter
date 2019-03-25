/* eslint-disable*/

const { app, BrowserWindow } = require('electron')
const isDev = require('electron-is-dev')

app.on('ready', () => {
  const mainWindow = new BrowserWindow({
    width: 300,
    height: 700,
    minWidth: 400,
    minHeight: 300,
    frame: false,
    titleBarStyle: 'hiddenInset',
    backgroundColor: '#17002F',
    resizable: false
  })

  mainWindow.loadURL(`file://${__dirname}/index.html`)

  mainWindow.once('ready-to-show', () => {
    mainWindow.show()

    if (isDev) {
      mainWindow.openDevTools()

      const {
        default: installExtension,
        REACT_DEVELOPER_TOOLS,
        REDUX_DEVTOOLS
      } = require('electron-devtools-installer')

      installExtension([REACT_DEVELOPER_TOOLS, REDUX_DEVTOOLS])
        .then(name => console.log(`Added Extension:  ${name}`))
        .catch(err => console.log('An error occurred: ', err))
    }
  })
})

app.on('window-all-closed', () => {
  app.quit()
})
