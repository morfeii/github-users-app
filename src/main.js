import Vue from "vue";

import App from "@/App.vue";
import router from "@/router";
import { store } from "@/store";

import VueResource from "vue-resource";

import Nprogress from "nprogress";
import "nprogress/nprogress.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import { MATERIAL_COMPONENTS } from "@/material";

// Font-Awesome;
library.add(faGithub);
Vue.component("font-awesome-icon", FontAwesomeIcon);

// Material;
MATERIAL_COMPONENTS.forEach(Vue.use.bind(Vue));

// VueResource;
Vue.use(VueResource);

// NProgress;
Nprogress.configure({ showSpinner: false });

// TODO: add global error interceptor (use axios instead vue-resource);
Vue.http.interceptors.push((request, next) => {
  Nprogress.start();
  next(response => {
    Nprogress.done();
    return response;
  });
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
