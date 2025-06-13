import React, { useState, useEffect } from 'react';
import Footer from './Footer';
import Faq from './Faq';
import ProjectCard from './ProjectCard';
import BlogCard from './BlogCard';


const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const NavItem = ({ children, href = "#" }) => (
    <a
      href={href}
      className="text-white/80 hover:text-white transition-colors duration-300 text-sm font-medium"
    >
      {children}
    </a>
  );

  const ExpertiseCard = ({ title, description }) => (
    <div className="space-y-3">
      <h3 className="text-white font-semibold text-lg">• {title}</h3>
      <p className="text-white/60 text-sm leading-relaxed">{description}</p>
    </div>
  );



  const ExperienceItem = ({ role, company, period }) => (
    <div className="flex justify-between items-center py-6 border-b border-gray-800">
      <div>
        <h3 className="text-white text-lg font-medium">{role}</h3>
      </div>
      <div className="text-right">
        <p className="text-white/80 font-medium">{company}</p>
        <p className="text-white/50 text-sm">{period}</p>
      </div>
    </div>
  );



  const testimonials = [
    {
      name: "Floyd Miles",
      company: "eBay",
      text: "Synergy's resume builder is fantastic. It helped me create a professional resume that stood out to employers. Synergy's resume builder is fantastic. It helped me create a professional resume that stood out to employers."
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white font-sans overflow-x-hidden">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrollY > 50 ? 'bg-black/80 backdrop-blur-md' : 'bg-transparent'
        }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-20">
            <div className="flex-shrink-0">
              <div className="text-2xl sm:text-3xl font-bold">
                <img src='public/Logo.png' alt="" />

              </div>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <NavItem href="#home">Home</NavItem>
              <NavItem href="#about">About</NavItem>
              <NavItem href="#projects">Projects</NavItem>
              <NavItem href="#contact">Contact</NavItem>
            </div>

            <div className="flex items-center space-x-4">
              <button className="hidden sm:block bg-transparent border border-white/20 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-white/10 hover:border-white/40 transition-all duration-300">
                HIRE ME
              </button>

              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden flex flex-col space-y-1 w-6 h-6 justify-center"
              >
                <span className={`block h-0.5 w-6 bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
                <span className={`block h-0.5 w-6 bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`block h-0.5 w-6 bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
              </button>
            </div>
          </div>

          <div className={`md:hidden transition-all duration-300 overflow-hidden ${isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
            }`}>
            <div className="px-2 pt-2 pb-3 space-y-1 bg-black/90 backdrop-blur-md rounded-lg mt-2">
              <a href="#home" className="block px-3 py-2 text-white/80 hover:text-white transition-colors">Home</a>
              <a href="#about" className="block px-3 py-2 text-white/80 hover:text-white transition-colors">About</a>
              <a href="#projects" className="block px-3 py-2 text-white/80 hover:text-white transition-colors">Projects</a>
              <a href="#contact" className="block px-3 py-2 text-white/80 hover:text-white transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="relative pt-20 sm:pt-24 pb-12 sm:pb-20" id="home">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="space-y-2 sm:space-y-4 mb-12 sm:mb-20">
             <div className="text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
                <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-4 mb-2 sm:mb-4">
                  <span>I AM A</span>
                  <span className="relative">
                    <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent">
                      <img src='/Rectangle.png' className="w-8 h-4  md:w-16 md:h-8 object-contain" alt="rect" />
                    </span>
                  </span>
                  <span className="bg-white text-black px-2 sm:px-4 py-1 sm:py-2 inline-block">
                    FREELANCE
                  </span>
                </div>
                <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-4">
                  <span className="bg-white text-black px-2 sm:px-4 py-1 sm:py-2 inline-block">
                    DESIGNER
                  </span>
                  <div className=" sm:w-15 lg:w-12  rounded-sm flex-shrink-0"><img className="w-8 h-4  md:w-16 md:h-8 object-contain" src='/Rectangle.png' alt="rect2" /></div>
                  <span>FROM</span>
                </div>
                <div className="mt-2 sm:mt-4">
                  <span>SAN FRANCISCO</span>
                </div>
              </div>
            </div>
            <div className='flex flex-wrap'>


              <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-12 lg:gap-16 mb-8 sm:mb-12">
                <div className="opacity-60 hover:opacity-100 transition-opacity duration-300">
                  <span className="text-lg sm:text-xl font-semibold"><img src="public/doradesign.png" alt="logo1" /></span>
                </div>
                <div className="opacity-60 hover:opacity-100 transition-opacity duration-300">
                  <span className="text-lg sm:text-xl font-semibold"><img src="public/Frame.png" alt="logo2" /></span>
                </div>
                <div className="opacity-60 hover:opacity-100 transition-opacity duration-300">
                  <span className="text-lg sm:text-xl font-bold"><img src="public/wavefun.png" alt="logo3" /></span>
                </div>
              </div>

              <div className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto text-left">
                <p className="text-white/70 text-sm sm:text-base leading-relaxed">
                  Welcome to my portfolio. Here artistry meets functionality.
                  This site is a curated showcase of distinctive branding and
                  web designs, each crafted to captivate and inspire.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        </div>
      </main>

      {/* Expertise Section */}
      <section className="py-20 bg-black" id="about">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-12">
            <span className="text-2xl">✱</span>
            <h2 className="text-3xl sm:text-4xl font-bold">Expertise</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
            <ExpertiseCard
              title="Branding"
              description="I create efficient, applicable, and engaging websites. No predefined patterns, no sluggish, complex code. Webflow forms the foundation of my web development approach. I employ it to provide safe, top-notch personalized websites."
            />
            <ExpertiseCard
              title="UI Design"
              description="I create efficient, applicable, and engaging websites. No predefined patterns, no sluggish, complex code. Webflow forms the foundation of my web development approach. I employ it to provide safe, top-notch personalized websites."
            />
            <ExpertiseCard
              title="UX Design"
              description="Create efficient digital product based using user-focused methodology, investigation, comprehension, and visual components are a good foundation of providing clearly identified, reliable method for your business requirements."
            />
            <ExpertiseCard
              title="Development"
              description="I create efficient, applicable, and engaging websites. No predefined patterns, no sluggish, complex code. Webflow forms the foundation of my web development approach. I employ it to provide safe, top-notch personalized websites."
            />
          </div>
        </div>
      </section>

      {/* Works Section */}
      <section className="py-20 bg-black" id="projects">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div className="flex items-center gap-3">
              <span className="text-2xl">✱</span>
              <h2 className="text-3xl sm:text-4xl font-bold">Works</h2>
            </div>
            <button className="text-white/60 hover:text-white underline text-sm">
              View all
            </button>
          </div>

          <div className="grid  gap-6">
            <ProjectCard
              img={'/Frame1.png'}
            />
            <ProjectCard
              img={'/Frame2.png'}
            />
            <ProjectCard
              img={'/Frame3.png'}
            />
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-12">
            <span className="text-2xl">✱</span>
            <h2 className="text-3xl sm:text-4xl font-bold">Experience</h2>
          </div>

          <div className="space-y-0">
            <ExperienceItem
              role="Lead Product Designer"
              company="Forkknox"
              period="Mar 2022 - Oct 2023"
            />
            <ExperienceItem
              role="Intern Designer"
              company="OmniSafe"
              period="Mar 2022 - Oct 2023"
            />
            <ExperienceItem
              role="UI Designer"
              company="Doradesign"
              period="Mar 2022 - Oct 2023"
            />
            <ExperienceItem
              role="Frontend Developer"
              company="OpacityAuthor"
              period="Mar 2022 - Oct 2023"
            />
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div className="flex items-center gap-3">
              <span className="text-2xl">✱</span>
              <h2 className="text-3xl sm:text-4xl font-bold">Blog</h2>
            </div>
            <button className="text-white/60 hover:text-white underline text-sm">
              View all
            </button>
          </div>

          <div className="grid  gap-8">
            <BlogCard
              title="How UX works in web"
              date="Nov 9, 2023"
              tags={["UX", "UX"]}
              image={'/envelop.png'}
            />
            <BlogCard
              title="Case study - Analysis Application."
              date="Aug 18, 2023"
              tags={["DESIGN", "PRINT"]}
              image={'/envelop2.png'}
            />
            <BlogCard
              title="3 ways to develop your skill"
              date="Feb 16, 2023"
              tags={["FIGMA", "WEB"]}
              image={'/envelop3.png'}
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-12">
            <span className="text-2xl">✱</span>
            <h2 className="text-3xl sm:text-4xl font-bold">What they say</h2>
          </div>

          <div className="max-w-4xl">
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-gray-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">FM</span>
                </div>
              </div>
              <div className="flex-1">
                <div className="mb-2">
                  <h4 className="text-white font-semibold">Floyd Miles</h4>
                  <p className="text-white/60 text-sm">eBay</p>
                </div>
                <p className="text-white/80 text-lg leading-relaxed">
                  {testimonials[currentTestimonial].text}
                </p>
              </div>
            </div>


          </div>
        </div>
      </section>

      <Faq />
      <Footer />
    </div>
  );
};

export default Portfolio;