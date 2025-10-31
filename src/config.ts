export const siteConfig = {
  name: "Bhuvanesh Perumal Samy",
  title: "Graduate Student - MSCS at USC | 3 yoe Software Engineer",
  description: "Portfolio website of Bhuvanesh Perumal Samy",
  accentColor: "#1dbcd8ff",
  social: {
    email: "bhuvaneshp872000@gmail.com",
    linkedin: "https://www.linkedin.com/in/bhuvanesh-perumal-samy-3335a8184/",
    github: "https://github.com/BhuvaneshP-87",
  },
  aboutMe:
    "I am an incoming Master's candidate in Computer Science at USC, specializing in architecting scalable, distributed systems for high-volume environments. My core expertise is in deep performance tuning, transforming operational efficiency by mastering low-latency data architecture and ensuring sub-second responsiveness across critical platforms. I pioneer intelligent systems integration, moving beyond traditional code by harnessing cutting-edge machine learning innovation to enhance product features and developer workflows. My technical proficiency is backed by a commitment to engineering process excellence, implementing automated, high-velocity deployment pipelines to guarantee quality and speed at scale. I am committed to leveraging this technical depth to build the core infrastructure that powers global products. Explore how my architectural insights can drive your next billion-user solution.",
  skills: ["Javascript", "React", "Node.js", "Python", "AWS", "Docker"],
  projects: [
    {
      name: "Song Recommendation System to Improve Mental State",
      description:
        "• Built an AI-powered mental health app using Natural Language Processing and Speech Processing to analyze user emotions and deliver personalized music recommendations to enhance user mental wellness and mood improvement. • Developed deep learning models achieving 82% text emotion detection and 80% audio emotion recognition accuracy; Evaluated 8 ML recommendation algorithms across 9 emotional categories. •  Engineered and deployed a responsive full-stack web application using MERN stack with cloud deployment on AWS, implementing user authentication, real-time processing, data modeling and scalable architecture.",
      link: "https://iaeme.com/Home/article_id/IJARCSE_01_02_001",
      skills: ["Machine Learning", "Deep Learning", "Python", "Tensorflow", "Numpy", "Pandas", "PyTorch", "Forecasting"],
    },
    {
      name: "Smart-Lock using Facial Recognition ",
      description:
        "• Developed a smart-lock system using facial recognition, enabling secure, automated access control with real-time notifications. • Collected and preprocessed a dataset of 300+ college individuals, experimenting with LBPH and CNN deep learning algorithms to optimize facial recognition accuracy, achieving the best-performing model.• Built and deployed a user-friendly bot that handles complete end-to-end functionality efficiently and reliably. • Integrated all components and configured the server on a Raspberry Pi, supporting real-time operation for 50+ users.",
      link: "",
      skills: ["Machine Learning", "Deep Learning", "Python", "Tensorflow", "Numpy", "Pandas", "PyTorch", "Forecasting", "OpenCV", "PyTorch", "Raspberry Pi", "Pi camera", "PIR Sensor"],
    },
    // {
    //   name: "ExtensionKit",
    //   description:
    //     "Kit to jump-start your Chrome extension projects with a variety of battle-tested starter templates & examples",
    //   link: "https://extensionkit.io/?ref=devportfolio",
    //   skills: ["React", "Node.js", "AWS"],
    // },
  ],
  experience: [
    {
      company: "Aidash Inc - IVMS Team(AI Based Startup) ",
      title: "Software Development Engineer I ",
      dateRange: "Jul 2023 - Jul 2024",
      bullets: [
        "Architected scalable Java-based microservices(distributed system) with file processing capabilities, handling up to 1M records with comprehensive error handling, failure email notifications, and reducing manual processing time from 10 hours to 5 mins.",
      "Engineered PDF generation systems for 5 enterprise clients using Python Lambda, reducing server processing time from 45s to 13s per document and cutting storage and processing costs cloud infrastructure by $12K annually.",
      "Reengineered data ingestion and transformation workflows on Hadoop ecosystems using Pig, Hive, and MapReduce - enabling seamless integration of large-scale satellite and geospatial insights into analytics and decision-making platforms.",
      "Innovated a Scala-based microservice leveraging Apache Spark to ingest and process enterprise client data through a pipeline.",
      "Drove development efficiency and elevated code quality by integrating GenAI-powered tools such as SonarQube, CodeRabbit.AI, ensuring maintainable, well-structured, and high-performing code aligned with industry best practices and design patterns.",
      "Optimized database migration scripts using SQL and Python to process 50M+ records, reducing execution time from 16 hrs to 10 mins by advanced indexing and query optimization strategies, lowering database load and infrastructure costs.",
      "Built responsive satellite mapping components for dashboard using react, optimizing rendering performance from 12s to 3.6s through lazy loading, tile caching, and memory management while handling 10K+ concurrent map tiles.",
      "Devised and documented test automation frameworks and CI/CD pipelines with 150+ test cases, slashing manual QA effort from 2 hours to 10 minutes per release cycle and accelerating deployment reliability."
      ],
    },
    {
      company: "Juspay Technologies Pvt Ltd - UPI Team(Fintech) ",
      title: "Software Development Engineer",
      dateRange: "Feb 2023 - Jul 2023",
      bullets: [
        "Architected merchant onboarding automation system on bank’s dashboard, reducing processing time from 10 days to under 5 minutes through streamlined workflows and improving customer acquisition efficiency.",
        "With problem-solving approach, developed an agile,semantic agnostic search component that utilizes React and SQL with table partitioning, enabling real-time filtering across 10B+ records and data analytics/statistics with sub-second latency.",
        "From product design to implementation of comprehensive activity tracking system with audit logging capabilities, processing 100K+ daily user actions to enhance debugging efficiency and improve application monitoring and maintainability.",
        "Redesigned PostgreSQL user schema and caching strategies for merchant’s dashboard, eliminating 90% redundant user records through data normalization and indexing strategies, improving information security and user interface/experience.",
        "Engineered cron job services using Python scripts for transaction and mandate synchronization, reducing manual operational tasks by 95% and ensuring real-time data consistency/compliance across cross-functional systems.",
        "For Bank’s dashboard, spearheaded an automated reconciliation/settlement pipeline processing payments for 500+ merchants, reducing manual finance operations by 90% and ensuring accurate daily payouts through scheduled batch processing."
      ],
    },
    // {
    //   company: "Digital Agency",
    //   title: "Frontend Developer",
    //   dateRange: "Aug 2018 - May 2020",
    //   bullets: [
    //     "Developed responsive web applications for 20+ clients",
    //     "Improved site performance scores by 35% on average",
    //     "Introduced modern JavaScript frameworks to legacy codebases",
    //   ],
    // },
  ],
  education: [
    {
      school: "University of Southern California ",
      degree: "Master of Science in Computer Science",
      dateRange: "Aug 2025 - May 2027",
      achievements: [
        "Courses Taken - Deep Learning, ML for Data Science, Analysis of Algorithms, Database Systems "
      ],
    },
    {
      school: "Dayananda Sagar College of Engineering",
      degree: "Bachelor’s in Computer Science,",
      dateRange: "Aug 2018 - Mar 2022",
      achievements: [
        "Relavant Courses - Data Structures and Algorithm development, Object-Oriented Design, Artificial Intelligence, Database Management, Machine Learning"
      ],
    },
  ],
};
