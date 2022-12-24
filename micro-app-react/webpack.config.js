const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react");

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "ncwu",
    projectName: "micro-app-react",
    webpackConfigEnv,
    argv,
  });

  return merge(defaultConfig, {
    // modify the webpack config however you'd like to by adding to this object
    // 在基座中引入的包不必再打包，要将其排除在外。react, react-dom 默认被排除
    externals: ['react-router-dom']
  });
};
