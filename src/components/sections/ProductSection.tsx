
import React from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import ProductCard from '@/components/ProductCard';

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  discount?: number;
  isNew?: boolean;
}

interface ProductSectionProps {
  title: string;
  products: Product[];
  onAddToCart: (id: string) => void;
  viewAllLink?: string;
}

const ProductSection: React.FC<ProductSectionProps> = ({ 
  title, 
  products, 
  onAddToCart,
  viewAllLink = '/products' 
}) => {
  return (
    <section className="container py-12">
      <div className="mb-8 flex items-center justify-between">
        <h2 className="text-2xl font-bold">{title}</h2>
        <Button variant="outline" className="gap-2" asChild>
          <a href={viewAllLink}>
            Все товары
            <Icon name="ArrowRight" className="h-4 w-4" />
          </a>
        </Button>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            price={product.price}
            image={product.image}
            discount={product.discount}
            isNew={product.isNew}
            onAddToCart={onAddToCart}
          />
        ))}
      </div>
    </section>
  );
};

export default ProductSection;
