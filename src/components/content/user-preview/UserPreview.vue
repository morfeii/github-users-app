<template lang="pug">
  extends ../user-preview-base/UserPreviewBase.template.pug
  block buttonTmpl
    md-button.md-primary.md-dense.md-raised.select-user-btn(v-on:click="onClickSelectBtn(user)") Select
</template>

<style scoped lang="scss">
.user-preview {
  @extend %user-preview;
}
</style>

<script>
import Component from "vue-class-component";

import { SnackbarMessageName } from "@/common/const/snackbar-message-name.const";

import UserPreviewBase from "../user-preview-base/UserPreviewBase";

import { Dispatch } from "@/common/decorators/dispatch.decorator";

import { ActionName } from "@/common/const/action-name.const";

// TODO: install plugin to support "#" syntax;
@Component
export default class UserPreview extends UserPreviewBase {
  onClickSelectBtn(user) {
    this._selectUser(user);
    this._showMessage();
  }

  @Dispatch(ActionName.userSelection)
  _selectUser(user) {
    return user;
  }

  @Dispatch(ActionName.snackbarTextUpdate)
  _showMessage() {
    return SnackbarMessageName.userSelection;
  }
}
</script>
