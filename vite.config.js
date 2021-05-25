const path = require('path')

module.exports = {
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'stimulus-scroll-progress'
    },
    rollupOptions: {
      external: ['stimulus', 'lodash'],
      output: {
        globals: {
          stimulus: 'Stimulus',
          lodash: '_'
        }
      }
    }
  }
}
