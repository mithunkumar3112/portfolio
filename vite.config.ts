import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  const isProd = mode === 'production';

  return {
    base: env.VITE_BASE_PATH || '/',
    plugins: [react()],
    server: {
      headers: {
        'Cache-Control': 'public, max-age=0, must-revalidate',
      },
    },
    build: {
      target: 'es2020',
      minify: isProd ? 'esbuild' : false,
      cssCodeSplit: true,
      cssMinify: 'esbuild',
      reportCompressedSize: false,
      assetsInlineLimit: 4096,
      assetsDir: 'assets',
      rollupOptions: {
        output: {
          manualChunks: {
            react: ['react', 'react-dom'],
            icons: ['lucide-react'],
            email: ['@emailjs/browser'],
          },
          entryFileNames: 'assets/[name]-[hash].js',
          chunkFileNames: 'assets/[name]-[hash].js',
          assetFileNames: 'assets/[name]-[hash][extname]',
        },
      },
    },
    esbuild: {
      drop: isProd ? ['console', 'debugger'] : [],
      mangleProps: isProd ? /^_/ : undefined,
    },
  };
});
