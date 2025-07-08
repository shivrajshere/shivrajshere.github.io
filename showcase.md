---
layout: default
title: All Showcases
permalink: /showcase/
---
{% for item in site.showcase %}
  <h2><a href="{{ item.url }}">{{ item.title }}</a></h2>
  <p>{{ item.excerpt }}</p>
{% endfor %}
