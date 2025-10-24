import { Button } from "@/components/ui/button";
import { Download, Mail, Award, Users, TrendingUp } from "lucide-react";
import profileImage from "@/assets/aniket-profile.jpeg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary via-secondary to-accent">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-muted rounded-full mix-blend-multiply filter blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent rounded-full mix-blend-multiply filter blur-3xl animate-float" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-secondary rounded-full mix-blend-multiply filter blur-3xl animate-float" style={{ animationDelay: "4s" }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8 fade-in-up text-primary-foreground">
            <div className="space-y-4">
              <div className="inline-block px-4 py-2 rounded-full bg-muted/20 backdrop-blur-sm border border-muted/30">
                <p className="text-sm font-semibold tracking-wider uppercase text-muted">IT Infrastructure Expert</p>
              </div>
              
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
                Aniket Dalvi
              </h1>
              
              <div className="h-1.5 w-28 bg-accent rounded-full" />
              
              <p className="text-xl sm:text-2xl text-muted max-w-xl leading-relaxed">
                Transforming complex IT infrastructures into secure, scalable, and high-performance solutions
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                variant="premium" 
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

            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="relative group">
                <div className="absolute inset-0 bg-accent/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all" />
                <div className="relative bg-card/10 backdrop-blur-sm border border-muted/20 rounded-2xl p-4 hover:border-accent/50 transition-all">
                  <Award className="w-6 h-6 text-accent mb-2" />
                  <p className="text-3xl font-bold">5+</p>
                  <p className="text-xs text-muted">Years Exp.</p>
                </div>
              </div>
              
              <div className="relative group">
                <div className="absolute inset-0 bg-accent/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all" />
                <div className="relative bg-card/10 backdrop-blur-sm border border-muted/20 rounded-2xl p-4 hover:border-accent/50 transition-all">
                  <TrendingUp className="w-6 h-6 text-accent mb-2" />
                  <p className="text-3xl font-bold">30%</p>
                  <p className="text-xs text-muted">Less Downtime</p>
                </div>
              </div>
              
              <div className="relative group">
                <div className="absolute inset-0 bg-accent/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all" />
                <div className="relative bg-card/10 backdrop-blur-sm border border-muted/20 rounded-2xl p-4 hover:border-accent/50 transition-all">
                  <Users className="w-6 h-6 text-accent mb-2" />
                  <p className="text-3xl font-bold">100+</p>
                  <p className="text-xs text-muted">Systems</p>
                </div>
              </div>
            </div>
          </div>

          {/* Smaller Profile Image */}
          <div className="relative fade-in-up flex justify-center lg:justify-end" style={{ animationDelay: "0.2s" }}>
            <div className="relative w-64 sm:w-80 lg:w-96">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-accent to-muted rounded-3xl blur-3xl opacity-40 animate-pulse" />
              
              {/* Image Container */}
              <div className="relative rounded-3xl overflow-hidden border-4 border-muted/30 shadow-2xl backdrop-blur-sm">
                <img 
                  src={profileImage} 
                  alt="Aniket Dalvi - IT Infrastructure Expert"
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Availability Badge */}
              <div className="absolute -bottom-4 -right-4 bg-card rounded-2xl p-4 shadow-2xl border-2 border-accent/30 animate-float backdrop-blur-sm">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                  <p className="font-semibold text-card-foreground text-sm">Available</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-muted/50 flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-muted rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
