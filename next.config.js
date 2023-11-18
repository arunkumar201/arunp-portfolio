/** @type {import('next').NextConfig} */
const nextConfig = {
	optimizeFonts: true,
	compress: true,
	swcMinify: true,
	images: {
		unoptimized: true,
	},
	typescript: {
		ignoreBuildErrors: true,
	}
};

module.exports = nextConfig;
