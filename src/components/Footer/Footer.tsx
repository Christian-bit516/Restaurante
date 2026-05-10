import './Footer.css'

const Footer = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="footer-brand-logo">
              <svg width="32" height="32" viewBox="0 0 28 28" fill="none">
                <circle cx="14" cy="14" r="13" stroke="currentColor" strokeWidth="1.5"/>
                <text x="14" y="19" textAnchor="middle" fontFamily="serif" fontSize="16" fontWeight="700" fill="currentColor">G</text>
              </svg>
              <h3>Le Gourmet</h3>
            </div>
            <p className="footer-desc">Elevando la gastronomía a una forma de arte desde 2009. Cada visita es una experiencia única e irrepetible.</p>
            <div className="footer-social">
              <a href="#" className="social-icon" aria-label="Instagram">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>
              <a href="#" className="social-icon" aria-label="Facebook">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
              <a href="#" className="social-icon" aria-label="Twitter">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
                </svg>
              </a>
            </div>
          </div>

          <div className="footer-nav">
            <div className="footer-nav-group">
              <h4>Explorar</h4>
              <div className="footer-links">
                <button onClick={() => scrollToSection('home')}>Inicio</button>
                <button onClick={() => scrollToSection('about')}>Nosotros</button>
                <button onClick={() => scrollToSection('menu')}>Menú</button>
                <button onClick={() => scrollToSection('gallery')}>Galería</button>
              </div>
            </div>
            <div className="footer-nav-group">
              <h4>Contacto</h4>
              <div className="footer-links">
                <button onClick={() => scrollToSection('contact')}>Reservar Mesa</button>
                <a href="tel:+525551234567">+52 (555) 123-4567</a>
                <a href="mailto:reservas@legourmet.mx">reservas@legourmet.mx</a>
              </div>
            </div>
            <div className="footer-nav-group">
              <h4>Horario</h4>
              <div className="footer-links">
                <span>Mar - Sáb: 14:00 - 23:00</span>
                <span>Dom: 14:00 - 20:00</span>
                <span className="footer-closed">Lunes: Cerrado</span>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2026 Le Gourmet. Todos los derechos reservados.</p>
          <div className="footer-bottom-links">
            <a href="#">Política de Privacidad</a>
            <span className="footer-dot">·</span>
            <a href="#">Términos</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer