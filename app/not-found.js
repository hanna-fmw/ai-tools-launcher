'use client'

export default function NotFound() {
	return (
		<div
			style={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				height: '100vh',
				flexDirection: 'column',
				gap: '1rem',
			}}>
			<h2>404 - Page Not Found</h2>
			<p>The page you are looking for does not exist.</p>
		</div>
	)
}
