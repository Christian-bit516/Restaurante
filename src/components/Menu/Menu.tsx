import { useState } from 'react'
import './Menu.css'

interface MenuItem {
  id: number
  name: string
  description: string
  price: number
  category: string
  featured?: boolean
  image: string
}

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('all')

  const menuItems: MenuItem[] = [
    { id: 1, name: 'Carpaccio de Res', description: 'Finas láminas de res madurado con aceite de oliva extra virgen, parmesano añejo y rúcula fresca', price: 120, category: 'entradas', featured: true, image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80' },
    { id: 2, name: 'Ceviche Clásico', description: 'Pescado blanco fresco marinado en limón natural con cilantro orgánico y cebolla morada', price: 140, category: 'entradas', featured: true, image: 'https://images.unsplash.com/photo-1625946322752-dc7e0e33d73e?auto=format&fit=crop&w=800&q=80' },
    { id: 3, name: 'Calamares Fritos', description: 'Anillos de calamar crujientes con limón fresco y salsa tártara casera', price: 135, category: 'entradas', image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&w=800&q=80' },
    { id: 4, name: 'Filete Mignon', description: 'Corte premium 300g a la parrilla con reducción de vino tinto y puré trufado', price: 380, category: 'principales', featured: true, image: 'https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=800&q=80' },
    { id: 5, name: 'Risotto de Setas', description: 'Arroz arbóreo cremoso con setas silvestres y parmesano recién rallado', price: 220, category: 'principales', image: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=800&q=80' },
    { id: 6, name: 'Pasta al Ajillo', description: 'Spaghetti artesanal con camarones frescos, ajo, aceite de oliva y perejil', price: 200, category: 'principales', image: 'https://images.unsplash.com/photo-1563379926898-05f4575a45d8?auto=format&fit=crop&w=800&q=80' },
    { id: 7, name: 'Tiramisú Clásico', description: 'Dulce italiano tradicional con café espresso, mascarpone y cacao amargo', price: 95, category: 'postres', image: 'https://images.unsplash.com/photo-1621874348734-df1d010c9a6b?auto=format&fit=crop&w=800&q=80' },
    { id: 8, name: 'Fondant de Chocolate', description: 'Bizcocho con centro líquido de chocolate oscuro 70% cacao belga', price: 110, category: 'postres', featured: true, image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=800&q=80' },
    { id: 9, name: 'Cheesecake New York', description: 'Tarta de queso crema con base de galleta y frutos rojos frescos', price: 85, category: 'postres', image: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=800&q=80' },
    { id: 10, name: 'Vino Tinto Reserva', description: 'Malbec argentino premium, cuerpo completo y notas de ciruela', price: 180, category: 'bebidas', image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=800&q=80' },
    { id: 11, name: 'Champán Brut Nature', description: 'Espumoso francés vintage, burbujas finas y persistentes', price: 220, category: 'bebidas', featured: true, image: 'https://images.unsplash.com/photo-1547595628-c61a29f496f0?auto=format&fit=crop&w=800&q=80' },
    { id: 12, name: 'Cocktail Signature', description: 'Creación exclusiva de nuestro mixólogo con frutas de temporada', price: 150, category: 'bebidas', image: 'https://images.unsplash.com/photo-1536935338788-846bb9981813?auto=format&fit=crop&w=800&q=80' },
  ]

  const categories = [
    { id: 'all', label: 'Todos' },
    { id: 'entradas', label: 'Entradas' },
    { id: 'principales', label: 'Principales' },
    { id: 'postres', label: 'Postres' },
    { id: 'bebidas', label: 'Bebidas' },
  ]

  const filteredItems = activeCategory === 'all'
    ? menuItems
    : menuItems.filter(item => item.category === activeCategory)

  return (
    <section id="menu" className="menu">
      <div className="container">
        <div className="section-header reveal">
          <div className="section-tag">Carta</div>
          <h2 className="section-title">Nuestro Menú</h2>
          <p className="section-subtitle">
            Platos elaborados con ingredientes premium y técnicas de alta cocina internacional
          </p>
        </div>

        <div className="menu-filters reveal">
          {categories.map(cat => (
            <button
              key={cat.id}
              className={`filter-btn ${activeCategory === cat.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat.id)}
              type="button"
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="menu-grid" key={activeCategory}>
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className={`menu-card ${item.featured ? 'featured' : ''}`}
            >
              <div className="menu-card-image">
                <img src={item.image} alt={item.name} loading="lazy" />
                <div className="menu-card-image-overlay"></div>
                {item.featured && (
                  <div className="menu-featured-tag">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                    </svg>
                    Chef Recomienda
                  </div>
                )}
                <div className="menu-card-price">${item.price} MXN</div>
              </div>
              <div className="menu-card-body">
                <div className="menu-card-category">{item.category}</div>
                <h3 className="menu-card-name">{item.name}</h3>
                <p className="menu-card-description">{item.description}</p>
                <button className="menu-card-order" type="button">
                  <span>Ordenar</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="5" y1="12" x2="19" y2="12"/>
                    <polyline points="12 5 19 12 12 19"/>
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Menu