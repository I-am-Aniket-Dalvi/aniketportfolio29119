import { useState, useEffect } from "react";
import { Menu, X, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Certifications", href: "#certifications" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Determine active section
      const sections = navItems.map(item => item.href.substring(1));
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.getElementById(href.substring(1));
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-[#384959]/95 backdrop-blur-xl border-b border-[#6A89A7]/30 shadow-lg shadow-[#6A89A7]/20"
            : "bg-gradient-to-r from-[#384959]/90 via-[#384959]/85 to-[#384959]/90 backdrop-blur-md border-b border-[#6A89A7]/20"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex-shrink-0 relative group">
              <a
                href="#home"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("#home");
                }}
                className="relative text-2xl font-bold text-white hover:scale-110 transition-all duration-300"
              >
                <span className="relative z-10 bg-gradient-to-r from-[#88BDF2] via-[#BDDDFC] to-[#88BDF2] bg-clip-text text-transparent">
                  AD
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#88BDF2]/20 to-[#BDDDFC]/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-2">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.href);
                  }}
                  className={`relative px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 group ${
                    activeSection === item.href.substring(1)
                      ? "text-white"
                      : "text-[#BDDDFC] hover:text-white"
                  }`}
                >
                  <span className="relative z-10">{item.name}</span>
                  <span
                    className={`absolute bottom-1 left-1/2 -translate-x-1/2 h-0.5 bg-gradient-to-r from-[#88BDF2] via-[#BDDDFC] to-[#88BDF2] transition-all duration-300 rounded-full ${
                      activeSection === item.href.substring(1)
                        ? "w-3/4 shadow-lg shadow-[#88BDF2]/50"
                        : "w-0 group-hover:w-3/4 group-hover:shadow-lg group-hover:shadow-[#88BDF2]/30"
                    }`}
                  />
                  {activeSection === item.href.substring(1) && (
                    <span className="absolute inset-0 bg-gradient-to-r from-[#6A89A7]/30 to-[#88BDF2]/20 rounded-xl -z-10 animate-pulse" />
                  )}
                  <div className="absolute inset-0 bg-white/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                </a>
              ))}
            </div>

            {/* Resume Button - Desktop */}
            <div className="hidden md:block">
              <Button
                variant="hero"
                size="sm"
                asChild
                className="relative overflow-hidden group bg-gradient-to-r from-[#88BDF2] to-[#6A89A7] hover:from-[#BDDDFC] hover:to-[#88BDF2] border-0 shadow-lg shadow-[#88BDF2]/30 hover:shadow-[#BDDDFC]/40 text-[#384959] font-semibold"
              >
                <a href="/Aniket_Dalvi_Resume.pdf" download>
                  <span className="relative z-10 flex items-center gap-2">
                    <Download className="h-4 w-4" />
                    Resume
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                </a>
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="relative text-white hover:bg-white/10"
              >
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-4 pt-2 pb-6 space-y-2 bg-[#384959]/98 backdrop-blur-xl border-b border-[#6A89A7]/30">
            {navItems.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
                className={`block px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 animate-fade-in ${
                  activeSection === item.href.substring(1)
                    ? "bg-gradient-to-r from-[#6A89A7]/40 to-[#88BDF2]/30 text-white border border-[#88BDF2]/40 shadow-lg shadow-[#88BDF2]/20"
                    : "text-[#BDDDFC] hover:bg-white/10 hover:text-white"
                }`}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {item.name}
              </a>
            ))}
            <Button
              variant="hero"
              size="sm"
              asChild
              className="w-full mt-4 bg-gradient-to-r from-[#88BDF2] to-[#6A89A7] hover:from-[#BDDDFC] hover:to-[#88BDF2] border-0 shadow-lg shadow-[#88BDF2]/30 text-[#384959] font-semibold"
            >
              <a href="/Aniket_Dalvi_Resume.pdf" download>
                <Download className="h-4 w-4 mr-2" />
                Download Resume
              </a>
            </Button>
          </div>
        </div>
      </nav>

      {/* Spacer to prevent content from going under fixed navbar */}
      <div className="h-20" />
    </>
  );
};

export default Navbar;
