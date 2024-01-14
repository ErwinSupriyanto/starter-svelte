import {
  frontend,
  backend,
  ux,
  database,
  prototyping,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  figma,
  docker,
  postgresql,
  rubyrails,
  graphql,
  komikult,
  leaderboard,
  jtraker,
  fms,
  bds,
  scadaya,
  phenikaa,
  math,
  movie,
  nyeusi,
  space,
  coverhunt,
  dcc,
  kelhel,
  microverse,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Frontend Developer',
    icon: frontend,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'Database',
    icon: database,
  },
  {
    title: 'Project Management',
    icon: prototyping,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'graphql',
    icon: graphql,
  },
  {
    name: 'postgresql',
    icon: postgresql,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
  {
    name: 'docker',
    icon: docker,
  },
];

const experiences = [
  {
    title: 'IT Manager',
    company_name: 'Jadin Pratama',
    icon: coverhunt,
    iconBg: '#333333',
    date: '2021 - Present',
  },
  {
    title: 'Web Developer',
    company_name: 'Baezeni Digital Service',
    icon: microverse,
    iconBg: '#333333',
    date: '2019 - 2021',
  },
  {
    title: 'Senior Programmer',
    company_name: 'Murfa Surya Mahardika',
    icon: kelhel,
    iconBg: '#333333',
    date: '2016 - 2019',
  },
  {
    title: 'Pamulang University',
    company_name: 'Diversity Cyber Council',
    icon: dcc,
    iconBg: '#333333',
    date: '2013 - 2016',
  },
];

const projects = [
  {
    id: 'project-1',
    name: 'Jtracker',
    description: 'Application who track the technician and jobs order',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: komikult,
    // repo: 'https://github.com/shaqdeff/KomiKult',
    demo: 'https://jtracker.id/',
  },
  {
    id: 'project-2',
    name: 'FMS',
    description:
      'Application who track the technician and jobs order.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: fms,
    // repo: 'https://github.com/shaqdeff/Leaderboard',
    demo: 'https://fms.jadintracker.id',
  },
  {
    id: 'project-3',
    name: 'BDSamferdsel',
    description: 'E-Commerce for road sign and the construction items',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: bds,
    // repo: 'https://github.com/shaqdeff/Math-Magicians',
    demo: 'https://www.bdsamferdsel.no/',
  },
  {
    id: 'project-4',
    name: 'Profile Company',
    description: `A Website to promote the subsidiary from main company`,
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: scadaya,
    // repo: 'https://github.com/shaqdeff/Movie-Metro',
    demo: 'https://scadayalancarabadi.com/',
  },
  {
    id: 'project-5',
    name: 'Profile Company',
    description:
      'for phenikaa profile company in vietname',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: phenikaa,
    // repo: 'https://github.com/shaqdeff/Nyeusi-Fest-Site',
    demo: 'https://www.phenikaa.com/',
  },
];

export { services, technologies, experiences, projects };
