import './styles/globals.css'

export const metadata = {
	title: 'AI Tools Launcher',
	description: 'Launch your favorite AI tools',
}

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body
				style={{
					background: '#121212',
					margin: 0,
					padding: 0,
					color: 'white',
					fontFamily:
						'-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
				}}>
				{children}
			</body>
		</html>
	)
}
