import {
  SiPython, SiNodedotjs, SiReact, SiAngular, SiNextdotjs, SiTypescript,
  SiPostgresql, SiMysql, SiMongodb, SiRedis, SiDocker, SiKubernetes,
  SiTerraform, SiAnsible, SiJenkins, SiGithubactions, SiGrafana, SiPrometheus,
  SiGooglecloud, SiFlutter, SiKotlin, SiSwift,
  SiTensorflow, SiPytorch, SiOpenai, SiApachekafka, SiElasticsearch,
  SiSnowflake,
} from "react-icons/si";
import { FaAws } from "react-icons/fa";

const categories = [
  {
    name: "AI & Machine Learning",
    techs: [
      { name: "OpenAI", icon: SiOpenai },
      { name: "TensorFlow", icon: SiTensorflow },
      { name: "PyTorch", icon: SiPytorch },
      { name: "Python", icon: SiPython },
    ],
  },
  {
    name: "Backend",
    techs: [
      { name: "Python", icon: SiPython },
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Kafka", icon: SiApachekafka },
      { name: "Elasticsearch", icon: SiElasticsearch },
    ],
  },
  {
    name: "Frontend",
    techs: [
      { name: "React", icon: SiReact },
      { name: "Angular", icon: SiAngular },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "TypeScript", icon: SiTypescript },
    ],
  },
  {
    name: "Mobile",
    techs: [
      { name: "Flutter", icon: SiFlutter },
      { name: "React Native", icon: SiReact },
      { name: "Kotlin", icon: SiKotlin },
      { name: "Swift", icon: SiSwift },
    ],
  },
  {
    name: "Databases",
    techs: [
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "MongoDB", icon: SiMongodb },
      { name: "MySQL", icon: SiMysql },
      { name: "Redis", icon: SiRedis },
    ],
  },
  {
    name: "DevOps & Cloud",
    techs: [
      { name: "AWS", icon: FaAws },
      { name: "GCP", icon: SiGooglecloud },
      { name: "Docker", icon: SiDocker },
      { name: "Kubernetes", icon: SiKubernetes },
    ],
  },
  {
    name: "Infrastructure",
    techs: [
      { name: "Terraform", icon: SiTerraform },
      { name: "Ansible", icon: SiAnsible },
      { name: "Jenkins", icon: SiJenkins },
      { name: "GitHub Actions", icon: SiGithubactions },
    ],
  },
  {
    name: "Data",
    techs: [
      { name: "Snowflake", icon: SiSnowflake },
      { name: "Prometheus", icon: SiPrometheus },
      { name: "Grafana", icon: SiGrafana },
      { name: "Kafka", icon: SiApachekafka },
    ],
  },
];

export default function TechStack() {
  return (
    <section id="tech-stack" data-testid="tech-stack-section" className="py-20 sm:py-24 md:py-32" style={{ backgroundColor: "#0B1B3D" }}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs font-semibold text-[#2563EB] uppercase tracking-widest mb-4">
            Platforms & Partners
          </p>
          <h2
            data-testid="tech-stack-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4"
            style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
          >
            Leveraging Best-in-Class Tech Foundations
          </h2>
          <p className="text-base text-slate-400 leading-relaxed">
            We leverage best-in-class technologies and strategic platform partnerships to deliver scalable, secure, and production-ready systems.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat) => (
            <div
              key={cat.name}
              data-testid={`tech-category-${cat.name.toLowerCase().replace(/[\s&]/g, "-")}`}
              className="border border-white/10 rounded-sm p-6"
            >
              <h3 className="text-sm font-semibold text-white/80 uppercase tracking-wider mb-6">
                {cat.name}
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {cat.techs.map((t) => (
                  <div key={t.name} className="flex flex-col items-center gap-2 py-3">
                    <t.icon className="text-2xl text-slate-400 hover:text-[#2563EB] transition-colors" />
                    <span className="text-xs text-slate-500 text-center">{t.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
