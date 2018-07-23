'use strict';

const readline = require('readline-sync');
const log4js = require('log4js');
const logger = log4js.getLogger('logs\\debug.log');
const BusStopLib = require('./BusStopLib');
const TlfParsingLib = require('./TflParsingLib');

// Logging config
log4js.configure({
    appenders: {
        file: { type: 'fileSync', filename: 'logs\\debug.log', level: 'debug' } ,
        console: { type: 'console'}, 
        severity : { type: 'logLevelFilter', appender: 'console', level: 'warn'}
    },
    categories: {
        default: { appenders: ['file', 'severity'], level: 'debug'}
    }
});

logger.logDebug('Aplication has started');

// Getting user input
console.log('Please select a bus stop:');
const response = readline.prompt();

