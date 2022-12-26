import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig(({ mode }) => {
  if (mode === 'netlify') {
    return {}
  }

  return {
    build: {
      lib: {
        entry: resolve(__dirname, 'src/index.ts'),
        name: 'StimulusScrollProgress',
        fileName: 'stimulus-scroll-progress'
      },
      rollupOptions: {
        external: ['@hotwired/stimulus', 'lodash'],
        output: {
          globals: {
            '@hotwired/stimulus': 'Stimulus',
            lodash: '_'
          }
        }
      }
    }
  }
})
