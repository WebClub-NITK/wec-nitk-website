/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['source.unsplash.com', 'localhost'],
        remotePatterns: [
            {
                protocol: 'http',
                hostname: '3.26.93.132',
                pathname: '/**'
            }
        ]
    },
};

export default nextConfig;
