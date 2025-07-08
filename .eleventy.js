module.exports = function(eleventyConfig) {
  // Copy CSS file to output
  eleventyConfig.addPassthroughCopy("src/styles.css");
  
  // Create a collection for blog posts
  eleventyConfig.addCollection("recentPosts", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/blog/*.md")
      .sort((a, b) => new Date(b.data.date) - new Date(a.data.date))
      .slice(0, 5);
  });
  
  // Create a collection for all blog posts (for pagination)
  eleventyConfig.addCollection("blogPosts", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/blog/*.md")
      .sort((a, b) => new Date(b.data.date) - new Date(a.data.date));
  });
  
  return {
    dir: {
      input: "src",
      output: "_site"
    }
  };
};