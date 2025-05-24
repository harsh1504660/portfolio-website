
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-brand-deep-blue py-8 text-center">
      <div className="container mx-auto">
        <p className="text-sm text-brand-slate font-mono">
          Designed & Built by [Your Name] & Lovable AI
          <br />
          &copy; {currentYear}. All rights reserved.
        </p>
         <p className="text-xs text-brand-slate/70 mt-2">
            Inspired by Brittany Chiang's portfolio design.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
