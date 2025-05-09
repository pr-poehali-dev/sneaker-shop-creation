
import React from 'react';
import Navbar from '@/components/Navbar';
import HeroBanner from '@/components/HeroBanner';
import ProductCard from '@/components/ProductCard';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Index = () => {
  // Sample products data
  const featuredProducts = [
    {
      id: '1',
      name: 'Nike Air Max 90',
      price: 12990,
      image: 'https://images.unsplash.com/photo-1605348532760-6753d2c43329?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      isNew: true,
    },
    {
      id: '2',
      name: 'Adidas Ultraboost 21',
      price: 15990,
      image: 'https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      discount: 15,
    },
    {
      id: '3',
      name: 'Puma RS-X Reinvention',
      price: 9990,
      image: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    },
    {
      id: '4',
      name: 'New Balance 574',
      price: 8990,
      image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      discount: 10,
    },
  ];

  const popularCategories = [
    { name: 'Для бега', icon: 'Running', href: '/category/running' },
    { name: 'Повседневные', icon: 'Footprints', href: '/category/casual' },
    { name: 'Для баскетбола', icon: 'Dribbble', href: '/category/basketball' },
    { name: 'Для тренировок', icon: 'Dumbbell', href: '/category/training' },
  ];

  const handleAddToCart = (id: string) => {
    console.log(`Added product ${id} to cart`);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar cartItemsCount={2} />
      
      <main>
        <section className="container py-8">
          <HeroBanner
            title="Новая коллекция 2025"
            subtitle="Откройте для себя революционный комфорт и стиль с нашей новой коллекцией кроссовок. Специальное предложение: скидка 20% на предзаказ."
            backgroundImage="https://images.unsplash.com/photo-1556906781-9a412961c28c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
            ctaText="Смотреть коллекцию"
            ctaLink="/collection/2025"
          />
        </section>

        <section className="container py-12">
          <div className="mb-8 flex items-center justify-between">
            <h2 className="text-2xl font-bold">Популярные категории</h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {popularCategories.map((category) => (
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

        <section className="container py-12">
          <div className="mb-8 flex items-center justify-between">
            <h2 className="text-2xl font-bold">Популярные модели</h2>
            <Button variant="outline" className="gap-2">
              Все товары
              <Icon name="ArrowRight" className="h-4 w-4" />
            </Button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                name={product.name}
                price={product.price}
                image={product.image}
                discount={product.discount}
                isNew={product.isNew}
                onAddToCart={handleAddToCart}
              />
            ))}
          </div>
        </section>

        <section className="container py-12">
          <div className="overflow-hidden rounded-lg bg-primary/5 p-8 md:p-12">
            <div className="grid gap-8 md:grid-cols-2 md:gap-12">
              <div className="flex flex-col justify-center">
                <h2 className="mb-4 text-2xl font-bold md:text-3xl">Подпишитесь на рассылку</h2>
                <p className="mb-6 text-muted-foreground">
                  Получайте информацию о новых поступлениях и эксклюзивных предложениях первыми
                </p>
                
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="Ваш email"
                    className="flex-grow rounded-lg border border-input bg-background px-4 py-2"
                  />
                  <Button className="bg-primary hover:bg-primary/90">Подписаться</Button>
                </div>
              </div>
              
              <div className="hidden md:flex justify-center items-center">
                <img 
                  src="https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                  alt="Кроссовки" 
                  className="h-64 w-64 object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <footer className="border-t bg-background">
        <div className="container py-8 md:py-12">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            <div>
              <h3 className="mb-4 text-lg font-medium">О компании</h3>
              <ul className="space-y-2">
                <li><a href="/about" className="text-muted-foreground hover:text-foreground">О нас</a></li>
                <li><a href="/stores" className="text-muted-foreground hover:text-foreground">Магазины</a></li>
                <li><a href="/careers" className="text-muted-foreground hover:text-foreground">Карьера</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="mb-4 text-lg font-medium">Помощь</h3>
              <ul className="space-y-2">
                <li><a href="/faq" className="text-muted-foreground hover:text-foreground">Вопросы и ответы</a></li>
                <li><a href="/delivery" className="text-muted-foreground hover:text-foreground">Доставка</a></li>
                <li><a href="/returns" className="text-muted-foreground hover:text-foreground">Возврат</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="mb-4 text-lg font-medium">Каталог</h3>
              <ul className="space-y-2">
                <li><a href="/mens" className="text-muted-foreground hover:text-foreground">Мужские</a></li>
                <li><a href="/womens" className="text-muted-foreground hover:text-foreground">Женские</a></li>
                <li><a href="/kids" className="text-muted-foreground hover:text-foreground">Детские</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="mb-4 text-lg font-medium">Контакты</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <Icon name="Phone" className="h-4 w-4 text-muted-foreground" />
                  <span className="text-muted-foreground">8 (800) 123-45-67</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Mail" className="h-4 w-4 text-muted-foreground" />
                  <span className="text-muted-foreground">info@sneakershop.ru</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mt-8 flex flex-col justify-between gap-4 border-t pt-8 md:flex-row">
            <p className="text-sm text-muted-foreground">© 2025 SneakerShop. Все права защищены.</p>
            
            <div className="flex gap-4">
              <a href="#" aria-label="Facebook">
                <Icon name="Facebook" className="h-5 w-5 text-muted-foreground hover:text-foreground" />
              </a>
              <a href="#" aria-label="Instagram">
                <Icon name="Instagram" className="h-5 w-5 text-muted-foreground hover:text-foreground" />
              </a>
              <a href="#" aria-label="Twitter">
                <Icon name="Twitter" className="h-5 w-5 text-muted-foreground hover:text-foreground" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
