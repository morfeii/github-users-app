<template lang="pug">
  md-toolbar.md-transparent.md-large(md-elevation="0")
    md-list
      md-list-item(:to="`/${routes.users}`") Users
      md-list-item(:to="`/${routes.selectedUsers}`") Selected Users
</template>

<style scoped lang="scss">
.md-toolbar {
  padding: 0;
}
.md-list {
  width: 100%;
  height: 100%;
}
</style>

<script>
import Vue from "vue";
import Component from "vue-class-component";

import { RouteName } from "@/common/const/route-name.const";

@Component
export default class Sidebar extends Vue {
  routes = RouteName;
}
</script>
