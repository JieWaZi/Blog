const path = require('path');
const webpack= require('webpack');
const renderer = require('react-markdown').renderer;
const markedRenderer = require('marked').renderer;

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/assert/',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015','react','stage-0'],
            plugins: [
              "transform-runtime",
              'transform-class-properties',
              ["import", { "libraryName": "antd", "libraryDirectory": "es", "style": true }]
            ]
          }
        }
      }, {
        test: /\.(png|jpg|ttf)$/,
        use: [
          {
            loader: 'file-loader',
            options: {}
          }
        ]
      }, {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
        ],
      }, {
        test: /\.less$/,
        use: [{
          loader: 'style-loader',
        }, {
          loader: 'css-loader',
          options: {
            sourceMap: true,
          },
        }, {
          loader: 'less-loader',
          options: {
            sourceMap: true,
            javascriptEnabled: true,
            paths: [
              path.resolve(__dirname, 'node_modules'),
              path.resolve(__dirname, 'src'),
            ],
          },
        }],
      },{
        test: /\.md$/,
        use: [{
          loader: 'html-loader'
        }, {
          loader: 'markdown-loader',
          options: {
            pedantic: true,
            renderer: markedRenderer,
            highlight: function(code) {
              return require('highlight.js').highlightAuto(code).value;
            },
            pedantic: false,
            gfm: true,
            tables: true,
            breaks: false,
            sanitize: false,
            smartLists: true,
            smartypants: false,
            xhtml: false
          }
        }]
      }
    ]
  },
  watch: true,
};