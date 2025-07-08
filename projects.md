---
layout: default  
title: Projects  
permalink: /projects/
---

<div class="grid">
    {% for project in site.projects %}
      <div class="project-card">
        <a href="{{ project.url }}" target="_blank">
          <img src="{{ project.image.path }}" alt="{{ project.title }}" class="project-thumb" />
          <h3>{{ project.title }}</h3>
          <p>{{ project.description }}</p>
        </a>
      </div>
    {% endfor %}
  </div>
  
  <style>
  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    margin-top: 2rem;
  }
  .project-card {
    background: #2a2a2a;
    padding: 1rem;
    border-radius: 0.75rem;
    transition: transform 0.3s ease;
  }
  .project-card:hover {
    transform: translateY(-5px);
  }
  .project-thumb {
    width: 100%;
    border-radius: 0.5rem;
    margin-bottom: 1rem;
  }
  h3 {
    margin: 0.5rem 0 0.25rem;
  }
  p {
    margin: 0;
    color: #aaa;
  }
  </style>





  
