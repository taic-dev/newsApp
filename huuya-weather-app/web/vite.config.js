import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
const path = require('path')

console.log(path.resolve(__dirname, 'src/hooks'))

export default defineConfig(() => {
  return {
    plugins: [
      react({
        jsxImportSource: '@emotion/react',
        babel: {
          plugins: ['@emotion/babel-plugin'],
        },
      }),
      svgr(),
    ],
    resolve: {
      alias: {
        '@components': path.resolve(__dirname, 'src/components'),
        '@hooks': path.resolve(__dirname, 'src/hooks'),
      },
    },
    server: {
      host: '0.0.0.0',
      port: "3000",
    }
  };
});
