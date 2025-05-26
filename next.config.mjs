/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            { 
                // this is to redirect "yaminedaroueche.com/portfolio/sportify"
                // to "https://portfolio.yaminedaroueche.com/sportify" with a permanent 301 redirect
                source: "/portfolio/sportify",
                destination: "https://portfolio.yaminedaroueche.com/sportify",
                permanent: true,
            },
        ];
    },
};

export default nextConfig;
