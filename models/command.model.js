
export class commandModel {

    constructor() {
        this.command = '' // name of the command
        this.describe = '' // description for command
        this.builder = new Object() // number of argument or values the command can take
        this.handler = (argv) => console.log("handler arguments", argv) // handler function to be called when the command executes
    }

    constructor(command, describe, builder, handler) {
        this.command = command
        this.describe = describe
        this.builder = builder
        this.handler = (argv) => handler(argv)
    }
}