/**
 * SkillForge AI - Comprehensive Roadmap Database & Generator Engine
 * Curated career pathways, skill graphs, top-tier resources, capstone projects, and dynamic generator.
 */

const ROLE_DATABASE = {
  'data-analyst': {
    id: 'data-analyst',
    title: 'Data Analyst',
    category: 'Data & Analytics',
    icon: '📊',
    tagline: 'Turn raw numbers into strategic business insights through SQL, Python, and interactive dashboards.',
    marketDemand: 'Very High (11% annual growth)',
    avgSalary: '$75,000 - $105,000 / yr',
    keyTools: ['Excel', 'SQL', 'PostgreSQL', 'Python', 'Pandas', 'Power BI', 'Tableau', 'Statistics'],
    baseHours: 180,
    prerequisites: ['Basic computer literacy', 'High school algebra'],
    phases: [
      {
        id: 'phase-1',
        title: 'Phase 1: Spreadsheets & Quantitative Foundations',
        subtitle: 'Master business spreadsheets, data hygiene, and quantitative fundamentals',
        weeks: 'Weeks 1 - 3',
        estHours: 35,
        difficulty: 'Beginner',
        skillsTargeted: ['Advanced Excel', 'Google Sheets', 'Descriptive Statistics', 'Data Cleaning'],
        description: 'Excel and Sheets remain the frontline of business analysis. Master formula logic, multi-table lookups, pivot summarization, and essential business statistics.',
        objectives: [
          'Master advanced lookups: XLOOKUP, INDEX/MATCH, and dynamic array formulas',
          'Clean dirty data: trim spaces, handle nulls, remove duplicates, text-to-columns',
          'Build dynamic pivot tables with calculated fields, slicers, and conditional formatting',
          'Apply descriptive statistics: mean, median, standard deviation, percentiles, correlation'
        ],
        resources: [
          {
            title: 'Excel for Data Analysis Bootcamp',
            provider: 'freeCodeCamp',
            type: 'Video Course',
            duration: '4 Hours',
            url: 'https://www.youtube.com/watch?v=OOWAk2aLEfk',
            badge: 'Free',
            highlight: 'Covers pivot tables, lookups, and executive dashboard formulas.'
          },
          {
            title: 'Spreadsheet Modeling & Business Statistics',
            provider: 'Khan Academy',
            type: 'Interactive',
            duration: '12 Hours',
            url: 'https://www.khanacademy.org/math/statistics-probability',
            badge: 'Free',
            highlight: 'Understand distributions, variance, and hypothesis intuition.'
          },
          {
            title: 'Microsoft Excel Data Analysis Tutorial',
            provider: 'Microsoft Learn',
            type: 'Documentation & Labs',
            duration: '6 Hours',
            url: 'https://learn.microsoft.com/en-us/training/paths/analyze-data-excel/',
            badge: 'Free',
            highlight: 'Official enterprise data analysis techniques & best practices.'
          }
        ],
        milestone: {
          title: 'Executive Sales & Cohort Dashboard',
          type: 'Capstone Project',
          deliverable: 'A clean, multi-tab Excel workbook with automated KPI cards, cohort churn, and dynamic slicers.',
          specs: [
            'Import a dataset of 5,000+ e-commerce transactions',
            'Perform data cleaning checklist with audit log',
            'Construct dynamic KPI summary: Revenue, AOV, MoM Growth',
            'Build interactive executive dashboard with slicers and zero hardcoded metrics'
          ]
        },
        quiz: {
          question: 'When should you choose XLOOKUP over traditional VLOOKUP in modern analytical workflows?',
          options: [
            'Only when querying databases with more than 1 million rows',
            'XLOOKUP searches in any direction, handles exact matches by default, and does not break when columns are inserted',
            'XLOOKUP is only supported in legacy desktop Excel 2010',
            'There is no performance or functional difference'
          ],
          correctIndex: 1,
          explanation: 'XLOOKUP does not require the return column to be to the right, defaults to exact match (safer), and prevents silent formula breakage when columns are moved or added.'
        }
      },
      {
        id: 'phase-2',
        title: 'Phase 2: Relational Databases & Advanced SQL',
        subtitle: 'Write complex SQL queries to extract, transform, and aggregate business data',
        weeks: 'Weeks 4 - 7',
        estHours: 45,
        difficulty: 'Intermediate',
        skillsTargeted: ['SQL', 'PostgreSQL', 'Window Functions', 'CTEs', 'Database Modeling'],
        description: 'SQL is the single most tested skill in data analyst interviews. Progress from basic SELECTs to advanced window aggregations, subqueries, and common table expressions.',
        objectives: [
          'Master complex multi-table joins: INNER, LEFT, FULL OUTER, CROSS, and self-joins',
          'Write window functions: ROW_NUMBER(), RANK(), DENSE_RANK(), LAG(), LEAD(), and running totals',
          'Structure readable, maintainable queries using CTEs (Common Table Expressions)',
          'Optimize queries with indexes and understand execution plans (EXPLAIN ANALYZE)'
        ],
        resources: [
          {
            title: 'SQL for Data Analytics Full Course',
            provider: 'freeCodeCamp & Alex The Analyst',
            type: 'Video Course',
            duration: '5 Hours',
            url: 'https://www.youtube.com/watch?v=7mz73uXD9DA',
            badge: 'Free',
            highlight: 'Covers Joins, Group By, CTEs, Temp Tables, and Real-world interview queries.'
          },
          {
            title: 'SQLZoo Interactive Exercises',
            provider: 'SQLZoo',
            type: 'Interactive Sandbox',
            duration: '15 Hours',
            url: 'https://sqlzoo.net/',
            badge: 'Free',
            highlight: 'Step-by-step browser execution on real databases with instant query checking.'
          },
          {
            title: 'PostgreSQL Official Documentation & Tutorial',
            provider: 'PostgreSQL.org',
            type: 'Documentation',
            duration: '8 Hours',
            url: 'https://www.postgresql.org/docs/current/tutorial.html',
            badge: 'Free',
            highlight: 'Deep dive into data types, indexing, and window function definitions.'
          },
          {
            title: 'LeetCode / HackerRank SQL Practice (50 Questions)',
            provider: 'LeetCode Database 50',
            type: 'Practice Arena',
            duration: '12 Hours',
            url: 'https://leetcode.com/studyplan/top-sql-50/',
            badge: 'Recommended',
            highlight: 'The exact question patterns asked by FAANG & fintech interviewers.'
          }
        ],
        milestone: {
          title: 'SaaS Retention & Financial Analytics SQL Warehouse',
          type: 'Capstone Project',
          deliverable: 'A documented SQL script analyzing subscription user cohorts, MRR churn, and user lifetime value.',
          specs: [
            'Write CTEs to compute monthly active users (MAU) and churn rates',
            'Utilize LAG() to calculate month-over-month revenue velocity per customer tier',
            'Handle edge cases: reactivations, partial refunds, and NULL expiration dates',
            'Document business takeaways in an accompanying analytical briefing memo'
          ]
        },
        quiz: {
          question: 'What is the main advantage of using Common Table Expressions (CTEs with WITH clause) over deeply nested subqueries?',
          options: [
            'CTEs always bypass database memory limits automatically',
            'CTEs make queries modular, highly readable, and allow references to preceding CTE blocks',
            'CTEs are only used to delete tables permanently',
            'CTEs run 1000x faster than indexed joins in all engines'
          ],
          correctIndex: 1,
          explanation: 'CTEs structure complex multistep data transformations sequentially like functions, dramatically improving readability and team maintainability.'
        }
      },
      {
        id: 'phase-3',
        title: 'Phase 3: Exploratory Python & Pandas Data Wrangling',
        subtitle: 'Automate data pipelines, reshape messy datasets, and perform exploratory data analysis',
        weeks: 'Weeks 8 - 11',
        estHours: 45,
        difficulty: 'Intermediate',
        skillsTargeted: ['Python', 'Pandas', 'NumPy', 'Jupyter Lab', 'Data Cleaning', 'Matplotlib / Seaborn'],
        description: 'When datasets outgrow Excel, Python provides unlimited scalability. Learn to ingest messy CSVs, clean anomalies, merge dataframes, and discover underlying patterns.',
        objectives: [
          'Proficiency with Jupyter Notebooks, Pandas Series, and DataFrames',
          'Data wrangling: grouping, aggregation, pivoting, melting, and handling missing data',
          'Vectorized arithmetic with NumPy for fast numeric computations',
          'Exploratory Data Analysis (EDA): distributions, correlation heatmaps, boxplot outliers'
        ],
        resources: [
          {
            title: 'Python for Data Analysis by Wes McKinney',
            provider: 'Open Access / O’Reilly',
            type: 'Book & Code Repo',
            duration: '20 Hours',
            url: 'https://wesmckinney.com/book/',
            badge: 'Free Book',
            highlight: 'Written by the creator of Pandas; the gold standard textbook.'
          },
          {
            title: 'Kaggle Python & Pandas Micro-Courses',
            provider: 'Kaggle Learn',
            type: 'Hands-on Coding Labs',
            duration: '10 Hours',
            url: 'https://www.kaggle.com/learn',
            badge: 'Free & Interactive',
            highlight: 'Zero-install interactive browser notebooks with automated grading.'
          },
          {
            title: 'Applied Data Analysis with Pandas & Seaborn',
            provider: 'freeCodeCamp',
            type: 'Video Masterclass',
            duration: '10 Hours',
            url: 'https://www.youtube.com/watch?v=r-uOLxNrNk8',
            badge: 'Free',
            highlight: 'End-to-end data pipelines from web scraping to statistical charts.'
          }
        ],
        milestone: {
          title: 'Comprehensive EDA & Market Insights Report',
          type: 'Capstone Project',
          deliverable: 'A clean Jupyter Notebook analyzing a messy real-world dataset (e.g., Airbnb listings or Consumer Lending) with statistical conclusions.',
          specs: [
            'Programmatic data cleaning: imputed values, regex parsing, outlier detection',
            'Perform multivariate correlation and hypothesis check',
            'Create 5+ publication-quality visualizations using Seaborn and Matplotlib',
            'Provide non-technical executive summary slide deck'
          ]
        },
        quiz: {
          question: 'In Pandas, what is the key difference between df.loc[] and df.iloc[]?',
          options: [
            'df.loc is for rows only; df.iloc is for columns only',
            'df.loc is label-based indexing, whereas df.iloc is integer position-based indexing',
            'df.loc deletes rows while df.iloc creates new columns',
            'df.iloc only works on datetime columns'
          ],
          correctIndex: 1,
          explanation: 'df.loc[] selects rows and columns by their labels/names, while df.iloc[] selects strictly by their 0-indexed integer numerical positions.'
        }
      },
      {
        id: 'phase-4',
        title: 'Phase 4: Business Intelligence & Interactive Storytelling',
        subtitle: 'Build enterprise BI dashboards in Power BI or Tableau with automated metrics',
        weeks: 'Weeks 12 - 14',
        estHours: 30,
        difficulty: 'Intermediate',
        skillsTargeted: ['Power BI', 'DAX', 'Tableau', 'Data Storytelling', 'Star Schema'],
        description: 'Dashboards bridge data engineering and decision makers. Learn dimensional modeling (star schema), DAX measures or Tableau LOD calculations, and UX for data.',
        objectives: [
          'Design star schema data models (fact tables vs dimension tables)',
          'Write DAX measures: CALCULATE, FILTER, time intelligence (YTD, YoY growth)',
          'Craft responsive, human-centered dashboards with drill-downs and tooltips',
          'Present insights persuasively to business stakeholders with the "What, So What, Now What" framework'
        ],
        resources: [
          {
            title: 'Power BI Full Course for Beginners',
            provider: 'freeCodeCamp',
            type: 'Video Course',
            duration: '4 Hours',
            url: 'https://www.youtube.com/watch?v=3u7EQZ-qU44',
            badge: 'Free',
            highlight: 'End-to-end Power Query ETL, Data Modeling, DAX, and Dashboard Publishing.'
          },
          {
            title: 'Tableau Desktop Specialist Preparation Guide',
            provider: 'Tableau Learn',
            type: 'Guided Learning',
            duration: '15 Hours',
            url: 'https://www.tableau.com/learn/training',
            badge: 'Free Starter',
            highlight: 'Calculated fields, parameters, Level of Detail (LOD) expressions.'
          },
          {
            title: 'Storytelling with Data by Cole Nussbaumer Knaflic',
            provider: 'Data Storytelling Foundation',
            type: 'Design Framework & Book',
            duration: '8 Hours',
            url: 'https://www.storytellingwithdata.com/',
            badge: 'Essential Read',
            highlight: 'How to eliminate chart clutter and focus executive attention.'
          }
        ],
        milestone: {
          title: 'C-Suite Operational Executive Dashboard',
          type: 'Capstone Project',
          deliverable: 'A published Power BI or Tableau public dashboard tracking customer lifetime value, fulfillment latency, and regional margins.',
          specs: [
            'Dimensional star-schema model with relationships and surrogate keys',
            'At least 6 custom DAX / Tableau measures including prior-year benchmarks',
            'Interactive cross-filtering with custom bookmarks and reset buttons',
            'Recorded 3-minute video walkthrough explaining findings to an executive'
          ]
        },
        quiz: {
          question: 'Why is a Star Schema preferred over one massive flat wide table in BI tools like Power BI?',
          options: [
            'Flat tables use less RAM and never contain duplicate strings',
            'Star schemas reduce redundancy, optimize columnar compression, and simplify DAX relationship calculations',
            'Power BI physically refuses to load any file without 10 dimension tables',
            'Star schemas are strictly required for printing PDFs'
          ],
          correctIndex: 1,
          explanation: 'Star schemas separate numeric measurements (Fact) from descriptive attributes (Dimensions), which maximizes columnar compression efficiency and keeps formulas intuitive.'
        }
      },
      {
        id: 'phase-5',
        title: 'Phase 5: Portfolio, Business Case Studies & Interview Prep',
        subtitle: 'Package your projects on GitHub, practice SQL tests, and build your hiring brand',
        weeks: 'Weeks 15 - 16',
        estHours: 25,
        difficulty: 'Advanced',
        skillsTargeted: ['GitHub Portfolio', 'Technical Interviewing', 'Case Study Frameworks', 'Resume Tailoring'],
        description: 'Convert your new skills into job offers. Package 3 flagship case studies, master take-home SQL/Python assessments, and nail behavioral storytelling.',
        objectives: [
          'Publish a polished GitHub repository with clean READMEs, problem statements, and key findings',
          'Practice 40+ medium/hard SQL interview questions under timed constraints',
          'Master behavioral metrics stories using the STAR framework (Situation, Task, Action, Result)',
          'Create a 1-page tailored resume highlighting quantified business impact'
        ],
        resources: [
          {
            title: 'Data Analyst Portfolio Blueprint & GitHub Template',
            provider: 'Alex The Analyst',
            type: 'Video & Template',
            duration: '2 Hours',
            url: 'https://www.youtube.com/watch?v=pjyL7v_x9c8',
            badge: 'Free Guide',
            highlight: 'How to showcase SQL scripts, Tableau dashboards, and Python notebooks.'
          },
          {
            title: 'Data Analyst Interview Questions & Mock Interview',
            provider: 'Interview Query',
            type: 'Question Bank',
            duration: '10 Hours',
            url: 'https://www.interviewquery.com/',
            badge: 'Free / Premium',
            highlight: 'Real questions from Amazon, Uber, Meta, and high-growth startups.'
          }
        ],
        milestone: {
          title: 'Career Launch Portfolio & Live Case Study',
          type: 'Final Milestone',
          deliverable: 'A live portfolio website or GitHub showcase featuring your 3 flagship projects, plus updated LinkedIn & resume.',
          specs: [
            '3 distinct projects: Advanced SQL script, Python EDA notebook, Interactive BI dashboard',
            'Clean README with architecture diagrams and quantified impact',
            'Resume passes ATS screening with quantified bullet points',
            'Ready to submit 5 tailored applications per week'
          ]
        },
        quiz: {
          question: 'On a resume for data roles, which bullet point format is proven most effective by hiring managers?',
          options: [
            '"Responsible for writing SQL queries and looking at spreadsheets."',
            '"Accomplished [X], as measured by [Y], by doing [Z] (e.g. Reduced customer churn by 14% by designing a SQL cohort early-warning model)."',
            '"Expert in Python, SQL, Excel, Tableau, AI, R, and Cloud."',
            '"Assisted the marketing team whenever they needed numbers."'
          ],
          correctIndex: 1,
          explanation: 'The Google XYZ formula ("Accomplished X by doing Z as measured by Y") quantifies business value and proves analytical credibility.'
        }
      }
    ]
  },

  'frontend-developer': {
    id: 'frontend-developer',
    title: 'Frontend Web Developer',
    category: 'Software Engineering',
    icon: '💻',
    tagline: 'Craft blazing-fast, visually stunning, accessible user interfaces using React, TypeScript, and modern CSS.',
    marketDemand: 'High (Consistent across startups & enterprises)',
    avgSalary: '$80,000 - $125,000 / yr',
    keyTools: ['HTML5', 'CSS3', 'JavaScript ES6+', 'TypeScript', 'React', 'Tailwind CSS', 'Vite', 'Git', 'Next.js'],
    baseHours: 200,
    prerequisites: ['Basic computer comfort', 'Logical thinking'],
    phases: [
      {
        id: 'phase-1',
        title: 'Phase 1: Semantic Web, Modern CSS & Responsive Layouts',
        subtitle: 'Master semantic HTML5, CSS layout mechanics (Flexbox, Grid), and responsive design',
        weeks: 'Weeks 1 - 3',
        estHours: 35,
        difficulty: 'Beginner',
        skillsTargeted: ['HTML5', 'Semantic HTML', 'CSS3', 'Flexbox', 'CSS Grid', 'Responsive Design', 'Git Basics'],
        description: 'Understand the document object model, accessibility standards, responsive typography, and flexible layout systems without relying on bloated libraries.',
        objectives: [
          'Write accessible semantic HTML (nav, main, section, article, dialog, aria attributes)',
          'Master modern CSS: Flexbox axis mechanics, CSS Grid template areas, auto-fit/auto-fill',
          'Implement mobile-first responsive design using modern media queries and container queries',
          'Learn basic Git: init, add, commit, push, branch, pull requests on GitHub'
        ],
        resources: [
          {
            title: 'MDN Web Docs: Learn Web Development',
            provider: 'Mozilla Developer Network',
            type: 'Documentation & Tutorials',
            duration: '25 Hours',
            url: 'https://developer.mozilla.org/en-US/docs/Learn',
            badge: 'Official / Essential',
            highlight: 'The undisputed gold standard documentation for web standards.'
          },
          {
            title: 'CSS Grid & Flexbox Deep Dive',
            provider: 'Kevin Powell (YouTube)',
            type: 'Video Tutorials',
            duration: '6 Hours',
            url: 'https://www.youtube.com/@KevinPowell',
            badge: 'Free Masterclass',
            highlight: 'Master CSS mechanics, subgrid, fluid typography, and modern responsive UI.'
          },
          {
            title: 'Frontend Mentor Real-World UI Challenges',
            provider: 'Frontend Mentor',
            type: 'Hands-on Projects',
            duration: '15 Hours',
            url: 'https://www.frontendmentor.io/',
            badge: 'Interactive',
            highlight: 'Figma-to-code practice challenges with community code reviews.'
          }
        ],
        milestone: {
          title: 'Pixel-Perfect SaaS Landing Page with Theme Toggle',
          type: 'Capstone Project',
          deliverable: 'A responsive, accessible landing page with custom CSS variables, dark/light theme, and mobile drawer navigation.',
          specs: [
            'Semantic markup with 100% Lighthouse accessibility score',
            'Mobile-first responsive layout matching breakpoints 375px, 768px, 1280px',
            'Smooth CSS animations, backdrop-blur navbar, and theme persistence in localStorage',
            'Hosted live on GitHub Pages, Vercel, or Netlify'
          ]
        },
        quiz: {
          question: 'What is the key difference between Flexbox and CSS Grid in layout design?',
          options: [
            'Flexbox is for 1-dimensional layouts (row OR column), while CSS Grid is for 2-dimensional layouts (rows AND columns simultaneously)',
            'Flexbox only works in Chrome, while CSS Grid works everywhere',
            'Grid is deprecated in favor of CSS tables',
            'Flexbox requires JavaScript to calculate widths'
          ],
          correctIndex: 0,
          explanation: 'Flexbox distributes space along a single axis (either row or column), whereas CSS Grid establishes a 2D matrix controlling both rows and columns simultaneously.'
        }
      },
      {
        id: 'phase-2',
        title: 'Phase 2: Modern JavaScript (ES6+) & DOM Engineering',
        subtitle: 'Master asynchronous JavaScript, DOM manipulation, functional patterns, and browser APIs',
        weeks: 'Weeks 4 - 7',
        estHours: 50,
        difficulty: 'Intermediate',
        skillsTargeted: ['JavaScript ES6+', 'Closures', 'Promises', 'Async/Await', 'Fetch API', 'Event Loop', 'Storage API'],
        description: 'JavaScript is the engine of the modern web. Master lexical scope, prototypes, promises, asynchronous data fetching, and event-driven architecture.',
        objectives: [
          'Deep understanding of JavaScript execution: Call stack, Event loop, Microtasks, Closures',
          'Array methods: map, filter, reduce, some, every, flatMap, and destructuring',
          'Asynchronous programming: Promises, Promise.allSettled, async/await, and error handling',
          'Browser APIs: fetch, localStorage, sessionStorage, IntersectionObserver, ResizeObserver'
        ],
        resources: [
          {
            title: 'The Modern JavaScript Tutorial (javascript.info)',
            provider: 'javascript.info',
            type: 'Interactive Textbook',
            duration: '35 Hours',
            url: 'https://javascript.info/',
            badge: 'Comprehensive',
            highlight: 'Covers core language, browser environment, prototypes, and network requests.'
          },
          {
            title: 'JavaScript30 - 30 Day Vanilla JS Challenge',
            provider: 'Wes Bos',
            type: 'Hands-on Course',
            duration: '15 Hours',
            url: 'https://javascript30.com/',
            badge: 'Free',
            highlight: 'Build 30 projects without frameworks, libraries, or compilers.'
          },
          {
            title: 'Namaste JavaScript (Deep Core Internals)',
            provider: 'Akshay Saini (YouTube)',
            type: 'Video Masterclass',
            duration: '8 Hours',
            url: 'https://www.youtube.com/playlist?list=PLlasXeu85E9cQ32gLCvAvr9vNaUccPVNP',
            badge: 'Highest Rated',
            highlight: 'Crystal clear explanations of Hoisting, Scope Chain, Closures, and Event Loop.'
          }
        ],
        milestone: {
          title: 'Interactive Multi-Currency Budget & Expense Engine',
          type: 'Capstone Project',
          deliverable: 'A vanilla JS single-page web app connecting to a live Exchange Rate API, with local storage, search, filter, and charting.',
          specs: [
            'Zero external framework dependencies (Pure Vanilla JS)',
            'Robust async data fetching with loading spinners and retry error boundaries',
            'Real-time filter, sorting, and balance calculation using array reduce',
            'Custom modal dialogues and accessible keyboard navigation'
          ]
        },
        quiz: {
          question: 'What gets printed first in the console: console.log(1); setTimeout(() => console.log(2), 0); Promise.resolve().then(() => console.log(3)); console.log(4);',
          options: [
            '1, 2, 3, 4',
            '1, 4, 3, 2',
            '1, 4, 2, 3',
            '3, 1, 4, 2'
          ],
          correctIndex: 1,
          explanation: 'Synchronous code runs first (1, 4). Then microtasks in the job queue run next (Promise resolve = 3). Finally macrotasks in the task queue execute (setTimeout callback = 2).'
        }
      },
      {
        id: 'phase-3',
        title: 'Phase 3: React 19 & Component Architecture',
        subtitle: 'Build reactive, modular web apps using modern React hooks and Tailwind CSS',
        weeks: 'Weeks 8 - 11',
        estHours: 50,
        difficulty: 'Intermediate',
        skillsTargeted: ['React', 'JSX', 'Hooks (useState, useEffect, useMemo, useCallback)', 'Tailwind CSS', 'Vite', 'Component Design'],
        description: 'React powers over 60% of modern web vacancies. Master reactive state management, lifecycle side effects, custom hooks, and composable UI design with Tailwind.',
        objectives: [
          'Understand unidirectional data flow, Virtual DOM reconciliation, and pure components',
          'Master core hooks: useState, useEffect, useRef, useMemo, useCallback, useId',
          'Create reusable custom hooks (e.g. useDebounce, useLocalStorage, useWindowSize)',
          'Style rapidly and consistently with Tailwind CSS utility classes and design tokens'
        ],
        resources: [
          {
            title: 'Official React Documentation (react.dev)',
            provider: 'React Core Team',
            type: 'Interactive Docs & Sandbox',
            duration: '20 Hours',
            url: 'https://react.dev/learn',
            badge: 'Official / Essential',
            highlight: 'Completely revamped with interactive sandboxes, diagrams, and best practices.'
          },
          {
            title: 'Full Modern React Course with Vite & Tailwind',
            provider: 'freeCodeCamp',
            type: 'Video Course',
            duration: '12 Hours',
            url: 'https://www.youtube.com/watch?v=bMknfKXIFA8',
            badge: 'Free',
            highlight: 'Hands-on project building from scratch with modern tooling.'
          },
          {
            title: 'Tailwind CSS Documentation & Screencasts',
            provider: 'Tailwind Labs',
            type: 'Documentation',
            duration: '6 Hours',
            url: 'https://tailwindcss.com/docs',
            badge: 'Official',
            highlight: 'Responsive design, typography plugins, dark mode, and arbitrary values.'
          }
        ],
        milestone: {
          title: 'Collaborative Kanban Project Management App',
          type: 'Capstone Project',
          deliverable: 'A feature-complete Trello-style board with columns, task cards, tag filters, search, and drag-and-drop interactions.',
          specs: [
            'State management handling column reordering and card status transitions',
            'Custom hooks for localStorage synchronization and keyboard shortcuts',
            'Tailwind CSS styling with responsive drawer on mobile devices',
            'Toast notification system for user actions (create, edit, delete)'
          ]
        },
        quiz: {
          question: 'Why should you NOT call React Hooks conditionally inside an if statement?',
          options: [
            'Because React hooks only work on Tuesday',
            'React relies on the order in which Hooks are called across renders to preserve internal state arrays',
            'Conditionals cause browser memory leaks in CSS',
            'React hooks can only be called in HTML script tags'
          ],
          correctIndex: 1,
          explanation: 'React maintains an internal linked list / index of hooks for each component. Calling hooks conditionally disrupts the order of indices between renders, causing state corruption.'
        }
      },
      {
        id: 'phase-4',
        title: 'Phase 4: TypeScript, State Management & Modern Next.js',
        subtitle: 'Add static typing, server-side rendering, and scalable global state',
        weeks: 'Weeks 12 - 14',
        estHours: 40,
        difficulty: 'Advanced',
        skillsTargeted: ['TypeScript', 'Generics', 'Next.js App Router', 'Zustand', 'TanStack Query', 'Server Components'],
        description: 'Modern enterprise codebases require TypeScript for type safety and Next.js for SEO and high performance. Learn global state with Zustand and server caching with TanStack Query.',
        objectives: [
          'Master TypeScript: interfaces, types, union types, generics, and utility types',
          'Understand Next.js App Router: Server Components, Client Components, Server Actions, Route Handlers',
          'Manage server state with TanStack Query (caching, revalidation, optimistic updates)',
          'Manage client state with lightweight Zustand stores'
        ],
        resources: [
          {
            title: 'Total TypeScript Essentials & Tutorials',
            provider: 'Matt Pocock / Total TypeScript',
            type: 'Interactive Tutorials',
            duration: '10 Hours',
            url: 'https://www.totaltypescript.com/tutorials',
            badge: 'Best TS Resource',
            highlight: 'Master generic functions, type narrowing, and React props typing.'
          },
          {
            title: 'Next.js Official Interactive Learn Course',
            provider: 'Vercel',
            type: 'Interactive Web Course',
            duration: '12 Hours',
            url: 'https://nextjs.org/learn',
            badge: 'Official',
            highlight: 'Build an enterprise financial dashboard with auth, database, and streaming.'
          },
          {
            title: 'TanStack Query (React Query) Documentation',
            provider: 'TanStack',
            type: 'Documentation & Guides',
            duration: '6 Hours',
            url: 'https://tanstack.com/query/latest',
            badge: 'Enterprise Standard',
            highlight: 'Eliminates 90% of messy useEffect data fetching boilerplate.'
          }
        ],
        milestone: {
          title: 'Full-Fledged E-Commerce / Content Platform in Next.js',
          type: 'Capstone Project',
          deliverable: 'A typed Next.js app with dynamic product catalogs, server-side pagination, cart store, and checkout simulator.',
          specs: [
            '100% strict TypeScript with zero any types',
            'Next.js App Router with metadata SEO optimization and OpenGraph tags',
            'Zustand cart store with local storage sync',
            'TanStack Query for client-side search, filtering, and optimistic review submission'
          ]
        },
        quiz: {
          question: 'In the Next.js App Router, what is the default rendering mode for components in the app directory?',
          options: [
            'Client Components ("use client" is default)',
            'React Server Components (RSC) rendered on the server with zero client JavaScript bundle impact',
            'Static HTML generated in 1999',
            'Flash ActionScript'
          ],
          correctIndex: 1,
          explanation: 'By default, all components in Next.js App Router are React Server Components (RSC), running only on the server, which keeps client-side JavaScript bundle sizes minimal.'
        }
      },
      {
        id: 'phase-5',
        title: 'Phase 5: Automated Testing, Performance & Job Hunting',
        subtitle: 'Write unit tests with Vitest, optimize Core Web Vitals, and ace technical interviews',
        weeks: 'Weeks 15 - 16',
        estHours: 25,
        difficulty: 'Advanced',
        skillsTargeted: ['Vitest', 'React Testing Library', 'Lighthouse Optimization', 'Core Web Vitals', 'System Design Basics', 'Portfolio'],
        description: 'Prove you write production-grade code. Implement automated tests, audit Core Web Vitals (LCP, INP, CLS), and prepare for live coding challenges.',
        objectives: [
          'Write unit and component integration tests using Vitest and React Testing Library',
          'Optimize web performance: code splitting, dynamic imports, image optimization, memoization',
          'Audit and achieve 95+ score on Google Lighthouse metrics',
          'Deploy flagship portfolio and practice behavioral and frontend system design questions'
        ],
        resources: [
          {
            title: 'Testing JavaScript with Vitest & Testing Library',
            provider: 'Testing Library Docs',
            type: 'Documentation & Recipes',
            duration: '8 Hours',
            url: 'https://testing-library.com/docs/react-testing-library/intro/',
            badge: 'Standard',
            highlight: 'Test behavior rather than implementation details.'
          },
          {
            title: 'Web Vitals & Performance Optimization Guide',
            provider: 'Google Web.dev',
            type: 'Engineering Guides',
            duration: '6 Hours',
            url: 'https://web.dev/explore/fast',
            badge: 'Google Official',
            highlight: 'Understand LCP, INP, and CLS and how to optimize bundle sizes.'
          },
          {
            title: 'GreatFrontEnd Technical Interview Preparation',
            provider: 'GreatFrontEnd',
            type: 'Interview Simulator',
            duration: '15 Hours',
            url: 'https://www.greatfrontend.com/',
            badge: 'Top Pick',
            highlight: 'Practice real UI coding questions asked by Meta, Google, and Stripe.'
          }
        ],
        milestone: {
          title: 'Production Ready Portfolio & Interview Showcase',
          type: 'Final Milestone',
          deliverable: 'A published personal developer portfolio with 3 tested projects, custom domain, and automated GitHub Actions CI pipeline.',
          specs: [
            'Test coverage with Vitest on key utility functions and components',
            'Lighthouse score >= 95 across Performance, Accessibility, Best Practices, and SEO',
            'Interactive project demos and clickable code repository links',
            'Ready to submit tailored applications with custom cover letters'
          ]
        },
        quiz: {
          question: 'What is the purpose of testing user interactions via "getByRole" in React Testing Library rather than selecting by CSS class name?',
          options: [
            'getByRole is faster because it bypasses HTML rendering',
            'getByRole mirrors how real users and assistive screen readers navigate the interface, ensuring accessibility',
            'CSS classes are automatically deleted during tests',
            'getByRole is required by Google search crawler'
          ],
          correctIndex: 1,
          explanation: 'React Testing Library encourages testing from the user’s perspective. Querying by role and accessible name validates that your components are semantic and accessible to all users.'
        }
      }
    ]
  },

  'fullstack-developer': {
    id: 'fullstack-developer',
    title: 'Full-Stack Web Developer',
    category: 'Software Engineering',
    icon: '🚀',
    tagline: 'Engineer complete web applications from interactive user interfaces to scalable backends and databases.',
    marketDemand: 'Extremely High (Most sought-after generalist engineering role)',
    avgSalary: '$90,000 - $140,000 / yr',
    keyTools: ['React / Next.js', 'Node.js', 'Express', 'PostgreSQL', 'Prisma ORM', 'REST & GraphQL', 'Docker', 'JWT / Auth'],
    baseHours: 230,
    prerequisites: ['Basic HTML/CSS/JS knowledge', 'General problem solving'],
    phases: [
      {
        id: 'phase-1',
        title: 'Phase 1: Modern Frontend Core & React Architecture',
        subtitle: 'Build interactive user interfaces with React, TypeScript, and modern styling',
        weeks: 'Weeks 1 - 4',
        estHours: 45,
        difficulty: 'Beginner to Intermediate',
        skillsTargeted: ['HTML5/CSS3', 'Modern JavaScript ES6+', 'TypeScript', 'React Components & Hooks'],
        description: 'Understand client-side architectures, component composition, asynchronous data loading, and form validations with TypeScript.',
        objectives: [
          'Solidify DOM events, async/await, and array functional methods',
          'Build reusable React components with TypeScript interfaces',
          'Handle form validation, error states, and responsive navigation',
          'Deploy frontend applications to Vercel/Netlify with automated CI'
        ],
        resources: [
          {
            title: 'Full Stack Open (University of Helsinki)',
            provider: 'University of Helsinki',
            type: 'Interactive University Course',
            duration: '40 Hours',
            url: 'https://fullstackopen.com/en/',
            badge: 'World Famous',
            highlight: 'Free university course teaching modern React, Node, Express, and databases.'
          },
          {
            title: 'TypeScript in 50 Lessons',
            provider: 'Smashing Magazine & Docs',
            type: 'Documentation',
            duration: '10 Hours',
            url: 'https://www.typescriptlang.org/docs/handbook/intro.html',
            badge: 'Official',
            highlight: 'Master static types, unions, and React component props.'
          }
        ],
        milestone: {
          title: 'Interactive Frontend Client with Mock API',
          type: 'Capstone Project',
          deliverable: 'A responsive React & TypeScript frontend that renders and manipulates data with optimistic UI states.',
          specs: [
            'Component breakdown into atoms, molecules, and layout templates',
            'Full TypeScript typing without any unsafe casts',
            'Search, filter, pagination, and persistent local caching'
          ]
        },
        quiz: {
          question: 'What is the primary benefit of TypeScript over plain JavaScript in large fullstack codebases?',
          options: [
            'TypeScript executes faster inside the browser engine',
            'TypeScript catches type mismatches, missing properties, and contract bugs at compile time before running code',
            'TypeScript eliminates the need for any unit tests',
            'TypeScript automatically designs databases'
          ],
          correctIndex: 1,
          explanation: 'TypeScript provides static analysis, preventing common runtime bugs such as "cannot read property of undefined" across frontend and backend boundaries.'
        }
      },
      {
        id: 'phase-2',
        title: 'Phase 2: Backend Architecture, RESTful APIs & Node.js',
        subtitle: 'Design scalable server applications, routing, middleware, and authentication',
        weeks: 'Weeks 5 - 8',
        estHours: 50,
        difficulty: 'Intermediate',
        skillsTargeted: ['Node.js', 'Express.js', 'REST API Design', 'Middleware', 'JWT Authentication', 'Password Hashing (bcrypt)'],
        description: 'Move to the server. Understand HTTP methods, status codes, controller-service architecture, request validation, and stateless JWT authentication.',
        objectives: [
          'Build robust REST APIs using Express.js with proper HTTP status codes (200, 201, 400, 401, 403, 404, 500)',
          'Create custom middleware for logging, rate limiting, and CORS handling',
          'Implement secure user authentication: passwords hashed with bcrypt, JWT tokens, and HTTP-only cookies',
          'Validate incoming request payloads using Zod or Joi schemas'
        ],
        resources: [
          {
            title: 'Node.js and Express.js Full Course',
            provider: 'freeCodeCamp (John Smilga)',
            type: 'Video Masterclass',
            duration: '8 Hours',
            url: 'https://www.youtube.com/watch?v=Oe421EPjeBE',
            badge: 'Free',
            highlight: 'Covers routing, middleware, async controllers, and error handling patterns.'
          },
          {
            title: 'RESTful API Design Best Practices',
            provider: 'REST API Tutorial',
            type: 'Architecture Guide',
            duration: '4 Hours',
            url: 'https://restfulapi.net/',
            badge: 'Standards Guide',
            highlight: 'Resource naming conventions, idempotency, versioning, and status codes.'
          }
        ],
        milestone: {
          title: 'Secure Authentication & Multi-Tenant REST API',
          type: 'Capstone Project',
          deliverable: 'A documented Express/Node API with user registration, login, role-based authorization (Admin/Member), and protected endpoints.',
          specs: [
            'Input sanitation and validation with Zod',
            'Secure password hashing with salt rounds',
            'JWT verification middleware with token expiration',
            'Swagger / Postman API collection documentation'
          ]
        },
        quiz: {
          question: 'Why should sensitive JWT tokens preferably be stored in HTTP-Only Cookies rather than browser localStorage?',
          options: [
            'HTTP-Only cookies are stored on the server hard drive only',
            'HTTP-Only cookies cannot be accessed or stolen via Client-side Cross-Site Scripting (XSS) attacks',
            'localStorage can only hold 5 bytes of data',
            'Cookies make HTTP requests 100x smaller'
          ],
          correctIndex: 1,
          explanation: 'JavaScript executing in the browser cannot read HTTP-Only cookies, rendering stolen auth tokens much harder for attackers exploiting XSS vulnerabilities.'
        }
      },
      {
        id: 'phase-3',
        title: 'Phase 3: Relational Databases, PostgreSQL & Prisma ORM',
        subtitle: 'Model relational schemas, write migrations, and optimize queries',
        weeks: 'Weeks 9 - 11',
        estHours: 45,
        difficulty: 'Intermediate',
        skillsTargeted: ['PostgreSQL', 'Prisma ORM', 'Database Relationships (1:1, 1:N, N:M)', 'Indexing', 'Transactions'],
        description: 'Persistent data requires bulletproof database design. Learn SQL fundamentals, foreign key cascades, database migrations, and type-safe ORM queries with Prisma.',
        objectives: [
          'Design normalized relational schemas with foreign keys and unique constraints',
          'Use Prisma ORM for type-safe database queries, filtering, and eager loading (include)',
          'Manage schema migrations and seeding reproducible test data',
          'Execute multi-step database transactions to prevent partial state corruption ($transaction)'
        ],
        resources: [
          {
            title: 'Prisma ORM Quickstart & Guides',
            provider: 'Prisma Documentation',
            type: 'Documentation & Labs',
            duration: '8 Hours',
            url: 'https://www.prisma.io/docs',
            badge: 'Essential',
            highlight: 'Interactive quickstart with PostgreSQL, schema modeling, and migrations.'
          },
          {
            title: 'PostgreSQL Tutorial for Developers',
            provider: 'Postgres Tutorial',
            type: 'Interactive Tutorial',
            duration: '10 Hours',
            url: 'https://www.postgresqltutorial.com/',
            badge: 'Free Reference',
            highlight: 'Covers Joins, Indexes, Foreign Keys, Triggers, and ACID transactions.'
          }
        ],
        milestone: {
          title: 'Relational Database Engine for E-Commerce / Billing',
          type: 'Capstone Project',
          deliverable: 'A complete PostgreSQL schema with Prisma managing Users, Products, Orders, OrderItems, and Payment records.',
          specs: [
            'Correct 1-to-many and many-to-many relational modeling',
            'ACID transactions ensuring inventory decrements match successful order placements',
            'Database indexing on high-frequency query fields (userId, createdAt, slug)',
            'Automated seed script populating 50+ relational records'
          ]
        },
        quiz: {
          question: 'What happens in a database transaction when one of four operations fails halfway through?',
          options: [
            'The database keeps whatever succeeded and ignores the error',
            'The entire transaction rolls back to its initial state, preventing partial data corruption (Atomicity)',
            'The database server shuts down automatically',
            'All data in the table is permanently erased'
          ],
          correctIndex: 1,
          explanation: 'The "A" in ACID stands for Atomicity: either all operations in the transaction succeed together, or the entire block is rolled back completely.'
        }
      },
      {
        id: 'phase-4',
        title: 'Phase 4: Full-Stack Integration, Next.js & Docker Basics',
        subtitle: 'Connect client and server, containerize services, and deploy to cloud environments',
        weeks: 'Weeks 12 - 14',
        estHours: 50,
        difficulty: 'Advanced',
        skillsTargeted: ['Full-Stack Integration', 'Next.js Fullstack', 'Docker', 'Docker Compose', 'Cloud Deployment'],
        description: 'Tie the pieces together. Build unified full-stack applications with Next.js or decouple React with an Express backend, and package everything inside Docker containers.',
        objectives: [
          'Connect React frontend with authenticated backend APIs using secure cookies and CORS',
          'Containerize web applications with Dockerfiles and multi-stage builds',
          'Orchestrate multi-container setups (Frontend, Backend, PostgreSQL) using Docker Compose',
          'Deploy full-stack applications to platforms like Render, Railway, or AWS EC2'
        ],
        resources: [
          {
            title: 'Docker for Web Developers Full Course',
            provider: 'freeCodeCamp (TechWorld with Nana)',
            type: 'Video Course',
            duration: '4 Hours',
            url: 'https://www.youtube.com/watch?v=3c-iBn73dDE',
            badge: 'Top DevOps Intro',
            highlight: 'Docker containers, images, volumes, networks, and docker-compose.'
          },
          {
            title: 'Full Stack Deployment on Railway & Render',
            provider: 'Railway / Render Guides',
            type: 'Tutorials',
            duration: '4 Hours',
            url: 'https://docs.railway.app/',
            badge: 'Free Guides',
            highlight: 'Deploying databases, environment variables, and automatic GitHub deployments.'
          }
        ],
        milestone: {
          title: 'Full-Stack SaaS Platform with Containerized Services',
          type: 'Capstone Project',
          deliverable: 'A live, deployed full-stack application (e.g., Team Collaboration App or Task Manager) with auth, database, and docker-compose configuration.',
          specs: [
            'Docker Compose file running web service, backend API, and Postgres instance with volume persistence',
            'End-to-end CRUD operations with user ownership verification',
            'Responsive UI with feedback toasts and optimistic updates',
            'Automated deployment connected to GitHub repository'
          ]
        },
        quiz: {
          question: 'What is the primary role of Docker Compose in modern web development?',
          options: [
            'To write CSS animations faster',
            'To define and run multi-container Docker applications using a single YAML configuration file',
            'To replace the JavaScript language with Go',
            'To compress images for websites'
          ],
          correctIndex: 1,
          explanation: 'Docker Compose allows you to spin up an entire ecosystem (app server, database, Redis cache, frontend) in isolated interconnected containers with a single "docker compose up" command.'
        }
      },
      {
        id: 'phase-5',
        title: 'Phase 5: Automated Testing, System Design & Career Launch',
        subtitle: 'Add automated tests, understand system architecture, and prepare for interviews',
        weeks: 'Weeks 15 - 16',
        estHours: 40,
        difficulty: 'Advanced',
        skillsTargeted: ['Jest / Supertest', 'System Design Basics', 'Caching (Redis)', 'Technical Interviews', 'Portfolio'],
        description: 'Transition from junior builder to confident full-stack engineer. Write integration tests, understand caching & database indexing, and conquer technical interviews.',
        objectives: [
          'Write automated backend integration tests with Supertest and Jest',
          'Understand system design fundamentals: load balancers, horizontal scaling, caching with Redis',
          'Package code on GitHub with professional documentation, architecture diagrams, and test badges',
          'Practice full-stack whiteboard questions and behavioral STAR responses'
        ],
        resources: [
          {
            title: 'System Design Primer for Developers',
            provider: 'Donne Martin (GitHub)',
            type: 'Open Source Curriculum',
            duration: '20 Hours',
            url: 'https://github.com/donnemartin/system-design-primer',
            badge: 'Legendary Repo',
            highlight: 'Covers caching, load balancing, relational vs NoSQL, and scalability tradeoffs.'
          },
          {
            title: 'Full Stack Interview Questions & Coding Challenges',
            provider: 'BFE.dev & LeetCode',
            type: 'Interactive Practice',
            duration: '15 Hours',
            url: 'https://bfe.dev/',
            badge: 'Practice Arena',
            highlight: 'Frontend and fullstack coding challenges asked by top tech firms.'
          }
        ],
        milestone: {
          title: 'Flagship Full-Stack Engineering Portfolio & System Blueprint',
          type: 'Final Milestone',
          deliverable: 'A deployed flagship app with unit & integration test suite, clear system architecture diagram, and polished resume.',
          specs: [
            'Supertest integration tests covering authentication and key business routes',
            'System architecture diagram showing client, API, database, and caching tiers',
            'README with setup instructions, environment variable schema, and API specs',
            'Resume ready for Full-Stack, Frontend, or Backend junior/mid-level roles'
          ]
        },
        quiz: {
          question: 'In system design, why do high-traffic systems put a Redis cache in front of a relational database?',
          options: [
            'Redis replaces the need for any persistent database permanently',
            'Redis serves read requests directly from RAM with sub-millisecond latency, shielding the database from heavy read bottlenecks',
            'Redis is free while databases charge per SELECT statement',
            'Redis automatically fixes corrupt hard drives'
          ],
          correctIndex: 1,
          explanation: 'Redis stores data in in-memory key-value structures. Serving cached reads prevents database CPU exhaustion and reduces response times from 50ms to under 2ms.'
        }
      }
    ]
  },

  'ml-ai-engineer': {
    id: 'ml-ai-engineer',
    title: 'Machine Learning & AI Engineer',
    category: 'Artificial Intelligence',
    icon: '🤖',
    tagline: 'Build, train, and deploy predictive models, deep neural networks, and modern GenAI / LLM pipelines.',
    marketDemand: 'Explosive Growth (Highest industry investment)',
    avgSalary: '$105,000 - $160,000 / yr',
    keyTools: ['Python', 'NumPy', 'Pandas', 'Scikit-Learn', 'PyTorch', 'Hugging Face', 'LangChain', 'FastAPI', 'Docker'],
    baseHours: 240,
    prerequisites: ['Strong math or coding comfort', 'Python basics'],
    phases: [
      {
        id: 'phase-1',
        title: 'Phase 1: Math Foundations, Python & Scientific Computing',
        subtitle: 'Master linear algebra, calculus intuition, NumPy, and scientific data manipulation',
        weeks: 'Weeks 1 - 4',
        estHours: 45,
        difficulty: 'Intermediate',
        skillsTargeted: ['Python for AI', 'NumPy Vectorization', 'Linear Algebra', 'Multivariate Calculus', 'Probability & Statistics'],
        description: 'Machine learning is applied linear algebra and optimization. Understand matrix multiplication, dot products, gradients, and vectorized operations.',
        objectives: [
          'Master matrix operations, eigenvectors, dot products, and dimensionality in NumPy',
          'Understand gradient descent, partial derivatives, and loss optimization mathematically',
          'Probability basics: Bayes theorem, normal distributions, expectation, variance',
          'Manipulate datasets and build feature engineering routines with Pandas'
        ],
        resources: [
          {
            title: 'Essence of Linear Algebra',
            provider: '3Blue1Brown (YouTube)',
            type: 'Visual Masterclass',
            duration: '5 Hours',
            url: 'https://www.youtube.com/playlist?list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab',
            badge: 'Visual Masterpiece',
            highlight: 'Intuitive geometric understanding of vectors, matrices, and transformations.'
          },
          {
            title: 'Mathematics for Machine Learning Free Textbook',
            provider: 'Cambridge University Press (Free PDF)',
            type: 'Textbook',
            duration: '20 Hours',
            url: 'https://mml-book.github.io/',
            badge: 'Academic Standard',
            highlight: 'Rigorous foundations of linear algebra, analytic geometry, and optimization.'
          }
        ],
        milestone: {
          title: 'From-Scratch Linear Regression & Gradient Descent Engine',
          type: 'Capstone Project',
          deliverable: 'A Python class implementing multivariate gradient descent using pure NumPy (no Scikit-learn), with cost-function convergence plots.',
          specs: [
            'Vectorized matrix operations calculating MSE loss and parameter weight updates',
            'Feature normalization / standard scaling pipeline',
            'Learning rate decay and early stopping condition',
            'Comparison of predictions against Scikit-learn baseline'
          ]
        },
        quiz: {
          question: 'Why do machine learning algorithms perform vectorized matrix operations with NumPy rather than iterating with native Python "for" loops?',
          options: [
            'Python for loops take up too much monitor space',
            'NumPy executes underlying operations in compiled C/Fortran and utilizes SIMD CPU vector hardware, running 50x-100x faster',
            'Python loops cannot do multiplication',
            'NumPy automatically uploads data to the cloud'
          ],
          correctIndex: 1,
          explanation: 'NumPy leverages contiguous memory blocks and pre-compiled C/Fortran routines with SIMD (Single Instruction Multiple Data), executing array calculations orders of magnitude faster.'
        }
      },
      {
        id: 'phase-2',
        title: 'Phase 2: Classical Machine Learning & Scikit-Learn',
        subtitle: 'Master supervised, unsupervised algorithms, model validation, and feature pipelines',
        weeks: 'Weeks 5 - 8',
        estHours: 50,
        difficulty: 'Intermediate',
        skillsTargeted: ['Scikit-Learn', 'Supervised Learning', 'Random Forests / XGBoost', 'Model Evaluation (ROC, AUC, F1)', 'Cross-Validation'],
        description: 'Learn tabular data modeling. Train regression and classification algorithms, tune hyperparameters with cross-validation, and avoid data leakage.',
        objectives: [
          'Supervised models: Logistic Regression, Support Vector Machines, Decision Trees, Random Forests, XGBoost',
          'Model evaluation: Precision, Recall, F1 score, ROC-AUC, Confusion Matrix',
          'Cross-validation strategies (K-Fold, Stratified K-Fold) and Grid/Random Search tuning',
          'Unsupervised learning: K-Means clustering, PCA (Principal Component Analysis)'
        ],
        resources: [
          {
            title: 'Hands-On Machine Learning with Scikit-Learn, Keras, and TensorFlow',
            provider: 'Aurélien Géron (O’Reilly)',
            type: 'Book & GitHub Repo',
            duration: '30 Hours',
            url: 'https://github.com/ageron/handson-ml3',
            badge: 'Industry Bible',
            highlight: 'End-to-end practical machine learning workflows with real datasets.'
          },
          {
            title: 'Kaggle Machine Learning Courses (Intro + Intermediate)',
            provider: 'Kaggle Learn',
            type: 'Interactive Coding Labs',
            duration: '12 Hours',
            url: 'https://www.kaggle.com/learn',
            badge: 'Interactive',
            highlight: 'Feature engineering, categorical encoders, XGBoost, and competition pipelines.'
          }
        ],
        milestone: {
          title: 'Predictive Churn / Credit Default Pipeline with XGBoost',
          type: 'Capstone Project',
          deliverable: 'An end-to-end Scikit-Learn & XGBoost pipeline handling imbalanced classes, feature selection, and SHAP interpretability analysis.',
          specs: [
            'Scikit-learn ColumnTransformer pipeline for categorical encoding and numerical scaling',
            'SMOTE or class-weight adjustment for imbalanced target distribution',
            'ROC-AUC optimization with Stratified K-Fold cross validation',
            'SHAP value feature importance plots explaining model decisions'
          ]
        },
        quiz: {
          question: 'What is "Data Leakage" in a machine learning pipeline, and how do you prevent it?',
          options: [
            'When data files get deleted by accident',
            'When information from outside the training dataset (e.g. test set statistics during imputation) leaks into model training, producing overly optimistic validation scores',
            'When data is stored on a flash drive that gets lost',
            'When features have too many decimal places'
          ],
          correctIndex: 1,
          explanation: 'Data leakage happens when test set information inadvertently influences feature engineering or model training. Wrapping transformers inside a Scikit-Learn Pipeline guarantees transformations are fitted only on the training folds.'
        }
      },
      {
        id: 'phase-3',
        title: 'Phase 3: Deep Learning Foundations & PyTorch',
        subtitle: 'Build deep neural networks, CNNs, and recurrent architectures from the ground up',
        weeks: 'Weeks 9 - 12',
        estHours: 55,
        difficulty: 'Advanced',
        skillsTargeted: ['PyTorch', 'Tensors', 'Autograd', 'Neural Networks', 'Computer Vision (CNN)', 'Transfer Learning'],
        description: 'Deep learning powers image recognition, voice, and AI breakthroughs. Master PyTorch tensors, autograd backpropagation, training loops, and transfer learning with pretrained models.',
        objectives: [
          'PyTorch mechanics: Tensors, GPU acceleration (CUDA), autograd, and Dataset/DataLoader classes',
          'Build multi-layer perceptrons (MLP) with activation functions (ReLU, GELU, Softmax)',
          'Convolutional Neural Networks (CNNs) for image classification and feature maps',
          'Fine-tune pretrained vision models (ResNet, EfficientNet) using Transfer Learning'
        ],
        resources: [
          {
            title: 'Deep Learning with PyTorch: Zero to Mastery',
            provider: 'Daniel Bourke / learnpytorch.io',
            type: 'Free Book & Codebase',
            duration: '25 Hours',
            url: 'https://www.learnpytorch.io/',
            badge: 'Best PyTorch Guide',
            highlight: 'Hands-on, visual, and code-heavy guide to modern PyTorch.'
          },
          {
            title: 'Fast.ai Practical Deep Learning for Coders',
            provider: 'fast.ai (Jeremy Howard)',
            type: 'Video Course & Labs',
            duration: '20 Hours',
            url: 'https://course.fast.ai/',
            badge: 'Top Practitioner Course',
            highlight: 'Top-down pragmatic deep learning from state-of-the-art models to underlying math.'
          }
        ],
        milestone: {
          title: 'Custom Vision Classifier with PyTorch & Transfer Learning',
          type: 'Capstone Project',
          deliverable: 'A custom PyTorch model classifying medical scans or domain-specific objects with custom data augmentation and evaluation metrics.',
          specs: [
            'Custom PyTorch Dataset class with Albumentations data augmentation',
            'Transfer learning using pretrained ResNet50 or MobileNet backbone',
            'Custom training loop with validation checks, learning rate schedulers, and early stopping',
            'Confusion matrix and classification report across all target classes'
          ]
        },
        quiz: {
          question: 'What is the purpose of "optimizer.zero_grad()" before running loss.backward() in a PyTorch training step?',
          options: [
            'To set all model weights to zero',
            'To clear accumulated gradients from previous iterations, because PyTorch accumulates gradients by default',
            'To turn off GPU power consumption',
            'To restart the training from epoch 0'
          ],
          correctIndex: 1,
          explanation: 'In PyTorch, gradients accumulate on the .grad tensor on every backward() call. If you do not explicitly reset them with zero_grad(), new gradients will sum with old ones, destabilizing optimization.'
        }
      },
      {
        id: 'phase-4',
        title: 'Phase 4: Modern LLMs, RAG & Generative AI Engineering',
        subtitle: 'Build production Retrieval-Augmented Generation (RAG) and agentic workflows',
        weeks: 'Weeks 13 - 15',
        estHours: 45,
        difficulty: 'Advanced',
        skillsTargeted: ['Transformers', 'Hugging Face', 'Vector Databases (Chroma/Pinecone)', 'RAG Pipelines', 'LangChain / LlamaIndex', 'Prompt Engineering'],
        description: 'Generative AI is transforming software. Learn the Transformer architecture (Self-Attention), tokenizers, vector embeddings, semantic search, and enterprise RAG systems.',
        objectives: [
          'Understand Transformer attention mechanics (Self-attention, Query-Key-Value matrices)',
          'Utilize Hugging Face transformers pipeline for embeddings and open-source models',
          'Build enterprise RAG pipelines: document chunking, vector indexing, retrieval, and reranking',
          'Implement structured LLM outputs, function calling, and multi-turn conversational agents'
        ],
        resources: [
          {
            title: 'Hugging Face NLP Course',
            provider: 'Hugging Face',
            type: 'Interactive Course & Labs',
            duration: '20 Hours',
            url: 'https://huggingface.co/learn/nlp-course',
            badge: 'Official / Essential',
            highlight: 'Tokenizers, Datasets, fine-tuning, and Hugging Face Hub workflows.'
          },
          {
            title: 'DeepLearning.AI Short Courses on LLMs & RAG',
            provider: 'Andrew Ng / DeepLearning.AI',
            type: 'Video Labs',
            duration: '8 Hours',
            url: 'https://www.deeplearning.ai/short-courses/',
            badge: 'Top Industry Short Courses',
            highlight: 'Building systems with ChatGPT API, LangChain, vector databases, and evaluation.'
          }
        ],
        milestone: {
          title: 'Enterprise Document Knowledge Assistant (Production RAG)',
          type: 'Capstone Project',
          deliverable: 'A RAG system answering technical queries from multi-page PDFs with source citations, semantic search, and hallucination guardrails.',
          specs: [
            'Document chunking with recursive character splitting and metadata tagging',
            'Vector embedding store with ChromaDB or Pinecone',
            'Hybrid retrieval (dense vector search + BM25 keyword matching) and cross-encoder reranking',
            'Evaluation benchmark measuring answer relevance and citation accuracy'
          ]
        },
        quiz: {
          question: 'In a Retrieval-Augmented Generation (RAG) pipeline, why is text chunking strategy critical for retrieval quality?',
          options: [
            'Vector databases can only accept 10 words per file',
            'Chunks that are too large dilute semantic embedding focus, while chunks that are too small lose critical context needed by the LLM',
            'Chunking makes the file size larger on disk',
            'Chunking removes all punctuation'
          ],
          correctIndex: 1,
          explanation: 'Chunk size directly affects semantic resolution. Optimal chunking balances retaining sufficient conversational context while keeping embedding vectors sharp and relevant.'
        }
      },
      {
        id: 'phase-5',
        title: 'Phase 5: Model Deployment, MLOps & Career Portfolio',
        subtitle: 'Serve models via FastAPI, containerize with Docker, and present portfolio case studies',
        weeks: 'Weeks 16 - 17',
        estHours: 35,
        difficulty: 'Advanced',
        skillsTargeted: ['FastAPI', 'Model Serving', 'Docker for ML', 'Model Monitoring', 'Technical Interview Prep'],
        description: 'An AI model is only valuable if users can access it. Package your model into a high-performance REST API with FastAPI, containerize with Docker, and prepare for ML systems interviews.',
        objectives: [
          'Expose models through asynchronous REST endpoints with FastAPI and Pydantic validation',
          'Package models and dependencies into lean Docker images',
          'Understand model monitoring: data drift, concept drift, and inference latency benchmarks',
          'Prepare for ML system design interviews (recommendation systems, search ranking)'
        ],
        resources: [
          {
            title: 'Made With ML (MLOps Course)',
            provider: 'Goku Mohandas',
            type: 'Engineering Course',
            duration: '15 Hours',
            url: 'https://madewithml.com/',
            badge: 'Best MLOps Guide',
            highlight: 'End-to-end ML lifecycle: training, testing, tracking, serving, and CI/CD.'
          },
          {
            title: 'Machine Learning System Design Interview Guide',
            provider: 'ByteByteGo / Chip Huyen',
            type: 'System Design Curriculum',
            duration: '10 Hours',
            url: 'https://huyenchip.com/machine-learning-systems-design/',
            badge: 'Book & Guide',
            highlight: 'Architecting large scale ML systems, feature stores, and real-time inference.'
          }
        ],
        milestone: {
          title: 'Deployed ML Microservice with Live API & Documentation',
          type: 'Final Milestone',
          deliverable: 'A containerized FastAPI service hosting an ML/LLM model with automated Swagger documentation and GitHub portfolio.',
          specs: [
            'FastAPI asynchronous endpoints with input Pydantic validation schema',
            'Docker container with model weights cached and optimized runtime',
            'Public GitHub repository with system architecture diagram and performance benchmarks',
            'Resume polished for Junior/Associate Machine Learning Engineer roles'
          ]
        },
        quiz: {
          question: 'What is "Data Drift" in an active production machine learning service?',
          options: [
            'When the hard drive slowly fills up with log files',
            'When the statistical distribution of incoming production input features changes compared to the training data distribution',
            'When the API server disconnects from the internet',
            'When Python updates to a newer version'
          ],
          correctIndex: 1,
          explanation: 'Data drift occurs when real-world production inputs change over time (e.g., consumer behavior shifts), leading to degraded model accuracy even though the code remains unchanged.'
        }
      }
    ]
  },

  'cloud-devops': {
    id: 'cloud-devops',
    title: 'Cloud & DevOps Engineer',
    category: 'Infrastructure & Cloud',
    icon: '☁️',
    tagline: 'Automate infrastructure, manage Kubernetes clusters, build CI/CD pipelines, and ensure 99.99% uptime.',
    marketDemand: 'Very High (Critical for all enterprise migrations)',
    avgSalary: '$95,000 - $145,000 / yr',
    keyTools: ['Linux', 'Bash', 'Git', 'Docker', 'Kubernetes', 'AWS', 'Terraform', 'GitHub Actions', 'Prometheus'],
    baseHours: 210,
    prerequisites: ['Basic operating system comfort', 'Networking basics'],
    phases: [
      {
        id: 'phase-1',
        title: 'Phase 1: Linux Administration, Networking & Shell Scripting',
        subtitle: 'Master terminal mastery, file permissions, TCP/IP networking, and Bash automation',
        weeks: 'Weeks 1 - 3',
        estHours: 35,
        difficulty: 'Beginner',
        skillsTargeted: ['Linux Shell', 'Bash Scripting', 'SSH', 'Networking (DNS, TCP/UDP, HTTP)', 'Git'],
        description: 'Linux is the backbone of cloud servers. Master the terminal, systemd process management, permissions, and automated shell scripting.',
        objectives: [
          'Navigate Linux filesystems, manage user permissions (chmod, chown), and inspect processes (top, ps, htop)',
          'Write modular Bash automation scripts with conditionals, loops, and argument parsing',
          'Deep networking fundamentals: DNS resolution, TCP three-way handshake, subnets, and firewalls',
          'Configure SSH keys, security hardening, and remote server access'
        ],
        resources: [
          {
            title: 'Linux Journey (Interactive Linux Learning)',
            provider: 'Linux Journey',
            type: 'Interactive Guide',
            duration: '15 Hours',
            url: 'https://linuxjourney.com/',
            badge: 'Free & Essential',
            highlight: 'Step-by-step interactive lessons covering terminal, permissions, processes, and kernel.'
          },
          {
            title: 'Computer Networking Full Course',
            provider: 'freeCodeCamp',
            type: 'Video Masterclass',
            duration: '9 Hours',
            url: 'https://www.youtube.com/watch?v=IPvYjXCsTg8',
            badge: 'Free',
            highlight: 'Comprehensive guide to OSI layers, IP routing, TCP/UDP, and DNS.'
          }
        ],
        milestone: {
          title: 'Automated Linux Server Provisioning & Backup Suite',
          type: 'Capstone Project',
          deliverable: 'A Bash script suite that hardens an Ubuntu server, configures firewall rules (UFW), and automates encrypted database backups to remote storage.',
          specs: [
            'Non-root user creation and SSH public-key authentication setup',
            'Automated cron job generating timestamped gzipped backups with rotation',
            'UFW firewall configuration restricting access to ports 22, 80, 443',
            'Clean logging output with error alerting'
          ]
        },
        quiz: {
          question: 'What do the permissions "chmod 755 script.sh" grant on a Linux system?',
          options: [
            'Owner: read/write/execute; Group & Others: read/execute',
            'Everyone has full read/write/execute access',
            'Only the root user can access the file',
            'The file is permanently locked and read-only'
          ],
          correctIndex: 0,
          explanation: 'In octal notation: 7 = 4(read)+2(write)+1(execute) for the owner, while 5 = 4(read)+1(execute) for group and others.'
        }
      },
      {
        id: 'phase-2',
        title: 'Phase 2: Docker Containers & Core Cloud Architecture (AWS)',
        subtitle: 'Package services in containers and deploy resilient cloud primitives',
        weeks: 'Weeks 4 - 7',
        estHours: 45,
        difficulty: 'Intermediate',
        skillsTargeted: ['Docker', 'Multi-Stage Dockerfiles', 'AWS Core (EC2, S3, VPC, IAM)', 'Container Networking'],
        description: 'Standardize application environments with Docker and learn enterprise cloud architecture on Amazon Web Services (AWS).',
        objectives: [
          'Build lean Docker images using multi-stage builds and non-root security principles',
          'Manage container persistent volumes and bridge networking',
          'Architect AWS primitives: Virtual Private Cloud (VPC), Subnets, Route Tables, Internet Gateways',
          'Implement AWS IAM security: least-privilege roles, policies, and MFA enforcement'
        ],
        resources: [
          {
            title: 'AWS Certified Cloud Practitioner & Solutions Architect Prep',
            provider: 'freeCodeCamp (Andrew Brown)',
            type: 'Video Course',
            duration: '14 Hours',
            url: 'https://www.youtube.com/watch?v=Ia-UEYYR44s',
            badge: 'Free Certification Prep',
            highlight: 'Hands-on AWS console and architectural best practices.'
          },
          {
            title: 'Docker Official Getting Started Guide',
            provider: 'Docker Docs',
            type: 'Interactive Tutorial',
            duration: '6 Hours',
            url: 'https://docs.docker.com/get-started/',
            badge: 'Official',
            highlight: 'Best practices for Dockerfiles, caching layers, and security.'
          }
        ],
        milestone: {
          title: 'Secure Multi-Tier Web App on AWS VPC with Docker',
          type: 'Capstone Project',
          deliverable: 'A containerized application deployed in a custom AWS VPC with public and private subnets, NAT gateway, and security groups.',
          specs: [
            'Optimized multi-stage Dockerfile keeping image size under 100MB',
            'Custom VPC with isolated private database subnet and public reverse proxy',
            'IAM roles and Security Groups allowing only necessary ingress/egress traffic'
          ]
        },
        quiz: {
          question: 'Why are Docker "Multi-Stage Builds" considered best practice for production application images?',
          options: [
            'They allow you to run multiple containers inside a single image',
            'They separate the build environment (compilers, heavy tools) from the final lean runtime container, slashing image size and reducing attack surface',
            'They eliminate the need for an operating system kernel',
            'They make Docker images free to host'
          ],
          correctIndex: 1,
          explanation: 'Multi-stage builds leave behind compilers, SDKs, and build cache in intermediate stages, copying only the final binary or distribution to a tiny base image (e.g. Alpine/Distroless).'
        }
      },
      {
        id: 'phase-3',
        title: 'Phase 3: CI/CD Pipelines & Infrastructure as Code (Terraform)',
        subtitle: 'Automate build-test-deploy cycles with GitHub Actions and declare infra via Terraform',
        weeks: 'Weeks 8 - 11',
        estHours: 45,
        difficulty: 'Intermediate to Advanced',
        skillsTargeted: ['GitHub Actions', 'CI/CD Pipelines', 'Terraform (HCL)', 'State Management', 'Automated Testing Gates'],
        description: 'Eliminate manual console clicks. Write declarative infrastructure with Terraform and build robust automated CI/CD deployment pipelines.',
        objectives: [
          'Write declarative Terraform HCL files to provision AWS/Cloud resources',
          'Manage Terraform remote state with S3 and DynamoDB state locking',
          'Create multi-stage GitHub Actions workflows: linting, unit tests, Docker build, and cloud deployment',
          'Implement automated secret management and branch protection rules'
        ],
        resources: [
          {
            title: 'HashiCorp Learn: Terraform Tutorials',
            provider: 'HashiCorp',
            type: 'Interactive Labs',
            duration: '12 Hours',
            url: 'https://developer.hashicorp.com/terraform/tutorials',
            badge: 'Official',
            highlight: 'HCL syntax, modules, state locking, and best practices.'
          },
          {
            title: 'GitHub Actions Continuous Integration & Delivery Guide',
            provider: 'GitHub Docs',
            type: 'Documentation & Labs',
            duration: '6 Hours',
            url: 'https://docs.github.com/en/actions',
            badge: 'Official',
            highlight: 'Workflow syntax, matrix builds, artifact publishing, and secrets.'
          }
        ],
        milestone: {
          title: 'Zero-Touch CI/CD Pipeline with Terraform Infrastructure',
          type: 'Capstone Project',
          deliverable: 'A Git push triggers automated testing, builds a Docker image, pushes to Amazon ECR, and updates cloud infrastructure via Terraform.',
          specs: [
            'Terraform modules provisioning cloud computing and storage resources',
            'Remote state backend configured with S3 and DynamoDB lock',
            'GitHub Actions pipeline with pull-request checks and deployment approvals',
            'Zero plaintext credentials stored in code repositories'
          ]
        },
        quiz: {
          question: 'What is the purpose of the Terraform state file (terraform.tfstate)?',
          options: [
            'It stores passwords in plaintext for backup',
            'It maps real-world cloud resources to your configuration files and keeps track of metadata and resource dependencies',
            'It runs the cloud servers when Amazon is down',
            'It is a temporary file that should always be deleted'
          ],
          correctIndex: 1,
          explanation: 'Terraform uses the state file as its source of truth to determine which cloud resources correspond to configuration declarations and what changes must be made during "terraform apply".'
        }
      },
      {
        id: 'phase-4',
        title: 'Phase 4: Kubernetes Cluster Orchestration',
        subtitle: 'Deploy, scale, and manage resilient microservices using Kubernetes (K8s)',
        weeks: 'Weeks 12 - 14',
        estHours: 50,
        difficulty: 'Advanced',
        skillsTargeted: ['Kubernetes', 'Pods & Deployments', 'Services & Ingress', 'ConfigMaps & Secrets', 'Helm Charts'],
        description: 'Kubernetes is the industry standard for container orchestration. Master cluster architecture, declarative manifests, rolling updates, and package management with Helm.',
        objectives: [
          'Understand K8s control plane: API Server, etcd, Scheduler, Kubelet, and Controller Manager',
          'Write manifests for Pods, Deployments, ReplicaSets, and DaemonSets',
          'Expose applications with Services (ClusterIP, NodePort, LoadBalancer) and Ingress Controllers',
          'Package and template complex microservices applications using Helm charts'
        ],
        resources: [
          {
            title: 'Kubernetes for Beginners (Nana Janashia)',
            provider: 'TechWorld with Nana',
            type: 'Video Masterclass',
            duration: '4 Hours',
            url: 'https://www.youtube.com/watch?v=X48VuDVv0do',
            badge: 'Top K8s Intro',
            highlight: 'Pods, Services, Ingress, Volumes, ConfigMaps, and Helm.'
          },
          {
            title: 'Kubernetes Official Interactive Tutorials (Minikube)',
            provider: 'Kubernetes.io',
            type: 'Interactive Sandbox',
            duration: '10 Hours',
            url: 'https://kubernetes.io/docs/tutorials/',
            badge: 'Official',
            highlight: 'Hands-on cluster commands with kubectl and declarative YAMLs.'
          }
        ],
        milestone: {
          title: 'Resilient Microservices Deployment on Kubernetes with Helm',
          type: 'Capstone Project',
          deliverable: 'A multi-service application deployed on a local or cloud K8s cluster with zero-downtime rolling updates and Horizontal Pod Autoscaling (HPA).',
          specs: [
            'Helm chart with configurable values for dev and prod environments',
            'Liveness and readiness probes ensuring traffic only routes to healthy containers',
            'ConfigMap and Secret separation for environment variables',
            'Horizontal Pod Autoscaler (HPA) triggering replicas on CPU threshold'
          ]
        },
        quiz: {
          question: 'What is the critical difference between a Kubernetes "Liveness Probe" and a "Readiness Probe"?',
          options: [
            'Liveness checks if the cluster is awake; Readiness checks if the internet is on',
            'Liveness probe restarts an unresponsive container; Readiness probe determines whether the container is ready to receive network traffic from Services',
            'There is no difference; they are aliases',
            'Readiness probes only run on weekends'
          ],
          correctIndex: 1,
          explanation: 'If a Liveness probe fails, Kubernetes kills and restarts the container. If a Readiness probe fails, the container stays alive but is removed from Service load balancing until it is ready.'
        }
      },
      {
        id: 'phase-5',
        title: 'Phase 5: Observability, SRE & Cloud Certification Mastery',
        subtitle: 'Implement Prometheus & Grafana monitoring, log aggregation, and ace DevOps interviews',
        weeks: 'Weeks 15 - 16',
        estHours: 35,
        difficulty: 'Advanced',
        skillsTargeted: ['Prometheus', 'Grafana', 'Log Aggregation', 'Site Reliability Engineering (SRE)', 'DevOps Interviews'],
        description: 'Complete the DevOps lifecycle with telemetry, alerts, and incident response. Learn the Four Golden Signals of monitoring and build your hiring profile.',
        objectives: [
          'Set up metrics collection with Prometheus and build operational dashboards in Grafana',
          'Understand SRE principles: SLA, SLO, SLI, and Error Budgets',
          'Configure alert managers with Slack/PagerDuty routing',
          'Prepare for DevOps interview rounds: live scenario troubleshooting and system architecture'
        ],
        resources: [
          {
            title: 'Google SRE Book (Site Reliability Engineering)',
            provider: 'Google (Free Online)',
            type: 'Industry Textbook',
            duration: '15 Hours',
            url: 'https://sre.google/sre-book/table-of-contents/',
            badge: 'Industry Bible',
            highlight: 'How Google runs production systems, error budgets, and post-mortems.'
          },
          {
            title: 'Prometheus & Grafana Monitoring Tutorial',
            provider: 'Grafana Labs',
            type: 'Hands-on Labs',
            duration: '6 Hours',
            url: 'https://grafana.com/tutorials/',
            badge: 'Hands-on',
            highlight: 'Building dashboards, querying PromQL, and configuring alert rules.'
          }
        ],
        milestone: {
          title: 'Production Observability Stack & Incident Post-Mortem',
          type: 'Final Milestone',
          deliverable: 'A live Grafana monitoring dashboard tracking cluster latency, error rates, and traffic, plus a mock incident post-mortem report.',
          specs: [
            'PromQL queries measuring latency, error rates, and resource utilization',
            'Configured alerting threshold rules for 5xx errors and high CPU spikes',
            'Blameless incident post-mortem document analyzing a simulated production failure',
            'GitHub repository with complete infrastructure code and resume'
          ]
        },
        quiz: {
          question: 'According to Site Reliability Engineering (SRE) principles, what is an "Error Budget"?',
          options: [
            'The monetary fine paid to customers when a service goes down',
            'The allowable amount of downtime or errors a service can accumulate (e.g. 0.01% for 99.99% SLO) before new feature deployments are halted in favor of reliability',
            'A budget reserved for hiring junior engineers',
            'The number of typos allowed in code reviews'
          ],
          correctIndex: 1,
          explanation: 'An Error Budget bridges product velocity and reliability. If failures stay within the budget, teams deploy fast; if the budget is exhausted, releases pause to fix stability.'
        }
      }
    ]
  },

  'cybersecurity-analyst': {
    id: 'cybersecurity-analyst',
    title: 'Cybersecurity Analyst (SOC / Blue Team)',
    category: 'Information Security',
    icon: '🛡️',
    tagline: 'Defend networks, analyze security logs, detect intrusions, and respond to cyber threats in real time.',
    marketDemand: 'Critical Shortage (High global job security)',
    avgSalary: '$85,000 - $130,000 / yr',
    keyTools: ['Wireshark', 'Nmap', 'Linux / Bash', 'SIEM (Splunk / Elastic)', 'Snort / Suricata', 'OWASP Top 10', 'Threat Hunting'],
    baseHours: 190,
    prerequisites: ['Basic networking curiosity', 'Analytical mindset'],
    phases: [
      {
        id: 'phase-1',
        title: 'Phase 1: Networking Protocols & Security Fundamentals',
        subtitle: 'Master the OSI model, packet analysis with Wireshark, and defensive foundations',
        weeks: 'Weeks 1 - 3',
        estHours: 35,
        difficulty: 'Beginner',
        skillsTargeted: ['OSI Model', 'TCP/IP', 'Wireshark', 'Packet Analysis', 'Security Triad (CIA)'],
        description: 'You cannot defend what you do not understand. Learn how packets traverse networks, inspect headers, and analyze traffic captures with Wireshark.',
        objectives: [
          'Deconstruct OSI layers and TCP/IP stack protocols (DNS, ARP, DHCP, HTTP/S, SSH, ICMP)',
          'Capture and filter network traffic in Wireshark using display filters',
          'Understand core security principles: Confidentiality, Integrity, Availability, Defense in Depth',
          'Identify common network anomalies: port scans, ARP spoofing, and rogue handshakes'
        ],
        resources: [
          {
            title: 'CompTIA Security+ Exam Prep Full Course',
            provider: 'Professor Messer (YouTube)',
            type: 'Video Masterclass',
            duration: '20 Hours',
            url: 'https://www.professormesser.com/',
            badge: 'Gold Standard Prep',
            highlight: 'Free video training covering all domains of Security+ certification.'
          },
          {
            title: 'Wireshark Packet Analysis Tutorial',
            provider: 'Wireshark Foundation',
            type: 'Documentation & Labs',
            duration: '8 Hours',
            url: 'https://www.wireshark.org/docs/',
            badge: 'Official',
            highlight: 'Master filters, packet reassembly, and TLS handshake inspection.'
          }
        ],
        milestone: {
          title: 'Network Packet Forensics & Anomaly Report',
          type: 'Capstone Project',
          deliverable: 'An analytical investigation of a captured PCAP file identifying malicious reconnaissance and unauthorized data exfiltration.',
          specs: [
            'Identify source IP, target IP, and timestamps of malicious scanner',
            'Reconstruct unencrypted payload or credentials from traffic stream',
            'Map the attack progression across the MITRE ATT&CK framework',
            'Draft formal executive incident notification memo'
          ]
        },
        quiz: {
          question: 'What is the primary indicator of an attacker performing a SYN stealth scan (half-open scan) in Wireshark?',
          options: [
            'The scanner completes the full TCP three-way handshake and downloads files',
            'The scanner sends SYN packets and immediately responds with RST (reset) upon receiving SYN-ACK, never completing the connection',
            'The scanner turns off the Wi-Fi router',
            'The scanner changes the victim machine wallpaper'
          ],
          correctIndex: 1,
          explanation: 'In a SYN stealth scan (like Nmap -sS), the attacker sends SYN and responds with RST immediately after receiving SYN-ACK. This probes open ports without establishing a full connection or generating typical application logs.'
        }
      },
      {
        id: 'phase-2',
        title: 'Phase 2: Linux Security, Hardening & Threat Landscapes',
        subtitle: 'Secure Linux operating systems, analyze auth logs, and understand malware tactics',
        weeks: 'Weeks 4 - 7',
        estHours: 40,
        difficulty: 'Intermediate',
        skillsTargeted: ['Linux Hardening', 'Log Analysis (/var/log)', 'Nmap Recon', 'Malware Types', 'Vulnerability Assessment'],
        description: 'Attackers target server configurations. Learn to audit Linux permissions, inspect auth.log, scan networks with Nmap, and configure host firewalls.',
        objectives: [
          'Audit and harden Linux environments: SSH key-only access, sudoers restrictions, fail2ban',
          'Parse log files using grep, awk, sed to detect brute force authentication attacks',
          'Perform authorized network scans with Nmap (service discovery, OS detection, script engine NSE)',
          'Understand malware categories: Trojans, Ransomware, Worms, Rootkits, and Command-and-Control (C2)'
        ],
        resources: [
          {
            title: 'TryHackMe: Pre-Security & Complete Beginner Paths',
            provider: 'TryHackMe',
            type: 'Interactive Gamified Labs',
            duration: '25 Hours',
            url: 'https://tryhackme.com/',
            badge: 'Hands-on Browser Labs',
            highlight: 'Gamified attack and defense rooms with real virtual machines.'
          },
          {
            title: 'Nmap Network Scanning (Official Book by Gordon Lyon)',
            provider: 'Nmap.org',
            type: 'Reference Guide',
            duration: '8 Hours',
            url: 'https://nmap.org/book/',
            badge: 'Official',
            highlight: 'Port scan techniques, NSE scripts, and evasion detection.'
          }
        ],
        milestone: {
          title: 'Linux Vulnerability Assessment & Hardening Audit',
          type: 'Capstone Project',
          deliverable: 'A documented security audit of an intentionally vulnerable Linux VM (e.g., Metasploitable), with remediation scripts.',
          specs: [
            'Nmap scan documenting all open ports and exposed software versions',
            'Log audit identifying simulated brute-force intrusions in /var/log/auth.log',
            'Automated remediation script applying CIS benchmarks and firewall rules',
            'Validation re-scan verifying closed attack vectors'
          ]
        },
        quiz: {
          question: 'What tool and log file are commonly inspected on Ubuntu systems to detect unauthorized SSH brute-force attempts?',
          options: [
            'grep /var/log/auth.log searching for "Failed password"',
            'Excel spreadsheet in My Documents',
            'Chrome browser history',
            'The recycle bin'
          ],
          correctIndex: 0,
          explanation: 'On Debian/Ubuntu systems, SSH authentication attempts are recorded in /var/log/auth.log (or /var/log/secure on RHEL). Searching for "Failed password" reveals attacker IP addresses and frequency.'
        }
      },
      {
        id: 'phase-3',
        title: 'Phase 3: Security Operations (SOC), SIEM & Log Analysis',
        subtitle: 'Detect attacks in real time using enterprise SIEM platforms like Splunk or Elastic',
        weeks: 'Weeks 8 - 11',
        estHours: 45,
        difficulty: 'Intermediate',
        skillsTargeted: ['SIEM (Splunk / Elastic)', 'Search Processing Language (SPL)', 'Alert Correlation', 'Incident Triaging'],
        description: 'Security Operations Centers (SOCs) rely on SIEMs to ingest gigabytes of event logs. Master querying logs, identifying attack indicators (IoCs), and building alert dashboards.',
        objectives: [
          'Ingest multi-source logs (Windows Event Logs, Linux Syslog, Firewall logs, Web servers)',
          'Write queries in Splunk SPL / Elastic KQL to isolate suspicious behavior',
          'Correlate indicators of compromise (IoCs): unusual hashes, malicious IPs, beaconing activity',
          'Execute SOC triage workflows: False Positive elimination vs True Positive escalation'
        ],
        resources: [
          {
            title: 'Splunk Fundamentals & Free Training',
            provider: 'Splunk Education',
            type: 'Interactive Courses',
            duration: '15 Hours',
            url: 'https://www.splunk.com/en_us/training.html',
            badge: 'Industry Standard',
            highlight: 'Free basic certification courses covering SPL search syntax and reporting.'
          },
          {
            title: 'TryHackMe: SOC Level 1 Learning Path',
            provider: 'TryHackMe',
            type: 'Interactive Lab Path',
            duration: '30 Hours',
            url: 'https://tryhackme.com/path/outline/soclevel1',
            badge: 'Best SOC Training',
            highlight: 'Hands-on rooms covering Splunk, Wireshark, Phishing analysis, and Snort.'
          }
        ],
        milestone: {
          title: 'SOC Detection Rule & Threat Monitoring Dashboard',
          type: 'Capstone Project',
          deliverable: 'A configured Splunk / Elastic dashboard monitoring failed logins, privilege escalations, and outbound beaconing with automated alert rules.',
          specs: [
            'SPL query isolating accounts with >10 failed logins followed by a successful login',
            'Detection rule matching MITRE ATT&CK technique T1078 (Valid Accounts)',
            'Executive visual dashboard summarizing daily threat levels and blocked attacks',
            'Step-by-step Standard Operating Procedure (SOP) for triage analysts'
          ]
        },
        quiz: {
          question: 'What is an "Indicator of Compromise" (IoC) in cybersecurity investigations?',
          options: [
            'A computer virus that cannot be deleted',
            'Forensic artifact or evidence (e.g. malicious file hash, command & control IP, registry key modification) indicating an unauthorized intrusion',
            'A discount coupon for antivirus software',
            'A slow internet connection'
          ],
          correctIndex: 1,
          explanation: 'An IoC is a piece of digital forensic data that identifies that an endpoint or network has been breached (e.g. known malicious SHA-256 hash or C2 communication IP).'
        }
      },
      {
        id: 'phase-4',
        title: 'Phase 4: Web Application Security & OWASP Top 10',
        subtitle: 'Defend web APIs against SQL Injection, XSS, and authorization vulnerabilities',
        weeks: 'Weeks 12 - 14',
        estHours: 40,
        difficulty: 'Advanced',
        skillsTargeted: ['OWASP Top 10', 'SQL Injection (SQLi)', 'Cross-Site Scripting (XSS)', 'Broken Access Control', 'Burp Suite Basics'],
        description: 'Web applications are exposed to the public internet. Understand how web vulnerabilities manifest, how attackers exploit them, and how engineers patch them.',
        objectives: [
          'Deconstruct OWASP Top 10: Broken Object Level Authorization, Injection, Security Misconfiguration',
          'Understand SQL Injection mechanisms and defensive parameterized queries',
          'Analyze Cross-Site Scripting (Reflected, Stored, DOM-based) and Content Security Policy (CSP)',
          'Inspect and modify web requests using Burp Suite Community Edition proxy'
        ],
        resources: [
          {
            title: 'PortSwigger Web Security Academy',
            provider: 'PortSwigger (Creators of Burp Suite)',
            type: 'Interactive Lab Academy',
            duration: '35 Hours',
            url: 'https://portswigger.net/web-security',
            badge: 'World’s Best Web Security',
            highlight: 'Completely free interactive labs covering SQLi, XSS, CSRF, and authentication flaws.'
          },
          {
            title: 'OWASP Top 10 Official Documentation & Defense Cheat Sheets',
            provider: 'OWASP Foundation',
            type: 'Documentation',
            duration: '8 Hours',
            url: 'https://owasp.org/www-project-top-ten/',
            badge: 'Official Standard',
            highlight: 'Detailed vulnerability definitions, attack examples, and prevention strategies.'
          }
        ],
        milestone: {
          title: 'Web Application Penetration Test & Remediation Report',
          type: 'Capstone Project',
          deliverable: 'A formal security assessment report of a vulnerable web application (e.g., OWASP Juice Shop), detailing findings and patched code snippets.',
          specs: [
            'Document 3 distinct OWASP vulnerabilities with proof-of-concept steps',
            'Calculate CVSS (Common Vulnerability Scoring System) risk severity for each finding',
            'Provide code-level remediation recommendations for engineering teams',
            'Executive summary detailing business risks of potential data breaches'
          ]
        },
        quiz: {
          question: 'What is the single most effective defense against SQL Injection vulnerabilities in modern web applications?',
          options: [
            'Filtering out the word "SELECT" from input strings',
            'Using Parameterized Queries (Prepared Statements) or an ORM that separates SQL code from user-supplied data',
            'Running the database on a Mac computer',
            'Hiding the database password in an image'
          ],
          correctIndex: 1,
          explanation: 'Parameterized queries treat user input strictly as literal parameter data rather than executable SQL syntax, making injection structurally impossible regardless of input content.'
        }
      },
      {
        id: 'phase-5',
        title: 'Phase 5: Incident Response, Threat Intelligence & Career Launch',
        subtitle: 'Execute incident response playbooks, earn certifications, and land your first SOC role',
        weeks: 'Weeks 15 - 16',
        estHours: 30,
        difficulty: 'Advanced',
        skillsTargeted: ['NIST Incident Response Life Cycle', 'MITRE ATT&CK', 'Cyber Threat Intelligence', 'Technical Interview Prep'],
        description: 'When breaches happen, incident responders contain the blast radius. Master the NIST 6-step IR lifecycle, threat intelligence sharing, and interview readiness.',
        objectives: [
          'Execute the NIST Incident Response steps: Preparation, Detection, Containment, Eradication, Recovery, Lessons Learned',
          'Navigate and map adversarial campaigns using the MITRE ATT&CK matrix',
          'Write professional Incident Response documentation and chain of custody logs',
          'Ace SOC Analyst interview technical scenarios (e.g., "A user clicked a suspicious phishing attachment - walk me through your next 30 minutes")'
        ],
        resources: [
          {
            title: 'NIST Computer Security Incident Handling Guide (SP 800-61)',
            provider: 'NIST (National Institute of Standards and Technology)',
            type: 'Federal Framework PDF',
            duration: '10 Hours',
            url: 'https://csrc.nist.gov/pubs/sp/800/61/r2/final',
            badge: 'Global IR Standard',
            highlight: 'Official incident handling guidelines, containment strategies, and evidence handling.'
          },
          {
            title: 'MITRE ATT&CK Framework Interactive Navigator',
            provider: 'MITRE Corporation',
            type: 'Interactive Matrix',
            duration: '6 Hours',
            url: 'https://attack.mitre.org/',
            badge: 'Essential',
            highlight: 'Global knowledge base of adversary tactics and techniques based on real-world observations.'
          }
        ],
        milestone: {
          title: 'Comprehensive Incident Response Playbook & Portfolio',
          type: 'Final Milestone',
          deliverable: 'A complete Incident Response Playbook for Ransomware Outbreaks, plus a published GitHub security portfolio and resume.',
          specs: [
            'Containment decision tree: network isolation, memory dumps, credential revocations',
            'Chain of custody evidence logging template',
            'Lessons-learned post-incident review template with stakeholder communications',
            'Resume aligned to SOC Analyst / Junior Threat Analyst roles'
          ]
        },
        quiz: {
          question: 'In the NIST Incident Handling lifecycle, why must "Containment" occur before "Eradication"?',
          options: [
            'Because containment stops the attacker or malware from spreading further across the network while forensic evidence is preserved',
            'Eradication takes too long to type',
            'Containment is only done by law enforcement',
            'There is no rule; steps can be done in any random order'
          ],
          correctIndex: 0,
          explanation: 'Attempting to eradicate malware before containing it can alert the attacker, causing them to deploy ransomware, destroy logs, or move laterally to secondary systems.'
        }
      }
    ]
  }
};

