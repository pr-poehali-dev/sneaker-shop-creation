
import React from 'react';
import Icon from '@/components/ui/icon';

interface FooterLink {
  title: string;
  href: string;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

interface FooterProps {
  sections: FooterSection[];
}

const Footer: React.FC<FooterProps> = ({ sections }) => {
  return (
    <footer className="border-t bg-background">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {sections.map((section, index) => (
            <div key={index}>
              <h3 className="mb-4 text-lg font-medium">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a 
                      href={link.href} 
                      className="text-muted-foreground hover:text-foreground"
                    >
                      {link.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          
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
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} SneakerShop. Все права защищены.</p>
          
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
  );
};

export default Footer;
