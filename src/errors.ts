import { Errors as BaseErrors } from "maishu-toolkit";
class Errors extends BaseErrors {
    serviceHostNotConfig() {
        return new Error(`Service host is not config.`)
    }
    notImplemented(message?: string) {
        message = message || "Not implemented";
        return new Error(message);
    }
}

export let errors = new Errors()