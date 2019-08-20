const path = require("path");

module.exports = {
  entry: path.resolve(__dirname, "src", "index.js"), //local onde a entrada de informaçoes a ser tranformadas virao
  output: {
    path: path.resolve(__dirname, "public"), // local onde sera lançado as informações traduzidas
    filename: "bundle.js" //arquivo onde será salvo
  },
  devServer: {
    contentBase: path.resolve(__dirname, "public") //local onde encontrara o arquivo para atualizar suas informações quando salvar a aplicação
  },
  module: {
    rules: [
      {
        test: /\.js$/, // escapar ponto e $ inficar que arquivo deve terminar com isso
        exclude: /node_modules/, //ja está tudo transpilado
        use: {
          loader: "babel-loader" //tranpilar codigo dessa aplicação
        }
      },
      {
        test: /\.css$/,
        use: [{ loader: "style-loader" }, { loader: "css-loader" }]
      },
      {
        test: /.*\.(git|png|jpe?g)$/i,
        use: { loader: "file-loader" }
      }
    ]
  }
};
