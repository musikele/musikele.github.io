---
paginate: true
comments: true
author: musikele
title: Docker cheatsheet
category: English
layout: post
date: 2018-10-25 00:00:00 +0200
tags:
- docker
- cheatsheet
header-img: "/images/Q9jiI1pL_400x400.jpg"
description: A docker cheatsheet with stuff I learn on the job

---
I usually forget everything if I don't use it that much. Here is a brief list of docker commands learned on the go.

## Start a simple container 

```bash 
$ docker run -i -t ubuntu /bin/bash
```

- `run` runs the `ubuntu` image 
- `-i` allows you to write to the container ("Keep STDIN open even if not attached")
- `-t` allocates a pseudoTTY and allows to read from the container
- `ubuntu` is the name of the image to start 
- `/bin/bash` is the command to launch once the image is started 

In practice: use `-i -t` to read and write from the docker image in the console.

Optional commands: 
- `--name XXX` assigns the name XXX to the container 
- `-d` launches the container as a daemon 
- `-c XXX` passes XXX to the command. In our example the command is `/bin/bash`. With -c we can pass any kind of commands; for example `-c "while true; do echo hello world; sleep 1; done"`. Docker would pass this string t bash and the container would print hello world every second without stopping. Note the quotes. 

## See containers status 

```bash 
$ docker ps -a 
```

- `ps` alone prints only the active containers 
- `-a` shows also the exited containers 

## See container logs 

If the container is started as daemon you might want to see the output. 

```bash 
$ docker logs -t -f NAME_OF_CONTAINER 
```

- `logs NAME_OF_CONTAINER` shows you the logs of the container. Without options you see the latest logs and then the propt gets back to your shell. 
- `-f` works like `-f` in `tail -f`; logs become live. Use `CTRL-C` to exit. 
- `-t` shows also timestamps. 

![]({{ site.baseurl }}/images/Q9jiI1pL_400x400.jpg)