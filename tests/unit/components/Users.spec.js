import { mount, createLocalVue } from "@vue/test-utils";

import VueRouter from "vue-router";

import Users from "@/components/content/Users.vue";

import { MATERIAL_COMPONENTS } from "@/material";

import { RouteName } from "@/common/const/route-name.const";

import { store } from "@/store";

describe("Users.vue", () => {
  const usersMock = [{}, {}, {}];
  let wrapper;
  let router;
  let getters;
  let localVue;

  beforeEach(() => {
    localVue = createLocalVue();
    MATERIAL_COMPONENTS.forEach(localVue.use.bind(localVue));
    localVue.use(VueRouter);

    getters = {
      filteredUsers: () => usersMock
    };

    router = new VueRouter({
      routes: [{ path: `/${RouteName.user}`, name: RouteName.user }]
    });

    wrapper = mount(Users, {
      localVue,
      router,
      store: Object.assign(store, { getters })
    });
  });

  it("should receive filtered users from store", () => {
    expect(wrapper.findAll(".md-card").length).toEqual(usersMock.length);
  });
});
