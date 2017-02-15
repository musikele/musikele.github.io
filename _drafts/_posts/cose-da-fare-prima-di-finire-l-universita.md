---
title: Cose da fare prima di finire l'università
date: '2017-01-04 00:00:00'
author: musikele
layout: post
categories:
- Italiano
tags:
- github
- blogging
- jekyll
- markdown
---
Vi siete iscritti a informatica / ingegneria informatica? Fermo restando che secondo me la formazione universitaria garantisce la comprensione di tutti i meccanismi fondamentali di questa disciplina, non possiamo nascondere il fatto che il mondo del lavoro è leggermente più pratico.

La prima buona notizia è che si tratta di cose che **può apprendere chiunque** (anche chi non ha mai studiato informatica). La seconda buona notizia è che sono tante piccole cose che prese singolarmente **non richiedono molto tempo**, anzi certe volte basterebbe una giornata libera per imparare cose che userete per i prossimi 30 anni almeno.

Ma andiamo alla lista.

### comprare un dominio relativo al vostro nome e cognome 
Avere un dominio con il vostro nome e cognome é il primo step verso il personal branding. Comprarlo costa molto poco, stiamo parlando di 10€ all'anno e spesso é incluso con spazio web e hosting php. La cosa interessante però é come vengono gestiti i DNS. Provate a servire il vostro blog su *nomedominio.com* e un'altra macchina su *sottodominio.dominio.com* (ne parlo più avanti).

### aprire un blog Wordpress e parlare di informatica

Perché aprire un blog? Quasi riesco a leggere i vostri pensieri: *Non serve per trovare lavoro*: falso. I recruiter quando ricevono il vostro CV cercano il vostro nome sui social, e se trovano il vostro blog avrete fatto bingo. A me é capitatoq quasi tutte le volte. *Non so di cosa parlare*: scrivete ciò che studiate, ciò che vi colpisce maggiormente, gli esperimenti che fate e i tentativi andati a buon fine. Se ad esempio configurate Ubuntu come mail server e descrivete come farlo, un recruiter ha le prove che lo sapete fare davvero. 

Perché WordPress come piattaforma? Perché é uno dei software di maggior successo di sempre, coi quali vengono realizzati i portali più famosi, dai siti vetrina agli ecommerce. Prima lo conoscete meglio é. 

Avere un blog migliora anche la vostra capacità di pensare e scrivere in Italiano e, se siete temerari, in Inglese. 

### Configurare una macchina sempre connessa e gestirla da Remoto 
Anche questa é una spesa che costa, per le macchine più semplici, circa 5€ al mese se volete spendere soldi, molto meno se avete un vecchio pc da utilizzare come server. 

L'idea é di avere una macchina vostra sempre connessa alla quale potete accedere via *ssh* e *http* sulla quale potrete installare tutto ciò che vi passa per la testa. Se ad esempio avete acquistato un dominio, modificate i dns per raggiungere questa macchina con un dominio di terzo livello (es. *mybox.dominio.com*). Il suggerimento é di installare Ubuntu (che é una distro Linux molto semplice) con questi software: 
- owncloud, una sorta di Dropbox completamente vostro
- roundcube, un web email client 
- tool per controllare il traffico in ingresso e in uscita da questa macchina (meglio sapere se qualcuno ci sta hackerando) 
- sbizzarritevi con la fantasia! Potete installare quello che volete, quindi provate a hostare applicazioni in nodejs, Java, etc. 

### realizzare una webapp e farla usare a qualcuno che non siete voi 
Potrebbe essere molto istruttivo realizzare una webapp con struttura MEAN (mongodb, express, Angular, node) o LAMP (Linux, apache, mysql, php), anche molto semplice. Ad esempio potete realizzare una semplice TODO list con questi requisiti:
- autenticazione 
- salvataggio su DB 
- separazione tra API e frontend 
- installare Google Analytics per vedere come si comportano i vostri utenti 
- loggare tutto ciò che accade su client e su backend

Facendola usare ai vostri amici riceverete i primi feedback e potrete realizzare un prodotto migliore. 

* frequentare community locali
*   conoscere un po' di frontend

## Se queste piccole cose sono così importanti, perché non si studiano all'università?

Il mondo del lavoro paga delle persone affinché sappiano risolvere i problemi che gli vengono rivolti, e la conoscenza degli strumenti quasi sempre è demandata allo sviluppatore.

L'università invece prova a spiegarti quali sono i problemi che uno sviluppatore potrebbe trovarsi a risolvere e quali strade (teoriche) esistono.