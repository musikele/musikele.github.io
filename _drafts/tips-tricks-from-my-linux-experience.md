---
paginate: true
comments: true
author: musikele
category: Italiano
layout: post
date: 2019-10-27 00:00:00 +0200
tags:
- linux
- ubuntu
title: Tips & Tricks from my linux experience
header-img: "/images/busy-computer-keyboard-hands-2058128.jpg"
description: In more than 15 years I've used Ubuntu, windows and mac as my desktop
  workstation. Here's the best way to use enjoy Linux to become a better developer!

---
While at university, I - like many other students - were encouraged to install linux on our laptops, to learn the fundamentals of programming and the internals of operating systems.

I guess it was 2006-2007 and I installed Ubuntu in dual boot on my machine, but since I'm not an easy guy **I decided to use it as my first operating system**, leaving Windows as a backup. Blog posts, magazines and books agreed, linux was _ready_ for desktop PCs.

Could not agree: **at the time, drivers support was a mess**. There was no support, for example, for a usb DSL modem and a printer I owned. I remember buying an external wifi adapter and that was not working too. I had to consume a lot of time on forums, even translating from french, to make my laptop working.

However, I was happy with what I had, also because I do not play videogames and I really do not need windows for any special reason (no adobe, no MS Office, etc.). Also, 100% of my studies could be done from linux standard tools, and this was something I really loved.

Let's fast-forward a couple of years, I bought a Mac with my first salary - a Mac that lasted 5 years! - and a Windows PC - this one - that is now in it's fourth year. I used it with WSL for some time, then I had to switch back to linux as my daily operating system.

In this article I'll share some neat tricks I found useful, together with some stories about my experience. If you want to reach the buddha developer status, there are some steps to make!

## Get comfy with the command line

If you're a Windows user, you can avoid command line for the rest of your life, even as a developer. But if you work in a Unix environment, the terminal becomes one of your best tools to do your job. So, **knowing bash is really important** - you can automate almost any aspect of your daily tasks. The problem is that **bash has the most obscure syntax ever**, and honestly I can't even remember how to check for a file existence. what a mess!

However, Bash is still super popular, and if you administer or work on a remote server, chances are your only tool is bash. Here are some resources:

* [Pure Bash Bible](https://github.com/dylanaraps/pure-bash-bible)
* [The single most useful thing in bash](https://coderwall.com/p/oqtj8w/the-single-most-useful-thing-in-bash)
* [Bash cheatsheet](https://devhints.io/bash)
* ... and obviously Stack Overflow, Google, etc.

## How to backup a Linux system?

When I switched to MacOS everybody was talking about how _advanced_, _superior_, _cool_ was Time Machine, the backup solution every Mac has already installed. It is actually very nice to use, mainly because the graphics seem to come from the future, but I did not like for one aspect: the backup files were compressed (and encrypted) in a way that only another Mac could understand.

I am not a fan of vendor lock-in, so I did not want to be obliged to buy Macs forever only because of my backups, so I started looking around at alternatives. There are many, either free or payed, but there is one sitting there in your `/usr/bin` called **rsync**.

**Rsync** is a Unix tool to synchronize the content of a folder on another position, that can bee over the net, or another hard disk. It is capable of everything you can think of - preserving attributes, navigating symlinks, crypt files, incremental backups, etc. - and has a very nice man page.

So I decided to build [my own backup script](https://github.com/musikele/backupscript). It's written in bash, it will take your data from your home directory to a network position using SSH. It will also copy only differences in files, and hard linking unchanged files, so everytime I run it I get a snapshot of my pc that takes the smallest possible space.

If you can access a network position with ssh access (without password), you can schedule a cron job to run every X hours and have a full backup of your computer.

Nice, isn't it? However, I ended up not using my script.

A backup is a critical process and must run flawlessly without hassles, without the user even knowing it's running. In my case, since my solution was "homemade", I had to check every now and then if it was working, and what was going on, etc.

After a couple of years of honoured service I ended up using [Duplicati](https://www.duplicati.com/), an open source .NET project that has a lot of features for the backup nerds like me.

So next question: where I am storing all the data?

## buy (or build) a NAS

The problem: decouple my life from Dropbox, Google Drive, etc. I have more than 100+ GB of data, up to 2003, that I want to preserve forever. Also, I want to backup my photos and my entire PC, everyday, twice per day. Buying space from one of those accounts can cost up to 100€ per year. 

But I'm a nerd and I want to do it myself! 

What I am looking for is a **NAS** (_Network Attached Storage_), basically a Server connected to the internet. After having looked around, building one means you have time,  knowledge and a spare computer. I did not have time and a spare computer so I decided to buy one :) 

I bought a NAS with two 3TB hard disks, total expense 320€, duplicated in a RAID 1 configuration. This means that the two disks are exact clones and when a disk will fail I can substitute it with a new one and the system will autoclone the disks. 

But buying a NAS it's not only great because of the power you get, 