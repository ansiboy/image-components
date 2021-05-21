const { getVirtualPaths } = require("maishu-chitu-scaffold");
const path = require("path");
const fs = require("fs");

let virtualPaths = getVirtualPaths(null, __dirname);
virtualPaths["bootstrap"] = path.join(__dirname, "node_modules/bootstrap");
virtualPaths["maishu-image-components"] = path.join(__dirname, "../");
virtualPaths["content"] = path.join(__dirname, "../content");

let files = fs.readdirSync(path.join(__dirname, "../out"));
for (let i = 0; i < files.length; i++) {
    virtualPaths[files[i]] = path.join(__dirname, "../out", files[i]);
}

module.exports = {
    port: 49532,
    virtualPaths
}