const simpleGit = require("simple-git"),
  fs = require("fs");

const ReadMe = `\`\`\`javascript
    Hello - ${new Date()}
\`\`\``;

fs.writeFile("README.md", ReadMe, "utf-8", (err) => {
  if (err) throw err;
});

setInterval(() => {
  console.log(`Committed ReadME - ${new Date()}`);
  simpleGit().add(["*"]).commit(new Date()).push();
}, 60 * 1000);
