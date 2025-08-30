const nextConfig = {
    output: 'export',
    trailingSlash: true,
    images: {
        unoptimized: true
    },
    // Set basePath and assetPrefix for GitHub Pages
    // Replace 'your-repo-name' with your actual repository name
    basePath: process.env.NODE_ENV === 'production' ? '/evakillenbergv20/' : '',
    assetPrefix: process.env.NODE_ENV === 'production' ? '/evakillenbergv20/' : '',
}

export default nextConfig;