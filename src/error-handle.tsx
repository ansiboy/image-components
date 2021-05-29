export function errorHandle(err: Error) {
    if (typeof window === "undefined") {
        throw err;
    }
    else {
        import("maishu-ui-toolkit").then((ui) => {
            ui.alert({ title: "错误", message: err.message });
        })
    }
}