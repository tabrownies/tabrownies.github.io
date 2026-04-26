const HEADER_CONFIGS = [
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

const rawTags = "software";
const parsedTags = rawTags ? rawTags.split(/[\s+]+/).filter(Boolean) : [];

const winningConfig = HEADER_CONFIGS.find((config) => {
  if (config.matchTags.length === 0) return false;
  if (config.matchTags.length !== parsedTags.length) return false;
  return config.matchTags.every((t) => parsedTags.includes(t));
});

console.log("Parsed tags:", parsedTags);
console.log("Winning config:", winningConfig?.title);
