"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const chitu = require("maishu-chitu");
const config_1 = require("./config");
const errors_1 = require("./errors");
class Service extends chitu.Service {
    constructor() {
        super();
    }
    ajax(url, options) {
        if (!url.startsWith('http')) {
            if (!config_1.config.serviceHost)
                throw errors_1.errors.serviceHostNotConfig();
            url = location.protocol + "//" + config_1.config.serviceHost + "/" + url;
        }
        return super.ajax(url, options);
    }
    saveImage(data) {
        return __awaiter(this, void 0, void 0, function* () {
            let { base64, width, height } = data;
            let result = yield this.postByJson('upload', { image: base64, width, height });
            return result;
        });
    }
    images(args, width, height) {
        return Promise.resolve(null);
    }
    removeImage(id) {
        return __awaiter(this, void 0, void 0, function* () {
            let result = yield this.postByJson('remove', { id });
            return result;
        });
    }
}
let service = new Service();
exports.default = service;
