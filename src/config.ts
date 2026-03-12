export const siteConfig = {
  name: "Bhuvanesh Perumal Samy",
  title: "MSCS at USC | Software Engineer | AI Backend ML Infra Engineer",
  description:
    "Portfolio website of Bhuvanesh Perumal Samy",
  accentColor: "#1dbcd8ff",
  social: {
    email: "bhuvaneshp87000@gmail.com",
    linkedin: "https://www.linkedin.com/in/bhuvanesh-perumal-samy-3335a8184/",
    github: "https://github.com/BhuvaneshP-87",
  },
  aboutMe:
    "I am a software engineer and researcher focused on building scalable backend systems and ML-driven infrastructure. Currently, I work as a Research Assistant at the University of Southern California, where I am developing an LLM-powered agentic RAG pipeline capable of processing over 45,000 legal documents using distributed execution and CUDA acceleration for large-scale analysis. My work spans distributed systems, large-scale data pipelines, and hardware-aware machine learning systems.  \n Previously, I built high-throughput distributed microservices and optimized large-scale data pipelines processing tens of millions of records, improving system performance from hours to minutes. I have also worked on backend systems supporting real-time search across billions of records, gaining strong experience in performance optimization, scalable system design, and production infrastructure. \n I am particularly interested in building ML systems that operate at scale, combining distributed computing, retrieval-based AI systems, and GPU-aware infrastructure to solve complex real-world problems.",
  skills: [
    "Python",
    "Java",
    "C++",
    "JavaScript",
    "React",
    "Node.js",
    "Spring Boot",
    "SQL",
    "AWS",
    "Docker",
    "Kubernetes",
    "Spark",
    "Kafka",
    "CUDA",
  ],
  skillCategories: [
    {
      name: "Languages",
      items: ["Python", "C++", "Java", "JavaScript", "SQL"],
    },
    {
      name: "Web Technologies",
      items: [
        "Django",
        "Spring Boot",
        "React.js",
        "Node.js",
        "Redux",
        "Hibernate",
        "Maven",
        "RESTful APIs",
      ],
    },
    {
      name: "Cloud Services",
      items: [
        "AWS (EC2, VPC, Lambda, SageMaker, SNS, EBS, SQS)",
        "Azure",
        "GCP",
      ],
    },
    {
      name: "Databases",
      items: [
        "MySQL",
        "PostgreSQL",
        "MongoDB",
        "Firebase",
        "Redis",
        "GraphQL",
        "DynamoDB",
      ],
    },
    {
      name: "Developer Tools",
      items: [
        "Git",
        "Jenkins",
        "Jira",
        "Unix",
        "Linux",
        "macOS",
        "Terraform",
        "Docker",
        "Kubernetes",
        "Kibana",
        "Kafka",
        "Grafana",
      ],
    },
    {
      name: "Systems and ML",
      items: ["Distributed Systems", "Containers", "Spark", "CUDA"],
    },
  ],
  projects: [
    {
      name: "GPU Workload Anomaly Detection for Large-Scale Compute Clusters",
      description:
        "Built a distributed ML pipeline to analyze GPU telemetry metrics like SM occupancy, memory bandwidth, and kernel latency to detect compute performance anomalies and bottlenecks in high-performance environments.",
      link: "",
      skills: [
        "Python",
        "PyTorch",
        "Spark",
        "Kafka",
        "CUDA",
        "Telemetry",
        "Grafana",
      ],
    },
    {
      name: "Cost-Aware Small–Large Model Routing for Unsupervised Anomaly Detection",
      description:
        "Built a cost-aware, uncertainty-driven anomaly detection framework combining spatiotemporal autoencoders, time-series modeling, and small-large model routing to optimize detection accuracy under latency and inference budget constraints.",
      // link: "https://iaeme.com/Home/article_id/IJARCSE_01_02_001",
      skills: [
        "Python",
        "TensorFlow",
        "PyTorch",
        "Distributed ML",
        "MAE",
        "ViT",
        "pandas",
        "scikit-learn",
      ],
    },
    {
      name: "Song Recommendation System to Improve Mental State",
      description:
        "Engineered an AI-driven mental wellness platform leveraging NLP, reinforcement learning, and speech-based deep learning models for emotion classification and personalized recommendations, achieving 82% text and 80% audio accuracy.",
      link: "https://www.irjmets.com/uploadedfiles/paper/issue_7_july_2022/27915/final/fin_irjmets1657529466.pdf",
      skills: [
        "React",
        "Node.js",
        "Python",
        "TensorFlow",
        "PyTorch",
        "AWS",
        "NLP",
      ],
    },
  ],
  experience: [
    {
      company: "USC Marshall School of Business",
      title: "Research Assistant",
      dateRange: "Jan 2026 - Present",
      bullets: [
        "Designed a distributed RAG pipeline to process 45K+ legal documents, integrating embedding-based retrieval with vector indexing and CUDA-accelerated inference to generate structured datasets for large-scale legal analytics.",
      ],
    },
    {
      company: "Aidash Inc - IVMS Team (AI Startup)",
      title: "Software Development Engineer",
      dateRange: "Jun 2024 - Aug 2025",
      bullets: [
        "Engineered an LLM-powered AI-augmented PDF generation pipeline using Python and AWS Lambda, enabling dynamic template selection and validation loops, reducing processing time from 45 seconds to 13 seconds per document and saving $12K annually.",
        "Expanded a geospatial ML pipeline by integrating feature engineering and adding 14 new tree species classes, improving multi-class classification performance across satellite imagery datasets.",
        "Architected high-throughput distributed Java microservices to process 1M+ records, implementing structured logging, concurrency control, and performance optimizations that reduced processing time from 10 hours to 5 minutes.",
        "Managed an end-to-end geospatial analytics data pipeline, orchestrating extraction, cleaning, and client ingestion of predictive vegetation metrics used to mitigate electrical hazard risks.",
        "Optimized large-scale data pipelines processing 50M+ records using SQL and Python, refining query execution plans, memory management, and batch profiling to reduce runtime from 16 hours to 10 minutes.",
        "Devised and documented automated testing frameworks and CI/CD pipelines with 150+ test cases, cutting manual QA effort from 2 hours to 10 minutes per release cycle.",
      ],
    },
    {
      company: "Juspay Technologies Pvt Ltd - UPI Team (Fintech)",
      title: "Software Development Engineer",
      dateRange: "Mar 2022 - May 2024",
      bullets: [
        "Architected merchant onboarding automation system on bank’s dashboard, reducing processing time from 10 days to under 5 minutes through streamlined workflows and improving customer acquisition efficiency.",
        "Engineered an automated payment reconciliation feature for 500+ merchants, slashing manual finance workflows by 90% and ensuring accurate daily payouts via scheduled batch processing.",
        "Engineered transaction synchronization services using Python in Linux-based environments, improving system reliability and reducing manual operational overhead by 95% through robust scheduling, logging, and error handling.",
        "Built a distributed real-time search system over 10B+ records using React, SQL partitioning, and optimized indexing strategies, achieving sub-second query latency.",
        "Redesigned PostgreSQL user schema and caching strategies for the merchant dashboard, eliminating 90% redundant user records through normalization and indexing strategies.",
      ],
    },
  ],
  education: [
    {
      school: "University of Southern California",
      degree: "Master of Science in Computer Science",
      dateRange: "Aug 2025 - May 2027",
      achievements: [
        "Courses: Deep Learning, ML for Data Science, Analysis of Algorithms, Database Systems",
      ],
    },
    {
      school: "Dayananda Sagar College of Engineering",
      degree: "Bachelor's in Computer Science",
      dateRange: "Jul 2018 - Jul 2022",
      achievements: [
        "Courses: Data Structures and Algorithms, Computer Architecture, Operating Systems, Machine Learning",
      ],
    },
  ],
};
