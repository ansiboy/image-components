define(["require", "exports", "maishu-chitu"], function (require, exports, chitu) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    let serviceHost = '127.0.0.1:48628';
    class Service extends chitu.Service {
        constructor() {
            super();
        }
        ajax(url, options) {
            if (!url.startsWith('http')) {
                url = location.protocol + "//" + serviceHost + "/" + url;
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
            let { base64, width, height } = data;
            return this.postByJson('upload', { image: base64, width, height });
        }
        images(args, width, height) {
            return Promise.resolve(null);
        }
        removeImage(id) {
            return this.postByJson('remove', { id });
        }
    }
    let service = new Service();
    exports.default = service;
});
