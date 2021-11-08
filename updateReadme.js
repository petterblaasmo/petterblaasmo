const fs = require("fs");

const editText = `\`\`\`javascript
    Hello - ${new Date()}
\`\`\``;

fs.writeFile("README.md", editText, "utf-8", (err) => {
  if (err) throw err;
  console.log(`README updated - ${new Date()}`);
});
