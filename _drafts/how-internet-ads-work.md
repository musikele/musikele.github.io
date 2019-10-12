---
paginate: true
comments: true
author: musikele
category: English
layout: post
date: 2019-10-12 00:00:00 +0200
tags:
- ads
- google
- prebid
- dfp
- rtb
title: 'How internet ads work '
header-img: "/images/pexels-photo-802024.jpeg"
description: 'Real time bidding, header bidding, DFP, GAM, cpm ... welcome in the
  world of ads, where everything is an acronym. Le me try to explain how everything
  works under the hood. '

---
This year I started working in an ad tech company as a software engineer, and obviously I did not know anything about how ad tech. It is a world on its own, it even has a story that could be taled, and for every why there's a because. 

## Why we need ads? 

I live very near to Pompeii (Italy) and if you happen to visit this incredible town you'll discover that in 79 a.D. there were a lot of ads painted on walls, trying to sell you wine, prostitutes, or even ask for a vote. I imagine that since money was invented, people felt the urge to advertise their products to others. 

Fast-forward a couple of millenia, we have many websites that are free for their users - think at your favourite newspaper. This is totally different from when newspapers were sold in shops and you had to pay to read news. So, how they pay salaries to their employees? 

You can guess - since it's the topic of this post - many websites earn money for displaying ads. So this post is a kind of explanation of how ads work from an engineering point of view. 

## How were ads in 1999? 

When a news company launched a website, it had to find **advertisers** that wanted to display ads on the news website. The news company, in adtech words, is called **publisher**. Many publishers had sales teams that contacted advertisers directly, trying to make a deal like "you display 1,5 million impressions of these images (in adtech terms: creatives) and I pay you 100k bucks". 

Once the deal was closed, there were needs to: 

* **track creatives impressions** - how many times the creative was rendered? and how many times it was actually viewed? and clicked? 
* **handle multiple campaigns concurrently** - I can close a deal with advertiser A for 1.5mln impressions per 100k, but then close another deal with advertiser B for 500k impressions for 200k - which one would you show most? and with what algorithm? 

Turns out, you need a software to run these choices, and this software category is called **Ad Manager**. One of the most famous ad managers is...

## Doubleclick for Publishers 

**DoubleClick for Publishers,** also abbreviated in **DFP**, has been one of the most successful ad managers ever created. I think part of his success was due to the fact it was a SaaS based product, developed when the author of the acronym SaaS was not even born :) 

DFP allowed to organize campaigns, creatives, orders, etc. 

## the "Waterfall"

## Header bidding 