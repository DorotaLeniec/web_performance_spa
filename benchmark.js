var {Benchmark} = require('benchmark');
var data = require('./data.json');

var suite = new Benchmark.Suite;

var original = {comments: data};

suite
  .add('JSON', function () {
    var copy = JSON.parse(JSON.stringify(original));
  })
  .add('spread', function () {
    var copy = {...original};
  })
  .add('assign', function () {
    var copy = Object.assign({}, original);
  })
  .on('cycle', function (event) {
    console.log(String(event.target));
  })
  .on('complete', function () {
    console.log('Fastest is ' + this.filter('fastest').map('name'));
  })
  .run({'async': true});