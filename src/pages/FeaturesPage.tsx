import Navbar from "@/components/Navbar";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const FeaturesPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Header */}
      <section className="pt-32 pb-12 bg-gradient-to-b from-primary/5 to-background">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-up">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
              Powerful <span className="text-primary">Features</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Everything you need to succeed in modern agricultural commerce
            </p>
          </div>
        </div>
      </section>

      <Features />

      {/* Additional Benefits */}
      <section className="py-20 bg-muted/30">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-foreground animate-fade-up">
              Built for Everyone
            </h2>

            <div className="space-y-8">
              <div className="card-gradient shadow-soft p-8 rounded-lg border border-border/50 animate-fade-up">
                <h3 className="text-2xl font-bold mb-4 text-primary">For Farmers</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span>Know the best time to sell your crops with accurate price predictions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span>Reach buyers directly without middlemen taking your profits</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span>Get instant payments through secure, verified transactions</span>
                  </li>
                </ul>
              </div>

              <div className="card-gradient shadow-soft p-8 rounded-lg border border-border/50 animate-fade-up" style={{ animationDelay: "150ms" }}>
                <h3 className="text-2xl font-bold mb-4 text-primary">For Consumers</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span>Buy fresh produce directly from farmers at fair prices</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span>Know you're getting quality-verified products every time</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span>Support local farmers and sustainable agriculture</span>
                  </li>
                </ul>
              </div>

              <div className="card-gradient shadow-soft p-8 rounded-lg border border-border/50 animate-fade-up" style={{ animationDelay: "300ms" }}>
                <h3 className="text-2xl font-bold mb-4 text-primary">For Policymakers</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span>Access real-time market analytics and price trends</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span>Make data-driven decisions to stabilize markets</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span>Monitor supply chains and prevent artificial price inflation</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="text-center mt-12 animate-fade-up">
              <Link to="/price-bot">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  Try It Now
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FeaturesPage;
