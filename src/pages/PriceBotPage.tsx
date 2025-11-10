import Navbar from "@/components/Navbar";
import LivePriceBot from "@/components/LivePriceBot";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { MessageSquare, Clock, TrendingUp, BarChart2 } from "lucide-react";

const PriceBotPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Header */}
      <section className="pt-32 pb-12 bg-gradient-to-b from-primary/5 to-background">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-up">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
              AI Price <span className="text-primary">Prediction Bot</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Get instant, accurate price forecasts for onion, potato, and pulses
            </p>
          </div>
        </div>
      </section>

      <LivePriceBot />

      {/* How to Use */}
      <section className="py-20 bg-background">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-foreground animate-fade-up">
              How to Use the Price Bot
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="card-gradient shadow-soft p-6 border-border/50 animate-fade-up">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MessageSquare className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2 text-foreground">Ask Questions</h3>
                    <p className="text-muted-foreground">
                      Simply type your question about commodity prices, market trends, or forecasts.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="card-gradient shadow-soft p-6 border-border/50 animate-fade-up" style={{ animationDelay: "150ms" }}>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2 text-foreground">Instant Response</h3>
                    <p className="text-muted-foreground">
                      Get real-time answers powered by our AI models trained on historical data.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="card-gradient shadow-soft p-6 border-border/50 animate-fade-up" style={{ animationDelay: "300ms" }}>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2 text-foreground">Price Predictions</h3>
                    <p className="text-muted-foreground">
                      Get tomorrow's predicted prices and understand market movements.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="card-gradient shadow-soft p-6 border-border/50 animate-fade-up" style={{ animationDelay: "450ms" }}>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <BarChart2 className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2 text-foreground">Market Insights</h3>
                    <p className="text-muted-foreground">
                      Understand factors affecting prices and make informed trading decisions.
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            <div className="mt-12 p-8 bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg border border-primary/20 animate-fade-up">
              <h3 className="text-2xl font-bold mb-4 text-center text-foreground">
                Example Questions You Can Ask
              </h3>
              <div className="grid md:grid-cols-2 gap-4 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <span className="text-primary">•</span>
                  <span>"What will be the onion price tomorrow?"</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-primary">•</span>
                  <span>"Show me potato price trends for this week"</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-primary">•</span>
                  <span>"Compare pulses prices across mandis"</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-primary">•</span>
                  <span>"What factors are affecting prices today?"</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PriceBotPage;
