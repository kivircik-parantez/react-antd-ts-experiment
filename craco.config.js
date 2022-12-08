const { theme } = require("antd/lib");
const { defaultAlgorithm, defaultSeed } = theme;

const mapToken = defaultAlgorithm(defaultSeed);
console.log("🚀 ~ file: craco.config.js:5 ~ mapToken", mapToken);

module.exports = {
  loader: "less-loader",
  options: {
    lessOptions: {
      modifyVars: mapToken,
    },
  },
};
