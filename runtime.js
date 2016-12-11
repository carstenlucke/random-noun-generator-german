var now = require('performance-now');

// the language file contains 102.493 nouns which are loaded 
// into an array (thus into memory) when require('random-noun-generator-german')
// is called

// let's see how long this takes ...

var t0;
var t1;
var t2;

t0 = now();
var rndWord = require('./src/generator');
t1 = now();
var word = rndWord();
t2 = now();

console.log("Call to require('random-noun-generator-german') took " + (t1 - t0).toFixed(3) + " milliseconds.");
console.log("Call to generate a random noun (" + word + ") took " + (t2 - t1).toFixed(3) + " milliseconds.");
console.log("... thus, loading \"random-noun-generator-german\" and generating one random noun took " + (t2 - t0).toFixed(3) + " milliseconds.\n");

console.log("Still proceeding ... generating ten random nouns: ");
for (var i = 0; i < 10; i++) {
    t0 = now();
    word = rndWord();
    t1 = now();

    console.log(i+1 + ": <" + word + "> " + (t1 - t0).toFixed(3) + " milliseconds.");
}
