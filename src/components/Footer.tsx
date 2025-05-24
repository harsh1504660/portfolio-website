import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-brand-deep-blue py-8 text-center">
      <div className="container mx-auto">
        <p className="text-sm text-brand-slate font-mono">
          Designed & Built by Harsh Joshi
          <br />
          &copy; {currentYear}. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
