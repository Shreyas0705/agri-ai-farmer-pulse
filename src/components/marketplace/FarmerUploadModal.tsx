import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import { Upload, Leaf } from "lucide-react";

interface FarmerUploadModalProps {
  open: boolean;
  onClose: () => void;
}

const FarmerUploadModal = ({ open, onClose }: FarmerUploadModalProps) => {
  const [formData, setFormData] = useState({
    cropName: "",
    quantity: "",
    price: "",
    location: "",
    image: null as File | null,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    toast({
      title: "Product Listed Successfully! 🌾",
      description: "Your produce has been added to the marketplace. Buyers will be able to see it soon.",
    });
    
    setFormData({
      cropName: "",
      quantity: "",
      price: "",
      location: "",
      image: null,
    });
    
    onClose();
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-foreground">
            <Leaf className="w-5 h-5 text-primary" />
            List Your Produce
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="space-y-2">
            <Label htmlFor="cropName">Crop Name *</Label>
            <Input
              id="cropName"
              required
              value={formData.cropName}
              onChange={(e) => setFormData({ ...formData, cropName: e.target.value })}
              placeholder="e.g., Onion, Potato, Arhar Dal"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="quantity">Available Quantity (kg) *</Label>
            <Input
              id="quantity"
              type="number"
              min="1"
              required
              value={formData.quantity}
              onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
              placeholder="Enter available quantity"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="price">Expected Price (₹/kg) *</Label>
            <Input
              id="price"
              type="number"
              min="1"
              required
              value={formData.price}
              onChange={(e) => setFormData({ ...formData, price: e.target.value })}
              placeholder="Enter your expected price"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="location">Your Location *</Label>
            <Input
              id="location"
              required
              value={formData.location}
              onChange={(e) => setFormData({ ...formData, location: e.target.value })}
              placeholder="City, State"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="image" className="flex items-center gap-2">
              <Upload className="w-4 h-4" />
              Upload Product Image
            </Label>
            <Input
              id="image"
              type="file"
              accept="image/*"
              onChange={(e) => setFormData({ ...formData, image: e.target.files?.[0] || null })}
              className="cursor-pointer"
            />
            <p className="text-xs text-muted-foreground">Upload a clear photo of your produce</p>
          </div>

          <div className="flex gap-2 pt-4">
            <Button type="button" variant="outline" onClick={onClose} className="flex-1">
              Cancel
            </Button>
            <Button type="submit" className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground">
              Submit Listing
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default FarmerUploadModal;
