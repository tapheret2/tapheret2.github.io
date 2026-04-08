import { Project } from '@/components/ProjectCard';

export const featuredProjects: Project[] = [
  {
    title: 'Event Analytics Pipeline',
    description:
      'Designed an event data workflow to ingest, transform, and analyze user behavior for actionable product insights.',
    stack: ['Python', 'Pandas', 'ETL', 'SQL'],
    githubUrl: 'https://github.com/tapheret2/event-analytics-pipeline',
    learnings:
      'Built stronger intuition for data quality checks, schema consistency, and scalable transformation logic.',
    featured: true
  },
  {
    title: 'Gold Price Forecast',
    description:
      'Implemented predictive models to estimate gold prices, with feature engineering and evaluation across time-oriented splits.',
    stack: ['Python', 'Scikit-learn', 'Jupyter', 'ML'],
    githubUrl: 'https://github.com/tapheret2/Gold-Price-Forecast',
    learnings:
      'Improved experimentation discipline, model validation, and communication of prediction uncertainty.',
    featured: true
  },
  {
    title: 'SME Management System',
    description:
      'Developed a Python-based system for managing operational workflows in SMEs with an emphasis on reliability.',
    stack: ['Python', 'System Design', 'Backend'],
    githubUrl: 'https://github.com/tapheret2/SME-Management-System',
    learnings:
      'Practiced structuring maintainable modules and designing practical features from real-world needs.'
  },
  {
    title: 'The Kickstarter DApp Contract',
    description:
      'Built a decentralized crowdfunding smart contract demonstrating backend logic, transaction handling, and trustless workflows.',
    stack: ['Blockchain', 'Smart Contract', 'Web3'],
    githubUrl: 'https://github.com/tapheret2/The-Kickstarter-Dapp-Contract',
    learnings:
      'Expanded understanding of contract architecture, security considerations, and immutable data flows.'
  },
  {
    title: 'Kaggle Projects Collection',
    description:
      'A growing set of Kaggle notebooks and experiments focused on data cleaning, feature engineering, and modeling.',
    stack: ['Kaggle', 'Data Analysis', 'Machine Learning'],
    githubUrl: 'https://www.kaggle.com/taphere',
    learnings:
      'Strengthened practical problem solving under realistic datasets and benchmark-driven iteration.'
  }
];
