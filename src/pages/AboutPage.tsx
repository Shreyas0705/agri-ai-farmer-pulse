import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Target, Eye, Award } from "lucide-react";
import { Card } from "@/components/ui/card";

const AboutPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Header */}
      <section className="pt-32 pb-12 bg-gradient-to-b from-primary/5 to-background">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-up">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
              About <span className="text-primary">AgriAI</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Revolutionizing agricultural commerce through artificial intelligence
            </p>
          </div>
        </div>
      </section>

      <About />

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-muted/30">
        <div className="container px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="card-gradient shadow-soft p-8 animate-fade-up">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 mb-6">
                <Target className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To empower farmers with cutting-edge AI technology, ensuring fair prices and eliminating exploitation through direct market access.
              </p>
            </Card>

            <Card className="card-gradient shadow-soft p-8 animate-fade-up" style={{ animationDelay: "150ms" }}>
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 mb-6">
                <Eye className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                A transparent agricultural ecosystem where technology bridges the gap between farmers and consumers, creating prosperity for all.
              </p>
            </Card>

            <Card className="card-gradient shadow-soft p-8 animate-fade-up" style={{ animationDelay: "300ms" }}>
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 mb-6">
                <Award className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">Our Values</h3>
              <p className="text-muted-foreground leading-relaxed">
                Transparency, innovation, fairness, and empowerment drive everything we do for India's farming community.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-background">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              Ready to Experience the Future of Farming?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Join thousands of farmers already benefiting from AI-powered insights
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/price-bot">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  Try Price Bot
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline">
                  Contact Us
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

export default AboutPage;
