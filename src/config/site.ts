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
  // Google Drive is the primary download source and takes priority over the
  // self-hosted copy. Direct-download form (uc?export=download) so the button
  // downloads the file instead of opening Drive's preview page.
  // NOTE: keep the Drive file in sync with resume/Pulkit_Girdhar_Resume.tex.
  resumeUrl: "https://drive.google.com/uc?export=download&id=1EfBvRThGsXpCbm4xTp38kINZB9VCootD",

  // Fallback: built from resume/Pulkit_Girdhar_Resume.tex by
  // .github/workflows/build-resume.yml and committed to /public.
  // Set resumeUrl to this value to serve the self-hosted PDF instead.
  resumeLocalUrl: "/Pulkit_Girdhar_Resume.pdf",

  // ── Profile photo ─────────────────────────────────────────────────────────
  // Place image in /public and set the path here. Set to "" to fall back to initials.
  photo: "/pulkit.png",

  // ── About ─────────────────────────────────────────────────────────────────
  about: {
    bio: [
      "I'm a Senior Software Engineer at Accenture, specializing in backend systems, microservices, and cloud-native architectures. I build scalable, production-grade solutions using Java, Spring Boot, and distributed messaging platforms.",
      "When I'm off the clock, I love watching sports — cricket, football, F1, and tennis — and unwinding with PC games. I'm endlessly curious about how backend systems work under the hood, and I enjoy building software and solving problems, especially through competitive programming.",
    ],
    location: "Bangalore, India",
    availability: "",
  },

  // ── Experience ────────────────────────────────────────────────────────────
  experience: [
    {
      company: "Accenture",
      role: "Senior Software Engineer",
      period: "Jun 2026 — Present",
      location: "Bangalore, India",
      description: [
        "Architected a concurrency-safe pipeline with Spring Boot and Azure Cosmos DB ingesting 100K+ payloads/day from 5 sources; a dual-container model with distributed record ownership guarantees 100% single-worker processing.",
        "Built a fault-tolerant replay mechanism for pod restarts and prolonged API/DB outages, reprocessing stalled records after a configurable delay via scheduler or on-demand API, ensuring zero data loss.",
        "Developed 10+ backward-compatible REST APIs for payload aggregation, transformation, and integration.",
      ],
    },
    {
      company: "Accenture",
      role: "Software Engineer",
      period: "Aug 2024 — Jun 2026",
      location: "Bangalore, India",
      description: [
        "Engineered a Spring Boot microservice consuming IBM MQ (JMS) legacy code-page messages, parsed with Apache Camel (Bindy) and mapped via MapStruct to domain models, processing 10M+ messages/day.",
        "Designed a canary deployment strategy for depot-wise rollout across 700+ depots in phased waves, migrating shipments off legacy systems to the modernized system with zero downtime.",
        "Consolidated SOAP and REST APIs from WAS-hosted legacy and vendor platforms into one RESTful service; containerized with Docker and migrated to Azure AKS, cutting infra/licensing costs by ~50%.",
        "Built the internal Consignment Gateway Tool for self-service lookups, cutting manual queries by 90%.",
      ],
    },
    {
      company: "Sehaj Solutions",
      role: "Software Developer Intern",
      period: "Apr 2024 — Aug 2024",
      location: "India",
      description: [
        "Migrated an Angular app from Compute Engine VMs to Google Cloud Run, cutting ops overhead by 30%.",
        "Developed Python ETL scripts loading DB2-compatible data into BigQuery; automated them with shell scripting, cutting manual effort by 70%.",
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
    Languages: ["Java", "Rust", "Python", "TypeScript", "JavaScript", "SQL", "C/C++"],
    Backend: ["Spring Boot", "Spring Security", "Spring Data JPA", "Hibernate", "Spring Cloud", "Microservices", "REST", "SOAP"],
    Messaging: ["Apache Kafka", "IBM MQ", "JMS", "Apache Camel"],
    Frontend: ["React", "Next.js", "Angular", "Tailwind CSS"],
    Databases: ["PostgreSQL", "MySQL", "Azure Cosmos DB", "Redis", "BigQuery"],
    Testing: ["JUnit", "Mockito"],
    "Cloud & DevOps": ["Azure Kubernetes Service (AKS)", "AWS", "GCP", "Docker", "Kubernetes", "Git", "GitHub Actions", "CI/CD"],
    Concepts: ["Distributed Systems", "Event-Driven Architecture", "System Design", "Resilience4j"],
  },

  // ── Projects ──────────────────────────────────────────────────────────────
  projects: [
    {
      name: "QueryLab",
      description:
        "Full stack PostgreSQL IDE with a Rust/Axum backend and Next.js frontend. Features a SQL editor with autocomplete, query plan visualizer, schema diff, and ER diagrams. Hardened with 2FA, encrypted credentials, rate limiting, and read-only query safety; CI via GitHub Actions.",
      tech: ["Rust", "Axum", "Next.js", "TypeScript", "PostgreSQL", "GitHub Actions"],
      github: "https://github.com/Pulkit0103/querylab",
      live: "",
    },
    {
      name: "Sentinel Gateway",
      description:
        "Zero-trust API security and traffic management platform built on Spring Cloud Gateway. Every request passes a 13-stage pipeline — JWT/OAuth2 auth, RBAC, tenant isolation, WAF threat detection, Redis-backed token-bucket rate limiting, HMAC replay prevention — before reaching downstream services. Load-tested at 1,000+ RPS with P99 under 200 ms. Ships with a Next.js admin dashboard, Kafka audit logging, and Helm-based Kubernetes deployment.",
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
      live: "https://pulkit-0103.vercel.app",
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
        link: "https://www.credly.com/badges/f35f74d7-9305-4aaa-9107-bcb26bfacdaf/public_url",
      },
      {
        name: "Java Full Stack AI-Native Engineer",
        detail: "Accenture certification",
        link: "",
      },
      {
        name: "ACE Award",
        detail: "Accenture",
        link: "",
      },
      {
        name: "Purple Promise Champion",
        detail: "Accenture · FY26",
        link: "",
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
