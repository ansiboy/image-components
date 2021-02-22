"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const ui = require("maishu-ui-toolkit");
exports.config = {
    serviceHost: null,
    errorHandle: (err) => {
        ui.alert({ title: "错误", message: err.message });
    }
};
