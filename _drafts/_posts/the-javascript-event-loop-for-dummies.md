---
title: The Javascript Event Loop for dummies
date: '2017-02-14 11:29:00'
paginate: true
comments: true
author: musikele
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

What's your choice? Don't scroll down and think a little bit... 

<script>
$('answer').onClick(function() {
  $('answer').contents().first()[0].textContent = '#3';
});
</script>

Hey, you could just paste this code in your browser's console to discover that ... the right answer is <span id="answer">**CLICK HERE TO KNOW THE ANSWER**</span>. 

This behaviour may seem surprising but it is perfectly legit. 

But why?

## what is really happening under the hood 

First: **in Javascript there is just one thread**. (*This is not correct anymore, because in the last years a new technology called `Service Workers` has become available; but it is not important for now.*)

So what happens when an asynchronus event, like the set timeout, happens? 
What happens when we read a file, or request a page from the web? **Will the main thread block waiting for the result**? 

Let's analyze the code and understand what happens. 

1. the first `console.log()` is printed. 