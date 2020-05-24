<template lang="pug">
  md-card
    md-card-header
      md-card-header-text
        div.md-title {{ user.login }}
        a.md-subheading(:href="user.html_url" target="_blank") {{ user.html_url }}
      md-card-media(md-medium)
        img(:src="user.avatar_url" alt="")
</template>

<style scoped lang="scss">
.md-card {
  margin: 10px;

  @media (max-width: 700px) {
    margin: 3px 0 0 0;
  }
}
</style>

<script>
import Vue from "vue";
import Component from "vue-class-component";

@Component
export default class User extends Vue {
  user;

  created() {
    this.user = this.$route.meta.user;
  }
}
</script>
