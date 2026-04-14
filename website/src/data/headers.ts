export interface HeaderConfig {
  id: string;
  matchTags: string[];
  title: string;
  description: string;
}

export const HEADER_CONFIGS: HeaderConfig[] = [
  {
    id: 'software-gaming',
    matchTags: ['software', 'gaming'],
    title: 'Software & Gaming',
    description: "Some games I've made"
  },
  {
    id: 'software-robotics',
    matchTags: ['software', 'robotics'],
    title: 'Software & Robotics',
    description: 'Projects at the intersection of code and physical automation.'
  },
  {
    id: 'offgrid-automotive',
    matchTags: ['off-grid', 'automotive'],
    title: 'Off-Grid Automotive',
    description: 'Expeditions and builds focused on vehicular independence.'
  },
  {
    id: 'software-dev',
    matchTags: ['software'],
    title: 'Software Development',
    description: 'Engineering projects focused on software architecture and development.'
  }
];

