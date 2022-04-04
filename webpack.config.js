const path = require("path");
module.exports = {
  // tell the pck to start from src index file
  entry: ".src/index.js",
  //and boundle ll the modules that we depend on inside the entry file into a buidle.js file
  output: {
    path: path.resolve("public"),
    filename: "bundle.js",
  },

  module: {
    rule: [
      {
        //for everyfile that ends with a .js , we want to run the babel-loader on it , but exclude node modules
        //the babel loader will transform the non-standard javascript that we'll using
        test: /\.js$/,
        excule: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
};
