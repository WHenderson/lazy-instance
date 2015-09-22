var lazyInstance = require('../index');
var ko = require('../bower_components/knockout/dist/knockout.js');

function MyClass(a) {
  this.a = ko.observable(a);
}

lazyInstance(MyClass, 'b', function () {
  return ko.observable(2);
});

lazyInstance(MyClass, 'c', function () {
  return ko.pureComputed(function () {
    return this.a() + this.b();
  }, this);
});

var instances = [
  new MyClass(0),
  new MyClass(1),
  new MyClass(2)
];

console.log('result:', instances[0].c(), instances[1].c(), instances[2].c());
// result: 2 3 4

instances[0].a(3); instances[0].b(5);   // 8
instances[1].a(7); instances[1].b(11);  // 18
instances[2].a(13); instances[2].b(17); // 30

console.log('result:', instances[0].c(), instances[1].c(), instances[2].c());
// result: 8 18 30
