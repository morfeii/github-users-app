<template lang="pug">
  div#app.app-container
    div.header
      Header
    div.sidebar
      Sidebar
    div.content
      router-view
    div.footer
      Footer
    md-snackbar(:md-duration="snackbarConfig.duration" :md-active.sync="snackbarConfig.isVisible" md-persistent)
      span {{ snackbarConfig.text }}
</template>

<style lang="scss">
.app-container {
  height: 100vh;
  display: grid;
  grid-template-columns: 300px auto;
  grid-template-rows: max-content auto max-content;
  grid-template-areas: "header header" "sidebar content" "footer footer";

  @media (max-width: 700px) {
    grid-template-columns: auto;
    grid-template-rows: max-content max-content auto max-content;
    grid-template-areas: "header" "sidebar" "content" "footer";

    .header {
      .md-toolbar {
        flex-direction: column;
        justify-content: center;
      }

      .md-title {
        margin-top: 10px;
      }
    }
  }
}

.header {
  grid-area: header;
}

.sidebar {
  grid-area: sidebar;

  .md-toolbar {
    height: 100%;
    min-height: unset;
    align-items: flex-start;
  }
}

.content {
  grid-area: content;
}

.footer {
  grid-area: footer;
}

#nprogress .bar {
  height: 3px !important;
}
</style>

<script>
import Vue from "vue";
import Component from "vue-class-component";

import Header from "@/components/Header.vue";
import Sidebar from "@/components/Sidebar.vue";
import Footer from "@/components/Footer.vue";

import { ActionName } from "@/common/const/action-name.const";

@Component({
  components: { Header, Sidebar, Footer }
})
export default class App extends Vue {
  snackbarConfig = {
    duration: 2e3,
    isVisible: false,
    text: ""
  };

  created() {
    this.$store.watch(
      state => state.snackbarText,
      () => {
        const { snackbarText } = this.$store.state;
        if (snackbarText) {
          this.snackbarConfig.isVisible = true;
          this.snackbarConfig.text = snackbarText;
          this.$store.dispatch(ActionName.snackbarTextReset);
        }
      }
    );
  }
}
</script>
