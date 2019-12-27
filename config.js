              {
              
                  test:/\.scss$/,
              
                  loaders:['style-loader','css-loader','sass-loader']
              
              },
              {
                test: /\.scss$/,
                use: [{
                        loader: 'style-loader'
                    }, {
                        loader: 'css-loader'
                    }, {
                        loader: 'sass-loader'
                    },
                    {
                        loader: 'sass-resources-loader',
                        options: {
                            resources: [
                                './src/assets/style/_color.scss',
                                './src/assets/style/_common.scss',                     
                                './src/assets/style/_reset.scss'
                            ]
                        }
                    }
                ]
              }
