module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'asset': '@/asset',
        'components': '@/components',
        'network': '@/network',
        'pages': '@/pages'
      }
    }
  }
}