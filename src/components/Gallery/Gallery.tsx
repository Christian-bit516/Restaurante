import './Gallery.css'

const Gallery = () => {
  const categories = [
    { id: 1, label: 'Carnes Premium', subtitle: 'Cortes selectos', image: 'https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=800&q=80' },
    { id: 2, label: 'Mariscos Frescos', subtitle: 'Del mar a tu mesa', image: 'https://images.unsplash.com/photo-1559737558-2f5a35f4523b?auto=format&fit=crop&w=800&q=80' },
    { id: 3, label: 'Pastas Artesanales', subtitle: 'Hechas a mano', image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?auto=format&fit=crop&w=800&q=80' },
    { id: 4, label: 'Postres Exclusivos', subtitle: 'Dulce perfección', image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=800&q=80' },
    { id: 5, label: 'Vinos Selectos', subtitle: 'Cava premium', image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=800&q=80' },
    { id: 6, label: 'Ensaladas Gourmet', subtitle: 'Frescura natural', image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80' },
  ]

  return (
    <section id="gallery" className="gallery">
      <div className="container">
        <div className="section-header reveal">
          <div className="section-tag">Galería</div>
          <h2 className="section-title">Descubre Nuestra Cocina</h2>
          <p className="section-subtitle">Cada imagen refleja la dedicación y pasión que ponemos en cada creación culinaria</p>
        </div>
        <div className="gallery-grid">
          {categories.map((category, index) => (
            <div key={category.id} className={`gallery-card reveal reveal-delay-${(index % 4) + 1}`}>
              <img src={category.image} alt={category.label} className="gallery-card-image" loading="lazy" />
              <div className="gallery-card-overlay"></div>
              <div className="gallery-card-content">
                <span className="gallery-card-subtitle">{category.subtitle}</span>
                <h3 className="gallery-card-label">{category.label}</h3>
                <div className="gallery-card-line"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Gallery