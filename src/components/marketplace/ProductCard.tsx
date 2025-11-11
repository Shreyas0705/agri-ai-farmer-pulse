import { MapPin, IndianRupee, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ProductCardProps {
  id: number;
  name: string;
  image: string;
  price: number;
  quantity: string;
  farmerName: string;
  location: string;
  aiPredicted?: boolean;
  onAddToCart: (id: number) => void;
}

const ProductCard = ({
  id,
  name,
  image,
  price,
  quantity,
  farmerName,
  location,
  aiPredicted = true,
  onAddToCart,
}: ProductCardProps) => {
  return (
    <Card className="group hover:shadow-elegant transition-smooth overflow-hidden border-border/50">
      <div className="relative overflow-hidden h-48">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-110 transition-smooth"
        />
        {aiPredicted && (
          <Badge className="absolute top-3 right-3 bg-primary text-primary-foreground shadow-soft">
            AI Predicted
          </Badge>
        )}
      </div>
      
      <CardContent className="p-4 space-y-3">
        <div>
          <h3 className="font-bold text-lg text-foreground">{name}</h3>
          <div className="flex items-center gap-1 text-sm text-muted-foreground mt-1">
            <MapPin className="w-4 h-4" />
            <span>{farmerName}, {location}</span>
          </div>
        </div>

        <div className="flex items-baseline gap-1">
          <IndianRupee className="w-5 h-5 text-primary" />
          <span className="text-2xl font-bold text-foreground">{price}</span>
          <span className="text-muted-foreground">/kg</span>
        </div>

        <div className="text-sm text-muted-foreground">
          Available: <span className="font-semibold text-foreground">{quantity}</span>
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0 gap-2">
        <Button
          className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground"
          onClick={() => onAddToCart(id)}
        >
          <ShoppingCart className="w-4 h-4" />
          Add to Cart
        </Button>
        <Button
          variant="outline"
          className="flex-1"
          onClick={() => onAddToCart(id)}
        >
          Buy Now
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
