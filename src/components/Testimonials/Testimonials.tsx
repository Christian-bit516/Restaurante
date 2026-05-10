import './Testimonials.css'

interface Testimonial {
  id: number
  name: string
  rating: number
  comment: string
  avatar: string
  role: string
}

const Testimonials = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Carlos Rodríguez',
      rating: 5,
      comment: 'Una experiencia gastronómica inolvidable. Cada plato superó nuestras expectativas más altas. El servicio fue impecable desde el primer momento hasta el último bocado.',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
      role: 'Cliente VIP'
    },
    {
      id: 2,
      name: 'Ana Martínez',
      rating: 5,
      comment: 'Celebramos nuestro aniversario aquí y fue absolutamente perfecto. El ambiente romántico, la atención al detalle y la comida excepcional hicieron de esta noche algo mágico.',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80',
      role: 'Cliente Frecuente'
    },
    {
      id: 3,
      name: 'Roberto Sánchez',
      rating: 5,
      comment: 'El mejor restaurante de la ciudad sin ninguna duda. Volvemos cada mes sin excepción. La evolución de sus menús temporada tras temporada es impresionante.',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80',
      role: 'Crítico Gastronómico'
    },
  ]

  return (
    <section id="testimonials" className="testimonials">
      {/* Parallax background strip */}
      <div className="testimonials-bg-strip" data-parallax="0.06"></div>

      <div className="container">
        <div className="section-header reveal">
          <div className="section-tag">Reseñas</div>
          <h2 className="section-title">Lo Que Dicen Nuestros Clientes</h2>
          <p className="section-subtitle">Opiniones reales de quienes han vivido la auténtica experiencia Le Gourmet</p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={testimonial.id} className={`testimonial-card reveal-scale reveal-delay-${index + 1}`}>
              <div className="testimonial-quote-icon">
                <svg width="36" height="36" viewBox="0 0 24 24" fill="currentColor" opacity="0.12">
                  <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"/>
                </svg>
              </div>

              <div className="testimonial-rating">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill={i < testimonial.rating ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="1.5">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                  </svg>
                ))}
              </div>

              <p className="testimonial-comment">"{testimonial.comment}"</p>

              <div className="testimonial-author">
                <div className="testimonial-avatar">
                  <img src={testimonial.avatar} alt={testimonial.name} />
                </div>
                <div className="testimonial-info">
                  <span className="testimonial-name">{testimonial.name}</span>
                  <span className="testimonial-role">{testimonial.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials