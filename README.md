# Barbería Urban - Website

Un sitio web moderno y único para barbería con diseño urbano y atrevido. Construido con React, Vite, Tailwind CSS y shadcn/ui.

## Características

- 🎨 Diseño urbano y atrevido con tema oscuro personalizado
- ⚡ Construido con React + Vite para máximo rendimiento
- 🎭 Animaciones fluidas con Framer Motion
- 📱 Completamente responsive
- 🌐 Contenido en español
- 🎯 Componentes reutilizables con shadcn/ui

## Secciones

- **Hero**: Sección principal con llamada a la acción prominente
- **Servicios**: Showcase de servicios con precios
- **Galería**: Portfolio de trabajos realizados
- **Contacto**: Formulario de reserva con información de contacto

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

- **React** - Biblioteca de UI
- **Vite** - Herramienta de construcción
- **Tailwind CSS** - Framework de CSS
- **shadcn/ui** - Componentes UI
- **Framer Motion** - Animaciones
- **Lucide React** - Iconos
- **TypeScript** - Tipado estático

## Personalización

### Colores

Los colores se definen en `src/index.css` usando variables CSS. Para personalizar:

- **Primary**: Dorado vibrante (usado para CTAs y acentos)
- **Secondary**: Rojo crimson (acentos secundarios)
- **Background**: Negro/carbón oscuro

### Fuentes

- **Display**: Teko (títulos y elementos destacados)
- **Body**: Work Sans (texto general)

Puedes cambiar las fuentes editando `index.html` y `tailwind.config.js`.

## Estructura del Proyecto

```
├── src/
│   ├── components/
│   │   ├── ui/          # Componentes shadcn/ui
│   │   ├── Hero.tsx     # Sección hero
│   │   ├── Services.tsx # Sección servicios
│   │   ├── Gallery.tsx  # Sección galería
│   │   └── ContactForm.tsx # Formulario de contacto
│   ├── lib/
│   │   └── utils.ts     # Utilidades
│   ├── App.tsx          # Componente principal
│   ├── main.tsx         # Punto de entrada
│   └── index.css        # Estilos globales
├── index.html
├── tailwind.config.js
├── vite.config.ts
└── package.json
```

## Licencia

MIT
