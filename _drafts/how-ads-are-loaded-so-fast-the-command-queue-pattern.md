---
paginate: true
comments: true
author: musikele
category: Italiano
layout: post
date: 2019-02-12 00:00:00 +0100
tags: []
title: 'How ads are loaded so fast: the command queue pattern'
header-img: "/images/command_queue_pattern-2.jpg"
description: 'The command queue pattern allows you to give commands to your library,
  even if it has still not been loaded. This technique is widely used in advertising. '

---
Prior to work in an ads company I had no idea of how ads are actually rendered on a page. I mean, I had a vague sense of what was going on, but the actual world behind it ... well, it's huge :) 

Sometimes ads are loaded on a page even before you actually see any content. How? The first thing we learned at university is to wait for the DOM to have completely loaded, before doing anything to the DOM itself. This does not apply to ads, or better to say, ad companies many tricks to load ads without blocking the DOM. 

I won't go in the detail of this process now, but basically ads are rendered inside iframes based on some rules, and iframes should never be used for anything different than ads. 

Here in this article I'm going to talk about how some popular libraries (like google publisher tag or prebid) allow users to write code that will be put in a queue and will be executed as soon as the library is loaded.  

Suppose we have a library that will load something, and this initialization process will take some time. However, we would like to start giving commands (e.g. setup instructions) to this library even before it has loaded. How? 

in the client's code, the code that the user will write, we will initialize the library like this: 

```javascript
var Library = Library || {}; 
Library.queue = Library.queue || [];
```

In these two simple lines, we have initialized our library and its commands queue. In fact, if the `Library` object does not exist, we will initialize it with an empty object, and then we will create the empty array property `Library.queue` that will contain our initalization code. For example: 

```javascript
Library.queue.push(function(){
	console.log("Called only when the library has loaded, not before");
});
```

> Note: I'm deliberately using ES5 code here. It would be fantastic that every user in the world was using the latest version of the coolest browser, but the reality is that a bunch of zombies are still using Internet Explorer. Ad companies want to earn some money on these people too ! 

Let's see the `Library`'s code now. 

```javascript
//initialize Library module here...
//for example: 
var Library = (function(window) {
  ...
  var queue = window.Library ? window.Library.queue : [];
  if (queue.length) {
    var command = queue.shift(); 
    command();
  }
  ...
})(window)
```

First we will check if the `window.Library` exists