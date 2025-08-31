const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
    output: 'export',
    trailingSlash: true,
    images: { unoptimized: true },
    basePath: isProd ? '/evakillenbergv20' : '',
    assetPrefix: isProd ? '/evakillenbergv20/' : '',
    env: {
        NEXT_PUBLIC_BASE_PATH: isProd ? '/evakillenbergv20' : '',
    },
};

module.exports = nextConfig;