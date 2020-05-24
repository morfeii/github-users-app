import { mount, createLocalVue } from "@vue/test-utils";

import VueRouter from "vue-router";

import SelectedUsers from "@/components/content/SelectedUsers.vue";

import { MATERIAL_COMPONENTS } from "@/material";

import { RouteName } from "@/common/const/route-name.const";

import { store } from "@/store";

describe("SelectedUsers.vue", () => {
  const usersMock = [{}, {}, {}];
  let wrapper;
  let getters;
  let router;
  let localVue;
  let usersDeletionSpy;

  beforeEach(() => {
    localVue = createLocalVue();
    MATERIAL_COMPONENTS.forEach(localVue.use.bind(localVue));
    localVue.use(VueRouter);

    getters = {
      filteredSelectedUsers: () => usersMock
    };
    router = new VueRouter({
      routes: [{ path: `/${RouteName.user}`, name: RouteName.user }]
    });

    wrapper = mount(SelectedUsers, {
      localVue,
      router,
      store: Object.assign(store, { getters })
    });

    usersDeletionSpy = jest.spyOn(wrapper.vm, "onClickDeleteBtn");
  });

  it("should get filtered selected users", () => {
    expect(wrapper.findAll(".md-card").length).toEqual(usersMock.length);
  });

  it("should reset selected users", () => {
    wrapper.find(".delete-users-btn").trigger("click");
    expect(usersDeletionSpy).toHaveBeenCalled();
  });
});
