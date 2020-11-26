const fs = require("fs");
fs.writeFileSync("./static/CNAME", "staging.docs.xviz.com");
console.log("cname removed")