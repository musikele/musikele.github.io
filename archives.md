---
id: 10
title: Archives
layout: page
paginate: true
---

Here's the long list of articles I wrote in these years, in Italian and English. 

<br />&nbsp;

<section>
        <div class="row">
            {% for post in paginator.posts reversed %}

                <article class="{% cycle '6u', '6u$' %} 12u(small)">
                    <header>
                        <h2><a href="{{ site.baseurl }}{{ post.url }}">{{ post.title }}</a></h2>
                    </header>
                    <section>
                        {{ post.excerpt }}
                    </section>
                    <footer>
                        <ul class="actions">
                            <li><a href="{{ site.baseurl }}{{ post.url }}" class="button">Read More</a></li>
                        </ul>
                    </footer>
                </article>

            {% endfor %}
        </div>
    </section>

{% if paginator.next_page_path != nil %}
<a href="{{paginator.next_page_path}}" class="button"><< Newer</a> 
{% endif %}

{% if paginator.previous_page_path != nil %}
<a href="{{paginator.previous_page_path}}" class="button pull-right">Older >></a> 
{% endif %}