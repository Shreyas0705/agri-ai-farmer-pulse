import { Database, Brain, ShoppingBag } from "lucide-react";
import { Card } from "@/components/ui/card";

const steps = [
  {
    icon: Database,
    number: "01",
    title: "Collect Data",
    description: "We gather real-time data from mandis, weather APIs, government databases, and demand-supply trends across India."
  },
  {
    icon: Brain,
    number: "02",
    title: "AI Prediction",
    description: "Our hybrid ML models (LSTM + Prophet) analyze patterns and predict next-day commodity prices with 95% accuracy."
  },
  {
    icon: ShoppingBag,
    number: "03",
    title: "Direct Trading",
    description: "Farmers and consumers connect directly through our secure marketplace with transparent pricing and safe payment options."
  }
];

const HowItWorks = () => {
  return (
    <section className="py-20 bg-muted/30" id="how-it-works">
      <div className="container px-4">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Three simple steps to revolutionize agricultural commerce
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <Card 
              key={index}
              className="card-gradient shadow-soft hover:shadow-hover transition-smooth p-8 border-border/50 animate-scale-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="relative mb-6">
                <div className="absolute -top-4 -left-4 text-8xl font-bold text-primary/10">
                  {step.number}
                </div>
                <div className="relative z-10 inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary text-primary-foreground">
                  <step.icon className="w-8 h-8" />
                </div>
              </div>
              
              <h3 className="text-2xl font-bold mb-4 text-foreground">
                {step.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
