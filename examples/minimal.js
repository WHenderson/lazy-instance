var lazyInstance = require('../index');

function MyClass() {}

lazyInstance(MyClass, 'value', function () {
  return 'lazy value';
});

console.log('result:', new MyClass().value);
