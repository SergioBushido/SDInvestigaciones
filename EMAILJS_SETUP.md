# Configuración de EmailJS para el Formulario de Contacto

## Pasos para configurar el envío de emails:

### 1. Crear cuenta en EmailJS
1. Ve a [EmailJS.com](https://www.emailjs.com/)
2. Regístrate para una cuenta gratuita
3. Verifica tu email

### 2. Configurar el servicio de email
1. En el dashboard de EmailJS, ve a "Email Services"
2. Haz clic en "Add New Service"
3. Selecciona "Gmail" o "Outlook" (recomendado Gmail)
4. Conecta tu cuenta de email (sdinvestigaciones@gmail.com)
5. Guarda el servicio y copia el **Service ID**

### 3. Crear una plantilla de email
1. Ve a "Email Templates"
2. Haz clic en "Create New Template"
3. Usa esta plantilla:

**Asunto:** Nueva consulta de SD INVESTIGACIONES

**Contenido:**
```
Nueva consulta recibida desde el sitio web:

Nombre: {{from_name}}
Email: {{from_email}}
Teléfono: {{from_phone}}
Servicio: {{service}}
Mensaje: {{message}}

---
Este email fue enviado desde el formulario de contacto de SD INVESTIGACIONES.
```

4. Guarda la plantilla y copia el **Template ID**

### 4. Obtener tu User ID
1. Ve a "Account" en EmailJS
2. Copia tu **User ID**

### 5. Actualizar el código
En el archivo `src/components/Contact.js`, reemplaza:

```javascript
// Línea 18
emailjs.init("YOUR_USER_ID"); // Reemplazar con tu User ID

// Líneas 42-43
const response = await emailjs.send(
  'YOUR_SERVICE_ID', // Reemplazar con tu Service ID
  'YOUR_TEMPLATE_ID', // Reemplazar con tu Template ID
```

### 6. Ejemplo de configuración completa:
```javascript
// Inicialización
emailjs.init("user_abc123def456");

// Envío
const response = await emailjs.send(
  'service_xyz789',
  'template_abc123',
  templateParams
);
```

## Características del formulario:

✅ **Envío real de emails** a sdinvestigaciones@gmail.com
✅ **Validación de campos** obligatorios
✅ **Mensajes de éxito/error** en tiempo real
✅ **Estado de carga** durante el envío
✅ **Traducción completa** en 3 idiomas
✅ **Diseño responsive** para móviles
✅ **Estilos adaptados** para modo claro/oscuro

## Notas importantes:

- **Plan gratuito**: EmailJS permite 200 emails/mes gratis
- **Seguridad**: Los emails se envían directamente desde el servidor de EmailJS
- **Spam**: Los emails van a la carpeta principal, no a spam
- **Respuesta**: El formulario incluye el email del remitente para poder responder

## Solución de problemas:

**Error "Service not found"**: Verifica que el Service ID sea correcto
**Error "Template not found"**: Verifica que el Template ID sea correcto
**Error "User not found"**: Verifica que el User ID sea correcto
**Emails no llegan**: Revisa la carpeta de spam y la configuración del servicio

## Configuración alternativa (Formspree):

Si prefieres una alternativa más simple, puedes usar Formspree:

1. Ve a [Formspree.io](https://formspree.io/)
2. Crea una cuenta y un formulario
3. Reemplaza el código de EmailJS con:

```javascript
const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(formData)
});
``` 