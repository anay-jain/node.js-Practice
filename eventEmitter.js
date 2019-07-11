var events = require('events');

// for jquery you can use
// Element.on('click' .function(){})

var myEmitter = new events.EventEmitter();

myEmitter.on('someEvent' , function(msg){
    console.log("some Event is clicekfd")

});

myEmitter.emit('someEvent' , "the event was emitted");