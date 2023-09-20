const yargsUtility = require('../utils/yargs.utils')
export class command { // command abstract class
    #yargsCont;
    constructor() {
        if (this.construction === 'command') {
            throw new Error("Can't Instantiate command class")
        }
        this.#yargsCont = new yargsUtility.yargsUtility()
    }

    createCommand(command) {
        this.#yargsCont.createCommand(command, command.handler)
    }
}