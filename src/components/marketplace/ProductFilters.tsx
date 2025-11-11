import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Filter, ArrowUpDown } from "lucide-react";

interface ProductFiltersProps {
  onSortChange: (value: string) => void;
  onStateFilter: (value: string) => void;
  onCropFilter: (value: string) => void;
  selectedSort: string;
  selectedState: string;
  selectedCrop: string;
}

const ProductFilters = ({ onSortChange, onStateFilter, onCropFilter, selectedSort, selectedState, selectedCrop }: ProductFiltersProps) => {
  return (
    <div className="bg-muted/30 border border-border/50 rounded-lg p-4 mb-6">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1">
          <label className="text-sm font-medium text-foreground mb-2 flex items-center gap-2">
            <ArrowUpDown className="w-4 h-4 text-primary" />
            Sort By
          </label>
          <Select onValueChange={onSortChange} value={selectedSort}>
            <SelectTrigger className="bg-background">
              <SelectValue placeholder="Select sorting" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="price-low">Price: Low to High</SelectItem>
              <SelectItem value="price-high">Price: High to Low</SelectItem>
              <SelectItem value="name">Crop Name (A-Z)</SelectItem>
              <SelectItem value="location">Location</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex-1">
          <label className="text-sm font-medium text-foreground mb-2 flex items-center gap-2">
            <Filter className="w-4 h-4 text-primary" />
            Filter by State
          </label>
          <Select onValueChange={onStateFilter} value={selectedState}>
            <SelectTrigger className="bg-background">
              <SelectValue placeholder="Select state" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All States</SelectItem>
              <SelectItem value="maharashtra">Maharashtra</SelectItem>
              <SelectItem value="uttar pradesh">Uttar Pradesh</SelectItem>
              <SelectItem value="madhya pradesh">Madhya Pradesh</SelectItem>
              <SelectItem value="punjab">Punjab</SelectItem>
              <SelectItem value="gujarat">Gujarat</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex-1">
          <label className="text-sm font-medium text-foreground mb-2 flex items-center gap-2">
            <Filter className="w-4 h-4 text-primary" />
            Crop Type
          </label>
          <Select onValueChange={onCropFilter} value={selectedCrop}>
            <SelectTrigger className="bg-background">
              <SelectValue placeholder="Select crop" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Crops</SelectItem>
              <SelectItem value="onion">Onion</SelectItem>
              <SelectItem value="potato">Potato</SelectItem>
              <SelectItem value="pulses">Pulses/Dal</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
};

export default ProductFilters;
