import {
  BrowserWindow
} from "electron"
const {
  dialog
} = require('electron')
/**
 * 
 * @param {BrowserWindow} e 
 * @returns 
 */
export const MenuTemplate = (e) => [{
    label: "File",
    submenu: [{
        label: "New Workspace",
        click: () => {
          e.webContents.send("new", "")
        }
      },
      {
        type: "separator"
      },
      {
        label: "Load Workspace",
        submenu: [{
            label: "Load File",
            click() {
              // construct the select file dialog 
              dialog.showOpenDialog({
                  properties: ['openFile'],
                  filters: [{
                    name: "GRDI Project Files",
                    extensions: ['grdi']
                  }]
                })
                .then(function (fileObj) {
                  // the fileObj has two props 
                  if (!fileObj.canceled) {
                    e.webContents.send('FILE_OPEN', fileObj.filePaths)
                  }
                })
                // should always handle the error yourself, later Electron release might crash if you don't 
                .catch(function (err) {
                  console.warn(err)
                })
            }
          },
          {
            label: "Load Cache",
            click: () => {
              e.webContents.send("loadcache", "")
            }
          }
        ]
      },
      {
        type: "separator"
      },
      {
        label: "Save Worksapce",
        click: () => {
          e.webContents.send("save", "")
        }
      },
      {
        type: "separator"
      },
      {
        role: "quit"
      }
    ]
  },
  {
    label: "Debug",
    submenu: [{
      label: "Dev Tools",
      click: () => {
        e.webContents.openDevTools()
      }
    }]
  }
]
