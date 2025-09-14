export default function(eleventyConfig) {
  // Passthrough static assets
  eleventyConfig.addPassthroughCopy({ "src/images": "images" });
  eleventyConfig.addPassthroughCopy({ "admin": "admin" });

  // Date formatter used in templates: returns YYYY-MM-DD
  const toISODate = (dateObj) => {
    try {
      return new Date(dateObj).toISOString().slice(0, 10);
    } catch (e) {
      return "";
    }
  };

  // Register as a Universal Filter (works in all template engines)
  eleventyConfig.addFilter("readableDate", toISODate);

  // Also register explicitly for Nunjucks (covers edge cases on some builds)
  eleventyConfig.addNunjucksFilter("readableDate", toISODate);

  // Year shortcode for footer
  eleventyConfig.addShortcode("year", () => new Date().getFullYear());

  // (Optional) Put inside .eleventy.js if you need just a year somewhere
eleventyConfig.addFilter("yearFrom", d => {
  try { return new Date(d).getFullYear(); } catch(e) { return ""; }
});
eleventyConfig.addNunjucksFilter("yearFrom", d => {
  try { return new Date(d).getFullYear(); } catch(e) { return ""; }
});

  return {
    dir: { input: "src", includes: "_includes", data: "_data", output: "_site" },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    templateFormats: ["njk", "md", "html"]
  };
}
