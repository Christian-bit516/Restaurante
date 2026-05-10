import { useState, useEffect, useCallback } from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Specialties from './components/Specialties/Specialties'
import Menu from './components/Menu/Menu'
import Gallery from './components/Gallery/Gallery'
import Testimonials from './components/Testimonials/Testimonials'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import './App.css'

function App() {
  const [isScrolled, setIsScrolled] = useState(false)

  // Hide preloader once React app has mounted
  useEffect(() => {
    const timer = setTimeout(() => {
      const preloader = document.getElementById('preloader')
      if (preloader) {
        preloader.classList.add('hide')
        setTimeout(() => {
          preloader.style.display = 'none'
        }, 700)
      }
    }, 2600) // Wait for bar animation to finish
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Parallax effect on scroll
  const handleParallax = useCallback(() => {
    const parallaxElements = document.querySelectorAll('[data-parallax]')
    parallaxElements.forEach((el) => {
      const rect = el.getBoundingClientRect()
      const speed = parseFloat((el as HTMLElement).dataset.parallax || '0.1')
      const yPos = -(rect.top * speed)
      ;(el as HTMLElement).style.transform = `translateY(${yPos}px)`
    })
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleParallax, { passive: true })
    return () => window.removeEventListener('scroll', handleParallax)
  }, [handleParallax])

  // Scroll reveal observer — supports multiple animation classes
  useEffect(() => {
    const revealClasses = ['.reveal', '.reveal-left', '.reveal-right', '.reveal-scale', '.reveal-rotate']
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    )

    revealClasses.forEach(cls => {
      document.querySelectorAll(cls).forEach((el) => observer.observe(el))
    })
    return () => observer.disconnect()
  }, [])

  return (
    <div className="App">
      <Navbar isScrolled={isScrolled} />
      <main>
        <Hero />
        <About />
        <Specialties />
        <Menu />
        <Gallery />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App