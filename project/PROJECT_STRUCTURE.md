# Project Structure Map

## Overview
This is a web application project focused on events, quizzes, and educational content with a catalog system and multi-user support.

---

## Directory Tree

```
project/
├── HTML Pages (Root Level)
│   ├── index.html              [Main homepage]
│   ├── about.html              [About page]
│   ├── contact.html            [Contact/inquiry form]
│   ├── events.html             [Events listing page]
│   ├── quiz.html               [Quiz interface]
│   ├── reference.html          [Reference/documentation page]
│   └── siteplan.html           [Site map/planning document]
│
├── catalog/                    [Catalog subsection]
│   ├── index.html             [Catalog main page]
│   ├── books.html             [Books catalog page]
│   └── formulas.html          [Formulas catalog page]
│
├── styles/                     [CSS Stylesheets]
│   ├── base.css               [Base/global styles]
│   ├── home.css               [Homepage styles (mobile)]
│   ├── home-large.css         [Homepage styles (desktop)]
│   └── siteplan.css           [Siteplan page styles]
│
├── scripts/                    [JavaScript Files]
│   ├── menu.js                [Navigation menu functionality]
│   ├── events.js              [Events page interactions]
│   ├── quiz.js                [Quiz engine/logic]
│   ├── getRandomQuiz.js       [Random quiz selection utility]
│   └── [Other modules]
│
├── images/                     [Media Assets]
│   ├── hero-image.webp        [Hero image (mobile)]
│   ├── hero-image-wide.webp   [Hero image (tablet)]
│   ├── hero-image-large.webp  [Hero image (desktop)]
│   ├── wireframe-home.webp    [Homepage wireframe]
│   ├── mobile-wireframe-home.webp [Mobile wireframe]
│   ├── logo.svg               [Main logo]
│   ├── logo-circle.svg        [Circle logo variant]
│   ├── logo-text.svg          [Text-based logo]
│   ├── books/                 [Book-related images]
│   ├── discussions/           [Discussion/community images]
│   ├── events/                [Event images]
│   ├── icons/                 [Icon assets]
│   └── users/                 [User profile images]
│
├── data/                       [Data Storage (currently empty)]
│
├── site-project-subject.txt   [Project documentation/metadata]
│
└── .DS_Store                  [macOS system file]

```

---

## Component Breakdown

### Core Pages
| File | Purpose | Type |
|------|---------|------|
| `index.html` | Entry point, homepage | Main landing page |
| `about.html` | Company/project information | Info page |
| `contact.html` | Contact form | Form/interaction |
| `events.html` | Upcoming events listing | Display/content |
| `quiz.html` | Quiz interface | Interactive |
| `reference.html` | Reference materials | Info page |
| `siteplan.html` | Site structure/map | Meta/documentation |

### Subsystem: Catalog (`/catalog`)
- Independent section with its own index
- Three specialized catalog pages: books, formulas
- Likely reuses base styles and scripts

### Styling Strategy
- **Responsive Design**: Mobile-first (`home.css`) with tablet/desktop breakpoints (`home-large.css`)
- **Base CSS**: Global styles shared across pages
- **Page-specific CSS**: Dedicated stylesheets for major pages

### Functionality Stack
- **Menu system**: Navigation management
- **Events system**: Event display/filtering
- **Quiz system**: Quiz logic, randomization, scoring
- **Possible data binding**: Scripts connect HTML to functionality

### Asset Management
- **Responsive images**: Multiple hero image sizes for different viewports
- **Logo variants**: Different logo formats for different use cases
- **Organized media folders**: Categorized assets (books, discussions, events, icons, users)
- **Data folder**: Reserved for future dynamic content/JSON files

---

## Key Characteristics

✅ **Responsive design** - Multiple CSS variants for different screen sizes  
✅ **Modular CSS** - Separate stylesheets for different pages  
✅ **Organized assets** - Images categorized by purpose  
✅ **Interactive features** - Quiz engine, event handling, menu system  
✅ **Subsection support** - Separate catalog section with its own structure  
✅ **Scalable architecture** - Data folder available for future dynamic content  

---

## Technology Stack Inferred

- **Frontend**: HTML5, CSS3 (with media queries)
- **Scripting**: Vanilla JavaScript
- **Responsive**: Mobile-first approach
- **Assets**: WebP images (modern format), SVG logos (scalable)
- **Build**: Single-page application style (multiple HTML files)

---

## File Type Summary

| Type | Count | Files |
|------|-------|-------|
| HTML | 7 | Main pages + catalog |
| CSS | 4 | Base + responsive variants |
| JS | 4+ | Menu, events, quiz, utilities |
| Images | 3+ main + subfolders | SVG logos, WebP images, categorized media |
| Config | 1 | site-project-subject.txt |

