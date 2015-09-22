# lazy-instance

Lazily define instance properties through the prototype chain.

This provides a mechanism to dynamically add instance values via the prototype chain without modifying constructors.
Very useful for those using a subscriber pattern such as [AngularJs](https://angularjs.org/) or [KnockoutJs](http://knockoutjs.com/).

[![Build Status](https://travis-ci.org/WHenderson/lazy-instance.svg?branch=master)](https://travis-ci.org/WHenderson/lazy-instance)
[![Coverage Status](https://coveralls.io/repos/WHenderson/lazy-instance/badge.svg?branch=master&service=github)](https://coveralls.io/github/WHenderson/lazy-instance?branch=master)

## Installation

### Node
    npm install lazy-instance

### Web
    bower install lazy-instance

## Usage

### node
```js
var lazyInstance = require('lazy-instance');

function MyClass() {}

lazyInstance(MyClass, 'value', function () {
  return 'lazy value';
});

console.log('result:', new MyClass().value);
```

### web (global)
```html
<html>
    <head>
        <script type="text/javascript" src="lazy-instance.web.min.js"></script>
    </head>
    <body>
        <script>
          function MyClass() {}

          lazyInstance(MyClass, 'value', function () {
            return 'lazy value';
          });

          console.log('result:', new MyClass().value);
        </script>
    </body>
</html>
```

### web (amd)
```js
require.config({
  paths: {
      "lazy-instance": "lazy-instance.web.min.js"
  }
});
require(['lazy-instance'], function (lazyInstance) {
  function MyClass() {}

  lazyInstance(MyClass, 'value', function () {
    return 'lazy value';
  });

  console.log('result:', new MyClass().value);
});
```

## API

### [lazyInstance(ctor, name, create)](examples/simple.js)

Assigns a lazy instance property to the prototype chain of `ctor`.

## Examples

### [KnockoutJS](examples/ko.js)

```js
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
```