/**
 * Universal Skill Matrix for diagnosing and gap analysis
 */
const SKILL_DATABASE = [
  // Programming & Scripting
  { id: 'python', name: 'Python', category: 'Programming', relevance: ['data-analyst', 'ml-ai-engineer', 'cloud-devops', 'fullstack-developer'] },
  { id: 'javascript', name: 'JavaScript (ES6+)', category: 'Programming', relevance: ['frontend-developer', 'fullstack-developer'] },
  { id: 'typescript', name: 'TypeScript', category: 'Programming', relevance: ['frontend-developer', 'fullstack-developer'] },
  { id: 'bash', name: 'Linux / Bash Shell', category: 'Systems', relevance: ['cloud-devops', 'cybersecurity-analyst', 'fullstack-developer'] },
  { id: 'sql', name: 'SQL', category: 'Databases', relevance: ['data-analyst', 'fullstack-developer', 'ml-ai-engineer'] },
  
  // Frontend
  { id: 'html-css', name: 'HTML5 & Modern CSS', category: 'Frontend', relevance: ['frontend-developer', 'fullstack-developer'] },
  { id: 'react', name: 'React', category: 'Frontend', relevance: ['frontend-developer', 'fullstack-developer'] },
  { id: 'tailwind', name: 'Tailwind CSS', category: 'Frontend', relevance: ['frontend-developer', 'fullstack-developer'] },
  { id: 'nextjs', name: 'Next.js', category: 'Frontend', relevance: ['frontend-developer', 'fullstack-developer'] },

  // Data & AI
  { id: 'excel', name: 'Advanced Excel / Sheets', category: 'Data Analysis', relevance: ['data-analyst'] },
  { id: 'pandas', name: 'Pandas & NumPy', category: 'Data Analysis', relevance: ['data-analyst', 'ml-ai-engineer'] },
  { id: 'powerbi-tableau', name: 'Power BI or Tableau', category: 'Business Intelligence', relevance: ['data-analyst'] },
  { id: 'scikit-learn', name: 'Scikit-Learn (ML)', category: 'Machine Learning', relevance: ['ml-ai-engineer'] },
  { id: 'pytorch', name: 'PyTorch / Deep Learning', category: 'Machine Learning', relevance: ['ml-ai-engineer'] },
  { id: 'llm-rag', name: 'LLMs, Vector DBs & RAG', category: 'Machine Learning', relevance: ['ml-ai-engineer'] },

  // Backend & DevOps
  { id: 'nodejs', name: 'Node.js & Express', category: 'Backend', relevance: ['fullstack-developer'] },
  { id: 'postgres', name: 'PostgreSQL / Prisma', category: 'Databases', relevance: ['fullstack-developer', 'data-analyst'] },
  { id: 'docker', name: 'Docker & Containers', category: 'DevOps', relevance: ['cloud-devops', 'fullstack-developer', 'ml-ai-engineer'] },
  { id: 'kubernetes', name: 'Kubernetes (K8s)', category: 'DevOps', relevance: ['cloud-devops'] },
  { id: 'terraform', name: 'Terraform (IaC)', category: 'Cloud Infrastructure', relevance: ['cloud-devops'] },
  { id: 'aws', name: 'AWS Cloud Primitives', category: 'Cloud Infrastructure', relevance: ['cloud-devops', 'fullstack-developer'] },

  // Security
  { id: 'networking', name: 'Computer Networking (TCP/IP)', category: 'Security & Systems', relevance: ['cybersecurity-analyst', 'cloud-devops'] },
  { id: 'wireshark', name: 'Wireshark Packet Analysis', category: 'Security & Systems', relevance: ['cybersecurity-analyst'] },
  { id: 'siem', name: 'SIEM (Splunk / Elastic)', category: 'Security & Systems', relevance: ['cybersecurity-analyst'] },
  { id: 'owasp', name: 'OWASP Web Security', category: 'Security & Systems', relevance: ['cybersecurity-analyst', 'fullstack-developer'] },

  // Tooling
  { id: 'git', name: 'Git & GitHub', category: 'Dev Tools', relevance: ['frontend-developer', 'fullstack-developer', 'cloud-devops', 'ml-ai-engineer', 'data-analyst', 'cybersecurity-analyst'] }
];

