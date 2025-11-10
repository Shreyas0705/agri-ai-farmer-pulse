import { Leaf } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground/5 border-t border-border/50 py-12">
      <div className="container px-4">
        <div className="flex flex-col items-center text-center space-y-6">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
              <Leaf className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="text-2xl font-bold text-foreground">
              Agri<span className="text-primary">AI</span>
            </span>
          </div>

          {/* Tagline */}
          <p className="text-muted-foreground max-w-md">
            Empowering farmers with AI-driven insights for a sustainable and prosperous future.
          </p>

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <a href="#about" className="text-muted-foreground hover:text-primary transition-smooth">
              About
            </a>
            <a href="#how-it-works" className="text-muted-foreground hover:text-primary transition-smooth">
              How It Works
            </a>
            <a href="#features" className="text-muted-foreground hover:text-primary transition-smooth">
              Features
            </a>
            <a href="#price-bot" className="text-muted-foreground hover:text-primary transition-smooth">
              Price Bot
            </a>
            <a href="#contact" className="text-muted-foreground hover:text-primary transition-smooth">
              Contact
            </a>
          </div>

          {/* Copyright */}
          <div className="pt-6 border-t border-border/50 w-full">
            <p className="text-sm text-muted-foreground">
              © {currentYear} AgriAI — Developed by <span className="font-semibold text-foreground">Team SmartAgri</span>
            </p>
            <p className="text-xs text-muted-foreground mt-2">
              Built with ❤️ for Indian farmers
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
