var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "maishu-chitu", "./config", "./errors"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const chitu = require("maishu-chitu");
    const config_1 = require("./config");
    const errors_1 = require("./errors");
    // import { errors } from "maishu-ui-toolkit";
    // let serviceHost = '127.0.0.1:48628'
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
        getByJson(url, data) {
            if (data && Object.getOwnPropertyNames(data).length > 0)
                url = `${url}?${JSON.stringify(data)}`;
            let headers = { "content-type": 'application/json' };
            return this.ajax(url, { headers, method: 'get' });
        }
        putByJson(url, data) {
            let headers = { "content-type": 'application/json' };
            return this.ajax(url, { headers, data, method: 'put' });
        }
        postByJson(url, data) {
            let headers = { "content-type": 'application/json' };
            return this.ajax(url, { headers, data, method: 'post' });
        }
        deleteByJson(url, data) {
            let headers = { "content-type": 'application/json' };
            return this.ajax(url, { headers, data, method: 'delete' });
        }
        get(url, data) {
            data = data || {};
            let params = "";
            for (let key in data) {
                params = params ? `${params}&${key}=${data[key]}` : `${key}=${data[key]}`;
            }
            if (params) {
                url = `${url}?${params}`;
            }
            return this.ajax(url, { method: 'get' });
        }
        put(url, data) {
            let headers = { "content-type": 'application/x-www-form-urlencoded' };
            return this.ajax(url, { headers, data, method: 'put' });
        }
        post(url, data) {
            let headers = { "content-type": 'application/x-www-form-urlencoded' };
            return this.ajax(url, { headers, data, method: 'post', });
        }
        delete(url, data) {
            let headers = { "content-type": 'application/x-www-form-urlencoded' };
            return this.ajax(url, { headers, data, method: 'delete' });
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
});
