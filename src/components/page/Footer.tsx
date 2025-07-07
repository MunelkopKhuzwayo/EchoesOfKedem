import React from 'react';

const Footer = () => {
  return (
    <footer id="contact" className="text-center py-12 mt-16 border-t border-border/20">
      <h3 className="font-headline text-2xl text-primary">Get in Touch</h3>
      <p className="text-muted-foreground mt-2 mb-4">For bookings and inquiries, please reach out.</p>
      <a href="mailto:contact@karinkedem.com" className="text-accent-foreground font-semibold hover:underline underline-offset-4">
        contact@karinkedem.com
      </a>
      <p className="text-sm text-muted-foreground/60 mt-8">&copy; {new Date().getFullYear()} Kedem Echoes. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;