var lazyInstance = require('../index');

// define a simple class with a regular instance value
function MyClass() {
  this.a = 1;
}

var myInstance = new MyClass();

console.log('basic class');
console.log('result:', myInstance.a);
console.log('result:', myInstance.b);
console.log('result:', myInstance.c);
// basic class
// result: 1
// result: undefined
// result: undefined

// defined a regular prototype property
MyClass.prototype.b = 2;

console.log('with prototypes');
console.log('result:', myInstance.a);
console.log('result:', myInstance.b);
console.log('result:', myInstance.c);
// with prototypes
// result: 1
// result: 2
// result: undefined

// define a lazy instance value
lazyInstance(MyClass, 'c', function () {
  console.log('constructed');
  return this.a + this.b;
});

console.log('with lazy instance variables');
console.log('result:', myInstance.a);
console.log('result:', myInstance.b);
console.log('result:', myInstance.c);
// with lazy instance variables
// result: 1
// result: 2
// constructed
// result: 3
