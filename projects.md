---
layout: default
title: Projects — Shivraj Shere
permalink: /projects/
---

<div class="pg-wrapper">
  <aside class="pg-sidebar">
    <div class="sidebar-card">
      <span class="section-tag">// Navigation</span>
      <nav class="sidebar-nav">
        <a href="/" class="sidebar-link no-push-state no-mark">← Home</a>
        <a href="/projects/" class="sidebar-link no-push-state no-mark active">Projects</a>
        <a href="/publications/" class="sidebar-link no-push-state no-mark">Publications</a>
        <a href="/blog/" class="sidebar-link no-push-state no-mark">Blog</a>
        <a href="https://github.com/shivrajshere" target="_blank" class="sidebar-link no-push-state no-mark">GitHub ↗</a>
      </nav>
    </div>
    <div class="sidebar-card" style="margin-top: 1.5rem;">
      <span class="section-tag">// Skills Used</span>
      <div style="margin-top: 1rem; display: flex; flex-wrap: wrap; gap: 0.4rem;">
        <span class="card-tag">CATIA V5</span>
        <span class="card-tag">ANSYS FEA</span>
        <span class="card-tag">SolidWorks</span>
        <span class="card-tag">OpenCV</span>
        <span class="card-tag">ISO 13485</span>
        <span class="card-tag">Wireless</span>
      </div>
    </div>
  </aside>

  <main class="pg-content">
    <div class="pg-header reveal">
      <span class="section-tag">// Engineering Portfolio · Mechanical Designs · Robotics</span>
      <h1>Projects &amp;<br>Mechanical Designs</h1>
      <p class="pg-lead">"Good design is like a refrigerator — when it works, no one notices, but when it doesn't, it sure stinks." — Irene Au</p>
    </div>

    {% for project in site.data.projects %}
    <div class="project-detail-card glass-card reveal">
      <div class="project-detail-top">
        <div class="project-detail-info">
          <div class="project-tags">
            {% for tag in project.tags %}
            <span class="card-tag">{{ tag }}</span>
            {% endfor %}
          </div>
          <h2>{{ project.title }}</h2>
          <p class="project-desc">{{ project.description }}</p>
          {% if project.highlights %}
          <ul class="project-highlights">
            {% for h in project.highlights %}
            <li>{{ h }}</li>
            {% endfor %}
          </ul>
          {% endif %}
        </div>
        <div class="project-detail-img">
          <img src="{{ project.image }}" alt="{{ project.alt }}">
        </div>
      </div>
    </div>
    {% endfor %}
  </main>
</div>


