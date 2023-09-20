const errorUtility = require('../utils/error.utils')
process.on('uncaughtException', (error) => {
    const errorHanlder = new errorUtility.errorHandler()
    errorHanlder.handleError(error)
    process.exit(1);
});
