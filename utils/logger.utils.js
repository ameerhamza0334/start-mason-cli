const { createLogger, format, transports } = require('winston')

export class InfoLogger {
    #logger; // private class members
    #loglevel = new Object();
    constructor() {
        this.#loglevel = {
            fatal: 0,
            error: 1,
            warn: 2,
            info: 3,
            debug: 4,
            trace: 5,
        };
        this.#logger = createLogger({
            levels: this.#loglevel,
            transports: [new transports.Console()],
            format: format.combine(format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }), format.json())
        })
    }

    getLogger() {
        return this.#logger
    }

    info(...message) {
        this.#logger.info(message.join(' | '))
    }

    info(callback, ...message) {
        this.#logger.info(message.join(' | '), callback)
    }

    error(message, err) {
        this.#logger.error(message, err)
    }

}