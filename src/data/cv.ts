export type ProfileLink = {
  label: string;
  href: string;
  kind: "email" | "linkedin" | "github" | "external";
};

export type Highlight = {
  value: string;
  label: string;
  detail: string;
};

export type Experience = {
  role: string;
  company: string;
  period: string;
  bullets: string[];
};

export type SkillGroup = {
  title: string;
  skills: string[];
};

export const profile = {
  name: "Hafidzil Khairi",
  role: "Backend Software Engineer",
  location: "Bandung, Indonesia",
  headline:
    "Backend Software Engineer focused on Go, microservices, observability, performance optimization, and reliable transactional systems.",
  summary:
    "Backend Software Engineer with 6+ years of experience building Go-based backend services, microservices, and high-reliability transactional systems. Recently designed and implemented automation for incentive disbursement workflows, streamlined a 6-day cross-team process, and optimized critical response times from 50+ seconds to under 5 seconds. Strong background in clean architecture, observability, performance optimization, and production reliability.",
  links: [
    {
      label: "Email",
      href: "mailto:hafidzilkhairi00@gmail.com",
      kind: "email",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/hafidzilkhairi",
      kind: "linkedin",
    },
    {
      label: "GitHub",
      href: "https://github.com/hafidzilkhairi",
      kind: "github",
    },
  ] satisfies ProfileLink[],
};

export const highlights: Highlight[] = [
  {
    value: "60%",
    label: "OTP cost reduction",
    detail: "Redesigned registration flow to remove redundant verification steps.",
  },
  {
    value: "50s -> <5s",
    label: "Critical response path",
    detail:
      "Optimized backend paths to meet acceptance criteria and improve reliability.",
  },
  {
    value: "6-10ms -> 0.3-1ms",
    label: "Redis-backed latency gain",
    detail:
      "Improved response time for frequently accessed data through caching.",
  },
  {
    value: "80%+",
    label: "Test coverage",
    detail: "Maintained coverage to support reliability and fast iteration.",
  },
];

export const experiences: Experience[] = [
  {
    role: "Software Engineer",
    company: "PT Setiap Hari Dipakai (Evermos)",
    period: "March 2024 - Present",
    bullets: [
      "Reduced OTP service costs by 60% by redesigning the user registration flow to eliminate redundant verification steps.",
      "Designed and implemented an automated incentive disbursement system that streamlined a 6-day cross-team process across business operations, fraud review, and finance approval, improving payout speed, auditability, and operational efficiency.",
      "Optimized critical backend response paths from 50+ seconds to under 5 seconds, meeting acceptance criteria and improving system usability and reliability.",
      "Designed and shipped an Outbox Pattern system to synchronize product discovery data across Elasticsearch and master databases, enabling full traceability and reducing data inconsistency incidents.",
      "Instrumented Go backend services with OpenTelemetry metrics and distributed tracing, improving alerting accuracy and reducing mean time to detection for critical issues.",
      "Improved service availability by adding panic recovery alerts and error monitoring, enabling faster detection of production failures.",
      "Diagnosed and resolved complex user issues in collaboration with the customer care team through backend investigation and production diagnostics.",
    ],
  },
  {
    role: "Software Engineer",
    company: "PT Tokopedia",
    period: "March 2022 - March 2024",
    bullets: [
      "Maintained monitoring and alerting response time under 5 minutes by optimizing system triggers and incident response workflows.",
      "Reduced cloud infrastructure costs by eliminating obsolete processes and fine-tuning service engine specifications.",
      "Contributed to four cross-functional product initiatives, serving as PIC for one major project.",
      "Maintained test coverage above 80% to support system reliability and fast iteration.",
      "Authored test cases, technical plans, and risk checklists to streamline project delivery and improve engineering alignment.",
      "Built and maintained scalable Go backend services for high-traffic product systems.",
    ],
  },
  {
    role: "Software Engineer",
    company: "Bluebird Tbk",
    period: "Sept 2021 - March 2022",
    bullets: [
      "Improved backend response time from 6-10ms to 0.3-1ms by implementing Redis caching for frequently accessed data.",
      "Built and maintained Go backend services supporting low-latency application workflows.",
    ],
  },
  {
    role: "Software Engineer",
    company: "PT Kautsar Inovasi Teknologi Digital",
    period: "Feb 2020 - July 2021",
    bullets: [
      "Designed backend system architecture and database schemas to improve performance, maintainability, and scalability.",
      "Built backend services using Go with a focus on clean architecture and maintainable code structure.",
      "Managed CI/CD pipelines to streamline deployment workflows and reduce manual release effort.",
      "Conducted code reviews and authored unit tests to improve code quality and delivery confidence.",
    ],
  },
  {
    role: "Software Engineer",
    company: "PT Koding Kreasi Indonesia",
    period: "Sept 2019 - Apr 2020",
    bullets: [
      "Built ReactJS web application interfaces and collaborated remotely using GitLab and Kanban workflows.",
    ],
  },
];

export const skillGroups: SkillGroup[] = [
  {
    title: "Languages",
    skills: ["Go / Golang", "JavaScript", "PHP", "SQL"],
  },
  {
    title: "Backend Engineering",
    skills: [
      "REST APIs",
      "Microservices",
      "Clean Architecture",
      "SOLID",
      "OOP",
      "Concurrency",
      "Singleflight",
      "Outbox Pattern",
    ],
  },
  {
    title: "Databases",
    skills: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Elasticsearch"],
  },
  {
    title: "Cloud & DevOps",
    skills: [
      "Docker",
      "Kubernetes",
      "Jenkins",
      "CI/CD",
      "Linux",
      "AWS SQS/SNS",
      "Message Queues",
    ],
  },
  {
    title: "Observability",
    skills: ["OpenTelemetry", "Prometheus", "Grafana", "New Relic"],
  },
];

export const education = {
  degree: "Bachelor of Computer Science",
  school: "Telkom University",
  period: "2016 - 2020",
  gpa: "3.62 / 4.00",
  thesis:
    "Designing and Implementing Middleware Based On Blockchain As Access Control of IoT Communication",
};

export const certification = {
  title: "GCP Certification",
  issuer: "Google Cloud Skill Boost",
  href: "https://www.cloudskillsboost.google/public_profiles/66df822e-78a7-4da8-9777-d963c4ff8385",
};
