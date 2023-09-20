const logger = require('./logger.utils')


export class errorHandler extends Error {
    constructor() {
        this.logger = new logger.InfoLogger()

    }

    async handleError(err) {
        this.logger.info(`Handle error called at ${new Date()}`)
        this.logger.error(err.message, err)
    }
}