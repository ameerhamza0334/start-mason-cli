const yargs = require('yargs')
const logger = require('./logger.utils')


export class yargsUtility {

    createCommand(commandModel, handler) {

        yargs.command({
            command: commandModel.command,
            describe: commandModel.describe,
            builder: commandModel.builder,
            handler(args) {
                handler(args)
            }
        })
        yargs.parse()
    }
}

