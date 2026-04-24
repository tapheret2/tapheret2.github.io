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
    id: "crypto-stream-pipeline",
    title: "Crypto Stream Pipeline",
    description:
      "Real-time cryptocurrency data pipeline — Binance WebSocket → Redpanda → TimescaleDB → dbt → Grafana, with Telegram alerts.",
    longDescription:
      "End-to-end streaming data platform that ingests live trades from Binance WebSocket, routes them through Redpanda (Kafka-compatible), stores in TimescaleDB hypertables with continuous aggregates, transforms via a 3-layer dbt architecture (staging → intermediate → marts), and visualizes on Grafana dashboards with 5-second auto-refresh. Includes smart alerting via Telegram for price swings and volume spikes.",
    techStack: [
      "Python",
      "Redpanda",
      "TimescaleDB",
      "dbt",
      "Grafana",
      "Docker",
      "WebSocket",
      "Telegram Bot",
      "GitHub Actions",
    ],
    category: "pipeline",
    githubUrl: "https://github.com/tapheret2/crypto-stream-pipeline",
    highlights: [
      "Real-time ingestion of BTC, ETH, SOL, BNB trades via Binance WebSocket",
      "Kafka-compatible streaming with Redpanda, batch writes (200 records / 3s)",
      "TimescaleDB hypertables with auto continuous aggregates for 1m & 1h OHLCV",
      "3-layer dbt models: staging, intermediate (candles), marts (volatility, volume)",
      "Telegram alerts for >3% price change and >3σ volume spikes",
      "One-command deployment with Docker Compose",
    ],
    whatILearned:
      "How to architect a production-grade streaming pipeline from ingestion to visualization, handle backpressure with batch consumers, and design time-series storage with proper retention policies and continuous aggregates.",
    accentColor: "#ef4444",
    icon: "radio",
  },
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
    icon: "workflow",
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
    icon: "trending-up",
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
    icon: "building",
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
    icon: "link",
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
    icon: "trophy",
  },
];

export const skillCategories: SkillCategory[] = [
  {
    category: "Languages & Core",
    icon: "code",
    skills: [
      { name: "Python", icon: "python", level: 4 },
      { name: "SQL", icon: "database", level: 3 },
      { name: "TypeScript", icon: "file-code", level: 2 },
      { name: "Solidity", icon: "blocks", level: 2 },
    ],
  },
  {
    category: "Data & ETL",
    icon: "zap",
    skills: [
      { name: "Pandas", icon: "table", level: 4 },
      { name: "ETL Pipelines", icon: "workflow", level: 3 },
      { name: "Data Modelling", icon: "layers", level: 3 },
      { name: "SQLite / SQL DBs", icon: "hard-drive", level: 3 },
    ],
  },
  {
    category: "ML & Analytics",
    icon: "brain",
    skills: [
      { name: "Scikit-learn", icon: "cpu", level: 3 },
      { name: "LightGBM / XGBoost", icon: "rocket", level: 3 },
      { name: "Feature Engineering", icon: "flask-conical", level: 3 },
      { name: "Time-Series Analysis", icon: "trending-up", level: 2 },
    ],
  },
  {
    category: "Tools & Others",
    icon: "wrench",
    skills: [
      { name: "Jupyter Notebook", icon: "notebook-pen", level: 4 },
      { name: "Git / GitHub", icon: "git-branch", level: 3 },
      { name: "Optuna", icon: "target", level: 2 },
      { name: "Blockchain / Web3", icon: "link", level: 2 },
    ],
  },
];

export const socialLinks = {
  github: "https://github.com/tapheret2",
  kaggle: "https://www.kaggle.com/taphere",
  linkedin: "https://www.linkedin.com/in/phamtienphat/",
  email: "phamtienphat2006@gmail.com",
};

export const personalInfo = {
  name: "Pham Tien Phat",
  title: "Aspiring Data Analyst & Web3 Enthusiast",
  location: "Thu Duc, HCMC, Vietnam",
  phone: "+84 843 357 465",
  avatar: "/avatar.jpg",
  bio: "Second-year Data Science student at VNUHCM University of Science. Passionate about turning raw data into actionable business insights through cleaning, analysis, and reporting. Strong interest in Web3 and real-time data systems.",
};

export interface Experience {
  role: string;
  company: string;
  type: string;
  period: string;
  current: boolean;
  description: string[];
}

export const experiences: Experience[] = [
  {
    role: "Software Engineer",
    company: "Peganyx",
    type: "Intern · Remote",
    period: "Nov 2025 — Present",
    current: true,
    description: [
      "Collaborated in a remote team to develop web applications and blockchain features",
      "Built data processing scripts to support performance monitoring and reporting",
      "Gained hands-on experience in agile workflows, Git, and fast-paced project delivery",
    ],
  },
  {
    role: "Head of Human Resources",
    company: "NQD Connection Volunteer Club",
    type: "Leadership",
    period: "2022 — 2024",
    current: false,
    description: [
      "Led HR operations and managed recruitment, training, and engagement for 200+ members",
      "Designed tracking systems to monitor member performance and participation metrics",
    ],
  },
];

export interface Education {
  degree: string;
  school: string;
  period: string;
  note?: string;
}

export const education: Education[] = [
  {
    degree: "Bachelor of Data Science",
    school: "VNUHCM — University of Science",
    period: "2024 — Present",
  },
  {
    degree: "High School Diploma — Mathematics",
    school: "Nguyen Quang Dieu High School for the Gifted",
    period: "2021 — 2024",
  },
];

export const techTags = [
  "Python", "Pandas", "NumPy", "SQL", "ETL", "LightGBM",
  "XGBoost", "CatBoost", "Optuna", "Scikit-learn", "Jupyter",
  "Git", "Solidity", "SQLite", "Feature Engineering", "Matplotlib",
  "Docker", "Next.js", "TypeScript", "React", "Redpanda", "Kafka",
  "TimescaleDB", "dbt", "Grafana", "WebSocket",
];
