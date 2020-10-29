const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("images");
    eleventyConfig.addPassthroughCopy("css");

    eleventyConfig.addPlugin(eleventyNavigationPlugin);

    return {
      dir: {
        input: "content",
        output: "output",
        includes: "_layouts"
      },
    };
  };