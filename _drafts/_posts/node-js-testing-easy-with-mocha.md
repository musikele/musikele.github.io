---
paginate: true
comments: true
author: musikele
title: 'Easy testing of NodeJS applications with Mocha'
category: English
layout: post
date: '2017-03-23T18:13:41+00:00'
tags:
- Javascript
- Nodejs
- Testing
- Mocha
---

Testing in Javascript has become an immensely popular argument, but still there's a lot of people that has not clear how to do it effectively. [I was one of these]({% post_url 2016-08-30-my-very-personal-javascript-fatigue %}). There are many troubles that a young developer has to overcome in order to master Javascript testing. In this article, I'm going to (try to) explain Javascript testing with Mocha, a powerful library. 

## Why testing in Javascript 

An easy example. You write a function that takes only one argument, and use it extensively. After some days, you modify this function to take two arguments. 

Obviously you try to find every place where this function is called and add the missing parameter. Since the scripting nature of the language, how can you tell that this modification did not break anything? How to discover fastly what to fix? Are users our only testers? 

## Setup the example 
Let's write a simple Node test file. Let's suppose we are writing a `utils.js` function, a file where we put all the functions we use to do our job, that do not fit in a specific module. 

```javascript 
module.exports.add = (a,b) =>  a + b;
```

That's it! Let's test this function. Is our sum function really doing its job? 

## Setup the test 

First, let's install [**Mocha**](https://mochajs.org). This is easy as launching 

```console
$ npm install --save-dev mocha 
```

Let's modify our `package.json` (you did run `npm init`, didn't you?) to add a new task: 

```javascript
"scripts": {
		... 
    "test": "mocha **/*.test.js"
  },
```

Mocha will be installed as a _development dependency_, this means that it is not necessary to run our code. Some systems (like Heroku) will not download these dev dependencies. 

Let's create in the very same directory where we put `utils.js`, another file called `utils.test.js`. 

Here is the test code: 

```javascript
const utils = require('./utils'); //(1)

it('should add two numbers', () => {   //(2)
	let res = utils.add(33,11);
	if (res !== 44) {
		throw new Error(`Expected: 44, but got ${res}`); //(3)
	}
});
```

And now you can simply run `npm test`. you should see an out like this: 

```console
$ npm test

> node-tests@1.0.0 test /Users/michelenasti/Doc
uments/node-course-udemy/node-tests
> mocha **/*.test.js



  ✓ should add two numbers

  1 passing (13ms)
```

## What's going on 

Our tests are run directly by Mocha, that's why we don't import this library in this function. 

Mocha provides us a function called `it()`. You might notice this function at (1). It takes two parameters: a description of the test, and a function with the code to execute. 

In the JS community tests are usually written in a _Behaviour Driven Development_ paradygm, this is a complex notion, for now let's just say that test description starts with "_should ..._". I'll write more in the future :) 

The second argument passed to `it()` is a function with the actual test code. Here we call the function under test, take the result and check the correctness. 

How Mocha decides if a test has passed or not? If no errors are thrown in our test code, then the test is marked as passed. On the other side, if an `Error()` object is thrown, the test will stop and the output of the Error is printed to the terminal. 

Exercise for you: modify `utils.js` to let the test fail :) 