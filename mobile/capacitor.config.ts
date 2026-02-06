import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.hard2book.app',
  appName: 'Hard2Book',
  webDir: 'dist',
  plugins: {
    GoogleAuth: {
      scopes: ['profile', 'email'],
      serverClientId: '', // TODO: Add web client ID
      forceCodeForRefreshToken: true,
    },
  },
  server: {
    cleartext: true,
  },
};

export default config;
