import { shallowMount, createLocalVue } from "@vue/test-utils";

import User from "@/components/content/User.vue";

import { MATERIAL_COMPONENTS } from "@/material";

describe("User.vue", () => {
  let wrapper;
  let localVue;

  beforeEach(() => {
    localVue = createLocalVue();
    MATERIAL_COMPONENTS.forEach(localVue.use.bind(localVue));

    wrapper = shallowMount(User, {
      localVue,
      mocks: {
        $route: {
          meta: { user: {} }
        }
      }
    });
  });

  it('should set "user" from resolved route', () => {
    expect(wrapper.vm.user).toBeDefined();
  });
});
