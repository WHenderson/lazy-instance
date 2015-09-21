# lazy-instance

Lazily define instance properties through the prototype chain

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

console.log();
```

### web (global)
```html
<html>
    <head>
        <script type="text/javascript" src="lazy-instance.web.min.js"></script>
    </head>
    <body>
        <script>
            console.log();
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
require(['lazy-instance'], function (pointer) {
    console.log();
});
```

## API
