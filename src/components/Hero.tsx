import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8"
    >
      <div className="container mx-auto text-center animate-fade-in">
        <div className="space-y-6 max-w-4xl mx-auto">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
            Hi, I'm{" "}
            <span className="gradient-text">Gajula Sreekanth</span>
          </h1>

          <p className="text-xl sm:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Software Developer passionate about building{" "}
            <span className="text-primary font-semibold">
              scalable
            </span>{" "}
            and{" "}
            <span className="text-accent font-semibold">efficient</span>{" "}
            applications
          </p>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Specializing in Full Stack Development with Java, Spring Boot, React, and modern web technologies
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-8">
            <Button
              size="lg"
              className="gradient-bg text-white hover:opacity-90 transition-opacity"
              onClick={() => {
                document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              View Projects
              <ExternalLink className="ml-2 h-4 w-4" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              onClick={() => {
                document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Get in Touch
            </Button>
          </div>

          <div className="flex items-center justify-center gap-6 pt-8">
            <a
              href="https://github.com/gajulasreekanth"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://linkedin.com/in/gajulasreekanth"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="mailto:gajula.sreekanth@example.com"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
