---
paginate: true
comments: true
author: musikele
title: 'Let''s write a simple version of the require() function '
category: English
layout: post
date: 2018-10-02 00:00:00 +0200
tags:
- javascript
- nodejs
header-img: ''
description: 'NodeJS was the first environment to offer a way to read files and organize
  code in modules, thanks to the require() function. But how does it work? Let''s
  have a look. '

---
You should know that Javascript (better to say EcmaScript) does not specify any function to read and write files.

In fact, Javascript is the language used by many environments (the browser, or NodeJS, are examples of environments) that offer more objects and functions to work with.

Node was the first environment to offer a way to organize code in modules by using a special function called `require()`. How does it work? Let's try to implement it from zero.

Here is an example of `require` at work:

```javascript
//test.js
module.exports = "Hello World";
```

```javascript
//main.js
const test = require("./test.js"); 
console.log(test) 
// -> Hello World 
```

Let's write that `require` function.

## What should a require() function do

a `require` function is expected to:

* read the content of a javascript file in a string
* evaluate that code
* save the exported function/object in a cache for later use (only read files once)

### Disclaimer

We will not rebuild the whole NodeJS in a single post. In fact, I will not implement many NodeJS checks and giggles, we are only interested in understand how things work.

We will still need the real `require` function to load the `fs` module. I'm not cheating, it's just that this post has to end sooner or later :)

### myRequire() function

I 'm going to show the code first, then I'll explain what's going on.

```javascript
//file setup.js

const fs = require('fs');

myRequire.cache = Object.create(null); 

function myRequire(name) {   
    if (!(name in myRequire.cache)) {     
        let code = fs.readFileSync(name, 'utf8');     
        let module = {exports: {}};
        myRequire.cache[name] = module;     
        let wrapper = Function("require, exports, module", code);     
        wrapper(myRequire, module.exports, module);   
    }
    return myRequire.cache[name].exports;
}

...
```

## Did you forget to declare myRequire variable?

No. In Javascript, functions declared with `function` keyword are evaluated before any other code ("hoisted") so they can be referenced even before they're declared.

Also, functions can have properties (this is javascript!) so you can add the `cache` property to the `myRequire` function.

Finally we're creating the `cache` property with `Object.create`. With this function we can specify the object prototype, we have chosen to not specify a prototype. Why? This way we don't mess with other functions or properties declared by the runtime. [Here's an explanation](https://www.reddit.com/r/javascript/comments/5e62us/is_there_a_reason_to_create_an_object_without_a/).

***

Let's go back to `myRequire` . If the file we're importing is not in cache, we read the file from disk.

Then we declare an empty `module` object with just one property, `exports`.

We add this empty module to the cache, using the filename as the key, and then the magic happens.

## The Function constructor

In JS we can evaluate a string js code in two ways. The first way is via `eval()` function, that is a bit dangerous (it messes up the scope) so it is highly discouraged to use it.

The second way to evaluate code that we have in a string is via the `Function` constructor. This constructor takes a string with the argouments and a string with the code. This way everything has its own scope and doesn't mess things up for others.

So, basically we are creating a new function with these variables: `require`, `exports`, and `module`. Let's think for a moment at the first example of this post, the file `test.js`: it becomes

```javascript
function(require, exports, module) {
  module.exports = "Hello World" 
}
```

and the second file, `main.js`:

```javascript 
function(require, exports, module) {
  const test = require("./test.js"); 
  console.log(test) 
}
```

Variables that seemed "global" are indeed passed as function arguments.

## Last step: executing the function

We have created a `wrapper` variable that holds a function, but the function is never executed. We do this at the line:

```javascript
wrapper(myRequire, module.exports, module); 
```

Note that the second variable (that should be `exports`) is just a handle to `module.exports`; NodeJS creators thought that this [could have helped in writing less code...](https://blog.tableflip.io/the-difference-between-module-exports-and-exports/)

When Node executes the function, everything that was "exported" (your public API) gets linked to the cache.

(Remember the `myRequire.cache[name] = module;` line? When it was first found by the compiler it was point to a dummy `{ exports: {} }` object; now it contains your module.)

> NOTE. Since we pass `myRequire` to the wrapper function, we can from now on use `require` in our test files, but our require gets called. Add a console.log if you don't trust me ;)

Finally... `myRequire` returns the `export`ed stuff you declared, and that we saved to the cache so we won't have to reevaluate this code again.

## Final considerations

An example of this code [can be found here](https://github.com/musikele/require-example), along with some console logs that explain what's going on.

The idea of this article comes from the [explanation of this function at chapter 10 (Modules)](https://eloquentjavascript.net/10_modules.html#h_N33QHgUxbG). The book ([Eloquent Javascript](www.eloquentjavascript.net)) is excellent, but I had the urge to better understand, and try with a debugger, what I could not understand with my mind alone. 

You should definitely read the book if you want to better understand javascript.