var lazyInstance = require('../index');

function MyClass() {
  this.a = 1;
}
MyClass.prototype.b = 2;
lazyInstance(MyClass, 'c', function () {
  return this.a + this.b;
});

console.log('1', MyClass);
console.log('2', MyClass.prototype);
console.log('3', MyClass.prototype.c);

var myInstance = new MyClass();

var key;

for (key in myInstance)
{
  if ({}.hasOwnProperty.call(myInstance, key))
  {
    console.log(key, ':', myInstance[key]);
  }
}

console.log('lazy value', myInstance.c);
MyClass.prototype.c = 'xxx';
delete myInstance.c;
console.log('new val', myInstance.c);

for (key in myInstance)
{
  if ({}.hasOwnProperty.call(myInstance, key))
  {
    console.log(key, ':', myInstance[key]);
  }
}
