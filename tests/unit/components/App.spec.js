import { mount, createLocalVue } from "@vue/test-utils";

import Vuex from "vuex";

import VueRouter from "vue-router";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import App from "@/App.vue";

import { MATERIAL_COMPONENTS } from "@/material";

describe("App.vue", () => {
  let wrapper;
  let store;
  let router;
  let localVue;

  beforeEach(() => {
    localVue = createLocalVue();

    MATERIAL_COMPONENTS.forEach(localVue.use.bind(localVue));
    library.add(faGithub);
    localVue.component("font-awesome-icon", FontAwesomeIcon);
    localVue.use(Vuex);
    localVue.use(VueRouter);

    store = new Vuex.Store({});
    router = new VueRouter();

    wrapper = mount(App, {
      localVue,
      store,
      router,
      attachToDocument: true
    });
  });

  it('should contain "snackbarConfig" when created', () => {
    expect(wrapper.vm.snackbarConfig).toBeDefined();
  });

  it('should show "snackbar" when store updates', async () => {
    const text = "text";
    wrapper.vm.snackbarConfig.text = text;
    wrapper.vm.snackbarConfig.isVisible = true;

    await wrapper.vm.$nextTick();

    const snackBar = document.querySelector(".md-snackbar");
    expect(snackBar).toBeDefined();
    expect(snackBar.querySelector("span").innerHTML).toEqual(text);
  });
});
