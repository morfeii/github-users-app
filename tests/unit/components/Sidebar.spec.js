import { mount, createLocalVue } from "@vue/test-utils";

import VueRouter from "vue-router";

import Sidebar from "@/components/Sidebar.vue";

import { MATERIAL_COMPONENTS } from "@/material";

import { RouteName } from "@/common/const/route-name.const";

describe("Sidebar.vue", () => {
  let wrapper;
  let localVue;
  let router;

  beforeEach(() => {
    localVue = createLocalVue();
    localVue.use(VueRouter);
    MATERIAL_COMPONENTS.forEach(localVue.use.bind(localVue));

    router = new VueRouter();

    wrapper = mount(Sidebar, {
      localVue,
      router
    });
  });

  it('should set "routes" when created', () => {
    expect(wrapper.vm.routes).toBeDefined();
  });

  it(`should navigate to "${RouteName.users}" when clicked`, async () => {
    wrapper.find(`li[to="/${RouteName.users}"] a`).trigger("click");
    await wrapper.vm.$nextTick();
    expect(wrapper.vm.$route.path).toEqual(`/${RouteName.users}`);
  });

  it(`should navigate to "${RouteName.selectedUsers}" when clicked`, async () => {
    wrapper.find(`li[to="/${RouteName.selectedUsers}"] a`).trigger("click");
    await wrapper.vm.$nextTick();
    expect(wrapper.vm.$route.path).toEqual(`/${RouteName.selectedUsers}`);
  });
});
