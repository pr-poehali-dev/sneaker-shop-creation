
import React from 'react';
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

interface HeroBannerProps {
  title: string;
  subtitle: string;
  backgroundImage: string;
  ctaText: string;
  ctaLink: string;
}

const HeroBanner: React.FC<HeroBannerProps> = ({
  title,
  subtitle,
  backgroundImage,
  ctaText,
  ctaLink
}) => {
  return (
    <div 
      className="relative overflow-hidden rounded-lg bg-cover bg-center py-16 md:py-24 px-6"
      style={{ 
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${backgroundImage})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover'
      }}
    >
      <div className="container relative z-10 mx-auto">
        <div className="max-w-2xl">
          <h1 className="mb-4 text-3xl md:text-5xl font-bold tracking-tight text-white animate-fade-in">
            {title}
          </h1>
          <p className="mb-8 text-lg text-gray-100 md:text-xl animate-fade-in opacity-90">
            {subtitle}
          </p>
          <Button 
            asChild 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-white animate-fade-in px-8 group"
          >
            <a href={ctaLink}>
              {ctaText}
              <Icon name="ArrowRight" className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
        </div>
      </div>

      {/* Animated shapes */}
      <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-64 h-64 opacity-50 rounded-full bg-primary/40 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-64 h-64 opacity-50 rounded-full bg-primary/40 blur-3xl"></div>
    </div>
  );
};

export default HeroBanner;
