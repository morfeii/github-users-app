<template lang="pug">
  md-toolbar.md-transparent.md-large
    span.md-title Github Users Showcase
    md-field.md-success
      label Search for users...
      md-input(v-model="searchCriteria" v-on:keyup="onKeyupInput($event.target.value)")
</template>

<style scoped lang="scss">
.md-toolbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.md-field {
  max-width: 400px;
}
</style>

<script>
import Vue from "vue";
import Component from "vue-class-component";

import { Select } from "@/common/decorators/select.decorator";
import { Dispatch } from "@/common/decorators/dispatch.decorator";

import { StateEntryName } from "@/common/const/state-entry-name.const";
import { ActionName } from "@/common/const/action-name.const";

@Component
export default class Header extends Vue {
  @Select(StateEntryName.searchCriteria)
  searchCriteria;

  @Dispatch(ActionName.criteriaUpdate)
  onKeyupInput(criteria) {
    return criteria;
  }
}
</script>
