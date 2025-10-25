import { Code2, Database, Server, Wrench } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: Code2,
      title: "Frontend",
      skills: [
        "React",
        "TypeScript",
        "JavaScript",
        "HTML5",
        "CSS3",
        "Tailwind CSS",
        "Redux",
      ],
    },
    {
      icon: Server,
      title: "Backend",
      skills: [
        "Java",
        "Spring Boot",
        "Spring Framework",
        "REST APIs",
        "Microservices",
        "Node.js",
      ],
    },
    {
      icon: Database,
      title: "Database",
      skills: [
        "PostgreSQL",
        "MySQL",
        "MongoDB",
        "Redis",
        "SQL",
      ],
    },
    {
      icon: Wrench,
      title: "Tools & Others",
      skills: [
        "Git",
        "GitHub",
        "Docker",
        "Maven",
        "Gradle",
        "AWS",
        "Linux",
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          Technical <span className="gradient-text">Skills</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="glass-card p-6 hover:scale-105 transition-transform duration-300"
              style={{
                animationDelay: `${index * 0.1}s`,
              }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg gradient-bg">
                  <category.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-sm bg-primary/10 text-primary rounded-full border border-primary/20"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
