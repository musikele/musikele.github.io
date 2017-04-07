---
paginate: true
comments: true
author: musikele
title: 'Fantastic Unit Tests in Javascript with Mocks '
category: Italiano
layout: post
date: '2017-04-07T09:49:56+00:00'
---


Let's start with the example. We have two files, one that is the main one called `app.js` that exports just one method, called `handleSignup()`:```
// file app.js
const db = require('./db.js');

module.exports.handleSignup = (email, password) => {
// ...
// save the user to the database
db.saveUser({ email, password });
// ...
};```



This `app.js`, at some point, calls the `db.saveUser()` function. Let's see the `db` module:```
// file db.js
module.exports.saveUser = user =&amp;gt; {
  console.log('Saving the user...', user);
};


```



Nothing very special, it's just a demo. Let's go with the important question.

## How do we unit-test app.js?

For those not used to unit testing, it is a way of testing classes atomically. This means that app.js may depend on other classes, but we will not test these.

Let me be more specific. the `db` module could be really calling a database, this means that if the database connection is not working, the test would fail. OR, if the test is *really* saving a user, next time we launch the test it could be failing because the user is already in the db.

To handle all these scenarios, we will **mock** the `db` module. We will provide a fake implementation of `db` that will reply as we will, every time. This way, *we will be testing only app.js code*.

## But... what if db module has a bug?

You **MUST** test the `db` module, too! However, it's not a good practice to test the `db` module by testing the `app` module.

If you don't test the `db` module, and all of a sudden your test has a bug, how can you say where the bug is? Imagine this in a layer of 10-15 modules... you get the complexity.

However, let me point out that **unit testing alone does not solve all of your problems**. Unit testing can test that a single class will perform exactly as specified, but another kind of testing (I call it "integration testing") should be responsible to check that everything is wired correctly.

Here is a famous gif about this concept:


