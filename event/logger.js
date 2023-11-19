const EventEmitter = require('events');

console.log(__filename);
console.log(__dirname);

// sending http request
var url = 'http//:mylogger.oi.log';

class Logger extends EventEmitter {
	log(message){
	 console.log(message);

         //Raise an Event
	 this.emit('messageLogged', {id:1, url:'hhttp//'});
	}
}

module.exports = Logger;
