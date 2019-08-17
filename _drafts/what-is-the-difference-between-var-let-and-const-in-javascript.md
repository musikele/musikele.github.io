---
paginate: true
comments: true
author: musikele
category: English
layout: post
date: 2019-08-17 00:00:00 +0200
tags:
- Javascript
- " Interview"
- " Questions"
title: 'What is the difference between var, let and const in Javascript '
header-img: ''
description: 'Var is deprecated; let and const are introduced with es6. Let''s see
  how to use them '

---
I did some interviews in the last few days, the role we were searching was "super-duper senior javascript master" so I asked this very simple question as starter:

> What is the difference between var, let and const to declare a variable?

Surprisingly, a lot of js developers do not know the answer.

## Var: the first, the oldest, the deprecated

Var is with us since the very first version of Javascript. All major browsers, including Internet Explorer, still and will understand a var declaration forever. So why I say it's deprecated?

Well, when you declare a variable with var, it's declaration is hoisted and the assignment will happen in a separate time. This is unnoticed for most js developers, unless you hit a bug and start complaining that javascript is weird. Let's see an example:

    if (! someCondition) {
      var someCondition = true
    }

Did you notice that I declared the variable inside the if block? You would expect an error ("dude, your variable does not exist at this moment") instead js will just let you do it. Why? 

### Hoisting