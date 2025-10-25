import { Briefcase, Calendar } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Senior Software Developer",
      company: "Tech Innovations Inc.",
      period: "2022 - Present",
      description:
        "Leading development of enterprise-scale applications using Java, Spring Boot, and React. Architected microservices-based solutions serving 100k+ users. Mentored junior developers and established coding best practices.",
      highlights: [
        "Reduced API response time by 40% through optimization",
        "Led migration to microservices architecture",
        "Implemented CI/CD pipelines reducing deployment time by 60%",
      ],
    },
    {
      title: "Full Stack Developer",
      company: "Digital Solutions Ltd.",
      period: "2020 - 2022",
      description:
        "Developed and maintained full-stack applications using Java, Spring Framework, React, and PostgreSQL. Collaborated with cross-functional teams to deliver high-quality software solutions.",
      highlights: [
        "Built 5+ production-ready web applications",
        "Improved application performance by 35%",
        "Integrated third-party APIs and payment gateways",
      ],
    },
    {
      title: "Software Developer",
      company: "StartUp Ventures",
      period: "2018 - 2020",
      description:
        "Contributed to development of SaaS products using modern web technologies. Worked on both frontend and backend development, focusing on creating scalable and maintainable code.",
      highlights: [
        "Developed RESTful APIs serving 10k+ requests/day",
        "Implemented responsive UI components",
        "Participated in agile development processes",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl font-bold text-center mb-12">
          Work <span className="gradient-text">Experience</span>
        </h2>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div
              key={exp.title}
              className="glass-card p-6 animate-slide-up"
              style={{
                animationDelay: `${index * 0.1}s`,
              }}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-2xl font-semibold flex items-center gap-2">
                    <Briefcase className="h-5 w-5 text-primary" />
                    {exp.title}
                  </h3>
                  <p className="text-lg text-muted-foreground mt-1">{exp.company}</p>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span className="text-sm font-medium">{exp.period}</span>
                </div>
              </div>

              <p className="text-muted-foreground mb-4">{exp.description}</p>

              <div className="space-y-2">
                <p className="text-sm font-semibold text-primary">Key Achievements:</p>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  {exp.highlights.map((highlight, i) => (
                    <li key={i} className="text-sm">
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
