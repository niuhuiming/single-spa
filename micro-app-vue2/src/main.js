import Vue from 'vue';
import singleSpaVue from 'single-spa-vue';

import App from './App.vue';

Vue.config.productionTip = false;

import VueRouter from 'vue-router';
Vue.use(VueRouter);

// 通过 vue-router 简单展示两个组件
import About from './components/About';
const Home = { template: "<div>Home</div>" }
const routes = [
  { path: '/about', component: About },
  { path: '/home', component: Home }
];
const router = new VueRouter({
  routes,
  mode: 'history',
  base: '/vue2'
})

const vueLifecycles = singleSpaVue({
  Vue,
  appOptions: {
    router,
    render(h) {
      return h(App, {
        props: {
          // single-spa props are available on the "this" object. Forward them to your component as needed.
          // https://single-spa.js.org/docs/building-applications#lifecycle-props
          // if you uncomment these, remember to add matching prop definitions for them in your App.vue file.
          /*
          name: this.name,
          mountParcel: this.mountParcel,
          singleSpa: this.singleSpa,
          */
        },
      });
    },
  },
});

export const bootstrap = vueLifecycles.bootstrap;
export const mount = vueLifecycles.mount;
export const unmount = vueLifecycles.unmount;
