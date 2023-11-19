const EventEmitter = require('events');
const Logger = require('./logger');
const logger = new Logger();

//Add listerner
logger.addListener('messageLogged', (arg) => {
	console.log('Listerner called', arg)
});

logger.log('message ');
