var events = require('events')
var util = require('util')

var Person = function(name){
    this.name=name;
}

// now inheriting events emitter to the function

util.inherits(Person , events.EventEmitter);

var anay = new Person('anay');
var bhumi = new Person('bhumi')
var mmy = new Person('mmy')

var poople = [anay , bhumi, mmy];
poople.forEach(function(person){
    person.on('speak', function (msg){
        console.log(person.name + "said " + msg);
    });
});

anay.emit('speak' , "hey dude");
// on function 

