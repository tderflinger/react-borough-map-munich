{
    test: /\.svg$/,
    use: [
      {
        loader: "babel-loader"
      },
      {
        loader: "react-svg-loader",
        options: {
          jsx: true // true outputs JSX tags
        }
      }
    ]
  }