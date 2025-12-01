import { motion } from 'framer-motion';
import { Button } from './ui/button';
import heroImage from '../assets/hero.png';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      ></div>

      {/* Dark overlay for readability and aesthetic */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-background"></div>

      {/* Subtle accent gradient */}
      <div className="absolute inset-0 bg-gradient-radial from-primary/8 via-transparent to-transparent opacity-30"></div>

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-4 text-center max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="space-y-12"
        >
          {/* Minimal accent line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="w-16 h-px bg-primary mx-auto"
          />

          {/* Main title */}
          <div className="space-y-4">
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="text-6xl md:text-8xl font-display font-light leading-tight tracking-wide"
            >
              Barbería Italiana
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="w-24 h-px bg-primary/40 mx-auto"
            />
          </div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="text-xl md:text-2xl text-muted-foreground font-light tracking-wide leading-relaxed max-w-2xl mx-auto"
          >
            Donde el estilo se encuentra con la precisión
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8"
          >
            <Button
              size="lg"
              className="min-w-[200px] transition-all duration-300 hover:scale-105"
            >
              Reservar Cita
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="min-w-[200px] transition-all duration-300 hover:scale-105"
            >
              Ver Servicios
            </Button>
          </motion.div>

          {/* Bottom info */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.1 }}
            className="pt-16 text-sm text-muted-foreground font-light tracking-wider"
          >
            <p>Lun - Sáb: 9:00 AM - 8:00 PM</p>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
}
