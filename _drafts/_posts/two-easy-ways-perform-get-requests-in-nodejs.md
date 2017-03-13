---
paginate: true
comments: true
author: musikele
title: 'Two easy ways perform GET requests in NodeJS '
category: Italiano
layout: post
date: '2017-03-13T23:07:41+00:00'
tags:
- Javascript
- Nodejs
- Request
- Axios
---
Today I want to talk about something that we all need during our programming life: requesting data from a remote server.

We will see this specifically for NodeJS because it's so simple that I couldn't even imagine.

In this article I'm going to talk about two super-popular libraries that do the same thing, but expose their API to the developer differently. Let's see what they do and how to use them.

## a simple use case: Google maps API 
Just as an example, we will write a simple program that takes a textual address (`piazza della Concordia, Salerno`) and return latitude and longitude. 

The URL is this:


## Request: the name says it all

The first library I'm going to talk is simply called [`request`](https://www.npmjs.com/package/request). Install as always:
```
$ npm install request --save
```

From the NPM description: 

>Request is designed to be the simplest way possible to make http calls. It supports HTTPS and follows redirects by default.

## Axios: a Promise based equivalent 
