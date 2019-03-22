---
author: musikele
title: "a DevDay night with GustoJS, VueJS maintainer"
category: English
layout: post
date: '2019-03-22 9:00:00'
---

It all started with a <a href="https://twitter.com/gustojs/status/1104453435913633792">tweet</a> by **Darek Gusto Wędrychowski**, announcing his presence in the south of Italy. Friends intercepted the tweet and asked me to organize a meetup, to not loose this oppportunity to have an international speaker and member of the core team of **VueJS**, one of the most famous frontend libraries of the world. 

Two words about Vue: a project started in 2013 by **Evan You**, it has reached 100k stars on github and this is an amazing accomplishment for a framework that has not been sponsored, like React or Angular, by one of the tech giants.

We managed to organize a meetup in only six days (for those who are not familiar with community life, this means finding a location, buffet, speakers, spamming on social media and via mailing list... and since it's a free event, hope that people will actually come!) with 40 people attending; for a small city like Salerno this felt crowded like a Lady Gaga concert. 

## Michele Nasti: A brief history of web frameworks

Our night started with **Michele Nasti** giving an overview on the _history_ of frontend development: it all started with the browser war in the first years of the web, until _JQuery_ came to the scene. JQuery was the first library to spread at a planetary level and still has a lot of traction: 75% of the top 10k websites is still using JQuery, and probably will never ditch it completely.

The problem with JQuery is the _imperative approach_: it didn't scale well when the website become complex, even to 1-2k lines of code. **Angular1** become the first framework to undermine JQuery leadership in the frontend space. The main advantage of Angular1 was the _declarative approach_: instead of explicitly modifying pieces of the dom on user interactions, we could delegate to the library the DOM manipulation and focus on reasoning about its state. 

The next iteration of frameworks is the one we are currently living in: **React**, **Angular2+**, and **VueJS**. _React_ was the first to introduce the Virtual DOM concept, a virtual in memory rapresentation of the DOM that was synced with the DOM when it was more convenient. This provided a huge boost in performance. Together with _VueJS_ they share a very small API that can be extended to every use case a web developer might need today. 

## Darek Gusto Wędrychowski: The state of VueJS

Our second talk was held by Darek, and it was divided in two parts: the first part is on the state of VueJS and its future. Many keypoints were touched: 
- VueJS 3 is coming! VueJS core is being rewritten but the nice thing is that **the API will not change**, and developers don't need to learn anything new to use it. 
- The core team is reorganizing its internal structure, to **eliminate bottlenecks** in VueJS development. There are many steps taken in this direction, for example...
- VueJS will accept **RFCs** (Request for Comments) for new features. These will be publicly discussed on Github and they can be centered on every aspect of vueJS: syntax, new features, pitfalls, etc. 
- There will also be a **guide for cotributors**: at the moment, if you want to contribute to VueJS, it is very difficult to understand all the libraries you may need to touch for a single modification. With this guide the team will hope to make it easy for those who like to help Open Source in a factive way. 
- following to this, VueJS will move to **monorepo**: all the Vue code in one place will help conributing.
- Next VueJS version will allow **treeshaking**, so if you don't need a specific subset of functionalities of vuejs, you can strip it down from the bundle.
- Future versions will be _time based_, every 6 months there will be a new version, with an LTS (Long Term Support) every 18 months. 
- **Authors** of popular Vue libraries **will be part of the Vue core group** that will take decisions, to avoid breakings on new Vue versions. 
- A **commmunity guide is being written**. Vue documentation will remain a place where you can learn Vue and also a reference for developers; the community guide will contain recipes, helpers, best practices. 
- Another effort is the document **The state of VueJS**, that contains testimonials of companies that have adopted VueJS in production and fell in love with it. It is also the best place to find arguments for "convincing your boss" to adopt Vue. 

