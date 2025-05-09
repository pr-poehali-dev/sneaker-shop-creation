
import React from 'react';
import Icon from '@/components/ui/icon';

interface Category {
  name: string;
  icon: string;
  href: string;
}

interface CategorySectionProps {
  title: string;
  categories: Category[];
}

const CategorySection: React.FC<CategorySectionProps> = ({ title, categories }) => {
  return (
    <section className="container py-12">
      <div className="mb-8 flex items-center justify-between">
        <h2 className="text-2xl font-bold">{title}</h2>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {categories.map((category) => (
          <a 
            key={category.name}
            href={category.href}
            className="flex flex-col items-center justify-center gap-3 rounded-lg border border-border bg-card p-6 text-center transition-all hover:bg-primary/5 hover:shadow-md"
          >
            <div className="rounded-full bg-primary/10 p-3">
              <Icon name={category.icon} className="h-6 w-6 text-primary" />
            </div>
            <span className="font-medium">{category.name}</span>
          </a>
        ))}
      </div>
    </section>
  );
};

export default CategorySection;
