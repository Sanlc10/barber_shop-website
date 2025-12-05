import { motion } from 'framer-motion';
import { Card, CardContent } from './ui/card';
import { Scissors, Award, Star, TrendingUp } from 'lucide-react';

const barbers = [
  {
    name: 'Marco Rossi',
    specialty: 'Cortes Clásicos & Fade',
    experience: '12 años de experiencia',
    icon: Scissors,
    gradient: 'from-primary/20 via-primary/10 to-transparent',
  },
  {
    name: 'Giovanni Conti',
    specialty: 'Barbería Tradicional',
    experience: '15 años de experiencia',
    icon: Award,
    gradient: 'from-primary/15 via-primary/8 to-transparent',
  },
  {
    name: 'Alessandro Bruno',
    specialty: 'Estilos Modernos',
    experience: '8 años de experiencia',
    icon: TrendingUp,
    gradient: 'from-primary/18 via-primary/9 to-transparent',
  },
  {
    name: 'Luca Ferretti',
    specialty: 'Diseño & Color',
    experience: '10 años de experiencia',
    icon: Star,
    gradient: 'from-primary/16 via-primary/7 to-transparent',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export default function Barbers() {
  return (
    <section id="barberos" className="relative py-32 bg-card/30">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="w-16 h-px bg-primary mx-auto mb-8"></div>
          <h2 className="text-5xl md:text-6xl font-display font-light mb-6 tracking-wide">
            Nuestro Equipo
          </h2>
          <p className="text-muted-foreground text-lg font-light max-w-2xl mx-auto leading-relaxed">
            Maestros barberos con pasión por la excelencia y el detalle
          </p>
        </motion.div>

        {/* Barbers grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto"
        >
          {barbers.map((barber, index) => {
            const Icon = barber.icon;
            return (
              <motion.div key={index} variants={itemVariants}>
                <Card className="h-full border-border/30 bg-background/50 backdrop-blur-sm hover:border-primary/30 transition-all duration-500 group elegant-shadow hover:subtle-glow overflow-hidden">
                  {/* Image placeholder with elegant gradient */}
                  <div className="relative h-80 overflow-hidden">
                    {/* Gradient background */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${barber.gradient}`}></div>

                    {/* Sophisticated pattern overlay */}
                    <div className="absolute inset-0 opacity-[0.03]">
                      <div className="absolute inset-0" style={{
                        backgroundImage: `radial-gradient(circle at 2px 2px, hsl(var(--primary)) 1px, transparent 0)`,
                        backgroundSize: '32px 32px',
                      }}></div>
                    </div>

                    {/* Centered icon */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="p-8 rounded-full bg-primary/10 border-2 border-primary/20 group-hover:border-primary/30 group-hover:scale-110 transition-all duration-500">
                        <Icon className="w-16 h-16 text-primary/70" />
                      </div>
                    </div>

                    {/* Subtle bottom fade */}
                    <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background/80 to-transparent"></div>
                  </div>

                  {/* Info section */}
                  <CardContent className="p-8 space-y-3">
                    <h3 className="text-2xl font-display font-normal tracking-wide text-foreground">
                      {barber.name}
                    </h3>
                    <p className="text-primary text-sm font-light tracking-wide">
                      {barber.specialty}
                    </p>
                    <p className="text-muted-foreground text-xs font-light tracking-wide pt-2 border-t border-border/20">
                      {barber.experience}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Additional info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-20 text-center"
        >
          <p className="text-muted-foreground font-light text-sm tracking-wide">
            Puedes solicitar tu barbero preferido al hacer la reserva
          </p>
        </motion.div>
      </div>
    </section>
  );
}
