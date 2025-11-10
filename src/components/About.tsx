import { Sprout } from "lucide-react";

const About = () => {
  return (
    <section className="py-20 bg-background" id="about">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto text-center animate-fade-up">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
            <Sprout className="w-8 h-8 text-primary" />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            What is <span className="text-primary">AgriAI</span>?
          </h2>
          
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              AgriAI is a revolutionary platform that harnesses the power of <strong className="text-foreground">Artificial Intelligence</strong> and <strong className="text-foreground">Machine Learning</strong> to transform agricultural commerce in India.
            </p>
            
            <p>
              Our advanced hybrid ML models (LSTM + Prophet) analyze real-time data from mandis, weather patterns, and market demand to predict <strong className="text-foreground">next-day commodity prices</strong> for essential crops like onion, potato, and pulses with unprecedented accuracy.
            </p>
            
            <p>
              But we don't stop at predictions. AgriAI connects farmers directly to consumers through a <strong className="text-foreground">secure, transparent marketplace</strong>, eliminating middlemen and ensuring fair prices for both parties. Our government analytics dashboard provides policymakers with actionable insights to stabilize markets and support farmers.
            </p>
            
            <p className="text-xl font-semibold text-primary">
              Empowering farmers. Benefiting consumers. Building a fairer agricultural economy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
