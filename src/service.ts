import { DataSourceSelectArguments, DataSourceSelectResult } from "maishu-wuzhui";
import * as chitu from 'maishu-chitu'
import { config } from "./config";
import { errors } from "./errors";
// import { errors } from "maishu-ui-toolkit";

// let serviceHost = '127.0.0.1:48628'
class Service extends chitu.Service {
    constructor() {
        super();
    }

    ajax<T>(url: string, options?: chitu.AjaxOptions): Promise<T> {
        if (!url.startsWith('http')) {
            if (!config.serviceHost)
                throw errors.serviceHostNotConfig()

            url = location.protocol + "//" + config.serviceHost + "/" + url
        }
        return super.ajax<T>(url, options);
    }

    public getByJson<T>(url: string, data?: any) {
        if (data && Object.getOwnPropertyNames(data).length > 0)
            url = `${url}?${JSON.stringify(data)}`;

        let headers = { "content-type": 'application/json' };
        return this.ajax<T>(url, { headers, method: 'get' })
    }

    protected putByJson<T>(url: string, data?: any) {
        let headers = { "content-type": 'application/json' };
        return this.ajax<T>(url, { headers, data, method: 'put' });
    }

    protected postByJson<T>(url: string, data?: any) {
        let headers = { "content-type": 'application/json' };
        return this.ajax<T>(url, { headers, data, method: 'post' });
    }

    protected deleteByJson<T>(url: string, data: any) {
        let headers = { "content-type": 'application/json' };
        return this.ajax<T>(url, { headers, data, method: 'delete' });
    }


    protected get<T>(url: string, data?: any) {
        data = data || {};
        let params = "";
        for (let key in data) {
            params = params ? `${params}&${key}=${data[key]}` : `${key}=${data[key]}`;
        }

        if (params) {
            url = `${url}?${params}`;
        }

        return this.ajax<T>(url, { method: 'get' })
    }

    protected put<T>(url: string, data?: any) {
        let headers = { "content-type": 'application/x-www-form-urlencoded' };
        return this.ajax<T>(url, { headers, data, method: 'put' });
    }

    protected post<T>(url: string, data?: any) {
        let headers = { "content-type": 'application/x-www-form-urlencoded' };
        return this.ajax<T>(url, { headers, data, method: 'post', });
    }

    protected delete<T>(url: string, data: any) {
        let headers = { "content-type": 'application/x-www-form-urlencoded' };
        return this.ajax<T>(url, { headers, data, method: 'delete' });
    }

    async saveImage(data: ui.ImageFileToBase64Result) {
        let { base64, width, height } = data
        let result = await this.postByJson('upload', { image: base64, width, height })
        return result
    }

    images(args: DataSourceSelectArguments, width: number, height: number): Promise<DataSourceSelectResult<any>> {
        return Promise.resolve(null)
    }

    async removeImage(id: string) {
        let result = await this.postByJson('remove', { id })
        return result
    }
}


let service = new Service()
export default service