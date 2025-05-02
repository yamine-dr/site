/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
            {
                source: "/portfolio/sportify/:path*",
                destination: "https://premium251.web-hosting.com/sportify/:path*",
            },
        ];
    },
};

export default nextConfig;
