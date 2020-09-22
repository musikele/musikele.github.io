---
layout: default
permalink: /tags/
title: Tags
---

<div id="main">

  <h1>Tags</h1>

  <div id="archives" style="display:none">
  {% for tag in site.tags %}
    <div class="archive-group">
      {% capture tag_name %}{{ tag | first }}{% endcapture %}
      <div id="#{{ tag_name | slugify }}"></div>
      <p></p>
      <h3 class="tag-head">{{ tag_name }}</h3>
      <a name="{{ tag_name | slugify }}"></a>
      <ul>
      {% for post in site.tags[tag_name] %}
        <li><a href="{{ site.baseurl }}{{ post.url }}">{{post.title}}</a></li>
      {% endfor %}
      </ul>
    </div>
  {% endfor %}
  </div>

  <script>
    const page = document.getElementById('archives');
    function shrink() {
      const hash = window.location.hash; 
      if (!hash) {
        return;
      }
      const archives = document.querySelectorAll('.archive-group');
      for (const archive of archives ) {
        if (archive.children[0].id !== hash) document.getElementById('archives').removeChild(archive);
      }
    }

    shrink(); 
    page.style.display = 'block'; 
    
  </script>
</div>
