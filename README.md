# Javascript Numeric Object Notation

Usage:

```
var jsno = require('./index');
var pkg = require('./package');


var jn = jsno.encode(pkg);

console.log(JSON.stringify(jn));

```

Output:
```
[
  [
    ["name","jsno"],
    ["version","1.0.0"],
    ["description","Convert JSON to JSNO format"],
    ["main","index.js"],
    "scripts",["test","jscs index.js"],
    ["author",""],
    ["license","ISC"],
    "dependencies",
    ["dot-object","^1.1.0"]
  ],
  [
    0,1,2,3,4,[4,0],5,6,7,[7,0]
  ]
]
```

