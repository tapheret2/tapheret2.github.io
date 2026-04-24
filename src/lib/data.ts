export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  techStack: string[];
  category: "pipeline" | "ml" | "system" | "blockchain" | "kaggle";
  githubUrl?: string;
  liveUrl?: string;
  highlights: string[];
  whatILearned: string;
  accentColor: string;
  icon: string;
}

export interface Skill {
  name: string;
  icon: string;
  level: number; // 1-5
}

export interface SkillCategory {
  category: string;
  icon: string;
  skills: Skill[];
}

export const projects: Project[] = [
  {
    id: "event-analytics-pipeline",
    title: "Event Analytics Pipeline",
    description: "Python ETL workflow for ingesting, validating, and structuring event data into analytics-ready tables.",
    longDescription:
      "Designed and implemented an end-to-end ETL pipeline that receives raw event records, applies validation and transformation rules, and produces clean datasets that are easier to query and report on.",
    techStack: ["Python", "Pandas", "ETL", "Data Pipeline", "JSON", "SQLite"],
    category: "pipeline",
    githubUrl: "https://github.com/tapheret2/event-analytics-pipeline",
    highlights: [
      "Designed modular ingest, transform, validate, and load stages",
      "Handled malformed records with structured logging and safer fallbacks",
      "Prepared clean output schemas for downstream analytics and reporting",
    ],
    whatILearned:
      "How to treat data quality, schema evolution, and pipeline reliability as core engineering problems instead of cleanup work.",
    accentColor: "#06b6d4",
    icon: "🔄",
  },
  {
    id: "gold-price-forecast",
    title: "Gold Price Forecast",
    description: "Time-series forecasting project that predicts gold prices using engineered features and ensemble models.",
    longDescription:
      "Built a predictive modelling workflow on historical OHLCV data, engineered lag and rolling-window features, compared multiple regressors, and packaged the best-performing approach into a reusable Python workflow.",
    techStack: ["Python", "Scikit-learn", "Pandas", "NumPy", "Matplotlib", "Machine Learning"],
    category: "ml",
    githubUrl: "https://github.com/tapheret2/Gold-Price-Forecast",
    highlights: [
      "Engineered lag, rolling, and trend-based time-series features",
      "Benchmarked multiple models before selecting the strongest ensemble",
      "Compared predictions against actual prices with visual evaluation",
    ],
    whatILearned:
      "How important clean feature pipelines, validation discipline, and experiment tracking are when turning raw historical data into dependable model outputs.",
    accentColor: "#f59e0b",
    icon: "📈",
  },
  {
    id: "sme-management-system",
    title: "SME Management System",
    description: "Python business system with inventory, finance, and reporting workflows for small and medium enterprises.",
    longDescription:
      "Built a structured management system around operational business data such as inventory, finance, and staff records. The project focuses on modelling entities clearly and turning day-to-day transactions into usable reports.",
    techStack: ["Python", "SQLite", "Data Modelling", "CRUD", "Reporting"],
    category: "system",
    githubUrl: "https://github.com/tapheret2/SME-Management-System",
    highlights: [
      "Designed relational data structures for inventory, finance, and staff",
      "Generated operational reports from aggregated transactional records",
      "Separated business rules from persistence logic for maintainability",
    ],
    whatILearned:
      "How better data modelling improves the reliability of reporting features and makes business systems easier to extend over time.",
    accentColor: "#10b981",
    icon: "🏢",
  },
  {
    id: "kickstarter-dapp",
    title: "Kickstarter DApp Contract",
    description: "Decentralized crowdfunding contract that demonstrates backend logic, state management, and blockchain fundamentals.",
    longDescription:
      "Implemented a crowdfunding protocol on Ethereum with campaign creation, contribution tracking, refund conditions, and withdrawal rules. The project highlights backend-style reasoning in an environment where state transitions must be explicit and safe.",
    techStack: ["Solidity", "Ethereum", "Smart Contracts", "Web3", "Blockchain"],
    category: "blockchain",
    githubUrl: "https://github.com/tapheret2/The-Kickstarter-Dapp-Contract",
    highlights: [
      "Implemented deterministic contribution and refund state transitions",
      "Protected withdrawal logic behind campaign goal requirements",
      "Optimized storage layout with attention to gas costs",
    ],
    whatILearned:
      "How to think carefully about state, validation, and failure paths in systems where data integrity cannot rely on a traditional backend.",
    accentColor: "#8b5cf6",
    icon: "⛓️",
  },
  {
    id: "kaggle-projects",
    title: "Kaggle Competition Portfolio",
    description: "Collection of Kaggle notebooks exploring feature engineering, model selection, and competition-style evaluation.",
    longDescription:
      "Built competition notebooks across classification and regression tasks, covering exploration, feature engineering, validation strategy, and tuning. The portfolio shows consistent practice working with unfamiliar datasets under performance constraints.",
    techStack: ["Python", "LightGBM", "XGBoost", "CatBoost", "Optuna", "Scikit-learn"],
    category: "kaggle",
    liveUrl: "https://www.kaggle.com/taphere",
    highlights: [
      "Built ensemble workflows with LightGBM, XGBoost, and CatBoost",
      "Used Optuna to tune models against stronger validation metrics",
      "Practiced rapid iteration on unfamiliar datasets and problem types",
    ],
    whatILearned:
      "How to test ideas quickly, compare experiments honestly, and improve model quality without losing sight of reproducibility.",
    accentColor: "#fb923c",
    icon: "🏆",
  },
];

export const skillCategories: SkillCategory[] = [
  {
    category: "Languages & Core",
    icon: "💻",
    skills: [
      { name: "Python", icon: "🐍", level: 5 },
      { name: "SQL", icon: "🗄️", level: 4 },
      { name: "TypeScript", icon: "📘", level: 3 },
      { name: "Solidity", icon: "🔷", level: 3 },
    ],
  },
  {
    category: "Data & ETL",
    icon: "⚡",
    skills: [
      { name: "Pandas", icon: "🐼", level: 5 },
      { name: "ETL Pipelines", icon: "🔄", level: 4 },
      { name: "Data Modelling", icon: "🗂️", level: 4 },
      { name: "SQLite / SQL DBs", icon: "💾", level: 4 },
    ],
  },
  {
    category: "ML & Analytics",
    icon: "🤖",
    skills: [
      { name: "Scikit-learn", icon: "🧠", level: 4 },
      { name: "LightGBM / XGBoost", icon: "🚀", level: 4 },
      { name: "Feature Engineering", icon: "🔬", level: 4 },
      { name: "Time-Series Analysis", icon: "📈", level: 3 },
    ],
  },
  {
    category: "Tools & Others",
    icon: "🛠️",
    skills: [
      { name: "Jupyter Notebook", icon: "📓", level: 5 },
      { name: "Git / GitHub", icon: "🐙", level: 4 },
      { name: "Optuna", icon: "🎯", level: 3 },
      { name: "Blockchain / Web3", icon: "⛓️", level: 3 },
    ],
  },
];

export const socialLinks = {
  github: "https://github.com/tapheret2",
  kaggle: "https://www.kaggle.com/taphere",
  linkedin: "https://www.linkedin.com/in/phamtienphat/",
  email: "phamtienphat@email.com",
};

export const techTags = [
  "Python", "Pandas", "NumPy", "SQL", "ETL", "LightGBM",
  "XGBoost", "CatBoost", "Optuna", "Scikit-learn", "Jupyter",
  "Git", "Solidity", "SQLite", "Feature Engineering", "Matplotlib",
  "Docker", "Next.js", "TypeScript", "React",
];
