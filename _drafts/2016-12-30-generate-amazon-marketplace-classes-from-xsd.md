---
title: Notes on generating Amazon Marketplace classes from xsd 
author: musikele
layout: post
categories:
- English
tags:
- amazon
- mws
- xsd
- java
---

I'm trying to generate classes for Amazon Marketplace Web Service documentation, for example the [Product.xsd](https://images-na.ssl-images-amazon.com/images/G/01/rainier/help/xsd/release_4_1/Product.xsd) file found [here](http://docs.developer.amazonservices.com/en_US/feeds/Feeds_FeedType.html). 

I usually try to generate Java classes from xsd with standard commands like this: 

```terminal
$ xjc -d generated https://images-na.ssl-images-amazon.com/images/G/01/rainier/help/xsd/release_4_1/Product.xsd
```

This is not working, because `Product.xsd` contains links to other xsd, and some of them are not available in the same path - that is, `https://images-na.ssl-images-amazon.com/images/G/01/rainier/help/xsd/release_4_1/`. 

So, I am downloading all xsd files (`Product.xsd` and all linked schemas) to a local folder. 

The ones that I can't find in the root directory, I found out, are in folder `https://images-na.ssl-images-amazon.com/images/G/01/rainier/help/xsd/release_1_9/` (So for example `SportsMemorabilia.xsd` is [here](https://images-na.ssl-images-amazon.com/images/G/01/rainier/help/xsd/release_1_9/SportsMemorabilia.xsd).)

Why Amazon is messing up with files? Nobody knows, infact I found a lot of threads on line detailing my same problem... 

After downloading all files from the urls above, run the `xjc` command on the local file and not on the url... 