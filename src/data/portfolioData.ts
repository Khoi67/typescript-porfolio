import avatarImg from "@/assets/img/about/1.jpg";
import bgImg from "@/assets/img/about/550x640.jpg";
import cvPdf from "@/assets/cv.pdf";
import { PortfolioConfig } from "@/types/portfolio";

/**
 * ==============================================================================
 * PORTFOLIO CONFIGURATION - SINGLE SOURCE OF TRUTH
 * ==============================================================================
 * Dữ liệu đã được đồng bộ 100% theo CV Test Engineer của Đỗ Nguyên Khôi.
 * ==============================================================================
 */

export const portfolioData: PortfolioConfig = {
  // 1. THÔNG TIN CÁ NHÂN & TIỂU SỬ
  personalInfo: {
    firstName: "Khoi",
    lastName: "Do Nguyen",
    fullName: "Do Nguyen Khoi",
    avatarUrl: avatarImg,
    backgroundUrl: bgImg,
    cvFileUrl: cvPdf,
    quote:
      `My maxim: "It's not a lack of intelligence holding you back; it's simply a matter of your hard work."`,
    // Hiệu ứng gõ chữ (Role/Job title animation)
    typingSequence: [
      "Test Engineer",
      3000,
      "Automation Tester",
      2500,
      "Manual Tester",
      2500,
      "QA Engineer",
      2000,
    ],
    // Đoạn giới thiệu bản thân
    bio: [
      "Hi! My name is Do Nguyen Khoi, a detail-oriented and proactive Test Engineer passionate about delivering high-quality software.",
      "I have strong hands-on expertise in both Manual and Automated Testing, architecting end-to-end testing frameworks with Playwright and Selenium, and integrating Agentic AI workflows to optimize test coverage and test reliability.",
      "I believe in continuous quality improvement, collaboration in Agile environments, and building robust testing solutions that accelerate release cycles.",
    ],
    // Bảng thông tin chi tiết
    attributes: [
      { label: "Birthday", value: "06.07.2001" },
      { label: "Gender", value: "Male" },
      {
        label: "Phone",
        value: "0372439820",
        isLink: true,
        href: "tel:0372439820",
      },
      { label: "Study", value: "Ton Duc Thang University (GPA: 3.0/4.0)" },
      { label: "Major", value: "Computer Networks and Data Communication" },
      {
        label: "Mail",
        value: "khoi672001@gmail.com",
        isLink: true,
        href: "mailto:khoi672001@gmail.com",
      },
      {
        label: "Facebook",
        value: "dnkhoi2001",
        isLink: true,
        href: "https://www.facebook.com/dnkhoi2001",
      },
    ],
  },

  // 2. THANH ĐIỀU HƯỚNG MENU (6 MỤC)
  navigation: [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "skills", label: "Skills" },
    { id: "project", label: "Projects" },
    { id: "contact", label: "Contact" },
  ],

  // 3. MẠNG XÃ HỘI
  socialLinks: [
    {
      platform: "Facebook",
      url: "https://www.facebook.com/dnkhoi2001",
      icon: "facebook",
    },
    {
      platform: "LinkedIn",
      url: "https://www.linkedin.com/in/nguy%C3%AAn-kh%C3%B4i-26032320b/",
      icon: "linkedin",
    },
    {
      platform: "GitHub",
      url: "https://github.com/Khoi67",
      icon: "github",
    },
  ],

  // 4. KINH NGHIỆM LÀM VIỆC (WORK EXPERIENCE TỪ CV)
  experiences: [
    {
      id: "cybersoft",
      company: "Cybersoft Academy",
      role: "Mentor Tester",
      period: "Sep 2024 - Now",
      responsibilities: [
        "Mentored students in Manual and Automation Testing fundamentals and real-world workflows.",
        "Reviewed assignments, provided technical guidance, and resolved automation test issues.",
        "Supported projects using Selenium, Playwright, API Testing, Git, and Jira.",
        "Helped students improve test case design, bug reporting, and industry testing best practices.",
      ],
      technologies: ["Playwright", "Selenium", "API Testing", "Git", "Jira"],
    },
    {
      id: "nashtech",
      company: "NashTech",
      role: "Test Engineer Intern",
      period: "Apr 2026 - June 2026",
      responsibilities: [
        "Designed and executed test cases based on business requirements, ensuring high test coverage for functional and edge cases.",
        "Built UI automation test scripts using Selenium (C#) with NUnit, applying the Page Object Model (POM) to improve maintainability and scalability.",
        "Developed API test scripts using RestSharp to validate response status, data integrity, and business logic.",
        "Applied ReqnRoll (BDD) to define test scenarios in Gherkin, improving collaboration between team members.",
        "Explored Playwright with TypeScript for modern UI automation with faster execution and better reliability.",
        "Worked in an Agile environment, collaborating with team members during Sprint Planning, Daily Stand-up, Sprint Review, and Retrospective.",
      ],
      technologies: [
        "Selenium C#",
        "NUnit",
        "RestSharp",
        "ReqnRoll (BDD)",
        "Playwright TypeScript",
        "Agile/Scrum",
      ],
    },
    {
      id: "cj-olivenetworks",
      company: "CJ OliveNetworks Vina",
      role: "Manual Tester",
      period: "Sep 2024 - Mar 2026",
      responsibilities: [
        "Monitored daily operations and data synchronization across regional eCommerce sites (Hong Kong, Taiwan, Malaysia, Vietnam) for global beauty brands (Sulwhasoo, Laneige, Innisfree).",
        "Analyzed system operation logs, scheduled cron tasks, and SAP order transmission failures to proactively identify integration bottlenecks.",
        "Triaged anomalies and managed issue lifecycles via ticketing systems, partnering with development and operations teams to resolve high-priority order processing incidents.",
        "Worked directly with eCommerce workflows across Shopify, Magento, SAP, and V-Logic backends.",
      ],
      technologies: ["Shopify", "Magento", "SAP", "Issue Lifecycle", "E-commerce"],
    },
  ],

  // 5. KỸ NĂNG CHUYÊN MÔN (SKILLS TỪ CV)
  skillCategories: [
    {
      title: "Manual Testing",
      descriptionPoints: [
        "Types: Functional Testing, Cross-Platform (Web, Mobile), Regression & Smoke Testing",
        "API Testing: Postman, REST APIs",
        "Processes: Defect Lifecycle Management, Test Case Design",
      ],
      skills: [
        { name: "Functional & Regression Testing", percentage: 95, color: "#E3872D" },
        { name: "API Testing (Postman)", percentage: 90, color: "#E3872D" },
        { name: "Defect Lifecycle & Test Case Design", percentage: 95, color: "#E3872D" },
      ],
    },
    {
      title: "Automation Testing",
      descriptionPoints: [
        "Web Automation: Playwright, Selenium WebDriver",
        "API Automation: RestSharp",
        "Test Runners & BDD: NUnit, TestNG, Reqnroll (BDD Gherkin)",
      ],
      skills: [
        { name: "Playwright (TypeScript)", percentage: 90, color: "#E3872D" },
        { name: "Selenium WebDriver (C# / Java)", percentage: 85, color: "#E3872D" },
        { name: "API Automation (RestSharp)", percentage: 85, color: "#E3872D" },
        { name: "BDD (ReqnRoll / SpecFlow)", percentage: 80, color: "#E3872D" },
      ],
    },
    {
      title: "Programming & Database",
      descriptionPoints: [
        "Languages: TypeScript, JavaScript, Java, C#",
        "Databases: SQL (PostgreSQL, MySQL)",
      ],
      skills: [
        { name: "TypeScript / JavaScript", percentage: 85, color: "#E3872D" },
        { name: "C# / Java", percentage: 80, color: "#333" },
        { name: "SQL (PostgreSQL)", percentage: 80, color: "#333" },
      ],
    },
    {
      title: "Managements & Monitoring",
      descriptionPoints: [
        "DevOps & CI/CD: Azure DevOps, Git, GitHub Actions, GitLab, Docker",
        "Project Management: Jira, Confluence",
        "Tools: Apache JMeter, VS Code, IntelliJ, Antigravity",
      ],
      skills: [
        { name: "Git, GitHub & Azure DevOps", percentage: 85, color: "#E3872D" },
        { name: "Jira & Confluence", percentage: 90, color: "#333" },
        { name: "Apache JMeter & Docker", percentage: 75, color: "#333" },
      ],
    },
  ],

  // 6. DỰ ÁN NỔI BẬT (ĐỘC QUYỀN AUTOMATION TESTING TỪ CV)
  projects: [
    {
      id: "ai-automation-test",
      title: "AI-Driven End-to-End Automation Workflow",
      shortDescription:
        "Agentic AI workflow auto-converting Jira User Stories into Risk-Based Playwright specs with self-healing triage & Dockerized CI/CD.",
      icon: "react",
      iconColor: "#E3872D",
      detail: {
        description:
          "Architected an E2E testing framework with Playwright & TypeScript using POM, custom fixtures, and module-based test suites for Web UI and REST APIs. Engineered an Agentic AI workflow to auto-convert Jira User Stories into Risk-Based Test Cases and executable Playwright specs. Built a self-healing & triage mechanism to auto-fix locator/timeout failures, file Jira bugs with screenshots, and isolate flaky tests via test.fixme(). Automated CI/CD & operations using GitHub Actions, a Dockerized Telegram Bot, and Jira API for event-driven test triggers and auto-publishing Allure Reports to GitHub Pages.",
        frontend: "Playwright, TypeScript, Page Object Model (POM), Custom Fixtures",
        backend: "AI Agent Gemini, Jira Cloud REST API, Telegram Bot, Docker",
        member: 1,
        role: "Test Automation Engineer",
        demo: "https://github.com/Khoi67/ai-automation-test.git",
        github: "https://github.com/Khoi67/ai-automation-test.git",
        tags: [
          "Playwright",
          "TypeScript",
          "AI Agent",
          "Jira Cloud API",
          "Telegram Bot",
          "Docker",
          "CI/CD",
        ],
      },
    },
    {
      id: "multi-platform-automation",
      title: "Multi-Platform Automation Framework",
      shortDescription:
        "Maintainable UI automation and automated API regression suites using Selenium C#, NUnit, RestSharp, and ReqnRoll BDD.",
      icon: "trello",
      iconColor: "#E3872D",
      detail: {
        description:
          "Built a maintainable UI automation test suite using Selenium C# & NUnit structured around Page Object Model principles. Developed automated API regression suites with RestSharp to validate HTTP status codes, schema definitions, and payload business logic. Implemented BDD scenarios using ReqnRoll (SpecFlow), enhancing living documentation and cross-team test transparency. Integrated failure listeners capturing screenshots and trace logs to accelerate root-cause analysis.",
        frontend: "Selenium C#, NUnit, Playwright (TypeScript)",
        backend: "RestSharp, ReqnRoll (BDD)",
        member: 1,
        role: "Test Engineer",
        demo: "https://github.com/Khoi67/rookie9-all-exercise.git",
        github: "https://github.com/Khoi67/rookie9-all-exercise.git",
        tags: [
          "Selenium C#",
          "NUnit",
          "ReqnRoll (BDD)",
          "RestSharp",
          "Playwright",
          "POM",
        ],
      },
    },
  ],

  // 7. THÔNG TIN LIÊN HỆ
  contact: {
    address: "Ho Chi Minh City, Vietnam",
    email: "khoi672001@gmail.com",
    phone: "0372439820",
    github: "Khoi67",
    githubUrl: "https://github.com/Khoi67",
  },

  // 8. CẤU HÌNH EMAILJS (Gửi mail tự động)
  emailjs: {
    serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || "",
    templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "",
    publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "",
  },

  // 9. CẤU HÌNH CHỐNG SPAM (Zero-Friction Protection)
  antiSpam: {
    cooldownSeconds: 60,
    maxPerHour: 3,
    minMessageLength: 10,
    maxMessageLength: 1000,
    minSubmitTimeSeconds: 2.5,
  },

  // 10. FOOTER
  footer: {
    copyright: "© Copyright by Do Nguyen Khoi - Test Engineer Portfolio.",
  },
};
