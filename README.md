# Portfolio Personal

Sitio web personal estático de Diego Andres Parra.

## Estructura

- `index.html`: contenido principal de la página.
- `styles.css`: estilos personalizados extraídos del HTML.
- `script.js`: funcionalidad de la navegación, animaciones suaves y manejo básico del formulario.
- `WhatsApp Image 2026-04-23 at 11.07.42 PM.jpeg`: imagen de perfil usada en la sección principal.

## Cómo ver la página

Como este proyecto es estático, puedes abrirlo de cualquiera de estas formas:

1. Abrir `index.html` directamente en el navegador.
2. Levantar un servidor local simple desde la carpeta del proyecto.

Ejemplo con Python:

```bash
python3 -m http.server 8000
```

Luego abre en el navegador:

```text
http://localhost:8000
```

## Notas importantes

- El contenido visible de la página está en `index.html`.
- Los botones y el formulario tienen comportamiento básico en `script.js`.
- El formulario actualmente no envía correos ni guarda datos en backend.
- La foto principal ahora carga desde un archivo local dentro del proyecto.

## Recomendaciones

- Si cambias el nombre de la imagen de perfil, actualiza también su ruta en `index.html`.
- Si agregas más secciones o botones de navegación, puedes conectarlos usando anclas como `#about`, `#projects` o `#contact`.
- Si quieres publicar el sitio, puedes subir estos archivos a GitHub Pages, Netlify o Vercel.
