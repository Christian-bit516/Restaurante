import { useState } from 'react'
import './Navbar.css'

interface NavbarProps {
  isScrolled: boolean
}

const Navbar: React.FC<NavbarProps> = ({ isScrolled }) => {
  const [mobileOpen, setMobileOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setMobileOpen(false)
  }

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <button className="nav-brand" onClick={() => scrollToSection('home')} aria-label="Ir al inicio">
          <span className="brand-icon">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
              <circle cx="14" cy="14" r="13" stroke="currentColor" strokeWidth="1.5"/>
              <text x="14" y="19" textAnchor="middle" fontFamily="serif" fontSize="16" fontWeight="700" fill="currentColor">G</text>
            </svg>
          </span>
          <span className="brand-text">Le Gourmet</span>
        </button>

        <div className={`nav-links ${mobileOpen ? 'open' : ''}`}>
          <button onClick={() => scrollToSection('home')} className="nav-link">Inicio</button>
          <button onClick={() => scrollToSection('about')} className="nav-link">Nosotros</button>
          <button onClick={() => scrollToSection('menu')} className="nav-link">Menú</button>
          <button onClick={() => scrollToSection('gallery')} className="nav-link">Galería</button>
          <button onClick={() => scrollToSection('testimonials')} className="nav-link">Reseñas</button>
          <button onClick={() => scrollToSection('contact')} className="nav-cta">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
              <line x1="16" y1="2" x2="16" y2="6"/>
              <line x1="8" y1="2" x2="8" y2="6"/>
              <line x1="3" y1="10" x2="21" y2="10"/>
            </svg>
            Reservar
          </button>
        </div>

        <button
          className={`nav-hamburger ${mobileOpen ? 'open' : ''}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Abrir menú"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      
      {mobileOpen && <div className="nav-overlay" onClick={() => setMobileOpen(false)} />}
    </nav>
  )
}

export default Navbar