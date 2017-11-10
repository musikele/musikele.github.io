---
paginate: true
comments: true
author: musikele
title: Gestpay new website is online!
layout: post
date: 2017-11-02 00:00:00 +0000
categories: Italiano
category: English
tags:
- Gestpay
- Website
- Design
- Work
header-img: "/images/Screenshot-2017-11-6 Gestpay.jpg"
---
I'm really excited to write about one of my latest works: **the redesign of Gestpay's website.**

![]({{ site.baseurl }}/images/Screenshot-2017-11-6 Gestpay.jpg)

## What is Gestpay

[Gestpay](https://www.gestpay.it/) is the most famous Italian payment processor, owned by Gruppo Banca Sella. It allows websites to accept payments on your ecommerce and your online activities. The main features are:

* **Accept credit cards** from all over the world

* Integrates with 80+ **alternative payment systems**, like PayPal, Apple Pay, Alipay, Qiwi, Sofort, Klarna... And more!

* Allows to **customize the payment form**

* multiple layers of **security** (3d secure, Gestpay Guaranteed Payment...)

* It is suitable for **small, medium and giant businesses**

* Still on track after 20 years

One of my first jobs was to design a [documentation website](Http://docs.gestpay.it), with the goal to be as clear and simple as possible, for developers. We did it!

So, what's great about this?

## Working with designers is great

This is the first thing that comes to mind. For the first time in my life ever, I had to implement the work of a professional designer. Behind many choices (like, how many pixels here and there) there was a long discussion that could be going. I want to say this in bold: **every frontend developer should work with a designer.**

His job started before mine: based on feedbacks received from Facebook contacts, we had a sense of what of the old site was clear and what not.

Then, we performed **usability tests** that confirmed our hypothesis, thus giving us a clear direction on how to setup the navigation.

He realized the layout and thanks to a product called [invision]() I could check all the relevant data for me, like colors, spaces, grab the images, etc.

![]({{ site.baseurl }}/images/gestpay-invision.PNG)

## Only small subset of prerequisites

When we started, it wanted to be a minor redesign of our website. So we decided to approach it lightly.

* **Reuse components** of the previous website, as much as we could

* **Reuse existing css** if possible

* **Internationalization**

* **Mobile and tablet friendly**

However, the old website was using a structure doomed with old plugins that were not supported anymore. I decided to rewrite a big part of the website structure from zero, reusing only the SCSS (that was indeed very well organized).

## Technically speaking...

Gestpay is made with [Jekyll](https://jekyllrb.com/), a static website generator. It is written in ruby but you don't have to understand a line of ruby to get it working.

For the styling part we used [SCSS](http://sass-lang.com/), a CSS extension that allows to split styling in many files. This doesn't solve all styling problems, but by using two guiding principles like [ITCSS ](https://www.xfive.co/blog/itcss-scalable-maintainable-css-architecture/)and [BEM](http://getbem.com/introduction/), we wrote clearer class names and organized stuff logically.

Combining this with [responsive classes](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries), like `media @screen and (max-width: 650px)`, we have developed a website that is also mobile friendly, from the first line of code.

I can't say how much Flexbox I have used. [Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) is so cool I rarely had to use other display properties. Give it a try!

### A word on Internet Explorer

Internet explorer is still used out there; it's about 3-7% of the total traffic received on our website. For some complex styling options I had to write some rules for IE only. Edge, on the other side, is great and supports every new standard. We think IE will be less and less important, so this technique (add a discriminant class if the browser is IE) should be future proof.

Stop using IE! It has been deprecated!

### A word on Safari

Developing for mobile (iOS) is impossible if you don't have an iPhone with you.

For some reasons Safari is not that cool. For example, when you scroll down a page on iPhone the viewport gets bigger, while If you scroll up, weird effects apply. This happens because the button bar hides at the bottom. From a user experience point of view, this is not optimal.

## That's all folks!

Now we are checking the stats to see if every user can achieve the promised UX. We are also monitoring new bugs and eventually 404s. We believe to have done a great work in simplifying the user experience; check it out and give us your thoughts!