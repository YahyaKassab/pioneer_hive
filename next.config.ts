/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        dangerouslyAllowSVG: true,
        remotePatterns: [{ protocol: 'https', hostname: '*' }],
    },
    experimental: {
        ppr: true, // Use boolean instead of 'incremental'
        serverActions: true,
        optimizePackageImports: ['next-sanity'],
    },
    devIndicators: {
        position: 'bottom-right',
    },
};

export default nextConfig;
