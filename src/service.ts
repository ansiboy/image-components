import { DataSourceSelectArguments, DataSourceSelectResult } from "maishu-wuzhui-helper";
import * as chitu from 'maishu-chitu'
import { config } from "./config";
import { errors } from "./errors";
import * as ui from "maishu-ui-toolkit";

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