---
paginate: true
comments: true
author: musikele
category: Italiano
layout: post
date: 2019-05-03T22:00:00.000+00:00
tags:
- javascript
- functional programming
title: High order functions
header-img: "/images/1200px-Lambda_lc.svg.png"
description: Just enough functional programming !

---
The two building blocks of functional programming in Javascript are: 

## High order functions 

High order functions are functions that:

* accept other functions as arguments, 
* or return a new function,
* or both :) 

So for example we can write a new high-order function that logs calls to a function in input:

```javascript
const withLogger = fn => {
  return (...args) => {
  	console.log('called fn with arguments', ...args)
    return fn(...args)
  }
}

//example use:
const add = (x,y) => x + y

const addWithLogger = withLogger(add);

addWithLogger(3,4);
// => called fn with arguments 3 4 
// => 7
```