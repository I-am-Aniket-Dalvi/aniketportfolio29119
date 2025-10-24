import { Button } from "@/components/ui/button";
import { Download, Mail } from "lucide-react";
import profileImage from "@/assets/aniket-profile.jpeg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Gradient Background with Fire Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent via-primary to-secondary opacity-95" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(16_100%_50%/0.15),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,hsl(16_100%_60%/0.1),transparent_50%)]" />
      
      {/* Floating Orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-muted rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{ animationDelay: "2s" }} />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8 fade-in-up">
            <div className="space-y-4">
              <p className="text-muted text-lg font-medium tracking-wider uppercase">IT Infrastructure Expert</p>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight">
                Aniket Dalvi
              </h1>
              <div className="h-1 w-24 bg-gradient-to-r from-[hsl(16_100%_50%)] to-[hsl(16_100%_60%)] rounded-full" />
              <p className="text-xl sm:text-2xl text-muted max-w-xl leading-relaxed">
                Transforming complex IT infrastructures into secure, scalable, and high-performance solutions
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                variant="cta" 
                size="xl"
                asChild
                className="group"
              >
                <a href="/Aniket_Dalvi_Resume.pdf" download>
                  <Download className="group-hover:animate-bounce" />
                  Download Resume
                </a>
              </Button>
              <Button 
                variant="hero" 
                size="xl"
                asChild
              >
                <a href="#contact">
                  <Mail />
                  Hire Me
                </a>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="space-y-1">
                <p className="text-4xl font-bold text-primary-foreground">5+</p>
                <p className="text-sm text-muted">Years Experience</p>
              </div>
              <div className="space-y-1">
                <p className="text-4xl font-bold text-primary-foreground">30%</p>
                <p className="text-sm text-muted">Downtime Reduced</p>
              </div>
              <div className="space-y-1">
                <p className="text-4xl font-bold text-primary-foreground">100+</p>
                <p className="text-sm text-muted">Systems Managed</p>
              </div>
            </div>
          </div>

          {/* Profile Image */}
          <div className="relative fade-in-up" style={{ animationDelay: "0.2s" }}>
            <div className="relative w-full max-w-lg mx-auto">
              {/* Glow Effect Behind Image */}
              <div className="absolute inset-0 bg-gradient-to-r from-[hsl(16_100%_50%)] to-[hsl(16_100%_60%)] rounded-3xl blur-2xl opacity-30 animate-glow" />
              
              {/* Image Container */}
              <div className="relative rounded-3xl overflow-hidden border-4 border-muted shadow-2xl">
                <img 
                  src={profileImage} 
                  alt="Aniket Dalvi - IT Infrastructure Expert"
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-6 -right-6 bg-card rounded-2xl p-6 shadow-xl border border-border animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                  <p className="font-semibold text-card-foreground">Available for Work</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-muted flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-muted rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
