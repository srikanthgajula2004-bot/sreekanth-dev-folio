import { Mail, Github, Linkedin, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const contactLinks = [
    {
      icon: Mail,
      label: "Email",
      value: "gajula.sreekanth@example.com",
      href: "mailto:gajula.sreekanth@example.com",
      color: "text-primary",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/gajulasreekanth",
      href: "https://github.com/gajulasreekanth",
      color: "text-foreground",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/gajulasreekanth",
      href: "https://linkedin.com/in/gajulasreekanth",
      color: "text-accent",
    },
    {
      icon: Code2,
      label: "LeetCode",
      value: "leetcode.com/gajulasreekanth",
      href: "https://leetcode.com/gajulasreekanth",
      color: "text-secondary",
    },
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl font-bold text-center mb-12">
          Get In <span className="gradient-text">Touch</span>
        </h2>

        <div className="glass-card p-8 text-center animate-scale-in">
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            I'm always open to discussing new projects, opportunities, or just having a chat
            about technology. Feel free to reach out through any of the following channels:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {contactLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="glass-card p-6 hover:scale-105 transition-transform duration-300 group"
              >
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-lg bg-muted group-hover:scale-110 transition-transform ${link.color}`}>
                    <link.icon className="h-6 w-6" />
                  </div>
                  <div className="text-left">
                    <p className="font-semibold text-foreground">{link.label}</p>
                    <p className="text-sm text-muted-foreground">{link.value}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>

          <Button
            size="lg"
            className="gradient-bg text-white hover:opacity-90 transition-opacity"
            onClick={() => window.open("mailto:gajula.sreekanth@example.com", "_blank")}
          >
            <Mail className="mr-2 h-5 w-5" />
            Send an Email
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
