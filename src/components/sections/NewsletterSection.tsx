
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';

const NewsletterSection: React.FC = () => {
  const [email, setEmail] = useState('');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Здесь можно добавить логику подписки
    console.log('Subscribed email:', email);
    setEmail('');
    // TODO: Добавить уведомление об успешной подписке
  };

  return (
    <section className="container py-12">
      <div className="overflow-hidden rounded-lg bg-primary/5 p-8 md:p-12">
        <div className="grid gap-8 md:grid-cols-2 md:gap-12">
          <div className="flex flex-col justify-center">
            <h2 className="mb-4 text-2xl font-bold md:text-3xl">Подпишитесь на рассылку</h2>
            <p className="mb-6 text-muted-foreground">
              Получайте информацию о новых поступлениях и эксклюзивных предложениях первыми
            </p>
            
            <form onSubmit={handleSubmit} className="flex gap-2">
              <input
                type="email"
                placeholder="Ваш email"
                className="flex-grow rounded-lg border border-input bg-background px-4 py-2"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Button type="submit" className="bg-primary hover:bg-primary/90">
                Подписаться
              </Button>
            </form>
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
  );
};

export default NewsletterSection;
