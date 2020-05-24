<template lang="pug">
  div.users-container
    UserPreview(v-for="user in users" :key="user.id" :user="user")
</template>

<style scoped lang="scss">
.users-container {
  @extend %users-container;
}
</style>

<script>
import Vue from "vue";
import Component from "vue-class-component";

import UserPreview from "./user-preview/UserPreview";

import { Getter } from "@/common/decorators/getter.decorator";

import { GetterName } from "@/common/const/getter-name.const";

@Component({
  components: { UserPreview }
})
export default class Users extends Vue {
  @Getter(GetterName.filteredUsers)
  get users() {
    return ["id", "login"];
  }
}
</script>
