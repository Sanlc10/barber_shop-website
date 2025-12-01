import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Scissors, Sparkles, Zap, Crown } from 'lucide-react';

const services = [
  {
    icon: Scissors,
    title: 'Corte Clásico',
    description: 'Corte tradicional con técnicas modernas para un look atemporal',
    price: '$25',
  },
  {
    icon: Sparkles,
    title: 'Fade Premium',
    description: 'Degradado perfecto con detalles de precisión y acabado impecable',
    price: '$35',
  },
  {
    icon: Zap,
    title: 'Afeitado & Barba',
    description: 'Servicio completo de barbería con toalla caliente y aceites premium',
    price: '$30',
  },
  {
    icon: Crown,
    title: 'Experiencia VIP',
    description: 'Corte + Barba + Tratamiento facial completo',
    price: '$60',
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

export default function Services() {
  return (
    <section id="servicios" className="relative py-32 bg-background">
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
            Nuestros Servicios
          </h2>
          <p className="text-muted-foreground text-lg font-light max-w-2xl mx-auto leading-relaxed">
            Servicios de barbería profesional diseñados para el hombre moderno
          </p>
        </motion.div>

        {/* Services grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div key={index} variants={itemVariants}>
                <Card className="h-full border-border/30 bg-card/50 backdrop-blur-sm hover:border-primary/30 transition-all duration-500 group elegant-shadow hover:subtle-glow">
                  <CardHeader className="space-y-6 pb-4">
                    <div className="flex items-center justify-between">
                      <div className="p-3 rounded-full bg-primary/10 border border-primary/20 group-hover:bg-primary/15 transition-colors duration-300">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <span className="text-3xl font-display font-light text-primary tracking-wide">
                        {service.price}
                      </span>
                    </div>
                    <CardTitle className="text-2xl font-display font-normal tracking-wide">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed font-light">
                      {service.description}
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
            Todos los servicios incluyen consulta personalizada
          </p>
        </motion.div>
      </div>
    </section>
  );
}
