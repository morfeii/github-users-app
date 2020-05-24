import { mount, createLocalVue } from "@vue/test-utils";

import VueRouter from "vue-router";

import SelectedUserPreview from "@/components/content/user-preview/SelectedUserPreview.vue";

import { MATERIAL_COMPONENTS } from "@/material";

import { RouteName } from "@/common/const/route-name.const";

describe("SelectedUserPreview.vue", () => {
  let wrapper;
  let router;
  let localVue;
  let userDelectionSpy;

  beforeEach(() => {
    localVue = createLocalVue();
    MATERIAL_COMPONENTS.forEach(localVue.use.bind(localVue));
    localVue.use(VueRouter);

    router = new VueRouter({
      routes: [{ path: `/${RouteName.user}`, name: RouteName.user }]
    });

    wrapper = mount(SelectedUserPreview, {
      localVue,
      router,
      propsData: {
        user: {}
      }
    });

    userDelectionSpy = jest.spyOn(wrapper.vm, "onClickDeleteBtn");
  });

  it('should dispatch "userDeletion" action', () => {
    wrapper.find(".delete-user-btn").trigger("click");
    expect(userDelectionSpy).toHaveBeenCalled();
  });
});
