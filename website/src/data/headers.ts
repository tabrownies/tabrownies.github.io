export interface HeaderConfig {
  id: string;
  matchTags: string[];
  title: string;
  description: string;
}

export const HEADER_CONFIGS: HeaderConfig[] = [
  {
    id: 'the-nasa-hoodies',
    matchTags: ['the-nasa-hoodies'],
    title: 'The NASA Hoodies',
    description: 'My friends and I love to explore space, science, and engineering themed locations and events. Oh, and we all wear NASA hoodies.'
  }
];

