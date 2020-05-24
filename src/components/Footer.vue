<template lang="pug">
  md-toolbar.md-transparent.md-large
    div.footer-container
      div.about
        span.md-subheading About
        a.about-link(href="https://github.com/morfeii" target="_blank")
          font-awesome-icon(:icon="['fab', 'github']")
</template>

<style scoped lang="scss">
.md-toolbar {
  padding: 8px;
}

.footer-container {
  width: 100%;
  max-width: 700px;
  margin: 0 auto;
  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;
}

.about {
  display: flex;
  flex-direction: column;
  align-items: center;

  &-link {
    width: 30px;
    height: 30px;
    margin-top: 5px;

    svg {
      width: inherit;
      height: inherit;
    }
  }
}

.info {
  &-title {
    margin-left: 24px;
  }
}

.links {
  display: flex;

  &-list {
    margin: 0;
  }
}
</style>

<script>
import Vue from "vue";
import Component from "vue-class-component";

@Component
export default class Footer extends Vue {}
</script>
