import { DataSourceSelectArguments, DataSourceSelectResult } from "maishu-wuzhui-helper";
import * as chitu from 'maishu-chitu';
import * as ui from "maishu-ui-toolkit";
declare class Service extends chitu.Service {
    constructor();
    ajax<T>(url: string, options?: chitu.AjaxOptions): Promise<T>;
    saveImage(data: ui.ImageFileToBase64Result): Promise<unknown>;
    images(args: DataSourceSelectArguments, width: number, height: number): Promise<DataSourceSelectResult<any>>;
    removeImage(id: string): Promise<unknown>;
}
declare let service: Service;
export default service;
