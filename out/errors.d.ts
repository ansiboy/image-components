import { Errors as BaseErrors } from "maishu-toolkit";
declare class Errors extends BaseErrors {
    serviceHostNotConfig(): Error;
    notImplemented(message?: string): Error;
}
export declare let errors: Errors;
export {};
