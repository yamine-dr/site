/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
            {
                source: "/portfolio/sportify/:path*",
                destination: "portfolio.yaminedaroueche.com/sportify/:path*",
            },
        ];
    },
};

export default nextConfig;
