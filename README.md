# ⚡ SkillForge AI - Personalized Learning Roadmap Generator

> **Turn career ambitions into a structured, time-bound, battle-tested learning plan.**

---

## 🎯 The Problem
Students and career transitioners often know their target role (e.g., **Data Analyst**, **Frontend Developer**, **Machine Learning Engineer**) but get stuck in **"Tutorial Hell"**:
- Unsure what skills to learn first vs what to skip.
- Overwhelmed by thousands of random courses and videos.
- No time-bound schedule matching their real-life weekly availability.
- Missing concrete milestone projects and proof-of-work capstones needed to land real interviews.

## 💡 The Solution: SkillForge AI
SkillForge AI is a client-side web application and curriculum engine that takes a student's:
1. **Target Role** (Standard or Custom Specialty)
2. **Current Baseline Skills** (Diagnostic 3-tier rating: None / Novice / Proficient)
3. **Weekly Study Availability & Target Deadline** (Hours/week and target months)
4. **Learning Format Preference** (Project-first, Video-heavy, Docs/reading, Balanced)

And automatically calculates and synthesizes:
- **Skill Readiness Index (%)** & exact gap diagnostic analysis.
- **Time-bound multi-phase roadmap** with weekly timelines and total hours.
- **Curated vetted resources** (100% free / open access, official docs, interactive sandboxes).
- **Flagship Capstone Projects** with full industry specifications and deliverables.
- **Interactive Checklists & Self-Assessment Quizzes** with instant feedback.
- **Multi-View Visualizer**:
  - ⚡ **Timeline Pipeline View**: Expandable phases, objectives, capstones, and quizzes.
  - 📋 **Kanban Board View**: Real-time sync of Not Started, In Progress, and Mastered tasks.
  - 📅 **Weekly Study Routine Calendar**: Day-by-day balanced study schedule.
  - 🎯 **Skill Gap Matrix**: Visual comparison of current skills vs target competencies.
- **AI Tweak Assistant**: 1-click prompts to re-pace for emergency interview sprints, weekend routines, or project-first deep dives.
- **Export & Sharing**: Clean Markdown syllabus (ready for Notion/Obsidian), JSON download, and Print/PDF support.

---

## 🚀 How to Run Locally

### Option 1: Direct in Browser
Double-click `index.html` or open it directly in any modern web browser (Chrome, Edge, Firefox, Safari).

### Option 2: Using the Python HTTP Server
```bash
python server.py
```
Then visit [http://localhost:8000](http://localhost:8000).

---

## 🛠️ Architecture & Tech Stack
- **Structure**: Semantic HTML5 with accessibility best practices.
- **Styling**: Vanilla CSS3 with custom design system, glassmorphism, responsive grid, animations, and print media queries.
- **Logic**: Modular ES6 JavaScript with heuristic roadmap synthesizer, reactive state management, and HTML5 Canvas confetti engine.
- **Zero Heavy Dependencies**: 100% standalone, no npm install or node required. Runs everywhere.
