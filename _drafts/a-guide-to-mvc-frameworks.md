---
paginate: true
comments: true
author: musikele
category: English
layout: post
date: 2020-11-22
tags:
- mvc
- web
title: 'A guide to MVC Frameworks '
header-img: ''
description: Dummy descr

---
In the last 3-4 years I've worked or played with a bunch of MVC frameworks, like Laravel, Ruby on Rails, Django, and AdonisJS if you are Node guys. 

With two of them (Laravel and Dango) I also experience of working with them in production. Laravel is the one I think I have more experience with. 

So, what do they all share in common? What's the difference between them and Express, Flask, Sinatra? This article will try to explain the filosophy around those tools. 

## But first, a little bit of history of the web 

At university that's what I was taught about web servers:

* user's browser makes request to a web server 
* webserver parses the request and tries to understand all the elements that were parts of the request... 
  * those are: the URL, the search parameters, HTTP headers, the body of the request. When I was a student there were only GET and POST. Other verbs were introduced only some time later. 
* the webserver will eventually pass the ball to a funky programming language that will go to the database to get the data, do the elaboration and build an HTML page, _on the fly_. 

That was 2003. This model has evolved a bit, but the rough basics are still the same. Let's explore the evolutions: 

* One of the innovations were the introduction of REST verbs, so _DELETE, PUT, OPTIONS, HEAD_ that allowed for more semantic expressions 
* another innovation was thhat the response was not HTML exclusively but other formats were allowed: I've seen the rise and fall of the SOAP protocol, with XML being sent over HTTP, while now it's the moment of JSON. So, some clients ask resources using JSON and webserver answer with other JSON. How to handle this data? 
* Javascript is probably the most overlooked thing in 2003. I remember the teacher saying "JS it's only useful to do validation before sending data to the client". He could not see in the future, otherwise he would spend more than 4 hours about it (on WWWSchools). In the current days, Some teams design their apps to be JS only and ask JSONs to the server. 
* Security also came in and now we have a bunch of tools to protect against common attacks, like CORS, CRSF, and many more techniques. In the past, web was a wild wild west.  

You can bet your ass that many things improved, but surprisingly, the same model of 2003 still works (Web is the best example of retrocompatible design). The most important one is, people got tired of solving the same problem over and over and invented a set of tools that standardized/simplified the developer's job, allowing to focus more on the business logic than on the details. 

## So what's this MVC stuff? 

M stands for **Model**, and means the data that is manipulated by the framework. In current web frameworks the Model usually corresponds to classes that map to a relational database (E.g. Person class is linked to the persons table). The same for relations, constraints, etc. 

V is **View** and means the way the data is presented to the user. In my small dev life I've seen many ways to represent part: JSON responses for example, or plain HTML. Usually, modern MVC tools offer a template system so you can write the _products.html_ page once and then inject in it the data to be displayed. 

C is for **Controller**, that is the part that will do the dirty job. When a request arrives, the controller will validate the input, fetch the database, and pass it to the right view. Or it will trigger some other systems. This is the part you'll write in some programming language. 

## Opinionated vs Unopinionated? 

I've never liked the MVC definition, probably because it's too smoky for me. What I like indeed is the difference between Opinionated vs Unopinionated frameworks. Opinionated frameworks are those that are presented in this article; they give to the dev a lot of pre-made tools with sensible defaults that will do all the heavy lifting. Sad to say, but the developer's job is sometimes just to configure these tools to make them work as needed. 

With unopinionated frameworks, indeed, you are left with just a tool that handles requests and responses. You may write all the tools you need and end up creating an MVC framework yourself. An example of those tools is how to create dynamic web pages on the fly. Or handle authentication. Or how to access databases. Or ... you name it. Endless possibilities, if you have endless time. In this category I see Express, Flask, Sinatra... 

## In MVC, what happens when a request arrives?

Almost all the frameworks I've spoke about expose a functionality called _router_. Similarly to phisical routers, these pieces of software will understand the URL and dispatch to the right controller. One can create a route for `/products/123` and the router will send this request to `ProductController` calling the appropriate function and passing the parameter `123` as argument. Isn't this lovely? 

So when I have to debug an application I usually start from here; I try to understand where the router configuration is, and where the route will point, and follow it. 

documentation artisan 