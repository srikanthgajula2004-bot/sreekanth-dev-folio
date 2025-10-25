const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-border">
      <div className="container mx-auto text-center">
        <p className="text-muted-foreground">
          © {currentYear} Gajula Sreekanth. Built with React, TypeScript, and Tailwind CSS.
        </p>
        <p className="text-sm text-muted-foreground mt-2">
          Designed & Developed with <span className="text-primary">♥</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
