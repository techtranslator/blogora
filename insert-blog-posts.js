const fs = require('fs');

// Read the original blogData.ts file
const originalContent = fs.readFileSync('lib/blogData.ts', 'utf8');

// Read the new blog posts
const newBlogPosts = fs.readFileSync('new-blog-posts.txt', 'utf8');

// Split content into lines
const lines = originalContent.split('\n');

// Find the position to insert the new blog posts
// We want to insert right after line 10370 which has "  }" but before line 10371 which has "];"
let insertLine = -1;

for (let i = 0; i < lines.length - 1; i++) {
  if (lines[i].trim() === "  }" && lines[i + 1].trim() === "];") {
    insertLine = i + 1;
    break;
  }
}

// If we found the position, insert the new blog posts
if (insertLine !== -1) {
  // Insert the new blog posts right before the closing ];
  // Remove the trailing comma from newBlogPosts
  const cleanBlogPosts = newBlogPosts.slice(0, -1);
  const blogPostLines = cleanBlogPosts.split('\n');
  
  // Insert a comma after the last existing blog post, then the new blog posts
  lines.splice(insertLine, 0, ',', ...blogPostLines);
  
  // Write the new content to the file
  fs.writeFileSync('lib/blogData.ts', lines.join('\n'));
  
  console.log('Successfully added 100 new blog posts to blogData.ts');
} else {
  console.log('Could not find the insertion point in blogData.ts');
}