
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Badge } from "@/components/ui/badge";

interface NavbarProps {
  cartItemsCount?: number;
}

const Navbar: React.FC<NavbarProps> = ({ cartItemsCount = 0 }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Главная', path: '/' },
    { name: 'Мужские', path: '/mens' },
    { name: 'Женские', path: '/womens' },
    { name: 'Детские', path: '/kids' },
    { name: 'О нас', path: '/about' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 text-xl font-bold text-primary">
          <Icon name="Footprints" className="h-6 w-6" />
          <span>SneakerShop</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="text-sm font-medium text-foreground transition-colors hover:text-primary"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" aria-label="Поиск">
            <Icon name="Search" className="h-5 w-5" />
          </Button>
          
          <Button variant="ghost" size="icon" aria-label="Аккаунт">
            <Icon name="User" className="h-5 w-5" />
          </Button>

          <Button variant="ghost" size="icon" className="relative" aria-label="Корзина">
            <Icon name="ShoppingBag" className="h-5 w-5" />
            {cartItemsCount > 0 && (
              <Badge 
                className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 flex items-center justify-center bg-primary text-primary-foreground"
              >
                {cartItemsCount}
              </Badge>
            )}
          </Button>

          {/* Mobile Menu Button */}
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Icon name="Menu" className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[70vw] sm:w-[350px]">
              <div className="flex flex-col gap-6 pt-6">
                <Link to="/" className="flex items-center gap-2 text-xl font-bold text-primary">
                  <Icon name="Footprints" className="h-6 w-6" />
                  <span>SneakerShop</span>
                </Link>
                
                <nav className="flex flex-col gap-4">
                  {navLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      className="text-foreground transition-colors hover:text-primary"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  ))}
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
