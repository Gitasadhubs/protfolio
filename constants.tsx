
import { Project } from './types';

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'E-commerce Platform',
    description: 'A full-featured e-commerce platform with a modern UI, product catalog, shopping cart, and checkout process.',
    imageUrl: 'https://picsum.photos/seed/project1/600/400',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Tailwind'],
    liveUrl: '#',
    sourceUrl: '#',
  },
  {
    id: 2,
    title: 'Data Visualization Dashboard',
    description: 'An interactive dashboard for visualizing complex datasets with dynamic charts and filters.',
    imageUrl: 'https://picsum.photos/seed/project2/600/400',
    tags: ['D3.js', 'React', 'TypeScript'],
    liveUrl: '#',
    sourceUrl: '#',
  },
  {
    id: 3,
    title: 'Mobile Travel App Concept',
    description: 'A sleek and intuitive mobile app design for planning trips, discovering new places, and booking accommodations.',
    imageUrl: 'https://picsum.photos/seed/project3/600/400',
    tags: ['Figma', 'UI/UX Design', 'React Native'],
    liveUrl: '#',
  },
  {
    id: 4,
    title: 'SaaS Landing Page',
    description: 'A high-converting landing page for a software-as-a-service product, focused on clear messaging and user engagement.',
    imageUrl: 'https://picsum.photos/seed/project4/600/400',
    tags: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
    liveUrl: '#',
    sourceUrl: '#',
  },
  {
    id: 5,
    title: 'Personal Blog',
    description: 'A content-focused personal blog platform with markdown support, SEO optimization, and a minimalist reading experience.',
    imageUrl: 'https://picsum.photos/seed/project5/600/400',
    tags: ['Gatsby', 'GraphQL', 'Styled Components'],
    sourceUrl: '#',
  },
  {
    id: 6,
    title: 'Project Management Tool',
    description: 'A collaborative tool to help teams organize tasks, track progress, and manage project timelines effectively.',
    imageUrl: 'https://picsum.photos/seed/project6/600/400',
    tags: ['React', 'Firebase', 'Material UI'],
    liveUrl: '#',
    sourceUrl: '#',
  },
];

export const GITHUB_ICON = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-6 w-6"
  >
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);

export const LINKEDIN_ICON = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-6 w-6"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);
