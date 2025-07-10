import React from 'react';

const Footer = () => {
  return (
    <footer id="contact" className="text-center py-12 mt-16 border-t border-border/20">
      <h3 className="font-headline text-2xl text-primary">Get in Touch</h3>
      <p className="text-muted-foreground mt-2 mb-4">For bookings and inquiries, please reach out.</p>
      <a href="mailto:karinkedem14@gmail.com" className="text-accent-foreground font-semibold text-white hover:underline underline-offset-4">
        Karin Kedem's Email
      </a>
      <p className="text-sm text-muted-foreground/60 mt-8">&copy; {new Date().getFullYear()} Karin Kedem Music. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;