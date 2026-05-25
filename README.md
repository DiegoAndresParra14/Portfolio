# Portfolio Personal — Diego Andres Parra

Sitio web personal estático tipo portafolio, construido con **HTML5**, **CSS3**, **JavaScript** y **Tailwind CSS**. Diseñado como vitrina de proyectos académicos, tecnologías y trayectoria de aprendizaje como desarrollador Full Stack.

## 📋 Índice

- [Descripción General](#descripción-general)
- [Tecnologías Utilizadas](#tecnologías-utilizadas)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Funcionalidades](#funcionalidades)
- [Instalación y Uso Local](#instalación-y-uso-local)
- [Despliegue](#despliegue)
- [Personalización](#personalización)
- [Contacto](#contacto)

## 📖 Descripción General

**ARCHITECT.LOG** es un portafolio web oscuro y moderno, diseñado para presentar:

- **Perfil profesional**: presentación personal con foto e información de contacto.
- **Tech Stack**: lista de tecnologías que domina el desarrollador, con barras de progreso visuales.
- **Proyectos académicos**: tarjetas interactivas con imágenes y descripciones de proyectos realizados.
- **Trayectoria de aprendizaje (Journey)**: línea de tiempo que muestra el crecimiento en tecnología.
- **Formulario de contacto**: permite a los visitantes enviar mensajes (actualmente simulado en frontend).

## 🛠️ Tecnologías Utilizadas

| Tecnología | Propósito |
|---|---|
| **HTML5** | Estructura semántica de la página |
| **CSS3** | Estilos personalizados y animaciones |
| **Tailwind CSS** | Framework de utilidades para diseño rápido (vía CDN) |
| **JavaScript (Vanilla)** | Navegación, animaciones, formulario |
| **Google Fonts (Inter)** | Tipografía principal |
| **Material Symbols** | Iconografía moderna |

## 🗂️ Estructura del Proyecto

```
Portfolio/
├── index.html                      # Página principal del portafolio
├── styles.css                      # Estilos personalizados
├── script.js                       # Lógica del frontend
├── README.md                       # Documentación del proyecto
└── WhatsApp Image 2026-04-23 at 11.07.42 PM.jpeg  # Foto de perfil
```

### Descripción de Archivos

- **`index.html`**: Contiene toda la estructura del sitio, incluyendo la barra de navegación, secciones (home, about, tech stack, projects, journey, contact) y el footer. Usa Tailwind CSS vía CDN para el diseño responsivo.
- **`styles.css`**: Estilos complementarios que no cubre Tailwind, como animaciones de revelado al scroll, transiciones de tarjetas y soporte para `prefers-reduced-motion`.
- **`script.js`**: Funcionalidades principales:
  - Navegación suave con `scrollIntoView`.
  - Observador de secciones para resaltar el enlace activo.
  - Animación de revelado al hacer scroll (intersection observer).
  - Validación básica del formulario de contacto.
- **`README.md`**: Este archivo de documentación.

## ✨ Funcionalidades

- ✅ **Navegación suave**: los enlaces del menú desplazan la página suavemente a cada sección.
- ✅ **Resaltado de sección activa**: el enlace de navegación correspondiente se ilumina según la sección visible.
- ✅ **Revelado progresivo**: las tarjetas aparecen con una animación suave al hacer scroll.
- ✅ **Formulario con validación**: verifica que todos los campos estén completos antes de mostrar un mensaje de confirmación.
- ✅ **Diseño responsivo**: se adapta a dispositivos móviles, tablets y escritorio.
- ✅ **Modo oscuro**: tema oscuro consistente con colores de la paleta Material You.
- ✅ **Soporte de accesibilidad**: respeta `prefers-reduced-motion` para personas con sensibilidad a movimientos.

## 🚀 Instalación y Uso Local

Como el proyecto es completamente estático (sin backend ni bundler), puedes ejecutarlo de las siguientes maneras:

### Opción 1: Abrir directamente en el navegador

```bash
# Abre el archivo index.html directamente
xdg-open Portfolio/index.html   # Linux
open Portfolio/index.html       # macOS
# O haz doble clic en el archivo desde el explorador de archivos
```

### Opción 2: Servidor local con Python

```bash
# Desde la raíz del proyecto
cd Portfolio
python3 -m http.server 8000
```

Luego abre en tu navegador:
```
http://localhost:8000
```

### Opción 3: Servidor local con Node.js

```bash
# Si tienes Node.js instalado
npx serve Portfolio/
```

## 🌐 Despliegue

Este sitio puede ser desplegado fácilmente en plataformas de hosting estático:

| Plataforma | Instrucciones |
|---|---|
| **GitHub Pages** | Sube el contenido de `Portfolio/` a la rama `gh-pages` o configura Pages desde `main` apuntando a la carpeta `/Portfolio`. |
| **Netlify** | Arrastra la carpeta `Portfolio/` a Netlify Drop o conecta el repositorio con build command vacío y publish directory como `Portfolio`. |
| **Vercel** | Conecta el repositorio, con Framework Preset "Other" y output directory como `Portfolio`. |

## 🎨 Personalización

- **Imagen de perfil**: reemplaza el archivo `WhatsApp Image 2026-04-23 at 11.07.42 PM.jpeg` por tu propia foto y actualiza la ruta en `index.html`.
- **Colores**: modifica la configuración de Tailwind dentro de la etiqueta `<script id="tailwind-config">` en `index.html`.
- **Proyectos**: edita las tarjetas de proyectos en la sección `#projects` de `index.html`.
- **Redes sociales**: actualiza los enlaces de GitHub y LinkedIn en el footer.

## 📄 Contacto

- **Email**: dieguitop678@gmail.com
- **Ubicación**: Floridablanca, Santander, Colombia
- **GitHub**: [DiegoAndresParra14](https://github.com/DiegoAndresParra14)