---
title: The Javascript Event Loop for dummies
date: '2017-02-14 11:29:00'
paginate: true
comments: true
author: musikele
layout: post
---
What does it mean that Javascript has no threads?! What is the event loop and how it is related? How can JS be even considered a modern programming language?! Let's find out the surprising truth about this stuff. 

![An event loop. The dancer is not included.]({{ site.baseurl }}/images/o_weighted_hula_hoop-1.jpg)

## Quiz: what's going on? 

Let's consider this small javascript program. What will be printed? 

```javascript
console.log('Starting app');

//first block 
setTimeout(() => {
  console.log('First setTimeout');
}, 2000);

//second block 
setTimeout(() => {
  console.log('Second setTimeout');
}, 0);

console.log('Finishing app');
```

In case you don't know: `setTimeout` is a javascript global function used to fire an action (the first argument) when the delay (second argument) is elapsed. 

So the first `setTimeout()` block will wait two seconds and then will write `First setTimeout` on console. 

The second block will wait 0 milliseconds (... it doesn't wait at all!) and then write `Second setTimeout` to the console). 

Back to the quiz... what is the expected outcome? 

| #1 | #2 | #3 | #4 | 
|----|----|----|----|
|Starting App<br>First setTimeout<br>Second setTimeout<br>Finishing app | Starting App<br>Second setTimeout<br>Finishing app<br>First setTimeout | Starting App<br>Finishing app<br>Second setTimeout<br>First setTimeout | Starting App<br>Second setTimeout<br>First setTimeout<br>Finishing app

<br> 

What's your choice? Don't scroll down and think a little bit... 

Hey, you could just paste this code in your browser's console to discover that ... the right answer is **#3**. 

This behaviour may seem surprising but is perfectly legit. 

Why?

## what is really happening under the hood 

Let's start with a Dogma: **in Javascript there is just one thread**. (*This is not correct anymore, because in the last years a new technology called `Service Workers` has become available; but it is not important for now.*) Everything is always executed in the same thread, even events that happen asynchronusly. 

So what happens when an asynchronus event happen, like the `setTimeout`? 

`setTimeout` is a good example of an asynchronus event. Expanding the reasoning, this can be a reading of a file, or receiving a packet over the network. The philosophy doesn't change. 

Bearing this in mind, let's return to the basis.

1. The first `console.log()` is printed. 

2. The first block is evaluated: 

```javascript
//first block 
setTimeout(() => {
  console.log('First setTimeout');
}, 2000);
```

This code says: *after 2000 milliseconds, trigger the function specified as first argument*. Since `() => { ... }` is a function, this is put in a **callback queue** ready to get fired when the conditions occour. 

3. The second block is evaluated: 

```javascript
//second block 
setTimeout(() => {
  console.log('Second setTimeout');
}, 0);
```

Another explanation. This code says: *after zero milliseconds, fire the function specified as first argument*. One would expect to be fired instantly, but this does not happen: The function is put in a **callback queue**, and when NodeJS believes the conditions are respected, the function is fired. 

Node cannot fire the function NOW because there's other javascript code being executed in the stack: it's the *main program*, the one that starts with the first `console.log()`. Think of this as a being wrapped inside a function; nodeJS is evaluating **this** function and cannot evaluate others. 

4. The last `console.log()` is evaluated and `Finishing app` is written to console. 

5. NodeJS controls the call queue and decides what to fire. There are two functions in the call queue. It's NodeJS's responsibility to 