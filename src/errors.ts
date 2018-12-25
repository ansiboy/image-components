class Errors {
    serviceHostNotConfig() {
        return new Error(`Service host is not config.`)
    }
}

export let errors = new Errors()