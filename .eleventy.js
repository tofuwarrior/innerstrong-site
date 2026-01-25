import { DateTime } from "luxon";

export default function(eleventyConfig) {
  // If assets live at src/hypothesis/assets → publish them to /assets
  eleventyConfig.addPassthroughCopy({ "src/hypothesis/assets": "assets" });

  // If images live at src/hypothesis/images → publish them to /images
  eleventyConfig.addPassthroughCopy({ "src/hypothesis/images": "images" });
  
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
