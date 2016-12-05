---
id: 510
title: La Programmazione Funzionale con le Funzioni Pure
date: 2016-01-12T10:10:50+00:00
author: musikele
layout: post
guid: http://michelenasti.com/?p=510
permalink: /2016/01/la-programmazione-funzionale-con-le-funzioni-pure/
dsq_thread_id:
  - "4483835436"
categories:
  - Italiano
tags:
  - funzioni pure
  - javascript
  - programmazione funzionale
  - pure function
---
Le **Funzioni Pure** sono uno dei pilastri fondamentali della programmazione funzionale. La definizione vera è qualcosa di astruso e non la scriverò perchè la capirebbero in pochi; invece  _in parole povere_ è addirittura un concetto semplice.

Una **funzione** si dice **pura** quando il suo **output** **dipende esclusivamente dal suo input.**

Sembra una cretinata, ma il 99% del codice scritto ogni giorno nel mondo non rispetta questa regola.

Vediamo un esempio di funzione impura e di funzione pura:

<pre class="lang:js decode:true" title="funzioni impure e funzioni pure">var etaMinima = 30; 

//impura
function checkEta(var eta) {
    return eta &gt;= etaMinima; 
}

//pura
function checkEta(var eta) {
    var etaMinima = 30; 
    return eta &gt;= etaMinima; 
}</pre>

Riuscite a vedere il problema? la prima checkEta dipende da una variabile esterna, che può cambiare in qualunque momento e dunque può influenzare il modo in cui viene eseguito e valutato il codice.

Avete presente la parola chiave _this_ ? Se la usate, o l'avete usata, il vostro codice è impuro. E' possibile trasformare parecchio in codice puro molte funzioni impure, ma per farlo dovrete dimenticare (per un po') il mondo _object oriented._ 

Vediamo alcuni _effetti collaterali_ (in matematica diremmo _corollari_) delle _pure function_s:

  * una pure function **non modifica l'input** in ingresso.
  * una pure function **può essere riapplicata più volte sullo stesso input e si otterrà sempre lo stesso output.** Questa proprietà viene solitamente detta &#8220;idempotenza&#8221;.
  * Una Pure Function **può chiamare altre Pure Function**. (In object-oriented li chiameremmo metodi statici, ma non tutti, solo quelli che non dipendono da nessun'altro).
  * Possiamo sfruttare l'ultima proprietà per _cacheare_ il risultato delle pure function tramite una tecnica che si chiama &#8220;**memoization**&#8221; :

<pre class="lang:js decode:true" title="Memoization ">var memoize = function(f) {
  var cache = {};

  return function() {
    var arg_str = JSON.stringify(arguments);
    cache[arg_str] = cache[arg_str] || f.apply(f, arguments);
    return cache[arg_str];
  };
};</pre>

e se abbiamo una chiamata Http che è anch'essa idempotente potremmo cachearla con questa tecnica:

<pre class="lang:default decode:true">var pureHttpCall = memoize(function(url, params){
  return function() { 
    return $.getJSON(url, params); 
  }
});</pre>

Dalla seconda volta in cui verrà chiamata <span class="lang:default decode:true  crayon-inline ">pureHttpCall</span>  , il risultato non sarà preso dalla rete ma dalla cache. Ingegnoso, no?

Se volete altri approfondimenti sul paradigma funzionale leggete questo libro free: [Mostly Adequate Guide to Functional Programming](https://github.com/MostlyAdequate/mostly-adequate-guide/). Alcuni spunti (ed esempi) li ho presi dal capitolo 3.  Buona lettura!