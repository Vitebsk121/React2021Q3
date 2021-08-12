import reactRefresh from '@vitejs/plugin-react-refresh';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    sourcemap: true,
  },
  base: './',
  plugins: [reactRefresh()],
  publicDir: 'src/public',
});
