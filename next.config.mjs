/** @type {import('next').NextConfig} */
const nextConfig = {
	output: 'export',
	images: {
		unoptimized: true,
	},
	assetPrefix: './',
	basePath: '',
	webpack: (config) => {
		config.resolve.fallback = {
			...config.resolve.fallback,
			fs: false,
		}
		return config
	},
	trailingSlash: true,
	skipTrailingSlashRedirect: true,
	distDir: 'out',
}

export default nextConfig