/**
 * Intelligent Roadmap Synthesis Engine
 * Takes target role (standard or custom), current skills, weekly hours, timeline, learning style.
 * Produces structured, time-bound, personalized roadmap with milestones and resources.
 */
function generatePersonalizedRoadmap({
  roleId,
  customRoleName,
  skillProficiencies = {}, // { [skillId]: 'none' | 'beginner' | 'proficient' }
  weeklyHours = 10,
  targetMonths = 4,
  learningStyle = 'balanced',
  budget = 'all'
}) {
  let baseRole = ROLE_DATABASE[roleId];
  const isCustomRole = !baseRole || roleId === 'custom';

  if (isCustomRole) {
    const roleTitle = customRoleName?.trim() || 'Custom Tech Specialist';
    baseRole = synthesizeCustomRole(roleTitle, skillProficiencies);
  }

  // Deep clone phases to avoid mutating base database
  const clonedPhases = JSON.parse(JSON.stringify(baseRole.phases));

  // 1. Skill Gap Analysis
  let totalSkillsEvaluated = 0;
  let proficientCount = 0;
  let beginnerCount = 0;
  let missingSkills = [];

  // Identify role-relevant skills
  const roleSkills = SKILL_DATABASE.filter(s => s.relevance.includes(baseRole.id) || isCustomRole);

  roleSkills.forEach(skill => {
    totalSkillsEvaluated++;
    const level = skillProficiencies[skill.id] || 'none';
    if (level === 'proficient') {
      proficientCount++;
    } else if (level === 'beginner') {
      beginnerCount++;
      missingSkills.push({ ...skill, gap: 'Need reinforcement & mastery' });
    } else {
      missingSkills.push({ ...skill, gap: 'Complete beginner / Missing' });
    }
  });

  // Calculate Readiness Index %
  const maxScore = Math.max(totalSkillsEvaluated, 1) * 2;
  const currentScore = (proficientCount * 2) + (beginnerCount * 1);
  const readinessIndex = Math.min(Math.round((currentScore / maxScore) * 100), 95);

  // 2. Dynamic Hours & Timeline Recalculation
  // If user is already proficient in core skills, compress baseline hours
  let skillDiscountFactor = 1.0 - (proficientCount * 0.12) - (beginnerCount * 0.04);
  skillDiscountFactor = Math.max(skillDiscountFactor, 0.45); // At least 45% of time needed for advanced projects/interviews

  const adjustedTotalHours = Math.round(baseRole.baseHours * skillDiscountFactor);
  const totalWeeksAvailable = Math.max(Math.round(targetMonths * 4.33), 4);
  const totalHoursAtCurrentPace = weeklyHours * totalWeeksAvailable;

  // Feasibility assessment
  let feasibilityStatus = 'Balanced';
  let feasibilityMessage = '';
  const requiredWeeklyPace = Math.ceil(adjustedTotalHours / totalWeeksAvailable);

  if (weeklyHours >= requiredWeeklyPace + 4) {
    feasibilityStatus = 'Comfortable Pace';
    feasibilityMessage = `With ${weeklyHours} hrs/week, you will comfortably achieve your goals ahead of schedule and have extra time for portfolio polish.`;
  } else if (weeklyHours >= requiredWeeklyPace - 2) {
    feasibilityStatus = 'Optimal & Sustainable';
    feasibilityMessage = `Your ${weeklyHours} hrs/week commitment matches the recommended ~${requiredWeeklyPace} hrs/week pace for ${targetMonths} months.`;
  } else {
    feasibilityStatus = 'Aggressive Sprint Needed';
    feasibilityMessage = `To finish within ${targetMonths} months, you need ~${requiredWeeklyPace} hrs/week (you selected ${weeklyHours} hrs/week). We have streamlined the path to core essentials.`;
  }

  // 3. Customize & Allocate Phase Timelines
  let cumulativeHours = 0;
  let startWeek = 1;
  const totalPhases = clonedPhases.length;

  const customizedPhases = clonedPhases.map((phase, index) => {
    // Check if user already mastered skills in this phase
    let phaseSkills = phase.skillsTargeted || [];
    let phaseProficientCount = phaseSkills.filter(sName => {
      const match = SKILL_DATABASE.find(sd => sd.name.toLowerCase().includes(sName.toLowerCase()) || sName.toLowerCase().includes(sd.name.toLowerCase()));
      return match && skillProficiencies[match.id] === 'proficient';
    }).length;

    // Apply phase hours reduction if user knows the tools
    let phaseHoursReduction = phaseProficientCount > 0 ? 0.35 : 0;
    let phaseEstHours = Math.round(phase.estHours * (1 - phaseHoursReduction) * (adjustedTotalHours / baseRole.baseHours));
    phaseEstHours = Math.max(phaseEstHours, 12); // minimum 12 hours for project building

    // Calculate weeks for this phase
    const phaseWeeksDuration = Math.max(Math.round(phaseEstHours / weeklyHours), 1);
    const endWeek = startWeek + phaseWeeksDuration - 1;

    const phaseWeekStr = `Week ${startWeek}${endWeek > startWeek ? ` - ${endWeek}` : ''}`;
    startWeek = endWeek + 1;
    cumulativeHours += phaseEstHours;

    // Filter resources based on budget preference
    let filteredResources = phase.resources;
    if (budget === 'free') {
      filteredResources = phase.resources.filter(r => r.badge.toLowerCase().includes('free') || !r.badge.toLowerCase().includes('paid'));
    }

    // Filter or adjust emphasis based on learningStyle
    if (learningStyle === 'projects') {
      // Prioritize interactive / project resources
      filteredResources = [...filteredResources].sort((a, b) => (b.type.includes('Interactive') || b.type.includes('Projects') ? 1 : -1));
    } else if (learningStyle === 'videos') {
      filteredResources = [...filteredResources].sort((a, b) => (b.type.includes('Video') ? 1 : -1));
    } else if (learningStyle === 'reading') {
      filteredResources = [...filteredResources].sort((a, b) => (b.type.includes('Docs') || b.type.includes('Book') ? 1 : -1));
    }

    // Create interactive checklist items
    const checklistItems = [
      ...phase.objectives.map((obj, i) => ({
        id: `${phase.id}-obj-${i}`,
        text: obj,
        type: 'concept',
        completed: false
      })),
      {
        id: `${phase.id}-milestone-task`,
        text: `Build Capstone: ${phase.milestone.title}`,
        type: 'milestone',
        completed: false
      }
    ];

    return {
      ...phase,
      calculatedHours: phaseEstHours,
      calculatedWeeks: phaseWeekStr,
      durationWeeksCount: phaseWeeksDuration,
      status: index === 0 ? 'in-progress' : 'locked', // first phase starts in-progress
      checklist: checklistItems,
      resources: filteredResources,
      isFastTracked: phaseProficientCount > 0
    };
  });

  // Calculate estimated completion date based on today
  const today = new Date();
  const completionDate = new Date(today);
  completionDate.setDate(today.getDate() + (startWeek - 1) * 7);

  const formattedDate = completionDate.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  });

  return {
    roleId: baseRole.id,
    roleTitle: baseRole.title,
    roleTagline: baseRole.tagline,
    roleIcon: baseRole.icon,
    marketDemand: baseRole.marketDemand,
    avgSalary: baseRole.avgSalary,
    readinessIndex,
    proficientCount,
    beginnerCount,
    missingSkills,
    totalCurriculumHours: cumulativeHours,
    weeklyCommitmentHours: weeklyHours,
    totalWeeksEstimated: startWeek - 1,
    targetCompletionDate: formattedDate,
    feasibilityStatus,
    feasibilityMessage,
    learningStyle,
    phases: customizedPhases
  };
}

