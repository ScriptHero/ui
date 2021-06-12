import { defineConfig } from 'vite'
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import vue from '@vitejs/plugin-vue'
import path from 'path'

const resolve = pathSegments => path.resolve(__dirname, pathSegments)
const prod = process.env.NODE_ENV === 'production'

export default defineConfig({
  plugins: [
    vue(),
    vanillaExtractPlugin()
  ],
  root: resolve('src'),
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: '@scripthero/ui',
      formats: ['es']
    },
    outDir: resolve('dist'),
    emptyOutDir: true,
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue'
        }
      }
    }
  }
})
