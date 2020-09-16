---
paginate: true
comments: true
author: musikele
category: English
layout: post
date: 2020-09-16
title: How to read and write from STDIN and STDOUT in GO
description: 'Using the Go programming language, i''ll explain some basic features
  of the language with this simple Hello World program. '
header-img: ''
tags:
- go

---
At my current job we have some projects that were realized using the Go programming language. The cool thing is, the programmers that have used it are in love with it, and these applications never crash, even under heavy load. This is great, for example, for applications that have to process a stream of data as fast as possible.

So I decided to go through HackerRank and do the 30 days challange, this time trying to solve all issues with the go programming language. I do not expect to become a True Expert© but, at least, I'd like to catch up with the syntax and all the rest.

(Probably, in the long run, we're going to sunset these Go projects because we got acquired by another company, and their main programming language is Java, sooooo.....)

Anyway, let's go with a very simple program for today. I will not go through installing the go compiler, _go figure out_ by yourself. But this hello world may give you (and me) a sense of what's going on here.

The exercise is very easy:

> save a line of input from stdin to a variable, print `Hello, World.` on a single line, and finally print the value of your variable on a second line.

***

More resources:

* [how to install go for your OS](https://golang.org/doc/install) (golang.org)
* many [other ways to read input in Go](http://zetcode.com/golang/readinput/) (from zetcode.com)
* [difference of quotes in Go](https://golangbyexample.com/double-single-back-quotes-go/) (from golangbyexample.com)