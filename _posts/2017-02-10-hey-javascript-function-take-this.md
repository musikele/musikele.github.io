---
title: hey javascript function, take this!
date: '2017-02-10 10:05:22'
paginate: true
comments: true
author: musikele
layout: post
---
In this article I'm going to do a quick recap of ES5 and ES6 functions, explaining what happens to `this`.

## Functions as you may already know: plain-old-classic ES5

As you know, in javascript you can define a function in many ways. The standard, 20-years-old way of declaring a function is this:

```javascript
function sayHello() {
   console.log("hello!") 
}
```

This kind of functions will be "hoisted", this means that the function will be read before any other code, and used when called. So you can also write this with no error:

```javascript
// no error, because the function declaration 
// is read and hoisted
sayHello(); 

function sayHello() {
   console.log("hello!") 
}
```

If you find this behaviour too strange (at first glance, it is!), you can **assign a function to a variable**. In this case the function will be read and executed only when used:

```javascript
//sayHello();  if called here, like before, ERROR! 

var sayHello = function () {
   console.log("Hello!") 
}

sayHello(); // no error because it is used after the definition
```

## Functions in ES6

Now we can have a quick look to new kind of functions introduced in ES6\. Here is the first example:

```javascript
var sayHello = (name) => { 
   console.log("Hello, " + name);
}

sayHello('Michele');
```

what happened? we have stripped out the `function` keyword, put an arrow (`=>`) between the arguments and the body of the function, and that's it! More expressive and fun to use.

## Functions, in ES6, in JS Objects

There is just one thing to note: **the ES6 version of the function does not bind `this`**. What the heck does this mean?!

Have a look at this:

```javascript
var user = {
  name: 'Michele',
  sayHi: () => {
    console.log(`Hi. I'm ${this.name}`);
  },
  sayHiAlt () {
    console.log(`Hi. I'm ${this.name}`);
  }
}

user.sayHi(); // "Hi. I'm undefined"
user.sayHiAlt(); // "Hi. I'm Michele"
```

What's happening? Let's dip in.

### what is `Hi. I'm ${this.name}`?

This is a template string in Javascript. this translates in `"Hi. I\'m " + this.name`.

### Why the first `sayHi` returns undefined?

because `this` is not bound!

### What is happening at the last function, `sayHiAlt` ?!

this might seem strange, but this is ES6 at all of it's power. First, this is like assigning a function to a variable, like we saw in the third example of this article.

Then, we are using another ES6 to assign the function to a property with the same name. In fact, thanks to [babel online REPL](https://babeljs.io/repl/) (a place where you can past ES6 code and see it in ES5), the previous snippet becomes this:  

```javascript
'use strict';

var user = {
    name: 'Michele',
    sayHi: function sayHi() {
        console.log('Hi. I\'m ' + undefined.name);
    },
    sayHiAlt: function sayHiAlt() {
        console.log('Hi. I\'m ' + this.name);
    }
};
```

After writing `this` article, I can finally say: ES6 doesn't care about `this`, but you should. 