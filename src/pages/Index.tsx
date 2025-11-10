import Hero from "@/components/Hero";
import About from "@/components/About";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import LivePriceBot from "@/components/LivePriceBot";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <HowItWorks />
      <Features />
      <LivePriceBot />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
