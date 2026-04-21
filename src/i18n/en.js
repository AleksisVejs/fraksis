export default {
  navbar: {
    work: 'Work',
    services: 'Services',
    studio: 'Studio',
    contact: 'Contact',
    cta: 'Start a project',
  },
  status: {
    available: 'Available for new work',
    based: 'Riga, Latvia',
  },
  hero: {
    eyebrow: 'Fraksis · Independent software studio',
    titleLine1: 'Engineering the',
    titleLine2: 'interfaces of',
    titleHighlight: 'tomorrow.',
    description:
      'We design and ship production-grade web platforms for teams who care about typography, performance, and the details users can feel.',
    primaryCta: 'Start a project',
    secondaryCta: 'Browse our work',
    meta: {
      founded: 'Founded',
      foundedValue: '2024',
      projects: 'Shipped',
      projectsValue: '12+ releases',
      stack: 'Stack',
      stackValue: 'TypeScript · Vue · Laravel',
    },
  },
  marquee: {
    label: 'Tooling we trust',
  },
  services: {
    label: '\u00A7 01 \u2014 Services',
    title: 'A small studio with a wide surface area.',
    description:
      'Two developers, one shared obsession: building products that feel inevitable. We take engagements end-to-end, from the first whiteboard to the tenth production deploy.',
    items: [
      {
        index: '01',
        name: 'Product engineering',
        summary:
          'Full-stack web applications built with Vue, Laravel, and TypeScript \u2014 architected to grow with your team.',
        bullets: [
          'Design systems and component libraries',
          'Type-safe APIs, auth, and data modeling',
          'Performance budgets and Core Web Vitals',
          'CI pipelines, previews, and observability',
        ],
      },
      {
        index: '02',
        name: 'Interface design',
        summary:
          'Interfaces that stay out of the way. We design in the browser, ship in small loops, and sweat the details.',
        bullets: [
          'Information architecture and flows',
          'Motion, micro-interactions, and feedback',
          'Accessibility and keyboard-first UX',
          'Brand expression in product surfaces',
        ],
      },
    ],
  },
  portfolio: {
    label: '\u00A7 02 \u2014 Selected work',
    title: 'Recent releases.',
    description:
      'A few of the things we have shipped recently. Each one is a full-stack effort \u2014 design, engineering, infrastructure.',
    viewCase: 'Open site',
    viewThis: 'You are here',
    status: {
      live: 'Live',
      internal: 'Internal',
    },
    projects: {
      riginspect: {
        name: 'Riginspect',
        role: 'Design & Engineering',
        year: '2025',
        summary:
          'Equipment inspection platform. Client workspaces, automated scheduling, document storage, and notifications \u2014 the operational backbone for inspection businesses.',
        stack: ['Laravel', 'Vue 3', 'Inertia', 'PostgreSQL'],
      },
      wikilink: {
        name: 'Wikilink',
        role: 'Product & Engineering',
        year: '2026',
        summary:
          'A browser-based Wikipedia racing game with real-time multiplayer lobbies, leaderboards, and daily challenges. Race from one article to another using only internal links.',
        stack: ['Vue 3', 'TypeScript', 'Node.js', 'WebSockets'],
      },
      ilzebrenn: {
        name: 'ilzebrenn.com',
        role: 'Design & Front-end',
        year: '2024',
        summary:
          'A quiet, typography-first portfolio for an artist and photographer. Built to let the work breathe.',
        stack: ['Vue 3', 'Vite', 'Tailwind'],
      },
      fraksis: {
        name: 'Fraksis',
        role: 'Studio site',
        year: '2026',
        summary:
          'The site you are reading. A meditation on how developer studios can present themselves with restraint.',
        stack: ['Vue 3', 'Vite', 'Tailwind', 'PWA'],
      },
    },
  },
  about: {
    label: '\u00A7 03 \u2014 The studio',
    title: 'Two engineers. One studio. Shared obsession with craft.',
    description:
      'Fraksis is a boutique software studio based in Riga, Latvia. We work directly with founders and product teams \u2014 no layers, no handoffs, just the people who will actually write the code.',
    principles: [
      {
        title: 'Depth over breadth',
        body: 'We take fewer engagements so each one can get the attention it deserves.',
      },
      {
        title: 'Ship, then polish',
        body: 'Small, frequent releases beat big rewrites. We optimize for feedback loops.',
      },
      {
        title: 'Own the full stack',
        body: 'Design, front-end, back-end, infra \u2014 we stay responsible for what we ship.',
      },
    ],
    team: {
      heading: 'The team',
      role: 'Co-founder \u00B7 Full-stack engineer',
      members: {
        aleksis: {
          name: 'Aleksis V\u0113j\u0161',
          bio: 'Full-stack engineer focused on design systems, animation, and developer experience.',
          skills: ['Vue 3', 'Laravel', 'Node.js', 'TypeScript', 'Tailwind'],
        },
        viesturs: {
          name: 'Viesturs Emerbergs',
          bio: 'Full-stack engineer with a background across Vue, React, and .NET \u2014 equally comfortable at the API layer or the design tokens file.',
          skills: ['Vue 3', 'React', 'Node.js', '.NET Core', 'TypeScript'],
        },
      },
      github: 'GitHub',
    },
  },
  contact: {
    label: '\u00A7 04 \u2014 Get in touch',
    title: 'Have a project in mind?',
    description:
      'Tell us a little about what you are building. We read every message and reply within one business day.',
    email: 'contact@fraksis.com',
    location: 'Riga, Latvia',
    form: {
      name: 'Your name',
      namePlaceholder: 'Jane Doe',
      email: 'Email address',
      emailPlaceholder: 'jane@company.com',
      message: 'Project brief',
      messagePlaceholder: 'A few sentences about your product, timeline, and budget\u2026',
      submit: 'Send message',
      submitting: 'Sending\u2026',
      errors: {
        required: 'All fields are required.',
        email: 'That does not look like a valid email.',
        short: 'Please add at least a sentence or two.',
      },
      success: 'Message received. We will get back to you shortly.',
      failure: 'Something went wrong. Please try again or email us directly.',
    },
  },
  footer: {
    tagline: 'Independent software studio designing and building modern web products.',
    sections: {
      studio: 'Studio',
      links: 'Links',
      contact: 'Contact',
    },
    links: {
      work: 'Work',
      services: 'Services',
      about: 'About',
      contact: 'Contact',
    },
    copyright: 'All rights reserved.',
    builtWith: 'Designed and built in Riga.',
  },
}
