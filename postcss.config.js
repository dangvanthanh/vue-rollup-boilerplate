const postcssImport = require('postcss-import')
const postcssNested = require('postcss-nested')
const postcssPresetEnv = require('postcss-preset-env')
const postcssSortMediaQueries = require('postcss-sort-media-queries')
const cssnano = require('cssnano')

module.exports = {
  plugins: [
    postcssImport(),
    postcssNested(),
    postcssPresetEnv({
      stage: 0,
      browsers: 'last 2 versions',
    }),
    postcssSortMediaQueries(),
    cssnano(),
  ],
}
