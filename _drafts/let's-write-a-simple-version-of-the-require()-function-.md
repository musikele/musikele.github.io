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
You should all know that Javascript (better to say EcmaScript) does not specify any function to read and write files. 

In fact, Javascript is used in many environments (the browser, or NodeJS, are examples of environments) that offer more objects and functions to work with. 

Node was the first environment to offer a way to organize code in modules by using a special function called `require()`. But how does it work? Let's try to implement it from zero.  

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

Let's see these points one by one. 

### Disclaimer 

We will not rebuild the whole NodeJS in a single post. In fact, I will not implement many NodeJS checks and giggles, we are only interested in understand how things work. 

We will need the real `require` function to read library `fs` module. I'm not cheating, it's just that this post has to and sooner or later :) 

### The new require2() function 

I 'm going to show the code first, then I'll explain what's going on. 

```javascript
const fs = require('fs');

require2.cache = Object.create(null); 

function require2(name) {   
    if (!(name in require2.cache)) {     
        let code = fs.readFileSync(name, 'utf8');     
        let module = {exports: {}};
        require2.cache[name] = module;     
        let wrapper = Function("require, exports, module", code);     
        wrapper(require2, module.exports, module);   
    }
    return require2.cache[name].exports;
}
```

zxd