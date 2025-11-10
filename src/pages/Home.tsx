import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, TrendingUp, Users, BarChart3 } from "lucide-react";
import { Card } from "@/components/ui/card";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      
      {/* Quick Overview Section */}
      <section className="py-20 bg-background">
        <div className="container px-4">
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Why Choose <span className="text-primary">AgriAI</span>?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Transform the way you trade agricultural commodities
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="card-gradient shadow-soft hover:shadow-hover transition-smooth p-8 text-center animate-scale-in">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                <TrendingUp className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">Accurate Predictions</h3>
              <p className="text-muted-foreground">95% accuracy in price forecasting using advanced AI models</p>
            </Card>

            <Card className="card-gradient shadow-soft hover:shadow-hover transition-smooth p-8 text-center animate-scale-in" style={{ animationDelay: "150ms" }}>
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">Direct Trading</h3>
              <p className="text-muted-foreground">Connect with buyers and sellers without middlemen</p>
            </Card>

            <Card className="card-gradient shadow-soft hover:shadow-hover transition-smooth p-8 text-center animate-scale-in" style={{ animationDelay: "300ms" }}>
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                <BarChart3 className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">Real-Time Insights</h3>
              <p className="text-muted-foreground">Live market data and analytics at your fingertips</p>
            </Card>
          </div>

          <div className="text-center mt-12 animate-fade-up">
            <Link to="/about">
              <Button size="lg" variant="outline" className="group">
                Learn More About Us
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
