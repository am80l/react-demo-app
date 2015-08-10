module.exports = {
    entry: [
        "./src/js/components/VotePanel.jsx.js"
    ],

    output: {
        path: 'dest/js',
        filename: "bundle.js",
        publicPath: "/dest/js/",
    },
    module: {
      loaders: [
        {
          test: /\.js?$/,
          loader: 'babel'
        }
      ]
    },
    externals: {
        // require("jquery") is external and available
        //  on the global var jQuery
        "react": "React"
    }
};
