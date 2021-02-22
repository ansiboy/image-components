const { getVirtualPaths } = require("maishu-chitu-scaffold");
const path = require("path");
let virtualPaths = getVirtualPaths(null, __dirname);
virtualPaths["bootstrap"] = path.join(__dirname, "node_modules/bootstrap");
virtualPaths["maishu-image-components"] = path.join(__dirname, "../");
module.exports = {
    port: 49532,
    virtualPaths
}