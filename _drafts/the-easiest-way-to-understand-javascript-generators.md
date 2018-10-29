---
paginate: true
comments: true
author: musikele
title: The easiest way to understand Javascript Generators
category: English
layout: post
date: 2018-10-29 00:00:00 +0100
tags:
- javascript
- es6
- nodejs
- generators
header-img: "/images/81TfpvWrBRL._SL1500_.jpg"
description: 'Let''s have a look at generator functions in JS. '

---
**Generators in Javascript are functions that return an iterator**.

But what is a generator in JS? 

 **Generators** are functions declared with the keyword `function*`. 

## What do you mean with "iterator"? 

The _iterator_ is a design pattern usually already implemented in many programming languages. It is a **data structure that allows you to _iterate_ (read one by one) over the elements of the data structure.** 

It might be very easy to think of an iterator for an array (a function that returns every element of the array, one by one), things become more complex if you want to iterate over the vertex of a graph, or a tree :) We'll not talk about how to design iterators for complex data structures btw. 

## An Iterator example in plain Javascript

An iterator obeys to these rules: 

* The iterator must return a function that returns an object, containing a `next()` function.
* This `next()` function, in turn, returns an object with two properties, `value` (the actual element of the iteration) and `done` (set to `true` when the iteration has ended, `false` otherwise).
* This function is attached to the property `myObj[Symbol.iterator]` .

Here is an example iterator for an array: 

```javascript
Array.prototype[Symbol.iterator] = function() {
	const clone = this.slice(0); // clones the original array
    let i = -1; // iterating index; 
  	return {
    	next() {
        	i++;
        	return {
            	value: clone[i],
            	done: i == clone.length
            }
        }
    }
}
```

Let's try this in the nodejs console... 

```javascript
> let iterator = [1,3,5,7,9][Symbol.iterator]()
undefined
> iterator
{ next: [Function: next] }
> iterator.next()
{ value: 1, done: false }
> iterator.next()
{ value: 3, done: false }
> iterator.next()
{ value: 5, done: false }
> iterator.next()
{ value: 7, done: false }
> iterator.next()
{ value: 9, done: false }
> iterator.next()
{ value: undefined, done: true }
```

> Warning! This code does not do anything if the original array changes; also if you call `next()` when `done` is true it becomes false, can you spot why? 

I've already discussed this issue in [more detail in another article](https://michelenasti.com/2018/09/04/symbols-iterators-in-javascript.html "Symbols & Iterators in Javascript "); there you'll find other examples and more explanations!

## Iterators written this way are not funny 

Come on, nobody wants to write a functions that returns an object with a next property that returns a value. 

That's why the Javascript community has invented the generators syntax. 

A generator is declared this way: `function* myGenerator {}` and it will return an iterator. 

Let's rewrite the preceeding example with generators: 

```javascript
Array.prototype[Symbol.iterator] = function*() {
  for (let i = 0; i < this.length; i++) {
    yield this[i];
  }
}
```

asdasd