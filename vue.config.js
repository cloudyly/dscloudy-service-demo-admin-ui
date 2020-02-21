const StatsPlugin = require('stats-webpack-plugin')
const port = 9010

module.exports = {
  publicPath: `http://localhost:${port}`,
  devServer: {
    port: port,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
    },
    compress: true
  },
  configureWebpack: {
    plugins: [
      new StatsPlugin('manifest.json', {
        chunkModules: false,
        entrypoints: true,
        source: false,
        chunks: false,
        modules: false,
        assets: false,
        children: false,
        exclude: [/node_modules/]
      })
    ],
    output: {
      library: 'demoSingleVue',
      libraryTarget: 'window'
    }
  }
}
