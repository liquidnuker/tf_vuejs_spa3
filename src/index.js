import "./styles/main.scss";

import Vue from "vue";
import VueRouter from "vue-router";

import vcHeader from "./vue-components/header.vue";
import vcFooter from "./vue-components/footer.vue";

import vcRouterLinks from "./vue-components/links.vue";
import vcPageHome from './vue-components/home.vue';
import vcPageBonsai from './vue-components/bonsai.vue';
import vcPageContact from './vue-components/contact.vue';
import global404 from './vue-components/global404.vue';
import subroute404 from './vue-components/subroute404.vue';

import {jsonLoader} from './jsonloader.js';

// 
// ======================================================/
Vue.use(VueRouter)

const routes = [{
  path: '/',
  component: vcPageHome
}, {
  path: '/bonsai',
  component: vcPageBonsai
}, {
  path: '/bonsai/:species',
  component: vcPageBonsai
}, {
  path: '/bonsai/:species/:id',
  component: vcPageBonsai
}, {
  path: '*',
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
  el: '#app',
  router,
  render: h => h(vcRouterLinks)
})

export {router}


// 
// ======================================================/
const jsonUrl = "src/js/ajax/bonsai.json";

jsonLoader.getJSON(jsonUrl).then(function (response) {
  // store.state.message = response.bonsai;
  // vmA.loading = false;
  console.log(response.bonsai.length);
}).then(function () {
  // showPages();
  console.log("paginator");
});