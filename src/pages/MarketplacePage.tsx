import { useState, useMemo } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/marketplace/ProductCard";
import ProductFilters from "@/components/marketplace/ProductFilters";
import CheckoutModal from "@/components/marketplace/CheckoutModal";
import FarmerUploadModal from "@/components/marketplace/FarmerUploadModal";
import { Button } from "@/components/ui/button";
import { MessageCircle, User, ShoppingBag } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import marketplaceHero from "@/assets/marketplace-hero.jpg";
import onionImage from "@/assets/onion.jpg";
import potatoImage from "@/assets/potato.jpg";
import pulsesImage from "@/assets/pulses.jpg";

const MarketplacePage = () => {
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const [farmerUploadOpen, setFarmerUploadOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<string>("");
  const [sortBy, setSortBy] = useState("price-low");
  const [filterState, setFilterState] = useState("all");
  const [filterCrop, setFilterCrop] = useState("all");
  const { addToCart } = useCart();

  const allProducts = [
    {
      id: 1,
      name: "Fresh Red Onion",
      image: onionImage,
      price: 25,
      quantity: "500 kg",
      farmerName: "Ramesh Kumar",
      location: "Nashik, Maharashtra",
      type: "onion",
    },
    {
      id: 2,
      name: "Organic Potato",
      image: potatoImage,
      price: 18,
      quantity: "750 kg",
      farmerName: "Meena Devi",
      location: "Kanpur, Uttar Pradesh",
      type: "potato",
    },
    {
      id: 3,
      name: "Arhar Dal (Yellow)",
      image: pulsesImage,
      price: 85,
      quantity: "200 kg",
      farmerName: "Mohan Singh",
      location: "Indore, Madhya Pradesh",
      type: "pulses",
    },
    {
      id: 4,
      name: "Premium Onion",
      image: onionImage,
      price: 30,
      quantity: "300 kg",
      farmerName: "Suresh Patil",
      location: "Pune, Maharashtra",
      type: "onion",
    },
    {
      id: 5,
      name: "Fresh Potato",
      image: potatoImage,
      price: 20,
      quantity: "600 kg",
      farmerName: "Rajesh Kumar",
      location: "Agra, Uttar Pradesh",
      type: "potato",
    },
    {
      id: 6,
      name: "Toor Dal Premium",
      image: pulsesImage,
      price: 90,
      quantity: "150 kg",
      farmerName: "Vikram Rao",
      location: "Bhopal, Madhya Pradesh",
      type: "pulses",
    },
  ];

  // Filter and sort products
  const filteredAndSortedProducts = useMemo(() => {
    let filtered = [...allProducts];

    // Filter by state
    if (filterState !== "all") {
      filtered = filtered.filter((product) =>
        product.location.toLowerCase().includes(filterState.toLowerCase())
      );
    }

    // Filter by crop type
    if (filterCrop !== "all") {
      filtered = filtered.filter((product) => product.type === filterCrop);
    }

    // Sort products
    filtered.sort((a, b) => {
      switch (sortBy) {
        case "price-low":
          return a.price - b.price;
        case "price-high":
          return b.price - a.price;
        case "name":
          return a.name.localeCompare(b.name);
        case "location":
          return a.location.localeCompare(b.location);
        default:
          return 0;
      }
    });

    return filtered;
  }, [filterState, filterCrop, sortBy]);

  const handleAddToCart = (id: number) => {
    const product = allProducts.find((p) => p.id === id);
    if (product) {
      addToCart({
        id: product.id,
        name: product.name,
        image: product.image,
        price: product.price,
        farmerName: product.farmerName,
        location: product.location,
      });
    }
  };

  const handleBuyNow = (id: number) => {
    const product = allProducts.find((p) => p.id === id);
    if (product) {
      addToCart({
        id: product.id,
        name: product.name,
        image: product.image,
        price: product.price,
        farmerName: product.farmerName,
        location: product.location,
      });
      setSelectedProduct(product.name);
      setCheckoutOpen(true);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center justify-center text-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${marketplaceHero})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/95" />
        </div>
        
        <div className="relative z-10 container px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4 animate-fade-in">
            AgriAI <span className="text-primary">Marketplace</span>
          </h1>
          <p className="text-xl md:text-2xl font-semibold text-foreground mb-3">
            Fair Prices. Fresh Produce. Direct from the Farm.
          </p>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Purchase seasonal crops directly from verified farmers — powered by AgriAI
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8"
              onClick={() => setFarmerUploadOpen(true)}
            >
              <User className="w-5 h-5" />
              Sell Your Produce
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8"
              onClick={() => document.getElementById("products")?.scrollIntoView({ behavior: "smooth" })}
            >
              <ShoppingBag className="w-5 h-5" />
              Buy Fresh Now
            </Button>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-16 bg-muted/20">
        <div className="container px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
              Fresh from <span className="text-primary">Our Farmers</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Direct trade, transparent pricing, AI-verified quality
            </p>
          </div>

          <ProductFilters
            onSortChange={setSortBy}
            onStateFilter={setFilterState}
            onCropFilter={setFilterCrop}
            selectedSort={sortBy}
            selectedState={filterState}
            selectedCrop={filterCrop}
          />

          {filteredAndSortedProducts.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg">No products found matching your filters.</p>
              <Button
                variant="outline"
                className="mt-4"
                onClick={() => {
                  setSortBy("price-low");
                  setFilterState("all");
                  setFilterCrop("all");
                }}
              >
                Clear Filters
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredAndSortedProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  {...product}
                  onAddToCart={handleAddToCart}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Farmer Benefits Section */}
      <section className="py-16 bg-background">
        <div className="container px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
              Why List on <span className="text-primary">AgriAI Marketplace?</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center p-6 rounded-lg bg-muted/30 border border-border/50">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">💰</span>
              </div>
              <h3 className="font-bold text-xl text-foreground mb-2">Fair Pricing</h3>
              <p className="text-muted-foreground">
                AI-predicted prices ensure you get the best value for your produce
              </p>
            </div>

            <div className="text-center p-6 rounded-lg bg-muted/30 border border-border/50">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🤝</span>
              </div>
              <h3 className="font-bold text-xl text-foreground mb-2">No Middlemen</h3>
              <p className="text-muted-foreground">
                Connect directly with consumers and keep 100% of your profits
              </p>
            </div>

            <div className="text-center p-6 rounded-lg bg-muted/30 border border-border/50">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">📱</span>
              </div>
              <h3 className="font-bold text-xl text-foreground mb-2">Easy to Use</h3>
              <p className="text-muted-foreground">
                List your produce in minutes with our simple mobile-friendly interface
              </p>
            </div>
          </div>

          <div className="text-center mt-10">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
              onClick={() => setFarmerUploadOpen(true)}
            >
              Start Selling Today
            </Button>
          </div>
        </div>
      </section>

      {/* Floating Price Bot Button */}
      <a
        href="https://huggingface.co/spaces/krishna1705/KRISHNApro"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 group"
      >
        <Button
          size="lg"
          className="rounded-full shadow-elegant bg-primary hover:bg-primary/90 text-primary-foreground h-14 px-6 group-hover:scale-110 transition-smooth"
        >
          <MessageCircle className="w-5 h-5" />
          Check AI Prices
        </Button>
        <div className="absolute -top-12 right-0 bg-foreground text-background px-3 py-1 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-smooth whitespace-nowrap">
          Ask AI for today's mandi rates!
        </div>
      </a>

      <CheckoutModal
        open={checkoutOpen}
        onClose={() => setCheckoutOpen(false)}
        productName={selectedProduct}
      />

      <FarmerUploadModal
        open={farmerUploadOpen}
        onClose={() => setFarmerUploadOpen(false)}
      />

      <Footer />
    </div>
  );
};

export default MarketplacePage;
