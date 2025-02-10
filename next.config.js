const path = require('path')

module.exports = {
  reactStrictMode: true,
  webpack(config, { isServer }) {
    // クライアントとサーバー側の両方で動作するように設定
    config.module.rules.push({
      test: /\.md$/,
      use: 'raw-loader',
      include: [path.resolve(__dirname, 'content')],
    })

    return config
  },
}
