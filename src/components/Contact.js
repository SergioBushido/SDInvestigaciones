import React, { useState, useEffect } from 'react';
import './Contact.css';
import { useAppContext } from '../context/AppContext';
import { translations } from '../translations/translations';
import emailjs from 'emailjs-com';

const Contact = () => {
  const { language } = useAppContext();
  const t = translations[language];

  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    servicio: '',
    mensaje: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  // Inicializar EmailJS
  useEffect(() => {
    emailjs.init("TU_USER_ID_AQUI"); // Reemplazar con tu User ID real de EmailJS
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const templateParams = {
        to_email: 'sdinvestigaciones@gmail.com',
        from_name: formData.nombre,
        from_email: formData.email,
        from_phone: formData.telefono,
        service: formData.servicio,
        message: formData.mensaje,
        reply_to: formData.email
      };

      const response = await emailjs.send(
        'YOUR_SERVICE_ID', // Reemplazar con tu Service ID
        'YOUR_TEMPLATE_ID', // Reemplazar con tu Template ID
        templateParams
      );

      if (response.status === 200) {
        setSubmitStatus('success');
        setFormData({
          nombre: '',
          email: '',
          telefono: '',
          servicio: '',
          mensaje: ''
        });
      }
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: '📞',
      title: 'Teléfono',
      info: '643697615',
      description: 'Disponible 24/7'
    },
    {
      icon: '📧',
      title: 'Email',
      info: 'sdinvestigaciones@gmail.com',
      description: 'Respuesta en 24h'
    },
    {
      icon: '📍',
      title: 'Oficina',
      info: 'Candelaria, 38530, Santa Cruz De Tenerife, Spain',
      description: 'Cita previa'
    },
    {
      icon: '⏰',
      title: 'Horario',
      info: 'Lun-Vie: 9:00-18:00',
      description: 'Urgencias 24/7'
    }
  ];

  return (
    <section id="contacto" className="section contact">
      <div className="container">
        <h2 className="section-title">{t.contact.title}</h2>
        <p className="section-subtitle">
          {t.contact.subtitle}
        </p>
        
        <div className="contact-content">
          <div className="contact-info">
            <h3>{t.contact.info.title}</h3>
            <p>
              {t.contact.info.description}
            </p>
            
            <div className="contact-items">
              {contactInfo.map((item, index) => (
                <div key={index} className="contact-item">
                  <div className="contact-icon">{item.icon}</div>
                  <div className="contact-details">
                    <h4>{item.title}</h4>
                    <p className="contact-info-main">{item.info}</p>
                    <p className="contact-info-desc">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="contact-form-container">
            <h3>{t.contact.form.title}</h3>
            
            {submitStatus === 'success' && (
              <div className="success-message">
                ✅ {t.contact.form.successMessage || 'Mensaje enviado correctamente. Te contactaremos pronto.'}
              </div>
            )}
            
            {submitStatus === 'error' && (
              <div className="error-message">
                ❌ {t.contact.form.errorMessage || 'Error al enviar el mensaje. Por favor, inténtalo de nuevo.'}
              </div>
            )}
            
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="nombre"
                  placeholder={t.contact.form.fields.nombre}
                  value={formData.nombre}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                />
              </div>
              
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder={t.contact.form.fields.email}
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                />
              </div>
              
              <div className="form-group">
                <input
                  type="tel"
                  name="telefono"
                  placeholder={t.contact.form.fields.telefono}
                  value={formData.telefono}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                />
              </div>
              
              <div className="form-group">
                <select
                  name="servicio"
                  value={formData.servicio}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                >
                  <option value="">{t.contact.form.fields.servicio}</option>
                  {t.contact.form.services.map((service, index) => (
                    <option key={index} value={service.toLowerCase().replace(/\s+/g, '-')}>
                      {service}
                    </option>
                  ))}
                </select>
              </div>
              
              <div className="form-group">
                <textarea
                  name="mensaje"
                  placeholder={t.contact.form.fields.mensaje}
                  value={formData.mensaje}
                  onChange={handleChange}
                  rows="4"
                  disabled={isSubmitting}
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="btn btn-submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Enviando...' : t.contact.form.submit}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 