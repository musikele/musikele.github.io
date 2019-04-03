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
* `-f` runs ssh in the background (you'll see later when to use it)
* `-N` does not open a show window.

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

## Copy files to and from the remote host

from local to remote:

```bash
scp bar.txt mark@123.123.123.123:~/
```

port: `-P` (uppercase)

recursive copy: `-r`

from remote to local:

```bash
scp mark@123.123.123.123:~/bar.txt ./new.txt
```

## Configure a ssh tunnel

```bash
ssh -L 8000:yahoo.com:80 mark@myhost.com
```

connections to local port `8000` will be redirected to `yahoo.com` on port `80`, on host `myhost.com`.

Combining the same command with `-f -N` options:

```bash
ssh -f -N -L 8000:yahoo.com:80 mark@myhost.com
```

Suppose we want to create a tunnel to localhost. Users that will connect to myhost.com:8000 will be redirected to port 3000. How to do this?

Remote tunneling is disabled by default to enable:

```bash
vi /etc/ssh/sshd_config
```

search for `GatewayPorts`and set to `Yes`.

Now we have to restart the ssh server with `service ssh restart`.

Now we can connect with

```bash
ssh -R 8000:localhost:3000 mark@myhost.com
```

## escape sequences

To stop a blocked ssh connection write: `~.` (tilde fullstop).

Another escape sequence is `~ CTRL-Z` (tilde CTRL-Z). The ssh connection will be moved to background. To resume, type `fg`.

## Verify SSH fingerprints

When you connect to a new machine, a new entry is created in the local file `~/.ssh/known_hosts` .

But sometimes keys on remote servers will change and our machine will not be able to connect.

In order to check the new fingerprint of a remote server:

* connect to the remote server (e.g. `ssh root@123.123.123.123`)
* on remote host, launch `ssh-keygen -l -f /etc/ssh/ssh`_host_`ecdsa_key.pub`. The output of the command is a fingerprint of the key.
* on local host, launch `ssh-keygen -R 123.123.123.123`. This will remove the line associated with `123.123.123.123` in the `~/.ssh/known_hosts` file.
* finally, connect again to the remote server `ssh root@123.123.123.123`. The remote host will show its fingerprint, and it should match the one shown before.

## configure SSH even further

open `vi /etc/ssh/sshd_config`.

Search for `PermitRootLogin` and set to `no` to avoid root login.

Another value for this setting is `prohibit-password`. This way you can only connect via public/private key.
.
You can disable password authentication by setting `PasswordAuthentication` option to `no`.

If you want to accept connections only for a specific set of users, or only users that come from a specific IP, you can set `AllowUsers` option like this:

    AllowUsers foo bar@1.2.3.4 *@2.3.4.5

Remember to restart the server with `service ssh restart`.

## Monitoring connection attempts 

`vi /var/log/auth.log` contains all the informations about who tried to log in the system, with other info like the IP, etc. 

command `lastlog` will show last logs from all users of the system. 

`lastlog -u mark` will display last log of the user `mark`. 

vi `~/bash_history` for a user will show his last commands launched and we can use this info to check if he legitimately accessed the machine, or if it was a hacker. 