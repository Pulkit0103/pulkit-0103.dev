import type { IconType } from "react-icons";
import {
  SiSpring,
  SiApachekafka,
  SiApache,
  SiPostgresql,
  SiMysql,
  SiGooglecloud,
  SiDocker,
  SiKubernetes,
  SiGit,
  SiReact,
  SiAngular,
  SiCplusplus,
  SiSolidity,
  SiPython,
  SiTypescript,
  SiJavascript,
  SiNextdotjs,
  SiTailwindcss,
  SiFramer,
  SiPolygon,
  SiEthereum,
  SiAccenture,
  SiCodechef,
  SiLeetcode,
  SiCodeforces,
  SiGoogle,
  SiMeta,
  SiRedis,
  SiKeycloak,
  SiApachemaven,
  SiPrometheus,
  SiRust,
  SiSpringsecurity,
  SiHibernate,
  SiJunit5,
  SiGithubactions,
  SiGooglebigquery,
} from "react-icons/si";
import { FaJava, FaDatabase, FaServer, FaCloud, FaAws } from "react-icons/fa";
import { TbApi, TbTopologyStar3 } from "react-icons/tb";
import { GraduationCap, School } from "lucide-react";

// ── Skill icon map ────────────────────────────────────────────────────────────
export const skillIcons: Record<string, { Icon: IconType; color: string }> = {
  Java: { Icon: FaJava, color: "#E76F00" },
  "C/C++": { Icon: SiCplusplus, color: "#00599C" },
  SQL: { Icon: FaDatabase, color: "#4479A1" },
  Solidity: { Icon: SiSolidity, color: "#9CA3AF" },
  Python: { Icon: SiPython, color: "#3776AB" },
  JavaScript: { Icon: SiJavascript, color: "#F7DF1E" },
  TypeScript: { Icon: SiTypescript, color: "#3178C6" },
  Rust: { Icon: SiRust, color: "#CE422B" },
  Axum: { Icon: SiRust, color: "#CE422B" },

  "Spring Security": { Icon: SiSpringsecurity, color: "#6DB33F" },
  "Spring Data JPA": { Icon: SiSpring, color: "#6DB33F" },
  "Spring Cloud": { Icon: SiSpring, color: "#6DB33F" },
  Hibernate: { Icon: SiHibernate, color: "#59666C" },
  REST: { Icon: TbApi, color: "#60A5FA" },
  SOAP: { Icon: TbApi, color: "#94A3B8" },
  JMS: { Icon: FaServer, color: "#054ADA" },
  JUnit: { Icon: SiJunit5, color: "#25A162" },
  Mockito: { Icon: SiJunit5, color: "#25A162" },
  BigQuery: { Icon: SiGooglebigquery, color: "#669DF6" },
  "GitHub Actions": { Icon: SiGithubactions, color: "#2088FF" },
  "CI/CD": { Icon: SiGithubactions, color: "#2088FF" },
  "Azure Kubernetes Service (AKS)": { Icon: SiKubernetes, color: "#326CE5" },
  "Event-Driven Architecture": { Icon: TbTopologyStar3, color: "#60A5FA" },
  "System Design": { Icon: TbTopologyStar3, color: "#60A5FA" },
  Resilience4j: { Icon: FaServer, color: "#F97316" },

  "Spring Boot": { Icon: SiSpring, color: "#6DB33F" },
  Microservices: { Icon: FaServer, color: "#F97316" },
  "REST APIs": { Icon: TbApi, color: "#60A5FA" },
  "Apache Camel": { Icon: SiApache, color: "#D22128" },
  "Apache Kafka": { Icon: SiApachekafka, color: "#a1a1aa" },
  "Spring Cloud Gateway": { Icon: SiSpring, color: "#6DB33F" },
  Keycloak: { Icon: SiKeycloak, color: "#4D4D4D" },
  Redis: { Icon: SiRedis, color: "#FF4438" },
  Maven: { Icon: SiApachemaven, color: "#C71A36" },
  Prometheus: { Icon: SiPrometheus, color: "#E6522C" },
  "Distributed Systems": { Icon: TbTopologyStar3, color: "#60A5FA" },

  "IBM MQ": { Icon: FaServer, color: "#054ADA" },
  NoSQL: { Icon: FaDatabase, color: "#4DB33D" },

  PostgreSQL: { Icon: SiPostgresql, color: "#4169E1" },
  MySQL: { Icon: SiMysql, color: "#4479A1" },
  "Azure Cosmos DB": { Icon: FaDatabase, color: "#0078D4" },

  AWS: { Icon: FaAws, color: "#FF9900" },
  Azure: { Icon: FaCloud, color: "#0078D4" },
  GCP: { Icon: SiGooglecloud, color: "#4285F4" },
  Docker: { Icon: SiDocker, color: "#2496ED" },
  Kubernetes: { Icon: SiKubernetes, color: "#326CE5" },
  Git: { Icon: SiGit, color: "#F05032" },

  "React.js": { Icon: SiReact, color: "#61DAFB" },
  React: { Icon: SiReact, color: "#61DAFB" },
  Angular: { Icon: SiAngular, color: "#DD0031" },
  "Next.js": { Icon: SiNextdotjs, color: "#ffffff" },
  "Tailwind CSS": { Icon: SiTailwindcss, color: "#06B6D4" },
  "Framer Motion": { Icon: SiFramer, color: "#EC4899" },

  Polygon: { Icon: SiPolygon, color: "#8247E5" },
  Ethereum: { Icon: SiEthereum, color: "#a1a1aa" },
  MetaMask: { Icon: FaCloud, color: "#F6851B" },
};

// ── Company icon map ─────────────────────────────────────────────────────────
export type CompanyLogo =
  | { type: "icon"; Icon: IconType; color: string; bg: string }
  | { type: "letter"; letter: string; from: string; to: string };

export const companyIcons: Record<string, CompanyLogo> = {
  Accenture: {
    type: "icon",
    Icon: SiAccenture,
    color: "#A100FF",
    // Solid opaque bg so the timeline line doesn't show through the logo
    bg: "bg-white dark:bg-zinc-900 border-[#A100FF]/40 shadow-sm shadow-[#A100FF]/10",
  },
  "Sehaj Solutions": {
    type: "letter",
    letter: "S",
    from: "from-emerald-500",
    to: "to-teal-600",
  },
};

// ── Institution (education) icon map ─────────────────────────────────────────
export const institutionIcons: Record<
  string,
  { Icon: typeof GraduationCap; from: string; to: string }
> = {
  "Thapar Institute of Engineering and Technology, Patiala": {
    Icon: GraduationCap,
    from: "from-blue-500",
    to: "to-cyan-500",
  },
  "Pratap Public School, Karnal": {
    Icon: School,
    from: "from-amber-500",
    to: "to-orange-600",
  },
};

// ── Competitive platform icon map ────────────────────────────────────────────
export const platformIcons: Record<
  string,
  { Icon: IconType; color: string }
> = {
  CodeChef: { Icon: SiCodechef, color: "#5B4638" },
  LeetCode: { Icon: SiLeetcode, color: "#FFA116" },
  Codeforces: { Icon: SiCodeforces, color: "#1F8ACB" },
  "Google Kick Start 2022": { Icon: SiGoogle, color: "#4285F4" },
  "Meta Hacker Cup 2022": { Icon: SiMeta, color: "#0866FF" },
};

