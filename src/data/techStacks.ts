import { TechStack } from '../types';

export const techStacks: TechStack[] = [
  {
    id: 'mern',
    name: 'MERN Stack',
    description: 'Build full-stack applications with MongoDB, Express.js, React, and Node.js. The most popular JavaScript stack for modern web development.',
    type: 'fullstack',
    difficulty: 'intermediate',
    technologies: ['MongoDB', 'Express.js', 'React', 'Node.js', 'JavaScript', 'TypeScript'],
    estimatedTime: '8-12 weeks',
    popularity: '★★★★★',
    rating: 4.8,
    trending: true,
    tags: ['javascript', 'react', 'mongodb', 'express', 'nodejs', 'fullstack'],
    overview: 'The MERN stack is a powerful combination of technologies that enables developers to build robust, scalable web applications using JavaScript throughout the entire development stack.',
    prerequisites: [
      'Basic HTML, CSS, and JavaScript knowledge',
      'Understanding of ES6+ features',
      'Familiarity with command line interface',
      'Basic understanding of databases'
    ],
    useCases: [
      'Social media platforms',
      'E-commerce applications',
      'Content management systems',
      'Real-time chat applications',
      'Blogging platforms'
    ],
    pros: [
      'JavaScript everywhere (frontend and backend)',
      'Large community and ecosystem',
      'Rapid prototyping and development',
      'JSON data flow throughout',
      'Excellent for real-time applications'
    ],
    cons: [
      'Can be overwhelming for beginners',
      'Rapid ecosystem changes',
      'Performance considerations with large datasets',
      'SEO challenges with client-side rendering'
    ],
    sections: [
      {
        id: 'setup',
        title: 'Environment Setup',
        description: 'Set up your development environment with Node.js, MongoDB, and essential tools.',
        estimatedTime: '1-2 hours',
        steps: [
          {
            id: 'nodejs-install',
            title: 'Install Node.js',
            content: 'Download and install Node.js from the official website. Verify installation by running node --version and npm --version in your terminal.',
            codeExample: 'node --version\nnpm --version',
            language: 'bash'
          },
          {
            id: 'mongodb-setup',
            title: 'Set up MongoDB',
            content: 'Install MongoDB locally or create a cloud database with MongoDB Atlas. Configure connection strings and test connectivity.',
            codeExample: 'npm install mongodb\n// Connection string example\nconst connectionString = "mongodb://localhost:27017/myapp";',
            language: 'javascript'
          }
        ]
      },
      {
        id: 'backend',
        title: 'Backend Development with Node.js & Express',
        description: 'Create a robust backend API with Express.js, middleware, and MongoDB integration.',
        estimatedTime: '2-3 weeks',
        steps: [
          {
            id: 'express-setup',
            title: 'Initialize Express Server',
            content: 'Create a new Node.js project and set up Express.js with basic middleware and routing.',
            codeExample: `const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'Welcome to MERN Stack API' });
});

app.listen(PORT, () => {
  console.log(\`Server running on port \${PORT}\`);
});`,
            language: 'javascript'
          }
        ]
      }
    ]
  },
  {
    id: 'mean',
    name: 'MEAN Stack',
    description: 'Develop enterprise-grade applications with MongoDB, Express.js, Angular, and Node.js. Perfect for large-scale applications.',
    type: 'fullstack',
    difficulty: 'advanced',
    technologies: ['MongoDB', 'Express.js', 'Angular', 'Node.js', 'TypeScript'],
    estimatedTime: '10-14 weeks',
    popularity: '★★★★☆',
    rating: 4.5,
    tags: ['angular', 'typescript', 'mongodb', 'express', 'nodejs', 'enterprise'],
    overview: 'MEAN stack provides a comprehensive framework for building large-scale, maintainable web applications with Angular\'s powerful frontend framework.',
    prerequisites: [
      'Strong JavaScript and TypeScript knowledge',
      'Understanding of object-oriented programming',
      'Experience with component-based architecture',
      'Basic knowledge of databases and APIs'
    ],
    useCases: [
      'Enterprise web applications',
      'Complex dashboard systems',
      'Large-scale e-commerce platforms',
      'Data visualization applications',
      'Progressive web applications'
    ],
    pros: [
      'Strongly typed with TypeScript',
      'Excellent for large teams',
      'Powerful CLI tools',
      'Comprehensive testing framework',
      'Enterprise-ready architecture'
    ],
    cons: [
      'Steep learning curve',
      'Heavy framework overhead',
      'Frequent breaking changes',
      'Complex setup process'
    ],
    sections: [
      {
        id: 'setup',
        title: 'Development Environment Setup',
        description: 'Install and configure Angular CLI, Node.js, and development tools.',
        estimatedTime: '2-3 hours',
        steps: [
          {
            id: 'angular-cli',
            title: 'Install Angular CLI',
            content: 'Install the Angular command-line interface globally to create and manage Angular projects.',
            codeExample: 'npm install -g @angular/cli\nng version',
            language: 'bash'
          }
        ]
      }
    ]
  },
  {
    id: 'lamp',
    name: 'LAMP Stack',
    description: 'Build traditional web applications with Linux, Apache, MySQL, and PHP. Time-tested and reliable for web development.',
    type: 'fullstack',
    difficulty: 'beginner',
    technologies: ['Linux', 'Apache', 'MySQL', 'PHP'],
    estimatedTime: '6-8 weeks',
    popularity: '★★★☆☆',
    rating: 4.2,
    tags: ['php', 'mysql', 'apache', 'linux', 'traditional'],
    overview: 'LAMP stack is one of the oldest and most stable web development stacks, perfect for traditional web applications and beginners.',
    prerequisites: [
      'Basic understanding of web development',
      'HTML and CSS knowledge',
      'Command line basics',
      'Understanding of server concepts'
    ],
    useCases: [
      'Content management systems (WordPress)',
      'E-commerce websites',
      'Business websites',
      'Blog platforms',
      'Educational platforms'
    ],
    pros: [
      'Very stable and mature',
      'Extensive documentation',
      'Low-cost hosting options',
      'Large community support',
      'Easy to learn'
    ],
    cons: [
      'Less modern than other stacks',
      'Limited scalability options',
      'Security concerns with PHP',
      'Slower development process'
    ],
    sections: [
      {
        id: 'setup',
        title: 'LAMP Environment Setup',
        description: 'Install and configure Apache, MySQL, and PHP on your development machine.',
        estimatedTime: '2-4 hours',
        steps: [
          {
            id: 'apache-install',
            title: 'Install Apache Web Server',
            content: 'Install and configure Apache HTTP server for serving web pages.',
            codeExample: 'sudo apt update\nsudo apt install apache2\nsudo systemctl start apache2',
            language: 'bash'
          }
        ]
      }
    ]
  },
  {
    id: 'django-react',
    name: 'Django + React',
    description: 'Combine Django\'s powerful backend with React\'s dynamic frontend for robust web applications.',
    type: 'fullstack',
    difficulty: 'intermediate',
    technologies: ['Django', 'React', 'Python', 'PostgreSQL', 'REST API'],
    estimatedTime: '8-10 weeks',
    popularity: '★★★★☆',
    rating: 4.6,
    trending: true,
    tags: ['python', 'django', 'react', 'postgresql', 'rest-api'],
    overview: 'Django + React combines Python\'s robust backend framework with React\'s powerful frontend capabilities.',
    prerequisites: [
      'Python programming knowledge',
      'Basic understanding of web development',
      'JavaScript and React basics',
      'Database concepts'
    ],
    useCases: [
      'Data-driven web applications',
      'API-first applications',
      'Scientific computing web interfaces',
      'Financial applications',
      'Healthcare systems'
    ],
    pros: [
      'Python\'s simplicity and power',
      'Django\'s built-in features',
      'Strong security features',
      'Excellent for rapid development',
      'Great ORM system'
    ],
    cons: [
      'Two different languages to master',
      'Complex deployment setup',
      'Potential performance bottlenecks',
      'More complex state management'
    ],
    sections: [
      {
        id: 'setup',
        title: 'Django and React Setup',
        description: 'Set up Django backend and React frontend development environments.',
        estimatedTime: '2-3 hours',
        steps: [
          {
            id: 'django-install',
            title: 'Install Django',
            content: 'Create a virtual environment and install Django framework.',
            codeExample: 'python -m venv myenv\nsource myenv/bin/activate\npip install django\ndjango-admin startproject myproject',
            language: 'bash'
          }
        ]
      }
    ]
  },
  {
    id: 'nextjs',
    name: 'Next.js Full Stack',
    description: 'Build modern web applications with Next.js, featuring SSR, API routes, and excellent developer experience.',
    type: 'fullstack',
    difficulty: 'intermediate',
    technologies: ['Next.js', 'React', 'TypeScript', 'Vercel', 'API Routes'],
    estimatedTime: '6-8 weeks',
    popularity: '★★★★★',
    rating: 4.9,
    trending: true,
    tags: ['nextjs', 'react', 'typescript', 'ssr', 'vercel'],
    overview: 'Next.js provides a complete solution for React applications with server-side rendering, API routes, and optimized performance.',
    prerequisites: [
      'Strong React knowledge',
      'JavaScript/TypeScript proficiency',
      'Understanding of SSR concepts',
      'Basic Node.js knowledge'
    ],
    useCases: [
      'E-commerce platforms',
      'Marketing websites',
      'Blogs and content sites',
      'SaaS applications',
      'Portfolio websites'
    ],
    pros: [
      'Excellent performance optimization',
      'Built-in API routes',
      'Great developer experience',
      'Automatic code splitting',
      'Easy deployment'
    ],
    cons: [
      'Learning curve for SSR concepts',
      'Opinionated framework',
      'Can be overkill for simple sites',
      'Vendor lock-in with Vercel features'
    ],
    sections: [
      {
        id: 'setup',
        title: 'Next.js Project Setup',
        description: 'Create a new Next.js project and configure the development environment.',
        estimatedTime: '1-2 hours',
        steps: [
          {
            id: 'nextjs-create',
            title: 'Create Next.js App',
            content: 'Initialize a new Next.js project with TypeScript and Tailwind CSS.',
            codeExample: 'npx create-next-app@latest my-app --typescript --tailwind --eslint\ncd my-app\nnpm run dev',
            language: 'bash'
          }
        ]
      }
    ]
  },
  {
    id: 'sveltekit',
    name: 'SvelteKit',
    description: 'Experience the future of web development with Svelte\'s compile-time optimizations and SvelteKit\'s full-stack capabilities.',
    type: 'fullstack',
    difficulty: 'intermediate',
    technologies: ['Svelte', 'SvelteKit', 'Vite', 'TypeScript'],
    estimatedTime: '5-7 weeks',
    popularity: '★★★☆☆',
    rating: 4.7,
    trending: true,
    tags: ['svelte', 'sveltekit', 'vite', 'typescript', 'modern'],
    overview: 'SvelteKit offers a revolutionary approach to web development with compile-time optimizations and minimal runtime overhead.',
    prerequisites: [
      'HTML, CSS, and JavaScript knowledge',
      'Understanding of component-based architecture',
      'Basic knowledge of build tools',
      'Familiarity with modern JavaScript'
    ],
    useCases: [
      'High-performance web applications',
      'Interactive dashboards',
      'Real-time applications',
      'Mobile-first web apps',
      'Gaming interfaces'
    ],
    pros: [
      'No virtual DOM overhead',
      'Smaller bundle sizes',
      'Excellent performance',
      'Simple and intuitive syntax',
      'Great developer experience'
    ],
    cons: [
      'Smaller ecosystem',
      'Limited job market',
      'Fewer third-party components',
      'Still maturing framework'
    ],
    sections: [
      {
        id: 'setup',
        title: 'SvelteKit Project Setup',
        description: 'Initialize a new SvelteKit project and explore the project structure.',
        estimatedTime: '1 hour',
        steps: [
          {
            id: 'sveltekit-create',
            title: 'Create SvelteKit App',
            content: 'Create a new SvelteKit project using the official template.',
            codeExample: 'npm create svelte@latest my-app\ncd my-app\nnpm install\nnpm run dev',
            language: 'bash'
          }
        ]
      }
    ]
  },
  {
    id: 'vue-nuxt',
    name: 'Vue.js + Nuxt.js',
    description: 'Build performant web applications with Vue.js and Nuxt.js for server-side rendering and static generation.',
    type: 'fullstack',
    difficulty: 'intermediate',
    technologies: ['Vue.js', 'Nuxt.js', 'TypeScript', 'Pinia'],
    estimatedTime: '7-9 weeks',
    popularity: '★★★★☆',
    rating: 4.5,
    tags: ['vue', 'nuxt', 'typescript', 'pinia', 'ssr'],
    overview: 'Vue.js with Nuxt.js provides an elegant and progressive framework for building modern web applications with excellent performance.',
    prerequisites: [
      'JavaScript fundamentals',
      'Understanding of component architecture',
      'Basic HTML and CSS',
      'Familiarity with build tools'
    ],
    useCases: [
      'Enterprise web applications',
      'E-commerce platforms',
      'Content management systems',
      'Marketing websites',
      'Progressive web apps'
    ],
    pros: [
      'Gentle learning curve',
      'Excellent documentation',
      'Great performance',
      'Strong community',
      'Flexible and progressive'
    ],
    cons: [
      'Smaller job market than React',
      'Limited ecosystem compared to React',
      'Less corporate backing',
      'Frequent major updates'
    ],
    sections: [
      {
        id: 'setup',
        title: 'Vue.js and Nuxt.js Setup',
        description: 'Set up Vue.js development environment and create a Nuxt.js project.',
        estimatedTime: '1-2 hours',
        steps: [
          {
            id: 'nuxt-create',
            title: 'Create Nuxt.js Project',
            content: 'Initialize a new Nuxt.js project with TypeScript support.',
            codeExample: 'npx nuxi@latest init my-nuxt-app\ncd my-nuxt-app\nnpm install\nnpm run dev',
            language: 'bash'
          }
        ]
      }
    ]
  },
  {
    id: 't3-stack',
    name: 'T3 Stack',
    description: 'The modern full-stack with Next.js, TypeScript, Tailwind CSS, tRPC, and Prisma for type-safe development.',
    type: 'fullstack',
    difficulty: 'advanced',
    technologies: ['Next.js', 'TypeScript', 'Tailwind', 'tRPC', 'Prisma'],
    estimatedTime: '10-12 weeks',
    popularity: '★★★★☆',
    rating: 4.8,
    trending: true,
    tags: ['t3', 'trpc', 'prisma', 'nextjs', 'typescript', 'type-safe'],
    overview: 'T3 Stack represents the bleeding edge of full-stack TypeScript development with end-to-end type safety.',
    prerequisites: [
      'Advanced TypeScript knowledge',
      'Strong React and Next.js experience',
      'Understanding of database concepts',
      'API design principles'
    ],
    useCases: [
      'Type-safe full-stack applications',
      'Modern SaaS platforms',
      'Complex business applications',
      'Developer tools and platforms',
      'High-performance web apps'
    ],
    pros: [
      'End-to-end type safety',
      'Excellent developer experience',
      'Modern best practices',
      'Great performance',
      'Strong ecosystem integration'
    ],
    cons: [
      'Very steep learning curve',
      'Complex setup process',
      'Rapidly evolving ecosystem',
      'Overkill for simple projects'
    ],
    sections: [
      {
        id: 'setup',
        title: 'T3 Stack Project Setup',
        description: 'Initialize a new T3 Stack project with all the modern tooling configured.',
        estimatedTime: '2-3 hours',
        steps: [
          {
            id: 't3-create',
            title: 'Create T3 App',
            content: 'Use create-t3-app to bootstrap a new project with all T3 technologies.',
            codeExample: 'npm create t3-app@latest my-t3-app\ncd my-t3-app\nnpm run dev',
            language: 'bash'
          }
        ]
      }
    ]
  },
  {
    id: 'jamstack',
    name: 'JAMstack (Gatsby)',
    description: 'Build blazing-fast static sites with Gatsby, GraphQL, and modern deployment strategies.',
    type: 'jamstack',
    difficulty: 'intermediate',
    technologies: ['Gatsby', 'React', 'GraphQL', 'Netlify', 'Contentful'],
    estimatedTime: '5-7 weeks',
    popularity: '★★★☆☆',
    rating: 4.4,
    tags: ['jamstack', 'gatsby', 'graphql', 'static', 'netlify'],
    overview: 'JAMstack with Gatsby provides incredible performance for content-driven sites with static generation and modern deployment.',
    prerequisites: [
      'React fundamentals',
      'GraphQL basics',
      'Understanding of static sites',
      'Git version control'
    ],
    useCases: [
      'Corporate websites',
      'Blogs and documentation',
      'E-commerce (with headless CMS)',
      'Landing pages',
      'Portfolio sites'
    ],
    pros: [
      'Exceptional performance',
      'Great SEO out of the box',
      'Secure by default',
      'Excellent developer experience',
      'Cost-effective hosting'
    ],
    cons: [
      'Build times can be long',
      'Complex for dynamic content',
      'Learning curve for GraphQL',
      'Limited real-time capabilities'
    ],
    sections: [
      {
        id: 'setup',
        title: 'Gatsby Development Setup',
        description: 'Install Gatsby CLI and create your first static site project.',
        estimatedTime: '1-2 hours',
        steps: [
          {
            id: 'gatsby-cli',
            title: 'Install Gatsby CLI',
            content: 'Install the Gatsby command-line interface and create a new project.',
            codeExample: 'npm install -g gatsby-cli\ngatsby new my-gatsby-site\ncd my-gatsby-site\ngatsby develop',
            language: 'bash'
          }
        ]
      }
    ]
  }
];