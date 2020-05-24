import { mount, createLocalVue } from "@vue/test-utils";

import Vuex from "vuex";

import Header from "@/components/Header.vue";

import { MATERIAL_COMPONENTS } from "@/material";

describe("Header.vue", () => {
  let wrapper;
  let localVue;
  let searchSpy;

  beforeEach(() => {
    // Local Vue;
    localVue = createLocalVue();
    MATERIAL_COMPONENTS.forEach(localVue.use.bind(localVue));
    localVue.use(Vuex);

    wrapper = mount(Header, {
      localVue,
      store: {
        searchCriteria: ""
      }
    });

    searchSpy = jest.spyOn(wrapper.vm, "onKeyupInput");
  });

  it('should set "searchCriteria" when created', () => {
    expect(wrapper.vm.searchCriteria).toBeDefined();
  });

  it('should dispatch "criteriaUpdate" action on input keyup', () => {
    wrapper.find("input").trigger("keyup");
    expect(searchSpy).toHaveBeenCalled();
  });
});
