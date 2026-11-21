import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';

const rootDir = fileURLToPath(new URL('.', import.meta.url));

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(rootDir, 'index.html'),
        login: resolve(rootDir, 'login.html'),
        perfil: resolve(rootDir, 'perfil.html'),
        historico: resolve(rootDir, 'historico.html'),
        admin: resolve(rootDir, 'admin.html'),
      },
    },
  },
});
