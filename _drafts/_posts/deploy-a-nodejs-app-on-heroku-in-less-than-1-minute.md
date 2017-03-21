---
paginate: true
comments: true
author: musikele
title: Deploy a NodeJS app on Heroku in less than 1 minute
category: English
layout: post
date: '2017-03-18T13:18:53+00:00'
tags:
- nodejs
- heroku
- express
---
Actually, the time you need to deploy an app depends on how fast you are to copy & paste. 

### Steps to do just the first time

1.  Sign up (or log in) to [heroku.com](http://heroku.com)
2.  download [heroku's command for the console](https://devcenter.heroku.com/articles/heroku-cli) (select the right version for your operating system).
3.  be sure the command is installed: `heroku -v` (you should see some output)
4.  launch `heroku login`and log in with your email and password.
5.  Upload ssh keys to heroku: `heroku keys:add`
6.  `ssh -v git@heroku.com`

### Steps for every nodejs app

1.  Set the port of your application as a environment variable:

```
const port = process.env.PORT || 3000 ;  
... 
app.listen(port);
```

1.  change the `npm start` script, in `package.json`:

```
"scripts": {
   "start": "node server.js",
   ...
   }
```

1.  `heroku create`
2.  `git push heroku`
3.  `heroku open`

<font face="monospace, monospace">For every modification you do to your code, just commit and `git push heroku`! </font>