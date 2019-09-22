---
paginate: true
comments: true
author: musikele
category: Italiano
layout: post
date: 2019-08-01 00:00:00 +0200
tags:
- jest
- testing
- javascript
title: 'Jest and Puppeteer from the barricades '
header-img: "/images/1*BM_RS2-DjYk_JZUKr4uq0g.png"
description: 'Jest and Puppeteer are two great tools. Together they can satisfy a
  lot of needs, BUT testing in JS has never been easy and if you want to test hard
  cases here are some tips and tricks I discovered the hard way. '

---
![]({{ site.baseurl }}/images/1*BM_RS2-DjYk_JZUKr4uq0g.png)

* a complex example: mocking, spying, etc.
* Alternatives to Jest  
* What is Puppeteer
* a simple example 
* integrating with Jest: simple example 
* integrating with Jest: complex examples 
* Alternatives to Puppeteer: Cypress, Selenium 
* Conclusions

## Why 

When I started working as a software developer at my first job, I immediately become "friend" with the concepts of unit testing and integration testing. At the time (2012) the backend was written in Java and the frontend was written in GWT, a Java framework to build UIs that is compiled to JS. 

Unfortunately all our testing efforts were only directed towards the backend, probably because the language; this means that we could not find UI bugs before it was too late. 

Fast fotward many years, GWT is not a thing anymore (good for you!), and Javascript is one of the most studied and used languages of the world. Javascript ecosystem is growing exponencially with thousands of packages, frameworks, ideas, applications that come out all the time. The language itself is evolving every year, after 20 years of no interesting additions. So... testing in JS became a necessity. 

At the start of 2019 there was a lot of hope around Javascript testing, mainly because of: 

* popular UI frameworks (react, vue, angular...) that were designed from the ground up to be unit-tested; 
* NodeJS, that has become stable and mature 
* the real _need_ of testing for regressions.

I also read an article saying: _the js community has finally understood that web apps must be E2E tested first, instead of unit tested_. That's true because e2e tests have become extremely easy to write and to repeat. Let's see it!

## JEST

Let me introduce Jest. **Jest** is a testing framework mainly maintained by Facebook. It has a lot of features:

* support for typescript, 
* babel, 
* webpack, 
* latest ES features, 
* support for testing timers, classes, etc. 
* support for mocking, spying 
* a cool documentation 

To install: 

    $ npm i --save-dev jest 

Jest can also be configured to calculate coverage, to specify environments (node vs browser), and probably every other configuration you may ever need to set. 

## Let's run our first test 

This example comes directly from JEST getting started. Suppose we wrote this function: 

```javascript
//sum.js
module.exports = (a, b) => {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error('The sum function accepts only numbers')
    }
    return a + b
}
```

> A word on the module system used in these examples. In NodeJS we usually use the non-standard `require()` function together with `module.exports`, while in standard EcmaScript the cool kids are `import` and `export` keywords. We will eventually converge to import/export in the near future, but since Jest is a Node application in the end, we will use NodeJS syntax for now. To use ES6+ syntax, [check this SO answer](https://stackoverflow.com/questions/35756479/does-jest-support-es6-import-export).  

Ok! Let's write a test for this function: 

```javascript
const sum = require('./sum')

describe('sum module', () => {
    it('should sum two numbers', () => {
        const result = sum(2,3);
        expect(result).toBe(5);
    });
});
```

> **Try it!** Use `$ npx jest`  from the command line and see the output! Jest will search for *_.test.js and *.spec.js_ files, and will execute them. 

`describe()` is used to define a test suite - a logical group of tests that are related. You can write tests directly at the top level, or you can wrap as many `describe` blocks you want one into another; these names hare helpful when the tests start failing because they provide some context of what went nuts. 

> **Suggestion**: I prefer to write at least one containing the module name and optionally another that will explain the base condition I am checking. Example: 

```javascript
describe('Products service', () => {
	describe('The product is not in the database', () => {
		...
    })
})
```

Let's go back to our example. the function `it()` (alias for `test()`) is the actual test that will be executed. Usually our tests are comprised of three parts: 

* setup - import the code, insert the configuration, etc. 
* execution - where we actually call the sum function 
* test expectations - where we check that the test has actually succeded. 

Here we use Jest function `expect()` to assert that the result of the function is actually 5; thanks to a bunch of jest expectations, we can test pretty much everything is testable. 

> **Suggestion**: limit yourself to test only the public API of a module.  There's no need to test the inner workings! 

And now let's write a test for the _bad_ case: 

```javascript
//sum.spec.js
const sum = require('./sum')

describe('sum module', () => {
    it('should sum two numbers', () => {
		...
	});

    it('should explode with exception', () => {
        try {
            sum(2,'pippo');
        } catch(e) {
            expect(e).toBeDefined();
        }
    });
});
```

This way you can also test for exceptions! 

> **Hint**: try to make your tests fail. Otherwise you can never know if they're really working.  

### Can we check DOM modifications?

Yes! Jest is cool because it integrates JSDOM, a browser DOM API implementation in pure JS. In my experience it will work very similarly to a real browser, and I found it super useful. For example, let's write a function that will change toggle a class over a DOM element: 

```javascript
// example02/toggleClass.js
module.exports = (domElement, className) => {
    domElement.classList.toggle(className)
}
```

This very super stupid snippet will add or remove to a `domElement` a `¢lassName` . 

Now let's write a Jest test for it: 

```javascript
// example02/toggleClass.spec.js
const toggleClass = require('./toggleClass')

describe('Toggle class on DOM element', () => {
    it('attach an element to the Document and toggle a clas on it', () => {
        // (1) 
        const div = document.createElement('div')
        div.id = 'myDiv'
        document.body.appendChild(div);
        // (2) div actually attached to the virtual dom:
        const sameDivAsBefore = document.getElementById('myDiv');
        expect(div).toBe(sameDivAsBefore);
		
        // (3)
        toggleClass(sameDivAsBefore, 'myClass');
        expect(sameDivAsBefore.classList).toContain('myClass');
		
        // (4) 
        toggleClass(sameDivAsBefore, 'myClass');
        expect(sameDivAsBefore.classList).not.toContain('myClass');
    })
});
```

Heeeey, a 3 lines function tested by a 20 lines test :D Well, lot of the code was added to show you something. 

At (1) I create a DIV and attach to a Document. This Document object is provided by JSDOM and is instantiated by Jest - if you are using NodeJS, remember to change a setting in jest configuration and you're done. 

At (2) I just show that all the DOM API is available, so I retreive the same element with `getElementById()`. 

Then, I will add a class to this element by calling `togleClass()`. We then check that the class has been added by using `expect().toContain()`. 

Finally, we call again `toggleClass` (4) and check that the dom element does **not** contain the class anymore. 

This is so powerful, that by enabling some features (via configuration) I could also load scripts (like jquery) and use it in the test! Not bad. 

## Can we mock other functions/classes? 