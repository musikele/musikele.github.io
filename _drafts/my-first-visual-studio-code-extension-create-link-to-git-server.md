---
paginate: true
comments: true
author: musikele
category: English
layout: post
date: 2020-06-15
title: My first Visual Studio Code Extension, create-link-to-git-server
description: 'I wrote my first Visual Studio Code extension out of need, and I learned
  many things along the way. '
header-img: "/images/visual-studio-code-logo.png"
tags:
- visual studio code
- extension

---
You know when you're chatting with a colleague and **you want to point** out a specific line in the git repository? For example, **a specific line of a specific branch of a specific fork**? It's a time-wasting process to open the browser, open the git hosting website, navigate to the file, and create the link; so I decided to create an extension for Visual Studio Code. 

Here's what I learned. 

## Wait, does it work? 

Yes! This extension is very simple. It adds a new item (`Get link to Git server`) in the right-click menu. When you click, the extension will copy in the clipboard a link to that line that you can paste wherever you want. 

It supports ssh and https repositories. 

You can download the extension by

* compiling it yourself from [github](https://github.com/musikele/create-link-to-git-server)
* exploring it on [visual studio code marketplace](https://marketplace.visualstudio.com/items?itemName=musikele.create-link-to-git-server)
* installing it directly from VSC by searching for `create-link-to-git-server`

## Wasn't there another extension that does exactly that? 

You may be thinking of the super popular extension GitLens, of which I am a huge fan and user. Anyway, GitLens has some issues with my setup:

* At my company we use a private git server, and gitlens doesn't play nice with that. 
* With public famous repositories, like github, GitLens produces a link to the commit, so you loose the information about the branch and the fork, that I find very useful. 

Anyway my extension does not block GitLens in any way, so feel free to use both :D

## How do you exactly write a VSC extension? 

Folks at Microsoft have published a ton of articles regarding how to build an extension for Visual Studio Code. The starting point is this: [Your First Extension](https://code.visualstudio.com/api/get-started/your-first-extension). It will create a simple "Hello World" extension that will show a message on screen. 

All the code will be in a typescript file called `src/extension.ts` that contains the following blocks: 

* an `activate` function , that is run at VSC startup 
* inside the activate function, we register the command we want to show; in my case, I called `registerTextEditorCommand` that contains the body of the code. Here I do all my logic, like getting git info from VSC, and building the link. More info on those commands [here](https://code.visualstudio.com/api/references/vscode-api#commands)
* Creating the command is not enough. Now we must specify how to activate those commands. This is done in `package.json` file by specifying custom properties. I admit that the documentation for this is messy, overly descriptive, and not easy to find/digest/understand without many good researches in stack overflow. 

To be precise, 