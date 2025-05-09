
import React from 'react';
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  discount?: number;
  isNew?: boolean;
  onAddToCart: (id: string) => void;
  className?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  name,
  price,
  image,
  discount,
  isNew,
  onAddToCart,
  className,
}) => {
  const discountedPrice = discount ? price - (price * discount) / 100 : price;

  return (
    <div 
      className={cn(
        "group relative overflow-hidden rounded-lg border border-border bg-card p-3 transition-all duration-300 hover:shadow-lg hover:-translate-y-1",
        className
      )}
    >
      {(isNew || discount) && (
        <div className="absolute top-2 left-2 z-10 flex flex-col gap-2">
          {isNew && <Badge className="bg-primary text-white">Новинка</Badge>}
          {discount && (
            <Badge className="bg-destructive text-white">-{discount}%</Badge>
          )}
        </div>
      )}

      <div className="relative mb-4 aspect-square overflow-hidden rounded-md bg-muted">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="font-medium line-clamp-2 min-h-[2.5rem]">{name}</h3>
        
        <div className="flex items-center gap-2">
          <span className="text-lg font-bold text-primary">
            {discountedPrice.toLocaleString()} ₽
          </span>
          {discount && (
            <span className="text-sm text-muted-foreground line-through">
              {price.toLocaleString()} ₽
            </span>
          )}
        </div>

        <Button 
          onClick={() => onAddToCart(id)} 
          className="mt-2 w-full gap-2 bg-primary hover:bg-primary/90"
        >
          <Icon name="ShoppingBag" size={16} />
          В корзину
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
