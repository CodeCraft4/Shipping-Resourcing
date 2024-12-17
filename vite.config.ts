import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@muc/components': path.resolve(__dirname, 'src/components/components.ts'),
      '@muc/assets': path.resolve(__dirname, 'src/assets'),
      '@muc/constant': path.resolve(__dirname, 'src/constant/constant.ts'),
      '@muc/module': path.resolve(__dirname, 'src/module/module.ts'),
      '@muc/screens': path.resolve(__dirname, 'src/screens/screen.ts'),
      '@muc/types': path.resolve(__dirname, 'src/types/types.ts'),
      '@muc/routes': path.resolve(__dirname, 'src/constant/routes.ts'),
      '@muc/core': path.resolve(__dirname, 'src/core/core.ts'),
      '@muc/styles': path.resolve(__dirname, 'src/styles/theme.ts'),  
      '@muc/layout': path.resolve(__dirname, 'src/layout/layout.ts'),  
      '@muc/hooks': path.resolve(__dirname, 'src/hooks/hooks.ts'),  
      '@muc/validations': path.resolve(__dirname, 'src/validations/validations.ts'),  

      // Add more aliases as needed
    },
  },
})