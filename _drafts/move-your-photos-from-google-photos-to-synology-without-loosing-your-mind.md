---
paginate: true
comments: true
author: musikele
category: English
layout: post
date: 2021-07-19
title: Move your photos from Google Photos to Synology without loosing your mind
permalink: from-google-photos-to-synology-photos
description: 'In theory moving from Google Photos to Synology is easy. In practice
  it requires many steps. Here''s what worked for me. '
header-img: ''
tags:
- synology
- google photos
- photos

---
This guide is for you if: 

* you care about the privacy of your photos
* you don't want to pay Google 
* you own a Synology NAS. 

Synology offers an alternative called Synology Photos that works "well". To be precise, on Synology DSM (the operating system) version 6.* the photos app was called "Synology Moments", while on version 7.* it's called Synology Photos. My article will try to cover both, but since I migrated to version 7, this is the primary target of my guide. 

How the process will work. For each step i'll enter in details later. 

* Go on Google Takeout - the unified service to download all your data from google servers - and select only the photo albums you want to download. 
* Take the download link and download it on your NAS. You'll need a browser extension for this. I use [cliget](https://addons.mozilla.org/it/firefox/addon/cliget/) for Firefox.  
* SSH to your nas and extract the archives. 
* Rsync photos in the right folder. 

Scary, of all those steps? It took me months to perfect this procedure, but now I am quite happy with it and I have almost completed the migration. In the end, it's not that difficult but it will require time. Be preared. 

## Download backup from Google Takeout 

This step is mostly point-n-click. 

* Go on takeout.google.com and log in
* select only google photos. 
* Then, _wait a lot_ (20-30 seconds?) until the button "all photo albums" appears. 

![]({{ site.baseurl }}/images/schermata-2021-07-19-alle-11-39-09.png)

* Click on "deselect all" again and select only albums "Photos from 20XX" that you are interested to. These are albums that will contain all photos for every year; I assume other albums contain duplicates of these photos, that's why I deselected all the others. 

> tip: you can select only one year to do a test before selecting all years. 

![]({{ site.baseurl }}/images/schermata-2021-07-19-alle-11-37-45.png)

* Go to step two. Select "Email me a link to downlad" and select "50 GB" archive size. We will download the archive on the NAS directly, without passing from our local pc. 
* Click on "create export" and wait a couple of hours. You'll receive an email from Google when this is done. 

## Download the files directly on the NAS

For this, you'll require:

* ssh access on the NAS 
* a browser extension that allows cookies in download link. I use [cliget](https://addons.mozilla.org/it/firefox/addon/cliget/) for Firefox. Basically, this extension will translate the download link in a `curl` string. `curl` is a command that allows to make http requests with a lot of options; in our case, it will attach google cookies so Google will believe that we are logged users that are doing the download. I don't use Chrome so I hope somebody will suggest a similar extension for Chrome in the comments. 

So, back to the procedure. 

Google will send you a link to download your files. Once you click on "download", Google will ask you to log in again and then the browser will prompt to select a location where to download the file. **Click cancel here.** As i said, we're not going to download the files on the pc, but rather we're going to get the `curl` string to download the file on the NAS. 

So, once you've clicked "cancel", click on cliget extension: 

![]({{ site.baseurl }}/images/schermata-2021-07-19-alle-11-45-19.png)

And now, click on the export file, you'll get a curl executable string: 

![]({{ site.baseurl }}/images/schermata-2021-07-19-alle-11-46-21.png)

Copy this very long, preselected string and open an ssh connection to your Nas: 

```bash
$ ssh <nas-address>
  # from now on, if connection succeded, we are operating on the NAS
$ mkdir google-takeout
$ cd google-takeout
  # paste the very long curl string here followed by `&` 
$ curl ......... --output 'takeout-20210718T158137Z-001.zip' & 
```

Note the `&` at the end. If you're not familiar with unix, this means "start this process in the background". At this point you'll see that the terminal will start to become a little bit messy, with curl output breaking text. However, type `exit` and hit Enter. You'll exit the ssh connection while the `curl` operation will still be in place. 

Depending on how big are your archives, this can take a lot of time. Do this for every file google has created. 

You can re-enter ssh and check if the file is still downloading by doing a couple of `ls -al` and check the files size, if its getting bigger and bigger, this means that the download is in progress. 

## Extract archives 

## Copy files to Synology Photos dir