/**
 * Fallback AI-like synthesizer for custom career role prompts
 */
function synthesizeCustomRole(roleTitle, skillProficiencies = {}) {
  const cleanTitle = roleTitle.charAt(0).toUpperCase() + roleTitle.slice(1);
  return {
    id: 'custom-' + cleanTitle.toLowerCase().replace(/[^a-z0-9]/g, '-'),
    title: cleanTitle,
    category: 'Custom Specialty',
    icon: '⚡',
    tagline: `Accelerated, customized career roadmap targeting competencies for ${cleanTitle}.`,
    marketDemand: 'High Specialized Demand',
    avgSalary: '$85,000 - $130,000 / yr',
    keyTools: ['Industry Standard Frameworks', 'Core Languages', 'Modern Toolchains', 'Version Control'],
    baseHours: 190,
    prerequisites: ['Foundational computing knowledge'],
    phases: [
      {
        id: 'phase-1',
        title: `Phase 1: ${cleanTitle} Foundations & Core Tooling`,
        subtitle: `Master underlying architectural principles, environment setup, and foundational languages`,
        weeks: 'Weeks 1 - 3',
        estHours: 35,
        difficulty: 'Beginner',
        skillsTargeted: ['Core Syntax', 'Environment Setup', 'Git/GitHub', 'Fundamental Concepts'],
        description: `Establish a rock-solid foundation in the core programming concepts, terminal tooling, and workflow patterns demanded by ${cleanTitle} roles.`,
        objectives: [
          `Set up modern development environment and master command-line productivity`,
          `Understand fundamental syntax, data structures, and control flow relevant to ${cleanTitle}`,
          `Implement version control best practices: branching, pull requests, and commit hygiene`,
          `Solve 20+ algorithmic and conceptual challenges to solidify mental models`
        ],
        resources: [
          {
            title: `${cleanTitle} Official Documentation & Starter Guides`,
            provider: 'Official Docs & GitHub',
            type: 'Documentation',
            duration: '15 Hours',
            url: 'https://github.com/',
            badge: 'Essential',
            highlight: `Core conventions, architectural overview, and canonical setup instructions.`
          },
          {
            title: 'Modern Tooling & Git Mastery Masterclass',
            provider: 'freeCodeCamp',
            type: 'Video Course',
            duration: '4 Hours',
            url: 'https://www.youtube.com/',
            badge: 'Free',
            highlight: 'Practical command-line setup, workflows, and debugging strategies.'
          }
        ],
        milestone: {
          title: `${cleanTitle} Foundational Utility & Automated Suite`,
          type: 'Capstone Project',
          deliverable: `A functional foundational project applying core language constructs and modular organization.`,
          specs: [
            'Clean modular file architecture with documented setup instructions',
            'Robust error handling and validation logic',
            'Automated execution scripts and clean GitHub repository'
          ]
        },
        quiz: {
          question: `What is the most effective approach to mastering a new technical specialization like ${cleanTitle}?`,
          options: [
            'Only watching videos without typing any code',
            'Active recall and project building: writing real code, building capstones, and debugging errors hands-on',
            'Memorizing entire documentation pages without running them',
            'Switching to a different topic every two days'
          ],
          correctIndex: 1,
          explanation: 'Research in cognitive science proves that active project generation and hands-on problem solving produces over 4x better retention than passive consumption.'
        }
      },
      {
        id: 'phase-2',
        title: `Phase 2: Core Architecture & Industry Standard Frameworks`,
        subtitle: `Build domain-specific systems using modern toolchains and design patterns`,
        weeks: 'Weeks 4 - 7',
        estHours: 45,
        difficulty: 'Intermediate',
        skillsTargeted: ['Domain Frameworks', 'API Design', 'Data Flow', 'Design Patterns'],
        description: `Move from syntax to system design. Master the mainstream libraries and frameworks that industry teams use daily in ${cleanTitle} positions.`,
        objectives: [
          `Implement standard design patterns and modular component architecture`,
          `Connect with external APIs, databases, or streaming data sources`,
          `Handle asynchronous state, concurrency, and event-driven architectures`,
          `Write clean, readable code adhering to industry linting and style guides`
        ],
        resources: [
          {
            title: `Advanced ${cleanTitle} Framework Patterns & Architecture`,
            provider: 'Open Source Community',
            type: 'Interactive Guides',
            duration: '18 Hours',
            url: 'https://github.com/',
            badge: 'Curated',
            highlight: 'Real-world architecture patterns used by production engineering teams.'
          }
        ],
        milestone: {
          title: `Interactive Production-Grade ${cleanTitle} Application`,
          type: 'Capstone Project',
          deliverable: `A fully functioning application solving a practical user or business problem with modern framework tools.`,
          specs: [
            'Multi-component architecture with clean separation of concerns',
            'Persistent state or database integration',
            'Responsive and robust user or API interface'
          ]
        },
        quiz: {
          question: 'Why is separation of concerns important in production software architecture?',
          options: [
            'It makes files harder to locate on purpose',
            'It isolates responsibilities so components can be tested, refactored, and scaled independently without breaking the entire system',
            'It is only needed when hiring more than 5,000 developers',
            'It increases the download size of code'
          ],
          correctIndex: 1,
          explanation: 'Separation of concerns keeps code modular. You can update database schemas, business logic, or UI representations without cascading breaks across unrelated modules.'
        }
      },
      {
        id: 'phase-3',
        title: `Phase 3: Production Testing, Optimization & Security`,
        subtitle: `Refine code quality, write automated tests, and benchmark performance`,
        weeks: 'Weeks 8 - 11',
        estHours: 40,
        difficulty: 'Intermediate to Advanced',
        skillsTargeted: ['Automated Testing', 'Performance Profiling', 'Security Best Practices', 'CI/CD'],
        description: `Junior developers write code that works; professionals write code that is resilient, tested, and secure under high load.`,
        objectives: [
          `Write automated unit and integration tests to prevent regression defects`,
          `Profile memory consumption, latency bottlenecks, and CPU execution time`,
          `Implement defense-in-depth security principles and input sanitization`,
          `Configure automated CI/CD checks on GitHub Actions`
        ],
        resources: [
          {
            title: 'Automated Testing & Continuous Delivery Masterclass',
            provider: 'Engineering Standards',
            type: 'Documentation & Labs',
            duration: '12 Hours',
            url: 'https://github.com/',
            badge: 'Recommended',
            highlight: 'Testing strategies, mock injection, and zero-downtime deployment pipelines.'
          }
        ],
        milestone: {
          title: `Tested & Benchmarked ${cleanTitle} Micro-System`,
          type: 'Capstone Project',
          deliverable: `A hardened project suite featuring automated unit tests and documented performance audit.`,
          specs: [
            'Test coverage exceeding 80% on core business logic functions',
            'Documented benchmark report measuring throughput and response times',
            'Automated CI workflow passing all checks on commit'
          ]
        },
        quiz: {
          question: 'What is regression testing in professional software engineering?',
          options: [
            'Deleting old versions of code to save space',
            'Running automated tests to ensure newly added features or bug fixes have not broken existing functionality',
            'Testing code on legacy computers from 1990',
            'Reverting to pen and paper'
          ],
          correctIndex: 1,
          explanation: 'Regression testing verifies that software changes do not unintentionally damage pre-existing capabilities, providing safety during continuous deployments.'
        }
      },
      {
        id: 'phase-4',
        title: `Phase 4: Advanced Specialization & End-to-End System Integration`,
        subtitle: `Tackle complex edge cases, distributed patterns, and production scale`,
        weeks: 'Weeks 12 - 14',
        estHours: 40,
        difficulty: 'Advanced',
        skillsTargeted: ['System Design', 'Scalability', 'Distributed Data', 'Edge Optimization'],
        description: `Distinguish yourself by conquering advanced niche topics and complex system integrations specific to ${cleanTitle}.`,
        objectives: [
          `Architect systems capable of handling concurrency and distributed data`,
          `Design robust failure recovery, fallback caching, and error logging`,
          `Conduct peer-level code reviews and architectural tradeoff evaluations`
        ],
        resources: [
          {
            title: `System Design & Scale Engineering for ${cleanTitle}`,
            provider: 'System Design Community',
            type: 'Architecture Guides',
            duration: '15 Hours',
            url: 'https://github.com/',
            badge: 'Advanced',
            highlight: 'Architecting for scale, resiliency, and enterprise compliance.'
          }
        ],
        milestone: {
          title: `Flagship High-Performance System for ${cleanTitle}`,
          type: 'Capstone Project',
          deliverable: `An ambitious capstone showcasing advanced competence, high reliability, and polished documentation.`,
          specs: [
            'Architectural diagram detailing components, data flow, and failure states',
            'Live working deployment accessible via cloud URL or demo video',
            'Comprehensive technical README formatted for engineering hiring managers'
          ]
        },
        quiz: {
          question: 'When designing systems for scale, what is the trade-off between consistency and availability (CAP theorem)?',
          options: [
            'You can always have 100% of both with zero latency on standard hardware',
            'In the event of a network partition, a distributed system must choose between guaranteeing all nodes see the same data (Consistency) or guaranteeing every request receives a response (Availability)',
            'The CAP theorem only applies to Bluetooth devices',
            'You must always sacrifice security first'
          ],
          correctIndex: 1,
          explanation: 'The CAP theorem states that under network partitions, you cannot simultaneously guarantee both immediate global consistency and continuous uninterrupted availability.'
        }
      },
      {
        id: 'phase-5',
        title: `Phase 5: Portfolio Polish, Interview Mastery & Career Launch`,
        subtitle: `Package your work, practice technical interviews, and target hiring teams`,
        weeks: 'Weeks 15 - 16',
        estHours: 30,
        difficulty: 'Advanced',
        skillsTargeted: ['Portfolio Site', 'Technical Interviews', 'STAR Storytelling', 'Resume Optimization'],
        description: `Bridge the gap from skilled practitioner to hired professional. Prepare your online presence, practice real technical questions, and land target interviews.`,
        objectives: [
          `Build a clean, high-impact GitHub portfolio with live demos and architecture diagrams`,
          `Prepare 5 behavioral interview stories using the STAR methodology`,
          `Practice live technical interviews and whiteboard problem solving`,
          `Tailor resume and LinkedIn profile with quantified business accomplishments`
        ],
        resources: [
          {
            title: 'Tech Interview Handbook & Algorithmic Problem Solving',
            provider: 'Yangshun Tay (Tech Interview Handbook)',
            type: 'Interview Guide',
            duration: '15 Hours',
            url: 'https://www.techinterviewhandbook.org/',
            badge: 'Top Pick',
            highlight: 'Curated guide for coding interviews, behavioral questions, and negotiation.'
          }
        ],
        milestone: {
          title: `Flagship ${cleanTitle} Portfolio & Career Launch Pack`,
          type: 'Final Milestone',
          deliverable: `A live portfolio showcasing your 3 capstones, targeted resume, and structured job hunt pipeline.`,
          specs: [
            'Polished GitHub profile with highlighted repositories and clean README files',
            'Quantified resume highlighting business outcomes achieved in capstones',
            'Target company outreach list with customized value-add propositions'
          ]
        },
        quiz: {
          question: 'What is the most effective way to stand out when applying for competitive tech roles?',
          options: [
            'Submitting 1,000 generic one-click applications with no portfolio',
            'Showcasing live, deployed capstone projects with clean code, architecture writeups, and demonstrating deep domain curiosity',
            'Claiming 10 years of experience in a 2-year-old framework',
            'Waiting for recruiters to randomly find your profile'
          ],
          correctIndex: 1,
          explanation: 'Proof of work beats credentials. Deployed, functional projects with clean git histories and thorough documentation prove you can deliver value from Day 1.'
        }
      }
    ]
  };
}

// Export for browser and node
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    ROLE_DATABASE,
    SKILL_DATABASE,
    generatePersonalizedRoadmap
  };
}
