---
paginate: true
comments: true
author: musikele
title: 'Why NaN '
category: Italiano
layout: post
date: 2017-11-16 00:00:00 +0000
tags: []
header-img: ''
---
When I posted the [NaN article](https://michelenasti.com/2017/11/14/not-a-number-when-javascript-gets-crazy.html "Not-a-Number: when Javascript gets crazy") on facebook, in a programmers group, I received some very bad reviews. Let's analyze them.

## "It is obvious!"

It is obvious, but it's not common. I am a web developer since 5 years now, and altough I have studied (and still I am) the JS language, I have never occourred in `NaN` before (except on books). You might think that this is impossible, but well, it isn't. Maybe because I rarely do maths without checking types? Maybe because I rarely do maths in Javascrpt? I don't know but I haven't.

## Why NaN === NaN is false

The fact that `NaN !== NaN` is true is obvious.

When I thought of this the first time, I thought it is absurd, but after a while I realized that this is the only possible logic behaviour. As some have said, if I divide a number by a string I get `NaN`, and if I divide another number by another string I get another `NaN`. Are these two`NaN` equal? no. `NaN` is not even a measurable property.`NaN` is a state, and as such it cannot be compared to other` NaN`s. 

## Why this is not a JS-only matter

`NaN` has not been invented by Javascript, or by Java. It is here with us since the first processor, and it is used for a wide range of cases. Here are some:

1. Division of zero by zero

2. Dividing an infinity by an infinity

3. Multiplication of an infinity by a zero

4. Any operation in which _NaN_ is an operand

5. Converting a non-numeric string or _undefined_ into a number

It is described in standard IEEE 754, from 1985. In this standard you can read how integer and decimal numbers are stored inside a computer (_spoiler: decimal numbers in a computer are not real, continuous, neither infinite)._ You'll read of many edge cases regarding decimal numbers, along with what should happen when you're in one of the cases described before. So, `**NaN**` **is a convention followed by pretty much every programming language**. 

## Javascript Quirks

But JS does some _stranger things_. 

* It has two `isNaN()` functions, and you must choose the one you need carefully. 

* the standard isNaN() function does type cohercion, that's why `isNaN(null) == false`.

## And Now? 

Should every developer in the world know this? Yes and no.