"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errors = void 0;
const maishu_toolkit_1 = require("maishu-toolkit");
class Errors extends maishu_toolkit_1.Errors {
    serviceHostNotConfig() {
        return new Error(`Service host is not config.`);
    }
    notImplemented(message) {
        message = message || "Not implemented";
        return new Error(message);
    }
}
exports.errors = new Errors();
