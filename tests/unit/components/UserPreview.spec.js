import { mount, createLocalVue } from "@vue/test-utils";
import VueRouter from "vue-router";

import UserPreview from "@/components/content/user-preview/UserPreview.vue";

import { MATERIAL_COMPONENTS } from "@/material";

import { RouteName } from "@/common/const/route-name.const";

describe("UserPreview.vue", () => {
  let wrapper;
  let router;
  let localVue;
  let userSelectionSpy;
  let snackbarTextUpdateSpy;

  beforeEach(() => {
    localVue = createLocalVue();
    MATERIAL_COMPONENTS.forEach(localVue.use.bind(localVue));
    localVue.use(VueRouter);

    router = new VueRouter({
      routes: [{ path: `/${RouteName.user}`, name: RouteName.user }]
    });

    wrapper = mount(UserPreview, {
      localVue,
      router,
      propsData: {
        user: {}
      }
    });

    userSelectionSpy = jest.spyOn(wrapper.vm, "_selectUser");
    snackbarTextUpdateSpy = jest.spyOn(wrapper.vm, "_showMessage");
  });

  it("should fire store action on user selection", () => {
    wrapper.find(".select-user-btn").trigger("click");
    expect(userSelectionSpy).toHaveBeenCalled();
    expect(snackbarTextUpdateSpy).toHaveBeenCalled();
  });
});
