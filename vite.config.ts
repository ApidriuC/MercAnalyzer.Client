import { defineConfig } from 'vite';
import fs from 'fs';
import path from 'path';
import react from '@vitejs/plugin-react';

export default defineConfig({
  server: {
    port: 443, // Configura el puerto 443
    https: {
      key: fs.readFileSync(path.resolve(__dirname, 'ssl/key.pem')), // Ruta de la clave
      cert: fs.readFileSync(path.resolve(__dirname, 'ssl/cert.pem')) // Ruta del certificado
    },
    host: '127.0.0.1', // O tu dominio local
    strictPort: true, // Forzar el puerto 443
    cors: true, // Habilitar CORS si lo necesitas
  },
  plugins: [react()],
  assetsInclude: ['**/*.svg'],
  build: {
    rollupOptions: {
      input: {
        main: './index.html',
      },
    },
  },
});
