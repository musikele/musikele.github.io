---
id: 362
title: 'loggare il tempo di esecuzione di un JS : console.time e console.timeEnd'
date: 2015-07-28T20:30:09+00:00
author: musikele
layout: post
guid: http://michelenasti.com/?p=362
permalink: /2015/07/loggare-il-tempo-di-esecuzione-di-un-js-console-time-e-console-timeend/
dsq_thread_id:
  - "3980783175"
categories:
  - Italiano
tags:
  - console.time
  - javascript
  - performance
---
Ogni browser moderno dispone di avanzatissimi strumenti di sviluppo, Firefox è stato il primo con Firebug (ora integra un suo strumento interno) mentre Chrome ha dettato lo standard con Chrome Developer Tools. A seguire tutti i browser che volevano definirsi moderni hanno dovuto creare delle conosole di sviluppo &#8220;serie&#8221;, e supportare tutta una serie di costrutti Javascript per facilitare lo sviluppo e il debugging di queste applicazioni.

Se leggete questo blog significa che sapete aprire una di queste console e probabilmente lo fate ogni giorno per lavoro. Ma come misurare che il codice JS che stiamo scrivendo sia effettivamente veloce? O meglio, come valutarlo in relazione ad altre soluzioni alternative?

un tool estremamente utile è <span class="lang:default decode:true  crayon-inline ">console.time()</span> . Tutto il codice racchiuso tra <span class="lang:default decode:true  crayon-inline ">console.time()</span>  e <span class="lang:default decode:true  crayon-inline ">console.timeEnd()</span>  viene misurato in console. Per identificare il blocco di codice valutato possiamo (e secondo me dobbiamo) dare una stringa come label. Vediamo un esempio:

<pre class="lang:js decode:true">console.time("test del for"); 

var i, arr = []; 
for(i=0; i&lt;100000; i++) { 
   arr.unshift(i); 
} 
arr.sort(); 

console.timeEnd("test del for");</pre>

Nel caso precedente creiamo un array di 100.000 posizioni, e inseriamo ogni nuovo elemento all'inizio. Dunque gli elementi sono disposti in odine decrescente. Poi lo ordiniamo con sort(). In console leggiamo: <span class="lang:default decode:true  crayon-inline ">test del for: 1041.271ms</span> .

Vediamo una variante che ci aspettiamo più semplice:

<pre class="lang:js decode:true">console.time("test del for"); 

var i, arr = []; 
for(i=0; i&lt;100000; i++) { 
    arr[i]=i 
} 
arr.sort(); 

console.timeEnd("test del for");</pre>

In questo altro caso invece creiamo l'array inserendo gli elementi nell'ordine naturale. Dopo l'operazione di ordinamento viene loggato <span class="lang:default decode:true  crayon-inline ">test del for: 187.685ms</span> .

Cosa abbiamo dunque scoperto? che conviene ordinare array già ordinati 🙂 e che console.time(LABEL) e console.timeEnd(LABEL) sono una comoda funzione per verificare quanto tempo viene impiegato dal nostro codice javascript.

Esercizio per casa: conviene usare document.getElementById(<span class="highVAL">&#8220;body&#8221;</span>)
     
.**createElement()** o document.getElementById(<span class="highVAL">&#8220;body&#8221;</span>)
    
.**innerHtml()  **? A voi la scoperta !