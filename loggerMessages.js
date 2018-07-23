function logTrace(msg, logger) {
    if (logger) {
        logger.trace(msg);
    }
}

function logDebug(msg, logger) {
    if (logger) {
        logger.debug(msg);
    }
}

function logWarn(msg, logger) {
    if (logger) {
        logger.warn(msg);
    }
}

function logError(msg, logger) {
    if (logger) {
        logger.error(msg);
    }
}

function logFatal(msg, logger) {
    if (logger) {
        logger.fatal(msg);
    }
}

module.exports = {logTrace, logDebug, logWarn, logError, logFatal}