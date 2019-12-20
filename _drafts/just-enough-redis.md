---
paginate: true
comments: true
author: musikele
category: Italiano
layout: post
date: 2019-12-20
tags:
- redis
title: 'Just enough Redis '
header-img: ''
description: Redis

---
## What is Redis? 

## How to install? 

    $ sudo apt-get update 
    $ sudo apt-get upgrade 
    $ sudo apt-get install redis-server
    
    ## copy default conf file 
    $ sudo cp /etc/redis/redis.conf /etc redis/redis.conf.default
    $ redis-server 

from another terminal:

    ➜  ~ redis-cli
    127.0.0.1:6379> PING
    PONG

## Redis Basics 

```bash
127.0.0.1:6379> echo hello
"hello"
```

```console
127.0.0.1:6379> SET foo 100
OK
```

```console
127.0.0.1:6379> GET foo
"100"
```

```console
127.0.0.1:6379> INCR foo
(integer) 101
```

```console
127.0.0.1:6379> DECR foo
(integer) 100
```

```console
127.0.0.1:6379> SET bar 200
OK
127.0.0.1:6379> EXISTS bar 
(integer) 1
127.0.0.1:6379> EXISTS baz
(integer) 0
```

```console
127.0.0.1:6379> DEL bar
(integer) 1
127.0.0.1:6379> EXISTS bar
(integer) 0
```

```console
 ➜  ~ redis-cli GET foo    
"100"
➜  ~ redis-cli INCR foo > commands.txt 
➜  ~ cat commands.txt 
101
```

```console
```