import { app, BrowserWindow } from 'electron'
import { create } from 'domain';

let win :any  = null

function createWindow() {
  win = new BrowserWindow({width: 800, height: 600})
  win.setTitle('CSUBU Lecturers')
  win.loadFile('index.html')
  win.on('closed', () => { win = null })
}

app.on('ready', () => {
    console.log('app น่ะ  ready แล้วนะ ')
    createWindow()
})

// สำหรับ macOS 
app.on('window-all-closed', function () {
  // ถ้าหน้าต่างทุกอันปิด
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

// ถ้ากด icon ของ app ใหม่
app.on('activate', function () {
    
  if (win == null) {
    createWindow()
  }
})
