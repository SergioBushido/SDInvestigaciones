import { createSignal } from 'solid-js';
import { useAppContext } from '../../context/AppContext';
import { translations } from '../../translations/translations';
import './Contact.css';

const Contact = () => {
  const { language } = useAppContext();
  const t = () => translations[language()];

  const [formData, setFormData] = createSignal({
    nombre: '',
    email: '',
    telefono: '',
    servicio: '',
    mensaje: ''
  });

  const [isSubmitting, setIsSubmitting] = createSignal(false);
  const [submitMessage, setSubmitMessage] = createSignal('');

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      // Simulación de envío
      await new Promise(resolve => setTimeout(resolve, 2000));

      setSubmitMessage(t.contact.form.successMessage);
      setFormData({
        nombre: '',
        email: '',
        telefono: '',
        servicio: '',
        mensaje: ''
      });
    } catch (err) {
      setSubmitMessage(t.contact.form.errorMessage || "Ocurrió un error.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contacto" class="contact">
      <div class="container">
        <div class="contact-content">
          
          {/* Información de contacto */}
          <div class="contact-info">
            <h2 class="section-title">{t().contact.title}</h2>
            <p class="section-subtitle">{t().contact.subtitle}</p>

            <div class="info-section">
              <h3>{t().contact.info.title}</h3>
              <p>{t().contact.info.description}</p>

              <div class="contact-details">
                <div class="contact-item">
                  <span class="contact-icon">📞</span>
                  <div><h4>Teléfono</h4><p>643697615</p></div>
                </div>
                <div class="contact-item">
                  <span class="contact-icon">📧</span>
                  <div><h4>Email</h4><p>sdinvestigaciones@gmail.com</p></div>
                </div>
                <div class="contact-item">
                  <span class="contact-icon">📍</span>
                  <div><h4>Dirección</h4><p>Candelaria, 38530, Santa Cruz De Tenerife, Spain</p></div>
                </div>
                <div class="contact-item">
                  <span class="contact-icon">⏰</span>
                  <div><h4>Horario</h4><p>Lun-Vie: 9:00-18:00</p></div>
                </div>
              </div>
            </div>
          </div>

          {/* Formulario */}
          <div class="contact-form">
            <h3>{t().contact.form.title}</h3>
            <form onSubmit={handleSubmit}>
              <div class="form-group">
                <label htmlFor="nombre">{t().contact.form.fields.nombre}</label>
                <input
                  type="text"
                  id="nombre"
                  value={formData().nombre}
                  onInput={(e) => handleInputChange('nombre', e.target.value)}
                  required
                />
              </div>

              <div class="form-group">
                <label htmlFor="email">{t().contact.form.fields.email}</label>
                <input
                  type="email"
                  id="email"
                  value={formData().email}
                  onInput={(e) => handleInputChange('email', e.target.value)}
                  required
                />
              </div>

              <div class="form-group">
                <label htmlFor="telefono">{t().contact.form.fields.telefono}</label>
                <input
                  type="tel"
                  id="telefono"
                  value={formData().telefono}
                  onInput={(e) => handleInputChange('telefono', e.target.value)}
                  required
                />
              </div>

              <div class="form-group">
                <label htmlFor="servicio">{t().contact.form.fields.servicio}</label>
                <select
                  id="servicio"
                  value={formData().servicio}
                  onChange={(e) => handleInputChange('servicio', e.target.value)}
                  required
                >
                  <option value="">{t().contact.form.fields.servicio}</option>
                  {t().contact.form.services.map((service, index) => (
                    <option key={index} value={service}>{service}</option>
                  ))}
                </select>
              </div>

              <div class="form-group">
                <label htmlFor="mensaje">{t().contact.form.fields.mensaje}</label>
                <textarea
                  id="mensaje"
                  rows="5"
                  value={formData().mensaje}
                  onInput={(e) => handleInputChange('mensaje', e.target.value)}
                  required
                ></textarea>
              </div>

              <button type="submit" class="btn btn-primary" disabled={isSubmitting()}>
                {isSubmitting() ? 'Enviando...' : t().contact.form.submit}
              </button>

              {submitMessage() && (
                <div class="submit-message success">
                  {submitMessage()}
                </div>
              )}
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
