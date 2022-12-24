import React from "react";
import ReactDOM from "react-dom";
import singleSpaReact from "single-spa-react";
import Root from "./root.component";

const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: Root,
  errorBoundary(err, info, props) {
    // Customize the root error boundary for your microfrontend here.
    return null;
  },
  // 指定将内容加载到 root/src/index.ejs 的哪里
  domElementGetter: () => document.getElementsByTagName('main')[0]
});

export const { bootstrap, mount, unmount } = lifecycles;
