import createNextIntlPlugin from "next-intl/plugin"
/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            // this is to redirect "yaminedaroueche.com/[locale]/portfolio/sportify"
            // to "https://portfolio.yaminedaroueche.com/sportify" with a permanent 301 redirect
            {
                source: "/fr/portfolio/sportify",
                destination: "https://portfolio.yaminedaroueche.com/sportify",
                permanent: true,
            },
            {
                source: "/en/portfolio/sportify",
                destination: "https://portfolio.yaminedaroueche.com/sportify",
                permanent: true,
            },
        ];
    },
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);