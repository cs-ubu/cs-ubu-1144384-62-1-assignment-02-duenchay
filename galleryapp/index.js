"use strict";
exports.__esModule = true;
var electron_1 = require("electron");
var win = null;
function createWindow() {
    win = new electron_1.BrowserWindow({ width: 800, height: 600 });
    win.setTitle('CSUBU Lecturers');
    win.loadFile('index.html');
    win.on('closed', function () { win = null; });
}
electron_1.app.on('ready', function () {
    console.log('app น่ะ  ready แล้วนะ ');
    createWindow();
});
// สำหรับ macOS 
electron_1.app.on('window-all-closed', function () {
    // ถ้าหน้าต่างทุกอันปิด
    if (process.platform !== 'darwin') {
        electron_1.app.quit();
    }
});
// ถ้ากด icon ของ app ใหม่
electron_1.app.on('activate', function () {
    if (win == null) {
        createWindow();
    }
});
