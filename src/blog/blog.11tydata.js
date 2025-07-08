module.exports = {
  eleventyComputed: {
    permalink: data => {
      // Extract the slug from the filename (remove the date prefix)
      const slug = data.page.fileSlug.replace(/^\d{4}-\d{2}-\d{2}-/, '');
      return `/${slug}/`;
    }
  }
};