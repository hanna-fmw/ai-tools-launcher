// main.js - Electron main process
const { app, BrowserWindow, shell } = require('electron')
const path = require('path')
require('@electron/remote/main').initialize()
// Remove electron-is-dev import and use this instead
const isDev = !app.isPackaged

let mainWindow

function createWindow() {
	mainWindow = new BrowserWindow({
		width: 900,
		height: 680,
		webPreferences: {
			nodeIntegration: true,
			contextIsolation: false,
			webSecurity: false, // Allow loading local resources
			enableRemoteModule: true,
		},
		icon: path.join(__dirname, 'public/icon.png'),
	})

	require('@electron/remote/main').enable(mainWindow.webContents)

	// Add this protocol handler
	if (!isDev) {
		mainWindow.webContents.session.protocol.registerFileProtocol('app', (request, callback) => {
			const url = request.url.substr(6)
			callback({ path: path.normalize(`${__dirname}/${url}`) })
		})
	}

	// Load the Next.js app
	const startUrl = isDev
		? 'http://localhost:3000/app'
		: `file://${path.join(__dirname, 'out/index.html')}`

	console.log('Loading URL:', startUrl)

	mainWindow.loadURL(startUrl)

	// Handle external links
	mainWindow.webContents.setWindowOpenHandler(({ url }) => {
		shell.openExternal(url)
		return { action: 'deny' }
	})

	// Open DevTools in development or to debug production
	if (isDev || process.env.DEBUG_PROD) {
		mainWindow.webContents.openDevTools()
	}

	// Add error handling
	mainWindow.webContents.on('did-fail-load', (event, errorCode, errorDescription) => {
		console.error('Failed to load:', errorCode, errorDescription)
	})

	mainWindow.on('closed', () => {
		mainWindow = null
	})
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') {
		app.quit()
	}
})

app.on('activate', () => {
	if (mainWindow === null) {
		createWindow()
	}
})
