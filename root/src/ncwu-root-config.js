import { registerApplication, start } from "single-spa";

/**
 * 注册微前端应用
 * 1.name: 字符串类型，微前端应用名称："@组织名称/应用名称"
 * 2.app: 函数类型，返回 Promise, 通过 Systemjs 引用打包好的微前端引用模块代码
 * 3.activeWhen: 路由匹配时激活应用
 */
registerApplication({
  name: "@single-spa/welcome",
  app: () =>
    System.import(
      "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
    ),
  activeWhen: ["/"],
});

// registerApplication({
//   name: "@ncwu/navbar",
//   app: () => System.import("@ncwu/navbar"),
//   activeWhen: ["/"]
// });

start({
  // 是否可以通过 history.pushState() 和 history.resplaceState() 更改触发 single-spa 路由
  // true 不允许
  urlRerouteOnly: true,
});
