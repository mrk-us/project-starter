const { app, dialog } = require('electron').remote

export function selectDirectory() {
  const options = {
    defaultPath: app.getPath('home'),
    buttonLabel: 'Choose',
    properties: ['openDirectory']
  };
  return
    dialog.showOpenDialog(options)
}
