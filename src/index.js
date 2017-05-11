import "./styles/main.scss";

import Vue from "vue";
import VueRouter from "vue-router";

import vcHeader from "./vue-components/header.vue";
import vcFooter from "./vue-components/footer.vue";

import vcRouterLinks from "./vue-components/links.vue";
import vcPageHome from "./vue-components/home.vue";

// 
// ======================================================/
Vue.use(VueRouter);

// const vcPageAbout = resolve => {
//   require.ensure(['./vue-components/about.vue'], () => {
//     resolve(require('./vue-components/about.vue'))
//   })
// };
const vcPageBonsai = resolve => {
  require.ensure(['./vue-components/bonsai.vue'], () => {
    resolve(require('./vue-components/bonsai.vue'))
  })
};

// requires npm install babel-plugin-syntax-dynamic-import --save-dev
const vcPageAbout = (resolve) => import("./vue-components/about.vue").then(resolve);
const global404 = (resolve) => import("./vue-components/global404.vue").then(resolve);
const subroute404 = (resolve) => import("./vue-components/subroute404.vue").then(resolve);

const routes = [{
  path: "/",
  component: vcPageHome
}, {
  path: "/about",
  component: vcPageAbout
}, {
  path: "/bonsai",
  component: vcPageBonsai
}, {
  path: "/bonsai/:species",
  component: vcPageBonsai
}, {
  path: "/bonsai/:species/:id",
  component: vcPageBonsai
}, {
  path: "*",
  component: global404
}];

const router = new VueRouter({
  routes
});

// 
// ======================================================/
new Vue({
  el: "#vc-header-mount",
  render: h => h(vcHeader)
});

new Vue({
  el: "#vc-footer-mount",
  render: h => h(vcFooter)
});

new Vue({
  el: "#app",
  router,
  render: h => h(vcRouterLinks)
});

export {router};