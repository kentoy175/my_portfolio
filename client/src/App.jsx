import { useState, useEffect } from 'react'
import './App.css'
import img1 from './image/img1.png'
import img2 from './image/img2.png'
import img3 from './image/img3.png'

function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeNavLink, setActiveNavLink] = useState('home');
  
  // Function to handle navbar link click with animation
  const handleNavLinkClick = (e, sectionId) => {
    // Prevent default anchor behavior
    e.preventDefault();
    
    // Add animation class
    e.target.classList.add('nav-link-clicked');
    
    // Remove animation class after animation completes
    setTimeout(() => {
      e.target.classList.remove('nav-link-clicked');
    }, 400);
    
    // Set active nav link
    setActiveNavLink(sectionId);
    
    // Scroll to the section
    document.getElementById(sectionId).scrollIntoView({
      behavior: 'smooth'
    });
  };
  
  // Update active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'services', 'contact'];
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveNavLink(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const projects = [
    {
      title: 'Hamuntu',
      image: img2,
      category: 'Web Design',
      description: 'An web development project for a local business.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe API'],
      link: '#'
    },
    {
      title: 'Carsada',
      image: img3,
      category: 'UI/UX Design',
      description: 'Redesigned the digital presence for a venture capital firm specializing in tech startups, creating a clean and professional interface.',
      technologies: ['Figma'],
      link: '#'
    }
  ]

  const openProjectDetails = (project) => {
    setSelectedProject(project);
  }

  const closeProjectDetails = () => {
    setSelectedProject(null);
  }

  return (
    <div className="portfolio">
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="nav-line left"></div>
        <div className="nav-links">
          <a 
            href="#home" 
            className={`nav-link ${activeNavLink === 'home' ? 'active' : ''}`}
            onClick={(e) => handleNavLinkClick(e, 'home')}
          >
            Home
          </a>
          <a 
            href="#about" 
            className={`nav-link ${activeNavLink === 'about' ? 'active' : ''}`}
            onClick={(e) => handleNavLinkClick(e, 'about')}
          >
            About
          </a>
          <a 
            href="#projects" 
            className={`nav-link ${activeNavLink === 'projects' ? 'active' : ''}`}
            onClick={(e) => handleNavLinkClick(e, 'projects')}
          >
            Projects
          </a>
          <a 
            href="#services" 
            className={`nav-link ${activeNavLink === 'services' ? 'active' : ''}`}
            onClick={(e) => handleNavLinkClick(e, 'services')}
          >
            Services
          </a>
          <a 
            href="#contact" 
            className={`nav-link ${activeNavLink === 'contact' ? 'active' : ''}`}
            onClick={(e) => handleNavLinkClick(e, 'contact')}
          >
            Contact
          </a>
        </div>
        <div className="nav-line right"></div>
      </nav>

      {/* Hero Section */}
      <header className="hero" id="home">
        <div className="hero-content">
          <div className="hero-text">
            <h2>Hi, I'm</h2>
            <h1>Mark Arhiel</h1>
            <p>I'm a UI/UX designer and Back-end developer. My goal is to bring ideas to life with designs that stand out and communicate effectively.</p>
            
            <div className="hero-buttons">
              <a href="#contact" className="btn btn-primary">Hire Me</a>
              <a href="#contact" className="btn btn-secondary">Contact Me</a>
            </div>
          </div>
          
          <div className="hero-image-container">
            <div className="hero-image">
              <img src={img1} alt="Julian Collins" />
            </div>
            <div className="hero-blob"></div>
            <div className="hero-dashed-outline"></div>
            <div className="star star-1"></div>
            <div className="star star-2"></div>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section className="about" id="about">
        <div className="section-header">
          <h2>About Me</h2>
      </div>
        
        <div className="about-content">
          <div className="about-text">
            <p className="description">
              I create innovative designs for modern websites, mobile apps, and web platforms across a wide range of industries.
            </p>
            
            <div className="skills">
              <div className="skills-container">
                <div className="skill-category">
                  <h3>UI/UX Design</h3>
                  <div className="skill-items">
                    <div className="skill-item">
                      <div className="skill-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 38 57" fill="#ffffff">
                          <path d="M19 28.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0z"/>
                          <path d="M19 9.5a9.5 9.5 0 0 1 9.5-9.5 9.5 9.5 0 0 1 9.5 9.5 9.5 9.5 0 0 1-9.5 9.5H19V9.5z"/>
                          <path d="M0 9.5A9.5 9.5 0 0 1 9.5 0H19v19H9.5A9.5 9.5 0 0 1 0 9.5z"/>
                          <path d="M0 28.5A9.5 9.5 0 0 1 9.5 19H19v19H9.5A9.5 9.5 0 0 1 0 28.5z"/>
                          <path d="M0 47.5A9.5 9.5 0 0 1 9.5 38H19v9.5a9.5 9.5 0 0 1-19 0z"/>
                        </svg>
                      </div>
                      <span>Figma</span>
                    </div>
                    <div className="skill-item">
                      <div className="skill-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#ffffff">
                          <path d="M12 1.5l-9 4.5 9 4.5 9-4.5-9-4.5zm-9 15l9 4.5 9-4.5m-18-5l9 4.5 9-4.5"/>
                        </svg>
                      </div>
                      <span>Sketch</span>
                    </div>
                    <div className="skill-item">
                      <div className="skill-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#ffffff">
                          <path d="M16.42 7.446c1.137.285 1.975 1.314 1.975 2.554 0 1.46-1.154 2.646-2.57 2.646-.507 0-.975-.151-1.367-.409l-5.199 5.198a2.534 2.534 0 0 1-.336 2.307c-.507.87-1.367 1.399-2.336 1.399-1.522 0-2.762-1.264-2.762-2.822 0-.92.428-1.746 1.097-2.267a2.583 2.583 0 0 1 2.222-.408l5.233-5.218a2.616 2.616 0 0 1-.395-1.382c0-1.398 1.083-2.554 2.455-2.646V3.764h3.575v1.683l-1.592 1.999zm-2.343 2.554a1.41 1.41 0 0 0 1.415-1.415c0-.779-.636-1.415-1.415-1.415s-1.415.636-1.415 1.415.636 1.415 1.415 1.415zm-9.722 10.061a1.42 1.42 0 0 0 1.424-1.424c0-.787-.637-1.424-1.424-1.424-.788 0-1.424.637-1.424 1.424 0 .787.636 1.424 1.424 1.424z"/>
                        </svg>
                      </div>
                      <span>Adobe XD</span>
                    </div>
                  </div>
                </div>
                
                <div className="skill-category">
                  <h3>Back-end Development</h3>
                  <div className="skill-items">
                    <div className="skill-item">
                      <div className="skill-icon">
                        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#ffffff"><path d="M12 1.85c-.27 0-.55.07-.78.2l-7.44 4.3c-.48.28-.78.8-.78 1.36v8.58c0 .56.3 1.08.78 1.36l1.95 1.12c.95.46 1.27.47 1.71.47 1.4 0 2.21-.85 2.21-2.33V8.44c0-.12-.1-.22-.22-.22H8.5c-.13 0-.23.1-.23.22v8.47c0 .66-.68 1.31-1.77.76L4.45 16.5a.26.26 0 0 1-.11-.21V7.71c0-.09.04-.17.11-.21l7.44-4.29c.06-.04.16-.04.22 0l7.44 4.29c.07.04.11.12.11.21v8.58c0 .08-.04.16-.11.21l-7.44 4.29c-.06.04-.16.04-.23 0L10 19.65c-.08-.03-.16-.04-.21-.01-.53.3-.63.36-1.12.51-.12.04-.31.11.07.32l2.48 1.47c.24.14.5.21.78.21s.54-.07.78-.21l7.44-4.29c.48-.28.78-.8.78-1.36V7.71c0-.56-.3-1.08-.78-1.36l-7.44-4.3c-.23-.13-.5-.2-.78-.2M14 8c-2.12 0-3.39.89-3.39 2.39 0 1.61 1.26 2.08 3.3 2.28 2.43.24 2.62.6 2.62 1.08 0 .83-.67 1.18-2.23 1.18-1.98 0-2.4-.49-2.55-1.47a.226.226 0 0 0-.22-.18h-.96c-.12 0-.21.09-.21.22 0 1.24.68 2.74 3.94 2.74 2.35 0 3.7-.93 3.7-2.55 0-1.61-1.08-2.03-3.37-2.34-2.31-.3-2.54-.46-2.54-1 0-.45.2-1.05 1.91-1.05 1.5 0 2.09.33 2.32 1.36.02.1.11.17.21.17h.97c.05 0 .11-.02.15-.07.04-.04.07-.1.05-.16C19.21 8.9 17.62 8 14 8Z"/></svg>
                      </div>
                      <span>Node.js</span>
                    </div>
                    <div className="skill-item">
                      <div className="skill-icon">
                        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#ffffff"><path d="M24 18.588a1.529 1.529 0 0 1-1.895-.72l-3.45-4.771-.5-.667-4.003 5.444a1.466 1.466 0 0 1-1.802.708l5.158-6.92-4.798-6.251a1.595 1.595 0 0 1 1.9.666l3.576 4.83 3.596-4.81a1.435 1.435 0 0 1 1.788-.668L21.708 7.9l-2.522 3.283a.666.666 0 0 0 0 .994l4.804 6.412zM.002 11.576l.42-2.075c1.154-4.103 5.858-5.81 9.094-3.27 1.895 1.489 2.368 3.597 2.275 5.973H1.116C.943 16.447 4.005 19.009 7.92 17.7a4.078 4.078 0 0 0 2.582-2.876c.207-.666.548-.78 1.174-.588a5.417 5.417 0 0 1-2.589 3.957 6.272 6.272 0 0 1-7.306-.933 6.575 6.575 0 0 1-1.64-3.858c0-.235-.08-.455-.134-.666A88.33 88.33 0 0 1 0 11.577zm1.127-.286h9.654c-.06-3.076-2.001-5.258-4.59-5.278-2.882-.04-4.944 2.094-5.071 5.264z"/></svg>
                      </div>
                      <span>Express</span>
                    </div>
                    <div className="skill-item">
                      <div className="skill-icon">
                        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#ffffff"><path d="M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0 1 11.91 24h.481c.114-1.032.284-2.056.51-3.07.417-.296.604-.463.85-.693a11.342 11.342 0 0 0 3.639-8.464c.01-.814-.103-1.662-.197-2.218zm-5.336 8.195s0-8.291.275-8.29c.213 0 .49 10.695.49 10.695-.381-.045-.765-1.76-.765-2.405z"/></svg>
                      </div>
                      <span>MongoDB</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="about-stats">
            <div className="stat-item">
              <div className="stat-number">2</div>
              <div className="stat-label">Years Experience</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">2</div>
              <div className="stat-label">Projects Completed</div>
            </div>
          </div>
        </div>
             </section>

      {/* Projects Section */}
      <section className="projects" id="projects">
        <div className="section-header">
          <h2>My Projects</h2>
        </div>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <img src={project.image} alt={project.title} />
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.category}</p>
                <button 
                  className="view-details-btn"
                  onClick={() => openProjectDetails(project)}
                >
                  View Details
        </button>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      {/* Project Details Modal */}
      {selectedProject && (
        <div className="modal-overlay" onClick={closeProjectDetails}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeProjectDetails}>×</button>
            <img src={selectedProject.image} alt={selectedProject.title} className="modal-image" />
            <h2>{selectedProject.title}</h2>
            <p className="modal-category">{selectedProject.category}</p>
            <p className="modal-description">{selectedProject.description}</p>
            <div className="modal-technologies">
              <h3>Technologies Used:</h3>
              <div className="tech-tags">
                {selectedProject.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
            <a href={selectedProject.link} className="view-project-btn" target="_blank" rel="noopener noreferrer">View Live Project</a>
          </div>
        </div>
      )}

      {/* Services Section */}
      <section className="services" id="services">
        <div className="section-header">
          <h2>My Services</h2>
        </div>
        <div className="services-container">
          <div className="service-card">
            <div className="service-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#ffffff">
                <path d="M3 3h18v18H3V3zm16.525 16.5l-5.678-5.678 1.11-1.11 4.567 4.568v-4.073h1.573v7.864h-7.864v-1.572h4.068L12.733 14.9l1.11-1.11 5.684 5.683v-.973zM3.75 18h4.5v1.5h-4.5V18zm9.75-6.75h1.5v4.5h-1.5v-4.5zM8.25 18h1.5v1.5h-1.5V18zm-4.5-9h1.5v1.5h-1.5V9zm0 3h1.5v1.5h-1.5V12zm0-6h1.5v1.5h-1.5V6zm9 9h1.5v1.5h-1.5V15z"/>
              </svg>
            </div>
            <h3>UI/UX Design</h3>
            <p>Creating intuitive, beautiful interfaces that enhance user experience and achieve business goals.</p>
            <ul className="service-features">
              <li>User Research</li>
              <li>Wireframing & Prototyping</li>
              <li>Visual Design</li>
              <li>Interaction Design</li>
            </ul>
          </div>
          
          <div className="service-card">
            <div className="service-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#ffffff">
                <path d="M12 18.178l4.62-1.256.623-6.778H9.026L8.822 7.89h8.626l.227-2.211H6.325l.636 6.678h7.82l-.261 2.866-2.52.667-2.52-.667-.158-1.844h-2.27l.329 3.544L12 18.178zM3 2h18l-1.623 18L12 22l-7.377-2L3 2z"/>
              </svg>
            </div>
            <h3>Web Development</h3>
            <p>Building responsive, modern websites with clean code and optimal performance.</p>
            <ul className="service-features">
              <li>Front-end Development</li>
              <li>Back-end Development</li>
              <li>API Integration</li>
              <li>Database Design</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact" id="contact">
        <div className="section-header">
          <h2>Contact Me</h2>
        </div>
        <div className="contact-container">
          <div className="contact-info">
            <p>I'm a college student. If you're interested in working together, please get in touch!</p>
            
            <div className="contact-methods">
              <div className="contact-method">
                <div className="contact-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#ffffff">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                </div>
                <div className="contact-detail">
                  <h3>Email</h3>
                  <p><a href="mailto:contact@yourdomain.com">markgloria@gmail.com</a></p>
                </div>
              </div>
              
              <div className="contact-method">
                <div className="contact-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#ffffff">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                </div>
                <div className="contact-detail">
                  <h3>Location</h3>
                  <p>Iloilo City, Philippines</p>
                </div>
              </div>
              
              <div className="contact-method">
                <div className="contact-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#ffffff">
                    <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"/>
                  </svg>
                </div>
                <div className="contact-detail">
                  <h3>Social</h3>
                  <div className="social-links">
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="contact-form">
            <form>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" placeholder="Your Name" required />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" placeholder="Your Email" required />
              </div>
              
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input type="text" id="subject" placeholder="Subject" required />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" rows="5" placeholder="Your Message" required></textarea>
              </div>
              
              <button type="submit" className="submit-btn">Send Message</button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-logo">
            <h3>Mark Ahriel</h3>
            <p>UI/UX Designer & Back-end Developer</p>
          </div>
          
          <div className="footer-links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#services">Services</a>
            <a href="#contact">Contact</a>
          </div>
          
          <div className="footer-social">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
            </a>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Mark Ahriel. All Rights Reserved.</p>
        </div>
      </footer>
      </div>
  )
}

export default App
