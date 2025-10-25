const About = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl font-bold text-center mb-12">
          About <span className="gradient-text">Me</span>
        </h2>

        <div className="glass-card p-8 animate-slide-up">
          <div className="space-y-6 text-lg text-muted-foreground">
            <p className="leading-relaxed">
              I'm a passionate software developer with a strong focus on creating{" "}
              <span className="text-primary font-semibold">
                robust, scalable, and efficient applications
              </span>
              . With expertise spanning both frontend and backend technologies, I thrive on
              solving complex problems and building solutions that make a difference.
            </p>

            <p className="leading-relaxed">
              My journey in software development has equipped me with a deep understanding of{" "}
              <span className="text-accent font-semibold">
                full-stack development
              </span>
              , from crafting intuitive user interfaces with React to designing powerful backend
              systems with Java and Spring Boot. I'm constantly learning and adapting to new
              technologies to stay at the forefront of the industry.
            </p>

            <p className="leading-relaxed">
              When I'm not coding, you'll find me exploring new frameworks, contributing to
              open-source projects, or sharing my knowledge with the developer community. I
              believe in writing clean, maintainable code and following best practices to deliver
              high-quality software.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
