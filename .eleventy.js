export default function(eleventyConfig) {
  // Passthroughs (match your repo):
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" }); // css, js, webfonts, etc.
  eleventyConfig.addPassthroughCopy({ "src/images": "images" }); // images folder sits alongside assets

  return {
    dir: { input: "src", includes: "_includes", output: "_site" },
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk"
  };
}
