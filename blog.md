---
layout: default
title: Blog — Shivraj Shere
permalink: /blog/
---

<div class="pg-wrapper">
  <aside class="pg-sidebar">
    <div class="sidebar-card">
      <span class="section-tag">// Navigation</span>
      <nav class="sidebar-nav">
        <a href="/" class="sidebar-link no-push-state no-mark">← Home</a>
        <a href="/projects/" class="sidebar-link no-push-state no-mark">Projects</a>
        <a href="/publications/" class="sidebar-link no-push-state no-mark">Publications</a>
        <a href="/blog/" class="sidebar-link no-push-state no-mark active">Blog</a>
        <a href="https://github.com/shivrajshere" target="_blank" class="sidebar-link no-push-state no-mark">GitHub ↗</a>
      </nav>
    </div>
    <div class="sidebar-card" style="margin-top: 1.5rem;">
      <span class="section-tag">// Topics</span>
      <div style="margin-top: 1rem; display: flex; flex-wrap: wrap; gap: 0.4rem;">
        <span class="card-tag">Medical Robotics</span>
        <span class="card-tag">IoT</span>
        <span class="card-tag">MIS</span>
        <span class="card-tag">Engineering</span>
      </div>
    </div>
  </aside>

  <main class="pg-content">
    <div class="pg-header reveal">
      <span class="section-tag">// Thoughts on Robotics, Engineering &amp; Technology</span>
      <h1>Blog &amp;<br>Articles</h1>
    </div>

    <div class="blog-grid">
      {% for post in site.data.blog %}
      <article class="glass-card reveal">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
          <span class="card-tag">{{ post.tag }}</span>
          <span style="color: var(--text-muted); font-family: var(--font-mono); font-size: 0.75rem;">{{ post.date }}</span>
        </div>
        <h3>{{ post.title }}</h3>
        <p style="color: var(--text-muted); font-size: 0.95rem; line-height: 1.8; margin: 0.75rem 0 1.5rem;">{{ post.excerpt }}</p>
        <a href="{{ post.url }}" class="no-push-state no-mark" style="color: var(--accent); text-decoration: none; font-size: 0.85rem; font-weight: 700; letter-spacing: 1px;">READ MORE →</a>
      </article>
      {% endfor %}

      {% comment %} Also pull in real Jekyll posts if they exist {% endcomment %}
      {% for post in site.posts %}
      <article class="glass-card reveal">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
          {% if post.tags.first %}<span class="card-tag">{{ post.tags.first }}</span>{% else %}<span class="card-tag">Post</span>{% endif %}
          <span style="color: var(--text-muted); font-family: var(--font-mono); font-size: 0.75rem;">{{ post.date | date: "%b %Y" }}</span>
        </div>
        <h3>{{ post.title }}</h3>
        {% if post.excerpt %}<p style="color: var(--text-muted); font-size: 0.95rem; line-height: 1.8; margin: 0.75rem 0 1.5rem;">{{ post.excerpt | strip_html | truncatewords: 30 }}</p>{% endif %}
        <a href="{{ post.url }}" class="no-push-state no-mark" style="color: var(--accent); text-decoration: none; font-size: 0.85rem; font-weight: 700; letter-spacing: 1px;">READ MORE →</a>
      </article>
      {% endfor %}
    </div>
  </main>
</div>


