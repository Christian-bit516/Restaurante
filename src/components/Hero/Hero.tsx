import './Hero.css'

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <div className="hero-badge reveal">
          <span className="badge-dot"></span>
          Restaurante Premium
        </div>

        <h1 className="hero-title reveal reveal-delay-1">
          El Arte de la
          <span className="hero-accent"> Gastronomía</span>
        </h1>

        <p className="hero-subtitle reveal reveal-delay-2">
          Experiencias culinarias que trascienden lo ordinario. Donde cada ingrediente 
          cuenta una historia y cada plato es una obra maestra.
        </p>

        <div className="hero-buttons reveal reveal-delay-3">
          <button 
            className="btn btn-primary" 
            onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Explorar Menú
          </button>
          <button 
            className="btn btn-secondary" 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Reservar Mesa
          </button>
        </div>

        <div className="hero-stats reveal reveal-delay-4">
          <div className="stat">
            <span className="stat-number">15+</span>
            <span className="stat-label">Años de Excelencia</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat">
            <span className="stat-number">50+</span>
            <span className="stat-label">Platos Exclusivos</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat">
            <span className="stat-number">10K+</span>
            <span className="stat-label">Clientes Felices</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero