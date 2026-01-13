import { useState } from 'react'
import './App.css'
import logo from './assets/logo.png'
import heroBg from './assets/background.png'
import emergency from './assets/emergency.png'
import drain from './assets/drain.png'
import heaters from './assets/heaters.png'
import detection from './assets/detection.png'
import worker from './assets/worker.png'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="page">
      <header className="nav-bar">
        <div className="nav-inner">
          <div className="nav-left">
            <img className="nav-logo" src={logo} alt="Plumbing logo" />
          </div>
          <nav
            id="primary-navigation"
            className={`nav-menu ${isMenuOpen ? 'is-open' : ''}`}
            aria-label="Primary"
          >
            <button type="button" className="nav-link">
              Home
            </button>
            <div className="nav-item">
              <button type="button" className="nav-link has-menu">
                About Us
              </button>
              <div className="dropdown">
                <span>Company</span>
                <span>Team</span>
                <span>Careers</span>
              </div>
            </div>
            <div className="nav-item">
              <button type="button" className="nav-link has-menu">
                Services
              </button>
              <div className="dropdown">
                <span>Repairs</span>
                <span>Installations</span>
                <span>Maintenance</span>
              </div>
            </div>
            <div className="nav-item">
              <button type="button" className="nav-link has-menu">
                Pricing
              </button>
              <div className="dropdown">
                <span>Plans</span>
                <span>Estimates</span>
                <span>Financing</span>
              </div>
            </div>
            <button type="button" className="nav-cta nav-cta-mobile">
              GET A QUOTE
            </button>
          </nav>
          <div className="nav-actions">
            <button
              type="button"
              className={`nav-toggle ${isMenuOpen ? 'is-open' : ''}`}
              aria-expanded={isMenuOpen}
              aria-controls="primary-navigation"
              aria-label="Toggle navigation"
              onClick={() => setIsMenuOpen((open) => !open)}
            >
              <span className="nav-toggle-bar" />
              <span className="nav-toggle-bar" />
              <span className="nav-toggle-bar" />
            </button>
            <button type="button" className="nav-cta nav-cta-desktop">
              GET A QUOTE
            </button>
          </div>
        </div>
      </header>

      <section className="hero" style={{ backgroundImage: `url(${heroBg})` }}>
        <div className="hero-inner">
          <div className="hero-left animate__animated animate__backInLeft">
            <h1 className="hero-title">Reliable Plumbing Services</h1>
            <p className="hero-subtitle">Your Trusted Local Plumber</p>
            <div className="hero-actions">
              <button type="button" className="hero-btn primary">
                REQUEST SERVICE
              </button>
              <button type="button" className="hero-btn secondary">
                CALL NOW
              </button>
            </div>
          </div>
          <div className="hero-right animate__animated animate__fadeIn">
            <img className="hero-worker" src={worker} alt="Plumber at work" />
          </div>
        </div>
      </section>

      <section className="service-strip">
        <div className="service-inner">
          <div className="service-item">
            <img src={emergency} alt="Emergency plumbing" />
          </div>
          <div className="service-item">
            <img src={drain} alt="Drain cleaning" />
          </div>
          <div className="service-item">
            <img src={heaters} alt="Water heaters" />
          </div>
          <div className="service-item">
            <img src={detection} alt="Leak detection" />
          </div>
        </div>
      </section>
    </div>
  )
}

export default App
