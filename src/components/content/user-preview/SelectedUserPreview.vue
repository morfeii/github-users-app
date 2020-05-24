<template lang="pug">
  extends ../user-preview-base/UserPreviewBase.template.pug
  block buttonTmpl
    md-button.md-dense.md-raised.md-accent.delete-user-btn(v-on:click="onClickDeleteBtn(user.id)") Delete
</template>

<style scoped lang="scss">
.user-preview {
  @extend %user-preview;
}
</style>

<script>
import Component from "vue-class-component";

import UserPreviewBase from "../user-preview-base/UserPreviewBase";

import { Dispatch } from "@/common/decorators/dispatch.decorator";

import { ActionName } from "@/common/const/action-name.const";

@Component
export default class SelectedUserPreview extends UserPreviewBase {
  @Dispatch(ActionName.userDeletion)
  onClickDeleteBtn(userId) {
    return userId;
  }
}
</script>
