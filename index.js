var palindromeC = require('palindrome');
var palindromeJs = require('./palindrome.js');
var Benchmark = require('benchmark');
var suite = new Benchmark.Suite;

suite.add('Javascript palindrome', function() {
  palindromeJs('a man a plan a cat a ham a yak a yam a hat a canal panama');
})
.add('C palindrome', function() {
  palindromeC('a man a plan a cat a ham a yak a yam a hat a canal panama');
})
.on('cycle', cycle)
.on('complete', complete)
.run({ 'async': true });

function cycle(event) {
  console.log(String(event.target));
}

function complete() {
  console.log('Fastest is ' + this.filter('fastest').map('name'));
}