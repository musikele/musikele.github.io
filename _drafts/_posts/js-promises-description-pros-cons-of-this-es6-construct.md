---
paginate: true
comments: true
author: musikele
title: 'JS Promises: description, pros, cons of this ES6 construct'
category: English
layout: post
date: '2017-03-12T13:06:29+00:00'
tags:
- javascript
- es6
- promises
---
I hope that you have done some kind of exploration with Javascript, NodeJS and asynchronous constructs right now.

To recap: when you wait for an asnyc operation to handle the result, for example in NodeJS when we read a file, we do this: 

```javascript
const fs = require('fs');
fs.readFile('filename.txt', (err, data) => {
   if (err) throw err; 
   //now you can use the data object 
   ...
});
```

This is the standard, classic way of handling asynchronicity in NodeJS and Javascript. 

In the last few years a new approach has come to rise, first from outside libraries, then as part of ES6 language. This approach is called **Promise**.

## I promise that I will give you the result 

