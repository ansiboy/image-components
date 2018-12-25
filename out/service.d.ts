import { DataSourceSelectArguments, DataSourceSelectResult } from "maishu-wuzhui";
import * as chitu from 'maishu-chitu';
declare class Service extends chitu.Service {
    constructor();
    ajax<T>(url: string, options?: chitu.AjaxOptions): Promise<T>;
    getByJson<T>(url: string, data?: any): Promise<T>;
    protected putByJson<T>(url: string, data?: any): Promise<T>;
    protected postByJson<T>(url: string, data?: any): Promise<T>;
    protected deleteByJson<T>(url: string, data: any): Promise<T>;
    protected get<T>(url: string, data?: any): Promise<T>;
    protected put<T>(url: string, data?: any): Promise<T>;
    protected post<T>(url: string, data?: any): Promise<T>;
    protected delete<T>(url: string, data: any): Promise<T>;
    saveImage(data: ui.ImageFileToBase64Result): Promise<{}>;
    images(args: DataSourceSelectArguments, width: number, height: number): Promise<DataSourceSelectResult<any>>;
    removeImage(id: string): Promise<{}>;
}
declare let service: Service;
export default service;
