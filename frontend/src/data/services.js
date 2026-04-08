export const services = {
  ai: {
    title: "Artificial Intelligence",
    items: [
      {
        slug: "ai-consulting",
        title: "AI Consulting",
        description: "Translate business goals into practical AI roadmaps with measurable ROI.",
        body: "We assess your data maturity, identify high-impact AI opportunities, and design an implementation plan that balances speed, cost, and risk.",
      },
      {
        slug: "rag-development",
        title: "RAG Development",
        description: "Ground LLM outputs with your private knowledge for accurate enterprise answers.",
        body: "We build retrieval pipelines with embeddings, vector search, and ranking layers to reduce hallucinations and improve relevance.",
      },
      {
        slug: "llm-development",
        title: "LLM Development",
        description: "Fine-tuned and optimized large language model systems for production workloads.",
        body: "From prompt systems to model tuning and guarded deployment, we deliver reliable LLM features with governance built in.",
      },
      {
        slug: "ai-app-development",
        title: "AI App Development",
        description: "Build AI-first products with modern UX, orchestration, and monitoring.",
        body: "We ship full applications that combine model inference, data pipelines, and secure APIs for real business outcomes.",
      },
      {
        slug: "ai-software-development",
        title: "AI Software Development",
        description: "Embed intelligence into your existing software ecosystem.",
        body: "We integrate predictive and generative capabilities into web, mobile, and internal systems without disruptive rewrites.",
      },
      {
        slug: "ai-integration",
        title: "AI Integration",
        description: "Connect AI services with your CRM, ERP, and data platforms.",
        body: "Our integration layer uses secure APIs and event pipelines so your teams can operationalize AI across departments.",
      },
    ],
  },
  data_engineering: {
    title: "Data Engineering",
    items: [
      {
        slug: "etl-pipeline-development",
        title: "ETL Pipeline Development",
        description: "Automated data movement and transformation for analytics-ready datasets.",
        body: "We design resilient ETL and ELT pipelines with quality checks, lineage, and observability.",
      },
      {
        slug: "data-warehouse-modernization",
        title: "Data Warehouse Modernization",
        description: "Upgrade legacy warehouses for scale, speed, and lower costs.",
        body: "Our modernization process improves modeling, orchestration, and query performance across BI workloads.",
      },
      {
        slug: "streaming-data-platforms",
        title: "Streaming Data Platforms",
        description: "Real-time ingestion and processing architectures for event-driven systems.",
        body: "We implement streaming infrastructure with durable event logs, transformation jobs, and low-latency serving.",
      },
    ],
  },
  generative_ai: {
    title: "Generative AI",
    items: [
      {
        slug: "copilot-development",
        title: "Copilot Development",
        description: "Task-focused copilots for teams across sales, ops, and support.",
        body: "We create role-based copilots with tool calling, contextual memory, and policy controls.",
      },
      {
        slug: "enterprise-chatbots",
        title: "Enterprise Chatbots",
        description: "Secure multi-channel assistants for internal and customer support.",
        body: "Our bots integrate with enterprise systems and handoff gracefully to humans when needed.",
      },
      {
        slug: "multimodal-ai-solutions",
        title: "Multimodal AI Solutions",
        description: "Text, image, audio, and document-aware experiences in one stack.",
        body: "We combine multimodal models and custom workflows to power richer user interactions.",
      },
    ],
  },
  devops: {
    title: "DevOps",
    items: [
      {
        slug: "ci-cd-automation",
        title: "CI/CD Automation",
        description: "Reliable release pipelines with quality and security gates.",
        body: "We automate build, test, and deployment flows to increase deployment frequency and confidence.",
      },
      {
        slug: "kubernetes-platform-engineering",
        title: "Kubernetes Platform Engineering",
        description: "Production Kubernetes setup for scalable, self-healing services.",
        body: "We establish platform standards, observability, and operational playbooks for cloud-native teams.",
      },
      {
        slug: "devsecops",
        title: "DevSecOps",
        description: "Security controls integrated into every delivery stage.",
        body: "We implement shift-left security, secrets management, and compliance checks in deployment pipelines.",
      },
    ],
  },
  development_services: {
    title: "Development Services",
    items: [
      {
        slug: "website-builder",
        title: "Website Builder",
        description: "High-performance marketing and product websites built for growth.",
        body: "We design and develop conversion-first sites with scalable component architecture.",
      },
      {
        slug: "custom-software-development",
        title: "Custom Software Development",
        description: "End-to-end engineering for internal tools and customer platforms.",
        body: "Our teams build secure, maintainable applications with modern frontend and backend stacks.",
      },
      {
        slug: "mobile-app-development",
        title: "Mobile App Development",
        description: "Cross-platform and native app delivery with API-first architecture.",
        body: "We ship mobile apps with robust backend integration, analytics, and release workflows.",
      },
    ],
  },
};

export const serviceCategories = Object.entries(services).map(([key, value]) => ({
  key,
  ...value,
}));

export const flatServices = serviceCategories.flatMap((category) =>
  category.items.map((item) => ({ ...item, categoryKey: category.key, categoryTitle: category.title }))
);

export const findServiceBySlug = (slug) => flatServices.find((item) => item.slug === slug);

export default services;
