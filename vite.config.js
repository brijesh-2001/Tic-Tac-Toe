import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Ensures the app is accessible externally
    port: process.env.PORT || 3000, // Use the port assigned by Render
  },
  preview: {
    allowedHosts: [
      'tic-tac-toe-1-mncj.onrender.com', // Add the backend URL here
      // You can add other URLs as needed
    ],
  },
});
