import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  // Experimental features
  experimental: {
    optimizeCss: true,
    // Removed fontLoaders - this is now handled by next/font automatically
  },

  // Ignorar errores de TypeScript y ESLint durante el build (opcional en dev)
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },

  // Permitir imágenes remotas
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: '**.googleapis.com', // Para Google Fonts
        port: '',
        pathname: '/**',
      },
    ],
  },

  // Opcional: desactiva HMR WebSocket en entornos en la nube
  webpackDevMiddleware: (config: any) => {
    config.watchOptions = {
      poll: 1000,
      aggregateTimeout: 300,
    };
    return config;
  },
};

export default nextConfig;