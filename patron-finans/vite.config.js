import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Netlify deployments should not use relative base paths as it breaks SPA routing.
export default defineConfig({
  plugins: [react()],
});