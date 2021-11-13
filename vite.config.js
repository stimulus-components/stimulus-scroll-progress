const path = require('path')

module.exports = {
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'stimulus-scroll-progress'
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
