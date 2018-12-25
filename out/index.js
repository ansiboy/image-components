(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./image-thumber", "./image-upload", "./service", "./config"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var image_thumber_1 = require("./image-thumber");
    exports.ImageThumber = image_thumber_1.default;
    var image_upload_1 = require("./image-upload");
    exports.ImageUpload = image_upload_1.default;
    var service_1 = require("./service");
    exports.service = service_1.default;
    var config_1 = require("./config");
    exports.config = config_1.config;
});
