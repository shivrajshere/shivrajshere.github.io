# Shivraj Shere | Professional Portfolio

> Generative AI & Intelligent Systems Engineer | Robotics Researcher

This repository contains the source code for my professional portfolio, built on a robust, full-width **Vanilla Jekyll** architecture.

## Overview
The portfolio is designed to showcase my work at the intersection of mechanical precision, generative AI, and intelligent autonomy. It highlights my core competencies in:
- **Generative AI & Machine Learning:** PyTorch, LLMs, NLP pipelines, 3D GANs
- **Mechanical Design & CAD:** SOLIDWORKS, FEA, CATIA V5
- **IoT & Robotics:** ROS, Motion Planning, Computer Vision

## Architecture
This project originally utilized the Hydejack theme but has since been completely overhauled into a **vanilla Jekyll site** for maximum performance and layout flexibility:
- **`_layouts/default.html`**: The unified, single-source HTML skeleton.
- **`assets/css/custom.css`**: A ground-up responsive, full-viewport CSS grid layout utilizing modern CSS variables for a "Glow/Glassmorphic" dark aesthetic.
- **`_data/`**: Content decoupling via YAML data files (`projects.yml`, `publications.yml`, `blog.yml`), dynamically iterated using Liquid templating.

## Setup & Deployment
Run this locally with standard Ruby/Jekyll:
```bash
bundle install
bundle exec jekyll serve
```
Site is fully configured for automated **GitHub Pages** deployment from the `main` branch.

---
*Built with engineering precision. © 2026 Shivraj Shere.*
