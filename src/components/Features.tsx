import { TrendingUp, Store, BarChart3, CreditCard, Globe2, Shield } from "lucide-react";
import { Card } from "@/components/ui/card";

const features = [
  {
    icon: TrendingUp,
    title: "AI Price Prediction",
    description: "95% accurate next-day price forecasts using hybrid LSTM + Prophet models for onion, potato, and pulses."
  },
  {
    icon: Store,
    title: "Direct Marketplace",
    description: "Connect farmers with consumers directly, eliminating middlemen and ensuring fair prices for everyone."
  },
  {
    icon: BarChart3,
    title: "Government Analytics",
    description: "Real-time dashboard for policymakers to monitor market trends and make data-driven decisions."
  },
  {
    icon: CreditCard,
    title: "Secure Payments",
    description: "Multiple payment options including UPI, cards, and net banking with bank-grade security."
  },
  {
    icon: Globe2,
    title: "Multilingual Support",
    description: "Available in Hindi, English, and regional languages to serve farmers across India."
  },
  {
    icon: Shield,
    title: "Trust & Transparency",
    description: "Verified sellers, quality assurance, and transparent pricing to build trust in the ecosystem."
  }
];

const Features = () => {
  return (
    <section className="py-20 bg-background" id="features">
      <div className="container px-4">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Powerful Features
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to make informed agricultural decisions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="card-gradient shadow-soft hover:shadow-hover transition-smooth p-8 border-border/50 group animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 group-hover:bg-primary transition-smooth mb-6">
                <feature.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-smooth" />
              </div>
              
              <h3 className="text-xl font-bold mb-3 text-foreground">
                {feature.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
