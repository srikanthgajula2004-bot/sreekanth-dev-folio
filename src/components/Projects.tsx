import { Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce application built with React, Spring Boot, and PostgreSQL. Features include user authentication, product catalog, shopping cart, and payment integration.",
      technologies: ["React", "Spring Boot", "PostgreSQL", "Redux", "Stripe"],
      github: "https://github.com/gajulasreekanth/ecommerce-platform",
      demo: "https://ecommerce-demo.example.com",
    },
    {
      title: "Task Management System",
      description:
        "A collaborative task management tool with real-time updates, team collaboration features, and advanced filtering. Built with microservices architecture for scalability.",
      technologies: ["React", "Java", "MongoDB", "WebSocket", "Docker"],
      github: "https://github.com/gajulasreekanth/task-manager",
      demo: "https://taskmanager-demo.example.com",
    },
    {
      title: "Social Media Analytics Dashboard",
      description:
        "An analytics dashboard that aggregates and visualizes social media metrics. Features include real-time data processing, custom reports, and predictive analytics.",
      technologies: ["TypeScript", "Spring Boot", "MySQL", "Chart.js", "Redis"],
      github: "https://github.com/gajulasreekanth/analytics-dashboard",
      demo: "https://analytics-demo.example.com",
    },
    {
      title: "API Gateway Service",
      description:
        "A robust API gateway built with Spring Cloud that handles authentication, rate limiting, and request routing for microservices architecture.",
      technologies: ["Java", "Spring Cloud", "Kubernetes", "JWT", "Docker"],
      github: "https://github.com/gajulasreekanth/api-gateway",
      demo: "https://gateway-demo.example.com",
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          Featured <span className="gradient-text">Projects</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className="glass-card hover:scale-105 transition-transform duration-300 animate-slide-up"
              style={{
                animationDelay: `${index * 0.1}s`,
              }}
            >
              <CardHeader>
                <CardTitle className="text-2xl">{project.title}</CardTitle>
                <CardDescription className="text-base">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs bg-secondary/10 text-secondary rounded-full border border-secondary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 pt-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1"
                    onClick={() => window.open(project.github, "_blank")}
                  >
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </Button>
                  <Button
                    size="sm"
                    className="flex-1 gradient-bg text-white"
                    onClick={() => window.open(project.demo, "_blank")}
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
