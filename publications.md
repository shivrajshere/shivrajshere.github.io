---
layout: default
title: Research & Publications — Shivraj Shere
permalink: /publications/
---

<div class="pg-wrapper">
  <aside class="pg-sidebar">
    <div class="sidebar-card">
      <span class="section-tag">// Navigation</span>
      <nav class="sidebar-nav">
        <a href="/" class="sidebar-link no-push-state no-mark">← Home</a>
        <a href="/projects/" class="sidebar-link no-push-state no-mark">Projects</a>
        <a href="/publications/" class="sidebar-link no-push-state no-mark active">Publications</a>
        <a href="/blog/" class="sidebar-link no-push-state no-mark">Blog</a>
        <a href="https://github.com/shivrajshere" target="_blank" class="sidebar-link no-push-state no-mark">GitHub ↗</a>
      </nav>
    </div>
    <div class="sidebar-card" style="margin-top: 1.5rem;">
      <span class="section-tag">// About IJSRD</span>
      <p style="color: var(--text-muted); font-size: 0.85rem; margin-top: 1rem; line-height: 1.7;">International Journal of Scientific Research &amp; Development — peer-reviewed e-journal for engineering and science innovation.</p>
      <a href="https://www.ijsrd.com" target="_blank" class="btn-outline no-push-state no-mark" style="font-size:0.75rem; padding: 0.4rem 1rem; margin-top: 1rem; display:inline-block;">Visit IJSRD</a>
    </div>
  </aside>

  <main class="pg-content">
    <div class="pg-header reveal">
      <span class="section-tag">// IJSRD · International Journal of Scientific Research &amp; Development</span>
      <h1>Research &amp;<br>Publications</h1>
      <p class="pg-lead">"Research is seeing what everybody else has seen and thinking what nobody else has thought." — Albert Szent-Györgyi</p>
    </div>

    {% for pub in site.data.publications %}
    <div class="glass-card reveal" style="margin-bottom: 2rem;">
      <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 2rem; flex-wrap: wrap;">
        <div style="flex: 1; min-width: 280px;">
          <span class="card-tag">{{ pub.date }}</span>
          <span class="card-tag">{{ pub.journal }}</span>
          <span class="card-tag">{{ pub.volume }}</span>
          <h2 style="font-size: 1.5rem; margin: 1rem 0 0.75rem;">{{ pub.title }}</h2>
          <p style="color: var(--text-muted); line-height: 1.8; margin-bottom: 1rem;">{{ pub.description }}</p>
          <p style="font-size: 0.85rem; color: var(--text-muted);">
            <strong style="color: var(--accent);">Keywords:</strong>
            {% for kw in pub.keywords %}{{ kw }}{% unless forloop.last %}, {% endunless %}{% endfor %}
          </p>
        </div>
        <div style="display: flex; flex-direction: column; gap: 0.75rem; align-items: flex-end; min-width: 140px;">
          <a href="{{ pub.url }}" target="_blank" class="btn-primary no-push-state no-mark" style="font-size:0.8rem;">Read Paper</a>
          <span style="color: var(--text-muted); font-size: 0.75rem; font-family: var(--font-mono);">IJSRD Certified</span>
        </div>
      </div>
    </div>
    {% endfor %}
  </main>
</div>


