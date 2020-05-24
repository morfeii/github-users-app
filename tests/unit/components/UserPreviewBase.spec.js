import { shallowMount, createLocalVue } from "@vue/test-utils";

import UserPreviewBase from "@/components/content/user-preview-base/UserPreviewBase.vue";

import { MATERIAL_COMPONENTS } from "@/material";

describe("UserPreviewBase.vue", () => {
  let wrapper;
  let localVue;

  beforeEach(() => {
    localVue = createLocalVue();
    MATERIAL_COMPONENTS.forEach(localVue.use.bind(localVue));

    wrapper = shallowMount(UserPreviewBase, {
      localVue,
      propsData: {
        user: {}
      },
      render(fn) {
        return fn("div", "For a test's sake");
      }
    });
  });

  it('should receive "user" from parent component', () => {
    expect(wrapper.vm.user).toBeDefined();
  });

  it('should have "routes" when created', () => {
    expect(wrapper.vm.routes).toBeDefined();
  });
});
