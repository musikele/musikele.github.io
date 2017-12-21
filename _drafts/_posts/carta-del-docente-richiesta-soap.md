---
paginate: true
comments: true
author: musikele
title: carta del docente - inserire il certificato in soapUI per le richieste soap
category: Italiano
layout: post
date: 2017-12-21 00:00:00 +0000
description: 'Come fare a inserire il certificato per autenticare le richieste soap '
tags: []
header-img: ''
---

```
# trasformo il file .cer in .pem
openssl x509 -inform der -in 04233930652.cer -out 04233930652.pem

# uso la chiave (.der) e il file .pem appena creato per generare il file .p12
openssl pkcs12 -export -inkey key.der -in 04233930652.pem -out 04233930652.p12
```

Il sistema chiederà le password. 

Andare in SOAP UI e inserire questo file .p12 nel keystore del progetto 