import { useState } from 'react'
import './App.css'
import logo from './assets/logo.png'
import heroBg from './assets/background.png'
import bottomBg from './assets/bottom-background.png'
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
            <div className="nav-item-buttons">
              <a
                  className="hero-btn1 secondary1"
                  href="tel:1234567890"
                  aria-label="Call 123-456-7890"
              >
                <span className="call-cta-label">CALL NOW</span>
                <span className="call-cta-line">
                  <span className="call-cta-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" role="img" focusable="false">
                      <path
                          d="M6.6 3.75c.35-.18.77-.15 1.09.07l2.8 2.05c.36.27.51.74.36 1.16l-.9 2.48a.94.94 0 0 0 .22 1c1.2 1.36 2.54 2.51 4.04 3.46.35.22.79.25 1.16.08l2.4-1.1c.4-.18.87-.1 1.2.2l2.12 2.02c.3.29.4.73.27 1.12-.46 1.34-1.52 2.3-2.88 2.65-1.82.46-3.75.23-5.77-.7-2.19-1-4.2-2.5-6.03-4.5-1.81-2.01-3.16-4.17-4.06-6.5-.83-2.13-1-4.06-.5-5.79.37-1.33 1.34-2.35 2.68-2.8z"
                          fill="currentColor"
                      />
                    </svg>
                  </span>
                  <span className="call-cta-number">123-456-7890</span>
                </span>
              </a>
              <button type="button" className="nav-cta nav-cta-mobile">
                GET A QUOTE
              </button>
            </div>
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
          <div className="hero-left animate__animated animate__fadeInDown">
            <h1 className="hero-title">Reliable Plumbing Services</h1>
            <p className="hero-subtitle">Your Trusted Local Plumber</p>
            <div className="hero-actions">
              <button type="button" className="hero-btn primary">
                REQUEST SERVICE
              </button>
              <a
                className="hero-btn secondary"
                href="tel:1234567890"
                aria-label="Call 123-456-7890"
              >
                <span className="call-cta-label">CALL NOW</span>
                <span className="call-cta-line">
                  <span className="call-cta-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" role="img" focusable="false">
                      <path
                        d="M6.6 3.75c.35-.18.77-.15 1.09.07l2.8 2.05c.36.27.51.74.36 1.16l-.9 2.48a.94.94 0 0 0 .22 1c1.2 1.36 2.54 2.51 4.04 3.46.35.22.79.25 1.16.08l2.4-1.1c.4-.18.87-.1 1.2.2l2.12 2.02c.3.29.4.73.27 1.12-.46 1.34-1.52 2.3-2.88 2.65-1.82.46-3.75.23-5.77-.7-2.19-1-4.2-2.5-6.03-4.5-1.81-2.01-3.16-4.17-4.06-6.5-.83-2.13-1-4.06-.5-5.79.37-1.33 1.34-2.35 2.68-2.8z"
                        fill="currentColor"
                      />
                    </svg>
                  </span>
                  <span className="call-cta-number">123-456-7890</span>
                </span>
              </a>
            </div>
          </div>
          <div className="hero-right">
            <img className="hero-worker" src={worker} alt="Plumber at work" />
          </div>
        </div>
      </section>

      <section className="service-strip" style={{
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundImage: `url(${bottomBg})`
      }}>
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
