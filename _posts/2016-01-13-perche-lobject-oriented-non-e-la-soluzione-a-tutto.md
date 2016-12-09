---
id: 513
title: un pratico esempio del perchè l'Object Oriented non è la Soluzione Universale©'
date: 2016-01-13T10:10:58+00:00
author: musikele
layout: post
guid: http://michelenasti.com/?p=513
permalink: /2016/01/perche-lobject-oriented-non-e-la-soluzione-a-tutto/
dsq_thread_id:
  - "4486789148"
categories:
  - Italiano
tags:
  - functional programming
  - object oriented
  - programmazione funzionale
---

  <a href="https://i0.wp.com/michelenasti.com/wp-content/uploads/2016/01/stormo-di-gabbiani-un-cielo-color-pastello.jpg" rel="attachment wp-att-518"><img class="wp-image-518 size-full" src="https://i0.wp.com/michelenasti.com/wp-content/uploads/2016/01/stormo-di-gabbiani-un-cielo-color-pastello-e1452682395609.jpg?fit=798%2C496" alt="stormo-di-gabbiani-un-cielo-color-pastello" srcset="https://i0.wp.com/michelenasti.com/wp-content/uploads/2016/01/stormo-di-gabbiani-un-cielo-color-pastello-e1452682395609.jpg?w=798 798w, https://i0.wp.com/michelenasti.com/wp-content/uploads/2016/01/stormo-di-gabbiani-un-cielo-color-pastello-e1452682395609.jpg?resize=300%2C186 300w, https://i0.wp.com/michelenasti.com/wp-content/uploads/2016/01/stormo-di-gabbiani-un-cielo-color-pastello-e1452682395609.jpg?resize=768%2C477 768w, https://i0.wp.com/michelenasti.com/wp-content/uploads/2016/01/stormo-di-gabbiani-un-cielo-color-pastello-e1452682395609.jpg?resize=700%2C435 700w" sizes="(max-width: 798px) 100vw, 798px" data-recalc-dims="1" /></a>
  

Ieri molti amici e lettori mi hanno chiesto perchè avessi iniziato ad approfondire il paradigma funzionale, quando con l'object oriented riesci a risolvere quasi tutti i problemi del mondo.

Voglio farvi vedere un esempio di codice che, siccome dipende dallo stato interno degli oggetti e questo stato è mutevole, risulta molto difficile da seguire e da analizzare.

Stavolta l'esempio l'ho preparato in Java, il linguaggio OO per eccellenza. Ho creato la classe &#8220;<span class="lang:default decode:true crayon-inline ">Stormo</span>  (di gabbiani)&#8221; che modella uno stormo. Ogni stormo ha due metodi, il metodo &#8220;<span class="lang:default decode:true crayon-inline ">unisci</span> &#8221; con un altro stormo, e &#8220;<span class="lang:default decode:true crayon-inline">riproduci</span>&#8220;, che modella essenzialmente quella cosa là :D.

Nel main invece vedete un po' di operazioni sugli Stormi. Quanto vale result?

<pre class="lang:default decode:true" title="codice object oriented che fa quel che vuole">class Stormo {

	public int gabbiani;

	public Stormo(int n) {
		this.gabbiani = n;
	}

	public Stormo unisci(Stormo other) {
		this.gabbiani += other.gabbiani;
		return this;
	}

	public Stormo riproduci(Stormo other) {
		this.gabbiani = this.gabbiani * other.gabbiani;
		return this;
	}
}

public class Test {

	public static void main(String args[]) {

		Stormo stormo_a = new Stormo(4);
		Stormo stormo_b = new Stormo(2);
		Stormo stormo_c = new Stormo(0);

		int result = stormo_a.unisci(stormo_c).riproduci(stormo_b)
                  .unisci(stormo_a.riproduci(stormo_b)).gabbiani;

		System.out.println(result);
	}
}</pre>

Quanti gabbiani contate? Quanto vale <span class="lang:default decode:true crayon-inline ">result</span>  alla fine del Main ?

La risposta che avete contato voi è ... 16. La riposta del compilatore invece è ... 32. E l'oggetto <span class="lang:default decode:true crayon-inline ">stormo_a</span>  è addirittura cambiato!

Come vedete, sono bastate poche righe di codice per ottenere un risultato sballato e un bug piuttosto evidente.

Uno dei problemi che affligge questo codice è che va a mutare lo stato interno dell'oggetto; se i metodi <span class="lang:default decode:true  crayon-inline">unisci</span> e <span class="lang:default decode:true  crayon-inline">riproduci</span>  avessero restituito copie e lasciato immutato la classe stessa, ora non saremmo qui a parlarne.

^^^EDIT:

Amici suggeriscono di mostrare cosa si dovrebbe cambiare affinchè il codice funzioni.

Io modificherei i metodi <span class="lang:default decode:true  crayon-inline ">unisci</span>  e <span class="lang:default decode:true  crayon-inline ">riproduci</span>  per ottenere il risultato corretto:

<pre class="lang:java decode:true">public Stormo unisci(Stormo other) {
    return new Stormo(this.gabbiani+other.gabbiani);
}

public Stormo riproduci(Stormo other) {
     return new Stormo(this.gabbiani*other.gabbiani);
}</pre>

Ed è qui che si applica il concetto di **immutabilità**: non ci sono side effects sull'oggetto chiamato e viene restituito un nuovo oggetto contenente le nuove proprietà.

^^^FINE EDIT

Dunque ciò che dicono i miei amici e colleghi è giusto, nel senso che con la programmazione a oggetti (ma anche con la programmazione iterativa) i problemi si risolvono comunque; l'approccio funzionale permette però di avere qualche altro gadget nel coltellino svizzero del programmatore, di scrivere codice più bello, più espressivo, più succinto.

Per completezza, riporto qui l'esempio (con i termini inglesi) in javascript così potrete eseguirlo nella console del browser (senza che aprite eclipse...). Anche questo esempio è preso da [Mostly Adequate Guide to Functional Programming, capitolo 1.](https://github.com/MostlyAdequate/mostly-adequate-guide/blob/master/ch1.md)

<pre class="lang:js decode:true">var Flock = function(n) {
  this.seagulls = n;
};

Flock.prototype.conjoin = function(other) {
  this.seagulls += other.seagulls;
  return this;
};

Flock.prototype.breed = function(other) {
  this.seagulls = this.seagulls * other.seagulls;
  return this;
};

var flock_a = new Flock(4);
var flock_b = new Flock(2);
var flock_c = new Flock(0);

var result = flock_a.conjoin(flock_c)
    .breed(flock_b).conjoin(flock_a.breed(flock_b)).seagulls;
//=&gt; 32</pre>

 