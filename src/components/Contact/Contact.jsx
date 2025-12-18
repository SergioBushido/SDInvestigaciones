import { createSignal, For } from 'solid-js';
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
      const response = await fetch('https://hook.eu2.make.com/1w9cu5f8i2jum4pa125j3a1e6qiix3iv', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData())
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      setSubmitMessage(t().contact.form.successMessage);
      setFormData({
        nombre: '',
        email: '',
        telefono: '',
        servicio: '',
        mensaje: ''
      });
    } catch (err) {
      console.error('Error submitting form:', err);
      setSubmitMessage(t().contact.form.errorMessage || "Ocurrió un error al enviar el formulario.");
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
                  <div><h4>{t().contact.info.details.phone}</h4><p>643697615</p></div>
                </div>
                <div class="contact-item">
                  <span class="contact-icon">📧</span>
                  <div><h4>{t().contact.info.details.email}</h4><p>sdinvestigaciones@gmail.com</p></div>
                </div>
                <div class="contact-item">
                  <span class="contact-icon">📍</span>
                  <div><h4>{t().contact.info.details.address}</h4><p>Candelaria, 38530, Santa Cruz De Tenerife, Spain</p></div>
                </div>
                <div class="contact-item">
                  <span class="contact-icon">⏰</span>
                  <div><h4>{t().contact.info.details.hours}</h4><p>{t().contact.info.details.hoursValue}</p></div>
                </div>
              </div>
            </div>
          </div>

          {/* Formulario */}
          <div class="contact-form">
            <h3>{t().contact.form.title}</h3>
            <form onSubmit={handleSubmit}>
              <div class="form-group">
                <label for="nombre">{t().contact.form.fields.nombre}</label>
                <input
                  type="text"
                  id="nombre"
                  value={formData().nombre}
                  onInput={(e) => handleInputChange('nombre', e.target.value)}
                  required
                />
              </div>

              <div class="form-group">
                <label for="email">{t().contact.form.fields.email}</label>
                <input
                  type="email"
                  id="email"
                  value={formData().email}
                  onInput={(e) => handleInputChange('email', e.target.value)}
                  required
                />
              </div>

              <div class="form-group">
                <label for="telefono">{t().contact.form.fields.telefono}</label>
                <input
                  type="tel"
                  id="telefono"
                  value={formData().telefono}
                  onInput={(e) => handleInputChange('telefono', e.target.value)}
                  required
                />
              </div>

              <div class="form-group">
                <label for="servicio">{t().contact.form.fields.servicio}</label>
                <select
                  id="servicio"
                  value={formData().servicio}
                  onChange={(e) => handleInputChange('servicio', e.target.value)}
                  required
                >
                  <option value="">{t().contact.form.fields.servicio}</option>
                  <For each={t().contact.form.services}>
                    {(service) => <option value={service}>{service}</option>}
                  </For>
                </select>
              </div>

              <div class="form-group">
                <label for="mensaje">{t().contact.form.fields.mensaje}</label>
                <textarea
                  id="mensaje"
                  rows="5"
                  value={formData().mensaje}
                  onInput={(e) => handleInputChange('mensaje', e.target.value)}
                  required
                 />
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
