import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { MapPin, Clock, Phone, Mail } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    nombre: '',
    telefono: '',
    barbero: '',
    servicio: '',
    fecha: '',
    hora: '',
    mensaje: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Formulario enviado:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contacto" className="relative py-32 bg-background">
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
            Reserva Tu Cita
          </h2>
          <p className="text-muted-foreground text-lg font-light max-w-2xl mx-auto leading-relaxed">
            Completa el formulario y nos pondremos en contacto contigo para confirmar tu reserva
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Card className="border-border/30 bg-card/30 backdrop-blur-sm elegant-shadow">
              <CardHeader className="pb-8">
                <CardTitle className="text-3xl font-display font-light tracking-wide">
                  Formulario de Reserva
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Nombre del Cliente */}
                  <div className="space-y-3">
                    <label htmlFor="nombre" className="text-sm font-light text-foreground tracking-wide">
                      Nombre del Cliente
                    </label>
                    <Input
                      id="nombre"
                      name="nombre"
                      placeholder="Tu nombre completo"
                      value={formData.nombre}
                      onChange={handleChange}
                      required
                      className="bg-background/50"
                    />
                  </div>

                  {/* Teléfono de Contacto */}
                  <div className="space-y-3">
                    <label htmlFor="telefono" className="text-sm font-light text-foreground tracking-wide">
                      Teléfono de Contacto <span className="text-muted-foreground text-xs">(opcional)</span>
                    </label>
                    <Input
                      id="telefono"
                      name="telefono"
                      type="tel"
                      placeholder="+34 600 000 000"
                      value={formData.telefono}
                      onChange={handleChange}
                      className="bg-background/50"
                    />
                  </div>

                  {/* Barbero y Servicio */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <label htmlFor="barbero" className="text-sm font-light text-foreground tracking-wide">
                        Barbero Deseado
                      </label>
                      <select
                        id="barbero"
                        name="barbero"
                        value={formData.barbero}
                        onChange={handleChange}
                        required
                        className="flex h-12 w-full rounded-md border border-input bg-background/50 px-4 py-3 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 transition-all font-light"
                      >
                        <option value="">Selecciona un barbero</option>
                        <option value="marco-rossi">Marco Rossi</option>
                        <option value="giovanni-conti">Giovanni Conti</option>
                        <option value="alessandro-bruno">Alessandro Bruno</option>
                        <option value="luca-ferretti">Luca Ferretti</option>
                      </select>
                    </div>
                    <div className="space-y-3">
                      <label htmlFor="servicio" className="text-sm font-light text-foreground tracking-wide">
                        Servicio Deseado
                      </label>
                      <select
                        id="servicio"
                        name="servicio"
                        value={formData.servicio}
                        onChange={handleChange}
                        required
                        className="flex h-12 w-full rounded-md border border-input bg-background/50 px-4 py-3 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 transition-all font-light"
                      >
                        <option value="">Selecciona un servicio</option>
                        <option value="corte">Corte</option>
                        <option value="barba">Barba</option>
                        <option value="corte-barba">Corte + Barba</option>
                        <option value="fade-premium">Fade Premium</option>
                        <option value="experiencia-vip">Experiencia VIP</option>
                      </select>
                    </div>
                  </div>

                  {/* Fecha y Hora Preferida */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <label htmlFor="fecha" className="text-sm font-light text-foreground tracking-wide">
                        Fecha Preferida
                      </label>
                      <Input
                        id="fecha"
                        name="fecha"
                        type="date"
                        value={formData.fecha}
                        onChange={handleChange}
                        required
                        className="bg-background/50"
                      />
                    </div>
                    <div className="space-y-3">
                      <label htmlFor="hora" className="text-sm font-light text-foreground tracking-wide">
                        Hora Preferida
                      </label>
                      <Input
                        id="hora"
                        name="hora"
                        type="time"
                        value={formData.hora}
                        onChange={handleChange}
                        required
                        className="bg-background/50"
                      />
                    </div>
                  </div>

                  {/* Mensaje Adicional */}
                  <div className="space-y-3">
                    <label htmlFor="mensaje" className="text-sm font-light text-foreground tracking-wide">
                      Mensaje Adicional <span className="text-muted-foreground text-xs">(opcional)</span>
                    </label>
                    <Textarea
                      id="mensaje"
                      name="mensaje"
                      placeholder="Déjanos saber si tienes alguna preferencia especial..."
                      value={formData.mensaje}
                      onChange={handleChange}
                      rows={4}
                      className="bg-background/50"
                    />
                  </div>

                  {/* Submit button */}
                  <Button type="submit" size="lg" className="w-full">
                    Confirmar Reserva
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <Card className="border-border/30 bg-card/30 backdrop-blur-sm elegant-shadow">
              <CardContent className="p-8">
                <div className="flex items-start gap-6">
                  <div className="p-3 rounded-full bg-primary/10 border border-primary/20">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-display text-xl font-light tracking-wide">Ubicación</h3>
                    <p className="text-muted-foreground font-light leading-relaxed">
                      Calle Principal 123<br />
                      28001 Madrid, España
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/30 bg-card/30 backdrop-blur-sm elegant-shadow">
              <CardContent className="p-8">
                <div className="flex items-start gap-6">
                  <div className="p-3 rounded-full bg-primary/10 border border-primary/20">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-display text-xl font-light tracking-wide">Horario</h3>
                    <p className="text-muted-foreground font-light leading-relaxed">
                      Lunes - Viernes: 9:00 AM - 8:00 PM<br />
                      Sábado: 9:00 AM - 6:00 PM<br />
                      Domingo: Cerrado
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/30 bg-card/30 backdrop-blur-sm elegant-shadow">
              <CardContent className="p-8">
                <div className="flex items-start gap-6">
                  <div className="p-3 rounded-full bg-primary/10 border border-primary/20">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-display text-xl font-light tracking-wide">Contacto</h3>
                    <p className="text-muted-foreground font-light">
                      <a href="tel:+34600000000" className="hover:text-primary transition-colors duration-300">
                        +34 600 000 000
                      </a>
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/30 bg-card/30 backdrop-blur-sm elegant-shadow">
              <CardContent className="p-8">
                <div className="flex items-start gap-6">
                  <div className="p-3 rounded-full bg-primary/10 border border-primary/20">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-display text-xl font-light tracking-wide">Email</h3>
                    <p className="text-muted-foreground font-light">
                      <a href="mailto:info@barberiaitaliana.com" className="hover:text-primary transition-colors duration-300">
                        info@barberiaitaliana.com
                      </a>
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
