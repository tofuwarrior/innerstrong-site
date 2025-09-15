// .eleventy.js
export default function (eleventyConfig) {
  // Passthrough static assets
  eleventyConfig.addPassthroughCopy({ "src/images": "images" });
  eleventyConfig.addPassthroughCopy({ "admin": "admin" });
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });
  eleventyConfig.addPassthroughCopy({ "src/css": "css" });
  eleventyConfig.addPassthroughCopy({ "src/js": "js" });

  // Date formatter used in templates: returns YYYY-MM-DD
  const toISODate = (dateObj) => {
    try {
      return new Date(dateObj).toISOString().slice(0, 10);
    } catch (e) {
      return "";
    }
  };

  // Filters
  eleventyConfig.addFilter("readableDate", toISODate);
  eleventyConfig.addNunjucksFilter("readableDate", toISODate);

  eleventyConfig.addFilter("yearFrom", (d) => {
    try { return new Date(d).getFullYear(); } catch (e) { return ""; }
  });
  eleventyConfig.addNunjucksFilter("yearFrom", (d) => {
    try { return new Date(d).getFullYear(); } catch (e) { return ""; }
  });

  // Shortcodes
  eleventyConfig.addShortcode("year", () => new Date().getFullYear());

  // Directory and engine settings
  return {
    dir: { input: "src", includes: "_includes", data: "_data", output: "_site" },
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
    templateFormats: ["njk", "md", "html"]
  };
}
