const path = require("path");

const repoName = "yuyuto-site"; // 👈 GitHubのリポジトリ名を入れる

module.exports = {
  reactStrictMode: true,
  webpack(config, { isServer }) {
    // クライアントとサーバー側の両方で動作するように設定
    config.module.rules.push({
      test: /\.md$/,
      use: "raw-loader",
      include: [path.resolve(__dirname, "content")],
    });

    return config;
  },
  output: "export",
  distDir: "out", // GitHub Pages にデプロイするための出力先ディレクトリ
  basePath: `/${repoName}`, // 👈 ここを追加
  assetPrefix: `/${repoName}/`, // 👈 ここも追加
  images: {
    unoptimized: true, // GitHub Pages では画像最適化を無効化
  },
};
