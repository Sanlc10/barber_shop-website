import { motion } from 'framer-motion';
import fadeClasico from '../assets/fade_clasico.png';
import barbaDefinida from '../assets/barba_definida.png';
import estiloUrbano from '../assets/estilo_urbano.png';
import degradadoPremium from '../assets/degradado_premium.png';
import lookProfesional from '../assets/look_profesional.png';
import diseñoPersonalizado from '../assets/diseño_personalizado.png';

const galleryItems = [
  {
    id: 1,
    title: 'Fade Clásico',
    category: 'Corte',
    image: fadeClasico,
  },
  {
    id: 2,
    title: 'Barba Definida',
    category: 'Barbería',
    image: barbaDefinida,
  },
  {
    id: 3,
    title: 'Estilo Urbano',
    category: 'Corte',
    image: estiloUrbano,
  },
  {
    id: 4,
    title: 'Degradado Premium',
    category: 'Fade',
    image: degradadoPremium,
  },
  {
    id: 5,
    title: 'Look Profesional',
    category: 'Corte',
    image: lookProfesional,
  },
  {
    id: 6,
    title: 'Diseño Personalizado',
    category: 'Premium',
    image: diseñoPersonalizado,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
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

export default function Gallery() {
  return (
    <section id="galeria" className="relative py-32 bg-gradient-to-b from-background via-zinc-900/30 to-background">
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
            Nuestro Trabajo
          </h2>
          <p className="text-muted-foreground text-lg font-light max-w-2xl mx-auto leading-relaxed">
            Cada corte es una obra de arte. Descubre transformaciones reales de nuestros clientes
          </p>
        </motion.div>

        {/* Gallery grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
        >
          {galleryItems.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
              className="group relative aspect-square rounded-lg overflow-hidden cursor-pointer border border-border/30 elegant-shadow hover:border-primary/30 hover:subtle-glow"
            >
              {/* Background image */}
              <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${item.image})` }}
              ></div>

              {/* Dark overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/30 group-hover:from-black/95 group-hover:via-black/60 transition-all duration-500"></div>

              {/* Content overlay */}
              <div className="absolute inset-0 flex flex-col items-center justify-end p-8">
                {/* Title */}
                <h3 className="text-2xl font-display font-light text-foreground mb-3 text-center tracking-wide transform group-hover:scale-105 transition-transform duration-300">
                  {item.title}
                </h3>

                {/* Category badge */}
                <div className="px-4 py-1 border border-primary/40 rounded-full text-primary text-xs font-light uppercase tracking-wider bg-primary/5 backdrop-blur-sm">
                  {item.category}
                </div>

                {/* Minimal corner accents */}
                <div className="absolute top-4 left-4 w-6 h-6 border-t border-l border-primary/0 group-hover:border-primary/60 transition-all duration-300"></div>
                <div className="absolute bottom-4 right-4 w-6 h-6 border-b border-r border-primary/0 group-hover:border-primary/60 transition-all duration-300"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-20 text-center space-y-4"
        >
          <p className="text-muted-foreground font-light">
            ¿Listo para tu transformación?
          </p>
          <div className="inline-flex items-center gap-2 text-primary font-light text-sm uppercase tracking-wider">
            <span>Síguenos en Instagram</span>
            <motion.span
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              →
            </motion.span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
