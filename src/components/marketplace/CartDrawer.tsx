import { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetFooter,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { Minus, Plus, Trash2, ShoppingBag, IndianRupee } from "lucide-react";
import CheckoutModal from "./CheckoutModal";

interface CartDrawerProps {
  open: boolean;
  onClose: () => void;
}

const CartDrawer = ({ open, onClose }: CartDrawerProps) => {
  const { items, updateQuantity, removeFromCart, totalItems, totalPrice, clearCart } = useCart();
  const [checkoutOpen, setCheckoutOpen] = useState(false);

  const handleCheckout = () => {
    onClose();
    setCheckoutOpen(true);
  };

  return (
    <>
      <Sheet open={open} onOpenChange={onClose}>
        <SheetContent className="w-full sm:max-w-lg overflow-y-auto">
          <SheetHeader>
            <SheetTitle className="flex items-center gap-2 text-foreground">
              <ShoppingBag className="w-5 h-5 text-primary" />
              Shopping Cart ({totalItems} items)
            </SheetTitle>
          </SheetHeader>

          <div className="py-6 space-y-4">
            {items.length === 0 ? (
              <div className="text-center py-12">
                <ShoppingBag className="w-16 h-16 mx-auto text-muted-foreground mb-4" />
                <p className="text-muted-foreground text-lg">Your cart is empty</p>
                <p className="text-sm text-muted-foreground mt-2">
                  Start adding fresh produce from our farmers!
                </p>
              </div>
            ) : (
              <>
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="flex gap-4 p-4 border border-border/50 rounded-lg bg-muted/20"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded-md"
                    />
                    
                    <div className="flex-1 space-y-2">
                      <div>
                        <h4 className="font-semibold text-foreground">{item.name}</h4>
                        <p className="text-xs text-muted-foreground">
                          {item.farmerName}, {item.location}
                        </p>
                      </div>

                      <div className="flex items-center gap-2">
                        <IndianRupee className="w-4 h-4 text-primary" />
                        <span className="font-bold text-foreground">{item.price}</span>
                        <span className="text-muted-foreground text-sm">/kg</span>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 border border-border/50 rounded-md">
                          <Button
                            size="sm"
                            variant="ghost"
                            className="h-8 w-8 p-0"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          >
                            <Minus className="w-4 h-4" />
                          </Button>
                          
                          <span className="w-8 text-center font-semibold text-foreground">
                            {item.quantity}
                          </span>
                          
                          <Button
                            size="sm"
                            variant="ghost"
                            className="h-8 w-8 p-0"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          >
                            <Plus className="w-4 h-4" />
                          </Button>
                        </div>

                        <Button
                          size="sm"
                          variant="ghost"
                          className="text-destructive hover:text-destructive hover:bg-destructive/10"
                          onClick={() => removeFromCart(item.id)}
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>

                      <div className="text-sm font-semibold text-foreground">
                        Subtotal: ₹{item.price * item.quantity}
                      </div>
                    </div>
                  </div>
                ))}

                <div className="pt-4 border-t border-border/50 space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span className="font-semibold text-foreground">₹{totalPrice}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Delivery</span>
                    <span className="font-semibold text-primary">FREE</span>
                  </div>
                  <div className="flex justify-between text-lg font-bold pt-2 border-t border-border/50">
                    <span className="text-foreground">Total</span>
                    <span className="text-primary">₹{totalPrice}</span>
                  </div>
                </div>
              </>
            )}
          </div>

          {items.length > 0 && (
            <SheetFooter className="flex flex-col gap-2">
              <Button
                size="lg"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                onClick={handleCheckout}
              >
                Proceed to Checkout (₹{totalPrice})
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="w-full"
                onClick={clearCart}
              >
                Clear Cart
              </Button>
            </SheetFooter>
          )}
        </SheetContent>
      </Sheet>

      <CheckoutModal
        open={checkoutOpen}
        onClose={() => setCheckoutOpen(false)}
        productName={`${totalItems} items from cart`}
      />
    </>
  );
};

export default CartDrawer;
