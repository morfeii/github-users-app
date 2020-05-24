module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `
          @import "@/styles/content.scss";
        `
      }
    }
  }
};
