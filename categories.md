---
layout: page
title: Categories
permalink: '/categories/'
---

{% assign rawtags = "" %}
{% for post in site.posts %}
	{% assign ttags = post.categories | join:'|' | append:'|' %}
	{% assign rawtags = rawtags | append:ttags %}
{% endfor %}
{% assign rawtags = rawtags | split:'|' | sort %}

{% assign tags = "" %}
{% for tag in rawtags %}
	{% if tag != "" %}
		{% if tags == "" %}
			{% assign tags = tag | split:'|' %}
		{% endif %}
		{% unless tags contains tag %}
			{% assign tags = tags | join:'|' | append:'|' | append:tag | split:'|' %}
		{% endunless %}
	{% endif %}
{% endfor %}

{% comment %}
=======================
The purpose of this snippet is to list all the tags you have in your site.
=======================
{% endcomment %}
{% for tag in tags %}
<a href="#{{ tag | slugify }}"> {{ tag }} </a>
{% endfor %}


{% for tag in tags %}
<h3 id="{{ tag | slugify }}">{{ tag }}</h3>
<ul>
{% for post in site.posts %}
{% if post.categories contains tag %}
<li>
<h4>
<a href="{{ post.url }}">
{{ post.title }}
<small>{{ post.date | date_to_string }}</small>
</a>
{% for tag in post.category %}
  <a class="tag" href="/blog/tag/#{{ tag | slugify }}">{{ tag }}</a>
{% endfor %}
</h4>
</li>
{% endif %}
{% endfor %}
</ul>
{% endfor %}
