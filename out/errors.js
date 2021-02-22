"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errors = void 0;
class Errors {
    serviceHostNotConfig() {
        return new Error(`Service host is not config.`);
    }
}
exports.errors = new Errors();
