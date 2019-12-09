---
paginate: true
comments: true
author: musikele
category: Italiano
layout: post
date: 2019-12-09
tags: []
title: 'Merge requests vs pair programming '
header-img: ''
description: 'What is good, and what is wrong, in pair programming? And in Merge Requests
  (or Pull Requests, in github name)? '

---
As you may know I work remotely. 

The policy, in my company, is that we start a task by forking the project and creating a branch from the master branch. Then we do our job and commit on our separate/indipendent branch. 

Once we're done with the task, we push the branch on our remote and open a Merge Request (abbreviated to MR).

> Github has popularized this way of working, but in the popular nomenclature this process is called Pull Request (PR). They're the same thing.

Another policy in my company is that two other engineers have to review a MR and, if they don't find any problems, the MR is finally merged.

What a trip! 

After some time, I started to note some patterns in working this way. 

* Some of my colleagues are style nazi (and occasionally I am too), they care about spaces, tabs, etc. These problems may be solved by a style checker (prettier? Eslint?) together with a git hook. 
* This process (pushing, reviewing, opening comments, fixing them 
* 