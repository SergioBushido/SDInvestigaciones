# Detective Privado - Landing Page

Una landing page moderna y profesional para servicios de detective privado, construida con React.

## Características

- 🎨 Diseño moderno y responsive
- 📱 Optimizada para móviles
- ⚡ Navegación suave entre secciones
- 📝 Formulario de contacto funcional
- 🔍 Sección de servicios detallada
- 📊 Estadísticas y información de la empresa
- 🎯 Call-to-actions estratégicos

## Secciones Incluidas

1. **Header** - Navegación fija con menú responsive
2. **Hero** - Sección principal con llamada a la acción
3. **Servicios** - 6 servicios principales del detective
4. **Sobre Nosotros** - Información de la empresa y estadísticas
5. **Contacto** - Formulario de contacto e información
6. **Footer** - Enlaces y información adicional

## Servicios Mostrados

- 🔍 Investigación de Infidelidad
- 👥 Investigación de Personas
- 🏢 Investigación Empresarial
- 💰 Investigación Financiera
- 📱 Investigación Digital
- 🚗 Vigilancia y Seguimiento

## Instalación y Ejecución

### Prerrequisitos

- Node.js (versión 14 o superior)
- npm o yarn

### Pasos para ejecutar

1. **Instalar dependencias:**
   ```bash
   npm install
   ```

2. **Ejecutar en modo desarrollo:**
   ```bash
   npm start
   ```

3. **Abrir en el navegador:**
   La aplicación se abrirá automáticamente en `http://localhost:3000`

### Construir para producción

```bash
npm run build
```

## Tecnologías Utilizadas

- **React 18** - Framework principal
- **CSS3** - Estilos modernos con gradientes y animaciones
- **JavaScript ES6+** - Funcionalidad interactiva
- **Responsive Design** - Adaptable a todos los dispositivos

## Personalización

### Cambiar Información de Contacto

Edita el archivo `src/components/Contact.js` para modificar:
- Números de teléfono
- Direcciones de email
- Dirección física
- Horarios de atención

### Modificar Servicios

Edita el array `services` en `src/components/Services.js` para:
- Agregar nuevos servicios
- Cambiar descripciones
- Modificar iconos

### Cambiar Colores

Los colores principales se definen en:
- `src/index.css` - Variables globales
- `src/components/*.css` - Estilos específicos

## Estructura del Proyecto

```
src/
├── components/
│   ├── Header.js          # Navegación principal
│   ├── Hero.js           # Sección de bienvenida
│   ├── Services.js       # Lista de servicios
│   ├── About.js          # Información de la empresa
│   ├── Contact.js        # Formulario de contacto
│   ├── Footer.js         # Pie de página
│   └── *.css            # Estilos de cada componente
├── App.js               # Componente principal
├── index.js             # Punto de entrada
└── *.css               # Estilos globales
```

## Características Técnicas

- **Navegación Suave** - Scroll automático entre secciones
- **Formulario Funcional** - Validación y manejo de estado
- **Diseño Responsive** - Adaptable a móviles, tablets y desktop
- **Animaciones CSS** - Efectos hover y transiciones
- **SEO Optimizado** - Meta tags y estructura semántica

## Licencia

Este proyecto está bajo la Licencia MIT. Puedes usarlo libremente para proyectos comerciales y personales.

---

**Nota:** Esta es una aplicación de demostración. Para uso en producción, asegúrate de:
- Configurar un backend para el formulario de contacto
- Agregar análisis web (Google Analytics)
- Optimizar imágenes y recursos
- Configurar SSL/HTTPS 