import Hero from './components/Hero';
import Services from './components/Services';
import Gallery from './components/Gallery';
import ContactForm from './components/ContactForm';
import { Scissors, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/70 backdrop-blur-md border-b border-border/20">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-full border border-primary/30 bg-primary/5">
                <Scissors className="w-5 h-5 text-primary" />
              </div>
              <span className="text-xl font-display font-light tracking-wide">
                Barbería Italiana
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-10">
              <button
                onClick={() => scrollToSection('servicios')}
                className="text-sm font-light tracking-wide hover:text-primary transition-colors duration-300"
              >
                Servicios
              </button>
              <button
                onClick={() => scrollToSection('galeria')}
                className="text-sm font-light tracking-wide hover:text-primary transition-colors duration-300"
              >
                Galería
              </button>
              <button
                onClick={() => scrollToSection('contacto')}
                className="text-sm font-light tracking-wide hover:text-primary transition-colors duration-300"
              >
                Contacto
              </button>
              <button
                onClick={() => scrollToSection('contacto')}
                className="px-6 py-2 border border-primary/60 text-primary hover:bg-primary/5 rounded-md font-light transition-all duration-300 tracking-wide text-sm"
              >
                Reservar
              </button>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 hover:bg-muted/30 rounded-md transition-colors"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-border/20 bg-background/95 backdrop-blur-md"
            >
              <div className="container mx-auto px-4 py-6 space-y-4">
                <button
                  onClick={() => scrollToSection('servicios')}
                  className="block w-full text-left font-light text-base tracking-wide hover:text-primary transition-colors py-2"
                >
                  Servicios
                </button>
                <button
                  onClick={() => scrollToSection('galeria')}
                  className="block w-full text-left font-light text-base tracking-wide hover:text-primary transition-colors py-2"
                >
                  Galería
                </button>
                <button
                  onClick={() => scrollToSection('contacto')}
                  className="block w-full text-left font-light text-base tracking-wide hover:text-primary transition-colors py-2"
                >
                  Contacto
                </button>
                <button
                  onClick={() => scrollToSection('contacto')}
                  className="w-full px-6 py-3 border border-primary/60 text-primary hover:bg-primary/5 rounded-md font-light transition-all duration-300 tracking-wide"
                >
                  Reservar Cita
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Main Content */}
      <main>
        <Hero />
        <Services />
        <Gallery />
        <ContactForm />
      </main>

      {/* Footer */}
      <footer className="relative bg-background border-t border-border/20 py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-12 mb-16">
            {/* Brand */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-full border border-primary/30 bg-primary/5">
                  <Scissors className="w-4 h-4 text-primary" />
                </div>
                <span className="text-lg font-display font-light tracking-wide">
                  Barbería Italiana
                </span>
              </div>
              <p className="text-muted-foreground text-sm font-light leading-relaxed">
                Donde el estilo se encuentra con la precisión
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-6">
              <h4 className="font-display text-lg font-light tracking-wide">Enlaces Rápidos</h4>
              <div className="space-y-3">
                <button
                  onClick={() => scrollToSection('servicios')}
                  className="block text-muted-foreground hover:text-primary transition-colors text-sm font-light"
                >
                  Servicios
                </button>
                <button
                  onClick={() => scrollToSection('galeria')}
                  className="block text-muted-foreground hover:text-primary transition-colors text-sm font-light"
                >
                  Galería
                </button>
                <button
                  onClick={() => scrollToSection('contacto')}
                  className="block text-muted-foreground hover:text-primary transition-colors text-sm font-light"
                >
                  Contacto
                </button>
              </div>
            </div>

            {/* Contact */}
            <div className="space-y-6">
              <h4 className="font-display text-lg font-light tracking-wide">Contacto</h4>
              <div className="space-y-2 text-sm text-muted-foreground font-light leading-relaxed">
                <p>Calle Principal 123</p>
                <p>28001 Madrid, España</p>
                <p className="hover:text-primary transition-colors cursor-pointer">+34 600 000 000</p>
                <p className="hover:text-primary transition-colors cursor-pointer">info@barberiaitaliana.com</p>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="pt-8 border-t border-border/10 text-center">
            <p className="text-xs text-muted-foreground font-light tracking-wide">
              © 2024 Barbería Italiana. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
