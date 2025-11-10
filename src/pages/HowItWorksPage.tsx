import Navbar from "@/components/Navbar";
import HowItWorks from "@/components/HowItWorks";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const HowItWorksPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Header */}
      <section className="pt-32 pb-12 bg-gradient-to-b from-primary/5 to-background">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-up">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
              How It <span className="text-primary">Works</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Discover the technology powering India's smartest agri-marketplace
            </p>
          </div>
        </div>
      </section>

      <HowItWorks />

      {/* Technology Stack */}
      <section className="py-20 bg-background">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              Powered by Advanced Technology
            </h2>
            <p className="text-lg text-muted-foreground mb-12">
              Our hybrid ML model combines the strengths of LSTM (Long Short-Term Memory) and Prophet algorithms to deliver unparalleled accuracy in commodity price predictions.
            </p>

            <div className="grid md:grid-cols-2 gap-6 text-left mb-12">
              <div className="card-gradient shadow-soft p-6 rounded-lg border border-border/50">
                <h3 className="text-xl font-bold mb-3 text-foreground">LSTM Neural Networks</h3>
                <p className="text-muted-foreground">
                  Captures complex temporal patterns in historical price data, understanding seasonal variations and long-term trends.
                </p>
              </div>
              <div className="card-gradient shadow-soft p-6 rounded-lg border border-border/50">
                <h3 className="text-xl font-bold mb-3 text-foreground">Prophet Algorithm</h3>
                <p className="text-muted-foreground">
                  Handles missing data and outliers effectively, making predictions robust against market anomalies and irregularities.
                </p>
              </div>
            </div>

            <Link to="/features">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Explore All Features
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HowItWorksPage;
