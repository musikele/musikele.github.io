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
After reading my first guide to

<a href="https://michelenasti.com/2017/03/23/node-js-testing-easy-with-mocha.html">testing NodeJS with Mocha</a>, you might have grasped the fundamental concepts of NodeJS testing. However, r**eal word code is usually tested with some other expedients** that you might know to be a better tester (and coder).

## Using an assertion library

In my previous article I wrote how to check the test result: to set a test as failing, you throw an `Error` object with the message to show.

This is the naive approach; usually we use an assertion library. These libraries will expose an API that is clearer and simpler to manage, and will let you test more conditions with less code. Under the hood, they will launch an `Error` if the conditions are not respected.

Let's see one of these libraries. One of the most famous libraries is called [`expect`](https://github.com/mjackson/expect):

> When you use expect, you write assertions similarly to how you would say them, e.g. "I expect this value to be equal to 3" or "I expect this array to contain 3". When you write assertions in this way, you don't need to remember the order of actual and expected arguments to functions like assert.equal, which helps you write better tests.

Let's see an example. Here is the test for a `add` function, and the test is contained in file `utils.test.js`: 

```javascript
const expect = require('expect');

const utils = require('./utils');

it('should add two numbers', () => {
  let res = utils.add(33, 11);

  expect(res).toBe(44).toBeA('number');
});
```

Easier to write, and to reason about. with `expect` you can also check if objects have some properties, etc. Have a look on their website to see all the aviable methods. 

## Testing async code 

## Testing an express application 