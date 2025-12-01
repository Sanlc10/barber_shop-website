# Barbería Italiana - Website

Un sitio web elegante y minimalista para barbería con diseño refinado y sofisticado. Construido con React, Vite, Tailwind CSS y shadcn/ui.

## Características

- 🎨 Diseño minimalista refinado con estética dark elegante
- ✨ Glassmorphism y efectos sutiles de lujo
- ⚡ Construido con React + Vite para máximo rendimiento
- 🎭 Animaciones suaves y sofisticadas con Framer Motion
- 📱 Completamente responsive
- 🌐 Contenido en español
- 🎯 Componentes reutilizables con shadcn/ui
- 🖼️ Imagen de hero con overlay elegante

## Diseño y Estética

### Color Palette
- **Background**: Deep charcoal (11% lightness) para sofisticación
- **Primary**: Champagne gold (#c9a96e) - refinado y elegante
- **Text**: Soft whites y light grays para máximo contraste
- Enfoque monochromático con uso minimal de color

### Tipografía
- **Display**: Cormorant Garamond - serif elegante para títulos
- **Body**: Inter - sans-serif limpia y moderna
- Font-weight light para refinamiento
- Generous letter spacing y line height

### Efectos Especiales
- Scrollbar personalizado con glassmorphism
- Sombras elegantes y sutiles glows
- Animaciones suaves de fade y scale
- Bordes cuadrados para estética moderna

## Secciones

- **Hero**: Sección principal con imagen de fondo, overlay oscuro elegante y CTA prominente
- **Servicios**: Grid de servicios con cards refinadas y pricing
- **Galería**: Portfolio de trabajos con hover effects sutiles
- **Contacto**: Formulario de reserva con diseño espacioso y clean

## Instalación

1. Instala las dependencias:
```bash
npm install
```

2. Inicia el servidor de desarrollo:
```bash
npm run dev
```

3. Abre tu navegador en `http://localhost:5173`

## Construcción

Para construir el proyecto para producción:

```bash
npm run build
```

## Vista previa de producción

Para previsualizar la build de producción:

```bash
npm run preview
```

## Tecnologías

- **React 18** - Biblioteca de UI
- **Vite 5** - Herramienta de construcción ultra-rápida
- **Tailwind CSS 3** - Framework de CSS utility-first
- **shadcn/ui** - Componentes UI accesibles y personalizables
- **Framer Motion 11** - Animaciones fluidas y modernas
- **Lucide React** - Iconos elegantes
- **TypeScript 5** - Tipado estático para mayor seguridad

## Personalización

### Colores

Los colores se definen en `src/index.css` usando variables CSS HSL:

```css
--background: 0 0% 11%;        /* Deep charcoal */
--primary: 38 42% 62%;          /* Champagne gold */
--foreground: 0 0% 95%;         /* Soft white */
```

### Fuentes

Definidas en `index.html` y `tailwind.config.js`:

- **Display**: Cormorant Garamond (300, 400, 500, 600, 700)
- **Body**: Inter (300, 400, 500, 600)

### Scrollbar Glassmorphism

El scrollbar personalizado incluye:
- Width: 16px para mejor usabilidad
- Gradient semi-transparente
- Backdrop blur para efecto glass
- Subtle glow con primary color
- Square borders (sin border-radius)

## Estructura del Proyecto

```
├── src/
│   ├── assets/
│   │   └── hero.png         # Imagen de fondo del hero
│   ├── components/
│   │   ├── ui/              # Componentes shadcn/ui (Button, Card, Input, etc.)
│   │   ├── Hero.tsx         # Sección hero con imagen y overlay
│   │   ├── Services.tsx     # Grid de servicios
│   │   ├── Gallery.tsx      # Portfolio grid
│   │   └── ContactForm.tsx  # Formulario de contacto
│   ├── lib/
│   │   └── utils.ts         # Utilidades (cn helper)
│   ├── App.tsx              # Componente principal con navegación
│   ├── main.tsx             # Punto de entrada
│   └── index.css            # Estilos globales, variables CSS, scrollbar
├── index.html               # HTML base con fuentes
├── tailwind.config.js       # Configuración de Tailwind
├── vite.config.ts           # Configuración de Vite
├── tsconfig.json            # Configuración de TypeScript
└── package.json             # Dependencias y scripts
```

## Principios de Diseño

1. **Whitespace is luxury** - Espaciado generoso crea elegancia
2. **Restraint over decoration** - Menos es más
3. **Typography does the work** - Las fuentes llevan la estética
4. **Subtle over striking** - Animaciones refinadas, no flashy
5. **Monochromatic beauty** - Color minimal, impacto máximo
6. **Geometric precision** - Alineación limpia y espaciado consistente

## Características Destacadas

- ✅ Custom glassmorphism scrollbar
- ✅ Hero section con imagen de fondo y dark overlay
- ✅ Smooth scroll navigation
- ✅ Hover effects elegantes y sutiles
- ✅ Form validation
- ✅ Responsive mobile-first design
- ✅ Optimizado para producción
- ✅ Accesible (ARIA labels, keyboard navigation)

## Licencia

MIT
