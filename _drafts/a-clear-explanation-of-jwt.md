---
paginate: true
comments: true
author: musikele
title: "JWT: what is it? How does it work? Why we should use it?"
category: English
layout: post
tags:
- authentication
- jwt 
---

In this post I'm going to talk about an authentication "protocol" called JWT, that permits to secure an API so that only authenticated users can use some requests of your API. And more importantly, a user cannot impersonate another by changing something in the request, so we can be reasonably certain that a user is who he claims to be.

However, to understand JWT, we must step back and talk about hashing functions. 

## Hashing: a one-way transformation function 

Hey, this is (mainly) a NodeJS blog, so the examples will be in JS. But since JWT is universal, it will be easy to grasp the concepts to any language you like. 

So, create a new Node project anywhere you like. We will use this project to do our experiments. In order to use hashing functions in Node, let's install `crypto-js`: 

```console
npm i --save crypto-js
```

Now, let's create a new file, `hashing.js` and fill it with this: 

```
const {SHA256} = require('crypto-js')

let message = 'I am user number 3'

let hash = SHA256(message).toString();

console.log(`Message: ${message}`)
console.log(`Hash: ${hash}`)
```

Let's run this file. What will we get? 

```console
$ node hashing.js 
Message: I am user number 3
Hash: 9da4d19e100809d42da806c2b7df5cf37e72623d42f1669eb112e23f5c9d45a3
```

What's happening here? We are importing the function `SHA256`, that is one of the strongest hash functions we know for now, with mathematical proofs, etc. 256 is the number of bits of the hashed message. 

Basically, the `message` text will be converted in a new string of just 256 bits, and this string has some unique properties: 
- the same message will always receive the same hash. 
- If you change just one character from the `message` string, you get a completely different hash. 
- The probability that two different strings get the same hash is definitely low. 
- It's impossible to get the original message back. 

Curious? I won't lie to you, security is one of the hottest themes in computer science; this stuff is hard, btw we are just using it and the three points before should be sufficient for you to understand. 

## When to use a hash 

You might use Hashes in a lot of different situations; we will use them in **authentication**, but another famous use case is to store passwords in your database. 

Passwords should never be stored as plaintext, because users have this bad habit to use the same password everywhere (I guess you don't, do you?). 

So, when a user logs in your system, you should hash their password, and see if it matches the one stored on the db. 

