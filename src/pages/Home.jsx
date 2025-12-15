import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

function Home() {
  const [activeSlide, setActiveSlide] = useState(0)
  const [scrollY, setScrollY] = useState(0)
  const containerRef = useRef(null)

  const slides = [
    {
      id: 0,
      title: 'Advanced Characterization of Material Microstructures',
      image: '/image/banner/image00.png',
      link: '/research'
    },
    {
      id: 1,
      title: 'Next-Generation Aerospace Materials',
      image: '/image/banner/image01.png',
      link: '/research/aerospace-defense'
    },
    {
      id: 2,
      title: 'Multi-Principal Element Alloys',
      image: '/image/banner/image02.png', // Placeholder - replace with image03.png when available
      link: '/research/high-entropy-alloy'
    },
    {
      id: 3,
      title: 'Future of 3D Metal Printing',
      image: '/image/banner/image03.png', // Placeholder - replace with image04.png when available
      link: '/research/additive-manufacturing'
    },
    {
      id: 4,
      title: 'AI-Driven Materials Discovery',
      image: '/image/banner/image01.png', // Placeholder - replace with image05.png when available
      link: '/research/ai-material-analysis'
    }, 
    {
      id: 5,
      title: '',
      image: '/image/banner/image05.png', // Placeholder - replace with image05.png when available
      link: ''
    }
  ]

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      setScrollY(currentScrollY)
      
      const windowHeight = window.innerHeight
      const newActiveSlide = Math.min(
        Math.max(0, Math.round(currentScrollY / windowHeight)),
        slides.length - 1
      )
      
      if (newActiveSlide !== activeSlide) {
        setActiveSlide(newActiveSlide)
      }
    }

    handleScroll() // Initial call
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [activeSlide, slides.length])

  const scrollToNextSlide = () => {
    const nextSlide = Math.min(activeSlide + 1, slides.length - 1)
    window.scrollTo({
      top: nextSlide * window.innerHeight,
      behavior: 'smooth'
    })
  }

  const handleLearnMoreClick = () => {
    // Reset scroll position when navigating to research page
    window.scrollTo(0, 0)
  }

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact-section')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
    <div className="parallax-container" ref={containerRef} style={{ height: `${slides.length * 100}vh` }}>
      {slides.map((slide, index) => {
        const windowHeight = typeof window !== 'undefined' ? window.innerHeight : 800
        const slideOffset = index * windowHeight
        const distanceFromActive = Math.abs(index - activeSlide)
        const opacity = distanceFromActive === 0 ? 1 : Math.max(0.2, 1 - distanceFromActive * 0.4)
        
        // Parallax effect calculation
        const progress = (scrollY - slideOffset) / windowHeight
        const translateY = progress * -50 // Reverse parallax movement - scroll down, image moves up
        
        return (
          <div
            key={slide.id}
            className={`parallax-slide ${index === activeSlide ? 'active' : ''}`}
            style={{
              backgroundImage: `url(${slide.image})`,
              opacity: opacity,
              transform: `translateY(${translateY}px)`,
              transition: 'opacity 0.6s ease-in-out'
            }}
          >
            <div className="slide-overlay"></div>
            <div className="slide-content">
              <h2 className="slide-text">{slide.title}</h2>
            </div>
            {index === activeSlide && (
              <div className="fixed-buttons-container">
                <Link to={slide.link} className="learn-more-btn" onClick={handleLearnMoreClick}>
                  <span>Learn More</span>
                  <span className="material-symbols-rounded">arrow_forward</span>
                </Link>
                <button className="contact-btn" onClick={scrollToContact}>
                  <span>Contact</span>
                  <span className="material-symbols-rounded">mail</span>
                </button>
              </div>
            )}
          </div>
        )
      })}
      
      {activeSlide < slides.length - 1 && (
        <div className="scroll-indicator" onClick={scrollToNextSlide}>
          <span className="material-symbols-rounded">expand_more</span>
        </div>
      )}
    </div>
    
    <section id="contact-section" className="contact-section">
        <div className="contact-container">
          <div className="contact-info">
            <h2>Contact</h2>
            <div className="info-item">
              <h4>Address</h4>
              <p>77 Jeongneung-ro, Seongbuk-gu, Seoul, 02707, Republic of Korea<br/>
              Kookmin University, Engineering Building, Room 431</p>
            </div>
            <div className="info-item">
              <h4>Email</h4>
              <p>jb.seol@kookmin.ac.kr</p>
            </div>
            <div className="info-item">
              <h4>Phone</h4>
              <p>+82-2-910-4669</p>
            </div>
          </div>
          
          <div className="contact-form-wrapper">
            <form className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Name *</label>
                  <input type="text" id="name" name="name" placeholder="Enter your name" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input type="email" id="email" name="email" placeholder="Enter your email" required />
                </div>
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone">Phone</label>
                  <input type="tel" id="phone" name="phone" placeholder="Enter your phone" />
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input type="text" id="subject" name="subject" placeholder="Enter subject" />
                </div>
              </div>
              
              <div className="form-group full-width">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows="4" placeholder="Enter your message"></textarea>
              </div>
              
              <button type="submit" className="submit-btn">Submit</button>
            </form>
          </div>
        </div>
        
        <div className="map-container">
          <a 
            href="https://www.google.com/maps/place/Kookmin+University/@37.6107753,126.9953708,17z" 
            target="_blank" 
            rel="noopener noreferrer"
            className="map-link"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3161.2937451749595!2d126.99317087655086!3d37.61077537978166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357cbbb8a9a6ccc9%3A0x7e3d3f7d9a8f9a3a!2sKookmin%20University!5e0!3m2!1sen!2skr!4v1702897234567!5m2!1sen!2skr"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Kookmin University Location"
            ></iframe>
            <div className="map-overlay">
              <span className="material-symbols-rounded">location_on</span>
              <span>Click to view in Google Maps</span>
            </div>
          </a>
        </div>
      </section>
    </>
  )
}

export default Home
