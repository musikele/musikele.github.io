---
paginate: true
comments: true
author: musikele
category: English
layout: post
date: 2019-04-03 00:00:00 +0200
tags:
- ssh
- tutorial
title: 'SSH cheatsheet (from zero to hero) '
header-img: "/images/ssh-big.png"
description: 'SSH is one of the fundamental tools you must master to become a successful
  developer. In this article we''ll talk about using it for advanced configurations,
  like logging to remote server without password, configuring a tunnel, monitoring
  ssh connections '

---
## Creating a new pair of keys

```bash
$ ssh-keyjen
```

keys are created in `~/.ssh` directory. Two files will be created:

```bash
➜  ~$ cd ~/.ssh 
➜  .ssh$ ls -al
-rw------- 1 musikele musikele 1,8K feb 18 21:56 id_rsa
-rw-r--r-- 1 musikele musikele  411 feb 18 21:56 id_rsa.pub
➜  .ssh$ 
```

The private key is `id_rsa` and you should never share it with anybody.

The public key is `id``_rsa.pub_` _and this can be shared with others. As you can see the_ `_id_``_rsa.pub` is also readable by anyone on the system.

## Set up SSH login to remote server without password

There's a simple command to set up the ssh key on a remote server:

```bash
$ ssh-copy-id root@123.123.123.123
```

once you hit enter, the remote server will ask for the password (at least for the first time). Once done, you can log in to a remote server by only typing

```bash
$ ssh root@123.123.123.123
```

...and you're in!

What is this command `ssh-copy-id` doing? This command will copy your public key (`~/.ssh/id_rsa.pub`) in the remote file `~/.ssh/authenticated_keys`. The server will use the your public key to authenticate you.

When we log in to a remote server, without using a username, we will log in with the same username of the local machine. E.g. 

```bash
$ ssh 123.123.123.123
musikele@123.123.123.123's password: 
```

... but if you're logging in to a corporate machine you don't have a user set up with the same local username. So we prefix the host address with the remote user. If the remote user's name is `remote_user` here is the example: 

```bash
$ ssh remote_user@123.123.123.123
```

We're in! 

Other useful options:

* `-p 2222` is used to specify the port to use. Default port for SSH is 22. 
* `-i /path/to/alternate/key` is used to speficy another _private_ key you want to use instead of the default one. 

to run only one command and exit, simply write the command after the ssh connection string: 

```bash
ssh -p 2222 remote_user@123.123.123.123 ls -al 
drwxrwxrwx+  3 root          root     4096 Apr  3 10:02 #recycle
drwxr-xr-x  31 admin         users    4096 Mar 13 07:41 .
drwxrwxrwx+ 13 root          root     4096 Feb  6 09:54 ..
-rwxrwxrwx+  1 admin         users   14340 Jun 18  2017 .DS_Store
...
```

## Simplify connections with ssh config files 

`vi ~/.ssh/config`

    Host foo
        Hostname 123.123.123.123
        User root
        IdentityFile ~/.ssh/id_rsa
        Port 22

```bash
ssh foo
```