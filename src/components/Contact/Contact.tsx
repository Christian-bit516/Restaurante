import { useState } from 'react'
import './Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '2',
    occasion: '',
    message: ''
  })

  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', email: '', phone: '', date: '', time: '', guests: '2', occasion: '', message: '' })
    }, 3000)
  }

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-header reveal">
          <div className="section-tag">Reservaciones</div>
          <h2 className="section-title">Reserva Tu Mesa</h2>
          <p className="section-subtitle">Vive la experiencia gastronómica perfecta en un ambiente diseñado para momentos especiales</p>
        </div>

        <div className="contact-layout">
          <div className="contact-info reveal-left">
            <div className="info-card">
              <div className="info-icon-wrapper">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
              </div>
              <div className="info-text">
                <h3>Ubicación</h3>
                <p>Av. Reforma 245, Col. Centro</p>
                <p>Ciudad de México, CP 06600</p>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon-wrapper">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.97.36 1.92.69 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.89.33 1.84.56 2.81.69A2 2 0 0 1 22 16.92z"/>
                </svg>
              </div>
              <div className="info-text">
                <h3>Teléfono</h3>
                <p><a href="tel:+525551234567">+52 (555) 123-4567</a></p>
                <p><a href="mailto:reservas@legourmet.mx">reservas@legourmet.mx</a></p>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon-wrapper">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="12" cy="12" r="10"/>
                  <polyline points="12 6 12 12 16 14"/>
                </svg>
              </div>
              <div className="info-text">
                <h3>Horario</h3>
                <p>Martes - Sábado: 14:00 - 23:00</p>
                <p>Domingo: 14:00 - 20:00</p>
                <p className="closed-text">Lunes: Cerrado</p>
              </div>
            </div>

            <div className="contact-map-placeholder">
              <div className="map-inner">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
                <span>Ver en Google Maps</span>
              </div>
            </div>
          </div>

          <form className="reservation-form reveal-right reveal-delay-2" onSubmit={handleSubmit}>
            {submitted && (
              <div className="form-success">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                <span>¡Reserva enviada! Te contactaremos pronto para confirmar.</span>
              </div>
            )}

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="contact-name">Nombre Completo</label>
                <input
                  type="text"
                  id="contact-name"
                  placeholder="Tu nombre completo"
                  value={formData.name}
                  onChange={e => setFormData({...formData, name: e.target.value})}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="contact-email">Correo Electrónico</label>
                <input
                  type="email"
                  id="contact-email"
                  placeholder="tu@email.com"
                  value={formData.email}
                  onChange={e => setFormData({...formData, email: e.target.value})}
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="contact-phone">Teléfono</label>
                <input
                  type="tel"
                  id="contact-phone"
                  placeholder="+52 (555) 000-0000"
                  value={formData.phone}
                  onChange={e => setFormData({...formData, phone: e.target.value})}
                />
              </div>
              <div className="form-group">
                <label htmlFor="contact-occasion">Ocasión</label>
                <select
                  id="contact-occasion"
                  value={formData.occasion}
                  onChange={e => setFormData({...formData, occasion: e.target.value})}
                >
                  <option value="">Seleccionar...</option>
                  <option value="casual">Cena Casual</option>
                  <option value="romantic">Cena Romántica</option>
                  <option value="birthday">Cumpleaños</option>
                  <option value="anniversary">Aniversario</option>
                  <option value="business">Cena de Negocios</option>
                  <option value="celebration">Celebración Especial</option>
                </select>
              </div>
            </div>

            <div className="form-row form-row-3">
              <div className="form-group">
                <label htmlFor="contact-date">Fecha</label>
                <input
                  type="date"
                  id="contact-date"
                  value={formData.date}
                  onChange={e => setFormData({...formData, date: e.target.value})}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="contact-time">Hora</label>
                <input
                  type="time"
                  id="contact-time"
                  value={formData.time}
                  onChange={e => setFormData({...formData, time: e.target.value})}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="contact-guests">Personas</label>
                <select
                  id="contact-guests"
                  value={formData.guests}
                  onChange={e => setFormData({...formData, guests: e.target.value})}
                >
                  <option value="1">1 Persona</option>
                  <option value="2">2 Personas</option>
                  <option value="3">3 Personas</option>
                  <option value="4">4 Personas</option>
                  <option value="5">5 Personas</option>
                  <option value="6">6 Personas</option>
                  <option value="7">7 Personas</option>
                  <option value="8">8+ Personas</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="contact-message">Notas Especiales (opcional)</label>
              <textarea
                id="contact-message"
                placeholder="Alergias, preferencias dietéticas, peticiones especiales..."
                value={formData.message}
                onChange={e => setFormData({...formData, message: e.target.value})}
                rows={3}
              />
            </div>

            <button type="submit" className="form-submit-btn" disabled={submitted}>
              <span>{submitted ? 'Enviado ✓' : 'Confirmar Reserva'}</span>
              {!submitted && (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="5" y1="12" x2="19" y2="12"/>
                  <polyline points="12 5 19 12 12 19"/>
                </svg>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact