import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Bot, ExternalLink, Sparkles } from "lucide-react";

const LivePriceBot = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5" id="price-bot">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="card-gradient shadow-hover p-8 md:p-12 border-primary/20 animate-fade-up">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                <div className="w-24 h-24 rounded-full bg-primary/20 flex items-center justify-center relative">
                  <Bot className="w-12 h-12 text-primary" />
                  <div className="absolute -top-2 -right-2">
                    <Sparkles className="w-6 h-6 text-accent animate-pulse" />
                  </div>
                </div>
              </div>
              
              <div className="flex-1 text-center md:text-left">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                  Check Today's Price
                </h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Talk to our AI-powered price prediction bot for real-time insights on commodity prices. Get instant answers about onion, potato, and pulses market trends.
                </p>
                
                <Button 
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-hover transition-smooth"
                  asChild
                >
                  <a 
                    href="https://huggingface.co/spaces/krishna1705/KRISHNApro" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Bot className="mr-2 w-5 h-5" />
                    Talk to Price Bot
                    <ExternalLink className="ml-2 w-4 h-4" />
                  </a>
                </Button>
              </div>
            </div>
            
            <div className="mt-8 pt-8 border-t border-border/50">
              <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                <span className="px-4 py-2 rounded-full bg-primary/10 text-sm font-medium text-foreground">
                  🧅 Onion Prices
                </span>
                <span className="px-4 py-2 rounded-full bg-primary/10 text-sm font-medium text-foreground">
                  🥔 Potato Prices
                </span>
                <span className="px-4 py-2 rounded-full bg-primary/10 text-sm font-medium text-foreground">
                  🫘 Pulses Prices
                </span>
              </div>
            </div>
          </Card>
        </div>
      </div>
      
      {/* Floating Bot Button */}
      <a
        href="https://huggingface.co/spaces/krishna1705/KRISHNApro"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full shadow-hover flex items-center justify-center transition-smooth hover:scale-110 group"
        aria-label="Open Price Prediction Bot"
      >
        <Bot className="w-7 h-7 group-hover:animate-bounce" />
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-accent rounded-full animate-pulse" />
      </a>
    </section>
  );
};

export default LivePriceBot;
