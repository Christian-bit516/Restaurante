import './Specialties.css'

const Specialties = () => {
  const specialties = [
    {
      id: 1,
      title: 'Cocina de Autor',
      description: 'Creaciones exclusivas de nuestro chef ejecutivo que fusionan técnicas moleculares con sabores ancestrales.',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ),
    },
    {
      id: 2,
      title: 'Ingredientes Premium',
      description: 'Productos orgánicos seleccionados directamente de huertos locales y proveedores artesanales certificados.',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22l1.41-3.67C10.27 17.17 15 14.5 17 8z"/>
          <path d="M20.59 6.41A2 2 0 0 0 17 8c-.2.6-.5 1.2-.9 1.8"/>
          <path d="M7 12a5 5 0 0 1 5-5"/>
        </svg>
      ),
    },
    {
      id: 3,
      title: 'Ambiente Exclusivo',
      description: 'Un espacio elegante diseñado para crear la atmósfera perfecta en cada ocasión especial.',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 2v8l4-2"/>
          <circle cx="12" cy="14" r="8"/>
        </svg>
      ),
    },
    {
      id: 4,
      title: 'Servicio Impecable',
      description: 'Personal altamente capacitado dedicado a hacer de tu visita una experiencia memorable e irrepetible.',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
          <circle cx="12" cy="7" r="4"/>
        </svg>
      ),
    },
  ]

  return (
    <section className="specialties">
      <div className="container">
        <div className="section-header reveal">
          <div className="section-tag">Lo Que Nos Define</div>
          <h2 className="section-title">Excelencia en Cada Detalle</h2>
          <p className="section-subtitle">
            Cada aspecto de Le Gourmet ha sido cuidadosamente diseñado para ofrecerte una experiencia gastronómica sin igual
          </p>
        </div>

        <div className="specialties-grid">
          {specialties.map((specialty, index) => (
            <div key={specialty.id} className={`specialty-card reveal reveal-delay-${index + 1}`}>
              <div className="specialty-icon">{specialty.icon}</div>
              <div className="specialty-number">0{specialty.id}</div>
              <h3 className="specialty-title">{specialty.title}</h3>
              <p className="specialty-description">{specialty.description}</p>
              <div className="specialty-line"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Specialties
