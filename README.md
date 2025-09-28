# Web Component: Podcast Preview

## 📘 Overview

This project implements a custom HTML element called <podcast-preview> that displays a reusable and encapsulated podcast preview UI. Built using the Web Components standard, this component ensures separation of concerns, encapsulation, and reusability across the application.

It accepts podcast data via HTML attributes or JavaScript properties, renders a consistent preview layout, and communicates with the parent application via custom events, without being tightly coupled to its logic.

# What i did

- Forked the repository from git
- Cloned the repository to my visual studio.
- Opened the index.html file in my browser to view the Kanban board.
- Customized task cards, colors, or layouts by editing the CSS and HTML files.

## 🎯 Core Objectives

✅ Web Component Functionality

- Define a custom element using customElements.define().
- Accept data via attributes or properties:
- Cover image
- Title
- Genre(s)
- Number of seasons
- Last updated date
- Remain stateless, relying solely on external data.
- Use Shadow DOM to encapsulate styling and logic.
- Emit custom events (e.g., podcast-clicked) on user interaction.

## 🖼️ UI/UX Requirements

The component displays:

- 🎧 Podcast cover image
- 📝 Podcast title
- 🏷️ Genres
- 🎞️ Number of seasons
- 📅 Last updated date (in a human-readable format)

Additional UI Requirements:

- Fully responsive design (mobile & desktop)
- Consistent visual style matching app theme
- On click, trigger event to notify parent to open a modal or navigate to a detail view

## 🧼 Code Quality & Maintainability

- Modular, readable code using ES6+ features
- Adheres to object-oriented and functional programming principles
- Well-documented with JSDoc comments
- Consistent formatting for HTML, CSS, and JS

## 🔒 Technical Constraints

- ❌ No third-party frameworks (React, Vue, etc.)
- ✅ Only native HTML, CSS, and JavaScript
- 🔄 No full page reloads or navigation
- 🧭 Fully compatible with modern browsers

📦 Deliverables

PodcastPreview.js – Web Component definition
