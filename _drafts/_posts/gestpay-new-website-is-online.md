---
paginate: true
comments: true
author: musikele
title: 'Gestpay new website is online! '
layout: post
date: 2017-11-02 00:00:00 +0000
categories: Italiano
category: English
tags:
- Gestpay
- Website
- Design
- Work
header-img: ''
---
I'm really exited to write about one of my la test works: **the redesign of Gestpay's website.**

## What is Gestpay

Gestpay is the most famous Italian payment processor, owned by Gruppo Banca Sella. It allows websites to accept payments on your ecommerce and your online activities. The main features are:

* Accept credit cards from all over the world

* Integrates with 80+ alternative payment systems, like PayPal, Apple Pay, Alipay, Qiwi, Sofort, Klarna... And more!

* Allows to customize the payment form as you want

* multiple layers of Security (3d secure, Gestpay Guaranteed Payment...) 

* It is suitable for small, medium and giant businesses

* Their business is still on track after 20 years

In the last year i have been involved in many of their projects; one of my first jobs was to design a [documentation website](Http://docs.gestpay.it), with the goal to be as clear as possible. We did it!

So, what's new about website design in 2017?

## Working with designers is great

This is the first thing that comes to mind. For the first time of my life ever, I had to implement the work of a professional designer. Behind many choices (like, how many pixels here and there) there was a long discussion that could be going. I want to say this in bold: **every frontend developer should work with a designer.** 

His job started before mine: we started from feedback received from Facebook contacts about Gestpay, so we had a sense of what the site was clearer and what not. 

Then, we performed a usability test that confirmed our hypothesis, thus giving us a clearer direction on how to setup the navigation. 

Then he realized the layout and thanks to a product called [invision]() I could check all the relevant data for me, like colors, spaces, grab the images, etc.

## Only small subset of prerequisites

When we started, it wanted to be a minor redesign of our website. So we decided to approach it lightly. 

* Reuse components of the previous website, as much as we could 

* Reuse existing css if possible 

* Internationalization 

* Mobile and tablet friendly 

However, the old website was using a structure doomed with old plugins that were not supported anymore. At the end I decided to rewrite a big part of the system from zero, reusing only the scss (that was indeed very well organized). 

## Technically speaking..

Gestpay website is made with Jekyll, a static website generator. It is written in ruby but you don't know to understand a line of ruby to get it working.

For the styling part, we have used scss, a css extension that allows to split styling in many files. This doesn't solve all styling problems, but by using two guiding principles like itcss and bem, we wrote clearer class names and organized stuff logically. 

Combining this with responsive classes, like` media @screen and break 650px`, we have developed a website that is also mobile friendly, from the first day. 

For the html part, I can't say how much flexbox I have used. Flexbox is so cool I could never ever use other display properties. Give it a try!

### A word on Internet Explorer

Internet explorer is still used out there; it's about 3-7% of the total traffic received on the website. For some complex styling options I had to write some rules for IE only. Edge, on the other side, is great and supports every new standard. 

Stop using IE! It has been deprecated!

### A word on Safari 

Developing for mobile (ios) is impossible if you don't have an iPhone with you. I only had an old Mac that I used only for these kinds of checks.

Well, for some reasons my opinion is that safari is not that cool. For example, when you scroll down a page on iPhone the viewport gets bigger, while If you scroll up, weird effects apply.

## That's all folks! 

Now we are checking the stats to see if every user can achieve the promised user experience. We are also monitoring new bugs and 404s. However we believe to have made a great work in simplifying the user experience; check it out and give us your thoughts! 