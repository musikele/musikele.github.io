---
id: 10
title: Archives
author: musikele
layout: page
---

{% for post in site.posts %}
- [{{post.title}}]({{ post.url }})
{% endfor %}