// ─────────────────────────────────────────────────────────────────────────────
// SITE CONFIGURATION — edit this file to update your portfolio content.
// All sections are driven from here. No other files need to be touched for
// content changes.
// ─────────────────────────────────────────────────────────────────────────────

export const siteConfig = {
  // ── Identity ──────────────────────────────────────────────────────────────
  name: "Pulkit Girdhar",
  initials: "PG",
  tagline: "Building scalable microservices and backend systems that solve real-world problems.",

  // Roles shown in the hero cycling animation
  roles: ["Senior Software Engineer", "Backend & Cloud Architect", "Passionate Gamer"],

  // ── Contact & Links ───────────────────────────────────────────────────────
  email: "girdhar.pulkit.2002@gmail.com",
  linkedin: "https://linkedin.com/in/pulkit-0103",
  github: "https://github.com/Pulkit0103",
  twitter: "",

  // ── Resume ────────────────────────────────────────────────────────────────
  // Google Drive share link (Anyone with the link can view)
  resumeUrl: "https://drive.google.com/file/d/1EfBvRThGsXpCbm4xTp38kINZB9VCootD/view?usp=sharing",

  // ── Profile photo ─────────────────────────────────────────────────────────
  // Place image in /public and set the path here. Set to "" to fall back to initials.
  photo: "/pulkit.png",

  // ── About ─────────────────────────────────────────────────────────────────
  about: {
    bio: [
      "I'm a Senior Software Engineer at Accenture, specializing in backend systems, microservices, and cloud-native architectures. I build scalable, production-grade solutions using Java, Spring Boot, and distributed messaging platforms.",
      "When I'm off the clock, I love watching sports — cricket, football, F1, and tennis — and unwinding with PC games. I'm endlessly curious about how backend systems work under the hood, and I enjoy building software and solving problems, especially through competitive programming.",
    ],
    location: "India",
    availability: "",
  },

  // ── Experience ────────────────────────────────────────────────────────────
  experience: [
    {
      company: "Accenture",
      role: "Senior Software Engineer",
      period: "Jun 2026 — Present",
      location: "India",
      description: [
        "Architected a scalable, concurrency-safe processing pipeline using Spring Boot and Azure Cosmos DB, guaranteeing exclusive single-worker processing for 100% of unique records and eliminating duplicate downstream processing.",
        "Designed a dual-container persistence model for payload storage and distributed record ownership across multiple inbound payloads.",
        "Developed REST APIs and implemented payload aggregation, transformation, and downstream integration workflows maintaining full backward compatibility.",
      ],
    },
    {
      company: "Accenture",
      role: "Software Engineer",
      period: "Aug 2024 — Jun 2026",
      location: "India",
      description: [
        "Developed a Spring Boot microservice integrating IBM MQ to process legacy code-page-encoded messages using Apache Camel (Bindy) and Spring Mapper for standardized domain model transformation.",
        "Designed and implemented a canary deployment strategy enabling depot-wise rollout of new processing flows with zero downtime.",
        "Modernized SOAP and REST APIs from multiple legacy WAS applications into a unified platform; dockerized and migrated to Azure Kubernetes Service (AKS), achieving ~50% reduction in infrastructure and licensing costs.",
      ],
    },
    {
      company: "Sehaj Solutions",
      role: "Software Developer Intern",
      period: "Apr 2024 — Aug 2024",
      location: "India",
      description: [
        "Migrated an Angular application from Google Compute Engine VMs to fully managed Google Cloud Run, reducing operational overhead by 30% while improving scalability.",
        "Designed Python scripts to transform and load data into BigQuery with DB2-compatible configurations as part of a large-scale data migration initiative.",
        "Automated Python workflow execution via shell scripting, reducing manual intervention by 70%.",
      ],
    },
  ],

  // ── Education ─────────────────────────────────────────────────────────────
  education: [
    {
      institution: "Thapar Institute of Engineering and Technology, Patiala",
      degree: "Bachelor of Engineering in Computer Engineering",
      period: "Sep 2020 — Jul 2024",
      score: "CGPA: 8.63",
    },
    {
      institution: "Pratap Public School, Karnal",
      degree: "Senior Secondary Education (CBSE)",
      period: "Apr 2018 — Mar 2020",
      score: "95.8%",
    },
  ],

  // ── Skills ────────────────────────────────────────────────────────────────
  skills: {
    Languages: ["Java", "C/C++", "SQL", "Solidity", "Python"],
    "Backend & Frameworks": ["Spring Boot", "Microservices", "REST APIs", "Apache Camel", "Apache Kafka"],
    Messaging: ["IBM MQ", "Apache Kafka", "NoSQL"],
    Databases: ["PostgreSQL", "MySQL", "Azure Cosmos DB"],
    "Cloud & DevOps": ["AWS", "Azure", "GCP", "Docker", "Kubernetes", "Git"],
    Frontend: ["React.js", "Angular"],
  },

  // ── Projects ──────────────────────────────────────────────────────────────
  projects: [
    {
      name: "Sentinel Gateway",
      description:
        "Zero-trust API security and traffic management platform built on Spring Cloud Gateway. Enforces a nine-layer pipeline — JWT/OAuth2 auth, RBAC, tenant isolation, WAF threat detection, Redis-backed token-bucket rate limiting, HMAC replay prevention — before requests reach downstream services. Ships with a Next.js admin dashboard, Kafka audit logging, and Helm-based Kubernetes deployment.",
      tech: ["Java", "Spring Boot", "Spring Cloud Gateway", "Keycloak", "Redis", "PostgreSQL", "Apache Kafka", "Kubernetes"],
      github: "https://github.com/Pulkit0103/sentinel-gateway",
      live: "",
    },
    {
      name: "NebulaKV",
      description:
        "Distributed, fault-tolerant key-value database written from scratch in Java. Implements an LSM storage engine with write-ahead logging, SSTables with Bloom filters, and tombstone compaction, plus consistent hashing, quorum reads/writes, gossip-based membership, read repair, and hinted handoff. Speaks both a binary wire protocol and RESP2, so redis-cli just works.",
      tech: ["Java", "Distributed Systems", "Maven", "Prometheus", "Docker", "Kubernetes"],
      github: "https://github.com/Pulkit0103/nebula-kv",
      live: "",
    },
    {
      name: "Blockchain Lottery DApp",
      description:
        "Decentralized lottery application using Solidity smart contracts on Ethereum/Polygon. Automates ticket purchases, winner selection, and prize distribution without intermediaries. Deployed on Polygon Mumbai Testnet with MetaMask wallet integration.",
      tech: ["Solidity", "React.js", "Polygon", "MetaMask", "Ethereum"],
      github: "https://github.com/Pulkit0103/Lottery-Dapp",
      live: "",
    },
    {
      name: "Portfolio Website",
      description:
        "This site — built with Next.js 15, Tailwind CSS, and Framer Motion. Fully config-driven: update a single file to change all content. Dark/light mode, scroll animations, auto-hiding sections.",
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
      github: "https://github.com/Pulkit0103/pulkit-0103.dev",
      live: "https://pulkit-0103.dev",
    },
  ],

  // ── Achievements ──────────────────────────────────────────────────────────
  achievements: {
    competitive: [
      {
        platform: "CodeChef",
        title: "4-Star Coder",
        metric: "Rating: 1890",
        link: "",
      },
      {
        platform: "LeetCode",
        title: "Knight",
        metric: "Rating: 1880+",
        link: "",
      },
      {
        platform: "Codeforces",
        title: "Specialist",
        metric: "Rating: 1474",
        link: "",
      },
      {
        platform: "Google Kick Start 2022",
        title: "Round E",
        metric: "AIR 1173 / 10,000+ participants",
        link: "",
      },
      {
        platform: "Meta Hacker Cup 2022",
        title: "Global Rank 8292",
        metric: "AIR 4452 / 27,000+ participants",
        link: "",
      },
    ],
    certifications: [
      {
        name: "AWS Certified Solutions Architect",
        detail: "Associate",
        link: "", // TODO: add certificate link
      },
    ],
    scholarships: [
      {
        name: "TIET Merit Scholarship",
        detail: "INR 2.50 Lakhs for academic excellence",
        years: "2020–21 & 2021–22",
      },
    ],
  },

  // ── Open Source ───────────────────────────────────────────────────────────
  // Leave this array EMPTY ([]) to hide the section entirely.
  openSource: [] as Array<{
    repo: string;
    description: string;
    link: string;
    date: string;
  }>,

  // ── Blog / Writing ────────────────────────────────────────────────────────
  // Leave this array EMPTY ([]) to hide the section entirely.
  blog: [] as Array<{
    title: string;
    description: string;
    link: string;
    date: string;
  }>,

  // ── Footer ────────────────────────────────────────────────────────────────
  sourceRepo: "https://github.com/Pulkit0103/pulkit-0103.dev",
};
