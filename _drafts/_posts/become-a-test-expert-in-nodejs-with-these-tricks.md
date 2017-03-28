---
paginate: true
comments: true
author: musikele
title: Become a test expert in NodeJS with these tricks
category: Italiano
layout: post
date: '2017-03-27T10:55:00+00:00'
tags:
- testing
- nodejs
- async
- express
---
After reading my first guide to [testing NodeJS with Mocha](https://michelenasti.com/2017/03/23/node-js-testing-easy-with-mocha.html) you might have grasped the fundamental concepts of NodeJS testing. However, **real word code is usually tested with some other expedients** that you might know to be a better tester (and coder).

## Using an assertion library

In my previous article I wrote how to check the test result: to set a test as failing, you throw a `new Error()` object with the message to show.

This is the naive approach; the default is to use an assertion library. These libraries will expose an API that is clearer and simpler to manage, and will let you test more conditions with less code. Under the hood, they will launch the `new Error()` if the conditions are not respected.

Let's see one of these libraries. One of the most famous libraries is called [`expect`](https://github.com/mjackson/expect):

> When you use expect, you write assertions similarly to how you would say them, e.g. "I expect this value to be equal to 3" or "I expect this array to contain 3". When you write assertions in this way, you don't need to remember the order of actual and expected arguments to functions like assert.equal, which helps you write better tests.

Let's see an example. Here is the test for a `add` function, and the test is contained in file `utils.test.js`:

```
const expect = require('expect');

const utils = require('./utils');

it('should add two numbers', () => {
  let res = utils.add(33, 11);

  expect(res).toBe(44).toBeA('number');
});

```

Easier to write, and to reason about. with `expect` you can also check if objects have properties, etc. Have a look on their website to see all aviable methods.

## Testing async code

If you're using NodeJS, or Javascript, you're also probably using async functions. No matter if it's in the form of promises or callbacks, stuff in JS happens async, and we must deal with it. 

Let's prepare an example async function: 

```javascript
module.exports.asyncAdd = (a,b, callback) => {
  setTimeout(() => {
    callback(a+b);
  }, 1000);
}
```

How do we test it? The first approach we might think would be to write the test like before: 

```javascript
it('should add two numbers', () => {
  let res = utils.asyncAdd(33, 11, (res) => {
  
    // will this work? 
    expect(res).toBe(44).toBeA('number'); 
  });
});
```

If you launch this example, _the test will pass, but for the **wrong reason**_. Infact, Mocha will not wait the result callback an will end the test instantly. Try to break the test or the function... Mocha will say that everything is ok. That's not good. 

How can we fix this? Mocha has a super-simple solution, just add a `done` argument to the test callback. When `done` is present, Mocha will not end the test before you call the `done()` function. Let's try:

```javascript
it('should add two numbers', (done) => {
  let res = utils.asyncAdd(33, 11, (res) => {
  
    expect(res).toBe(44).toBeA('number'); 
    done();
  });
});
```

Now, if you try to break the test or the function, you'll see that Mocha will fail. Exactely what we want. 

## Testing an Express application

It's very difficult for the random developer to write a NodeJS app without using Express. [Express](https://expressjs.com/it/) is a framework for web applicatons, it allows you to write REST endpoints easily. 

The point is: how do I test my express application? 

the creators of Express have come in help by creating another library called [`supertest`](): 