const path = require('path')
const HtmlPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')

//export 
module.exports = {
  // 파일을 읽어들이기 시작하는 진입점 설정
  entry: './js/main.js',

  // 결과물(번들)을 반환하는 설정
  output: {  
    // path: path.resolve(__dirname, 'dist'),  // __dirname은 해당 webpack.config.js 파일의 경로
    // filename: 'main.js',
    clean: true // 기존의 필요하지 않은 파일들은 정리됨
  },

  module: {
    rules: [
      {
        test: /\.s?css$/, // 정규식 사용 (.css로 끝나는 파일)
        use: [
          'style-loader', // 해석한 내용은 html에 <style></style>태그로 만들어서 넣어주는 패키지
          'css-loader',  // js에서 css를 해석하는 패키지
          'postcss-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.js$/,
        use: [
          'babel-loader'
        ]
      }
    ]
  },

  plugins: [
    new HtmlPlugin({
      template: './index.html'
    }),
    new CopyPlugin({
      patterns: [
        {from: 'static'}  // static 파일 안에 있는 파일들은 copy해서 dist 파일 안에 넣어줘라
      ]
    })
  ],

  devServer: {
    host: 'localhost'
  }
}