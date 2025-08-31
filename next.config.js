const nextConfig = {
    output: 'export',
    trailingSlash: true,
    images: {
        unoptimized: true
    },
    basePath: process.env.NODE_ENV === 'production' ? '/evakillenbergv20/' : '',
    assetPrefix: process.env.NODE_ENV === 'production' ? '/evakillenbergv20/' : '',
};

module.exports = nextConfig;