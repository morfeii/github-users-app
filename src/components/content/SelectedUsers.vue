<template lang="pug">
  div.selected-users-container
    md-button.md-raised.md-accent.delete-users-btn(v-if="users.length" v-on:click="onClickDeleteBtn()") Delete Users
    md.title.md-layout.md-alignment-top-center(v-else) No user selected!
    div.users-container
      SelectedUserPreview(v-for="user in users" :key="user.id" :user="user")
</template>

<style scoped lang="scss">
.delete-users-btn {
  width: 100%;
  max-width: 300px;
  display: block;
  margin: 15px auto 0 auto;
  transition: none;

  @media (max-width: 653px) {
    max-width: unset;
    margin: 3px 0 0 0;
  }
}

.users-container {
  @extend %users-container;
}
</style>

<script>
import Vue from "vue";
import Component from "vue-class-component";
import SelectedUserPreview from "./user-preview/SelectedUserPreview";

import { Getter } from "@/common/decorators/getter.decorator";
import { Dispatch } from "@/common/decorators/dispatch.decorator";

import { GetterName } from "@/common/const/getter-name.const";
import { ActionName } from "@/common/const/action-name.const";

@Component({
  components: { SelectedUserPreview }
})
export default class SelectedUsers extends Vue {
  @Dispatch(ActionName.selectedUsersReset)
  onClickDeleteBtn() {}

  @Getter(GetterName.filteredSelectedUsers)
  get users() {
    return ["id", "login"];
  }
}
</script>
