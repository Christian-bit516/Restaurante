import './About.css'

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-header reveal">
          <div className="section-tag">Nuestra Historia</div>
          <h2 className="section-title">Donde la Pasión se Convierte en Arte</h2>
          <p className="section-subtitle">
            Más de una década creando momentos gastronómicos inolvidables, fusionando tradición europea con sabor latino
          </p>
        </div>

        <div className="about-content">
          <div className="about-text">
            <p className="about-description reveal">
              Fundado en 2009, <strong>Le Gourmet</strong> nace de la visión de nuestro 
              Chef Ejecutivo <strong>Marco Antonio Vallejo</strong>, quien tras perfeccionar 
              sus técnicas en las cocinas más prestigiosas de París, Lyon y Milán, decidió 
              crear un espacio donde la alta cocina europea se encuentra con la calidez y 
              sabor de la tradición hispana.
            </p>
            <p className="about-description reveal reveal-delay-1">
              Seleccionamos meticulosamente ingredientes de pequeños productores locales. 
              Cada plato es una obra maestra que combina técnicas modernas de cocción con 
              recetas ancestrales perfeccionadas a lo largo de generaciones. En nuestra 
              cocina, el respeto por el producto es absoluto.
            </p>

            <div className="about-features">
              <div className="feature reveal reveal-delay-1">
                <div className="feature-icon-wrapper">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/>
                    <path d="M8 14s1.5 2 4 2 4-2 4-2"/>
                    <line x1="9" y1="9" x2="9.01" y2="9"/>
                    <line x1="15" y1="9" x2="15.01" y2="9"/>
                  </svg>
                </div>
                <div className="feature-content">
                  <h4>Ingredientes Orgánicos</h4>
                  <p>Productos frescos de temporada seleccionados diariamente</p>
                </div>
              </div>

              <div className="feature reveal reveal-delay-2">
                <div className="feature-icon-wrapper">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                  </svg>
                </div>
                <div className="feature-content">
                  <h4>Chef Premiado</h4>
                  <p>Reconocimiento internacional por excelencia gastronómica</p>
                </div>
              </div>

              <div className="feature reveal reveal-delay-3">
                <div className="feature-icon-wrapper">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M8 22h8M12 2v14M17 6l-5 5-5-5"/>
                    <path d="M2 12h4M18 12h4"/>
                  </svg>
                </div>
                <div className="feature-content">
                  <h4>Cava Exclusiva</h4>
                  <p>Más de 200 etiquetas premium de todo el mundo</p>
                </div>
              </div>
            </div>
          </div>

          <div className="about-visual reveal reveal-delay-2">
            <div className="about-image-container">
              <img
                src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=800&q=80"
                alt="Chef Ejecutivo Marco Antonio Vallejo"
                className="about-photo"
              />
              <div className="about-image-overlay"></div>
              <div className="about-image-frame"></div>
            </div>
            <div className="about-experience-badge">
              <span className="experience-number">15+</span>
              <span className="experience-text">Años de<br/>Excelencia</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About