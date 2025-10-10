import { DateTime } from "luxon";

export default function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });
  eleventyConfig.addPassthroughCopy({ "src/images": "images" });
  
  // Add date filter
  eleventyConfig.addFilter("date", function (dateObj, format) {
    if (dateObj === "now") {
      dateObj = new Date();
    }
    return DateTime.fromJSDate(dateObj).toFormat(format);
  });
  
  return {
    dir: { input: "src", includes: "_includes", output: "_site" },
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk"
  };
}
