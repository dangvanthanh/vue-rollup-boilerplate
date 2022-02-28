const postcssImport = require('postcss-import')
const postcssNested = require('postcss-nested')
const postcssSortMediaQueries = require('postcss-sort-media-queries')
const cssnano = require('cssnano')

module.exports = {
  plugins: [postcssImport(), postcssNested(), postcssSortMediaQueries(), cssnano()],
}
