import { Card } from "@/components/ui/card";
import { Code2, Server, Shield, Cloud } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Server,
      title: "Infrastructure",
      description: "Expert in Windows Server, Active Directory, and enterprise IT management",
      gradient: "from-primary to-secondary"
    },
    {
      icon: Shield,
      title: "Security",
      description: "Fortinet & Sophos firewall implementation with compliance expertise",
      gradient: "from-secondary to-accent"
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description: "AWS, Azure, and P-Cloud management for scalable operations",
      gradient: "from-accent to-muted"
    },
    {
      icon: Code2,
      title: "Virtualization",
      description: "VMware, Hyper-V, and VirtualBox deployment specialist",
      gradient: "from-muted to-primary"
    }
  ];

  return (
    <section id="about" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-12 sm:mb-16 fade-in-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 gradient-text">About Me</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-accent to-muted rounded-full mx-auto mb-6" />
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto px-4">
            Driving Innovation Through Technical Excellence
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Professional Summary */}
          <div className="space-y-6 fade-in-up">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-muted/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all" />
              <Card className="relative p-8 border-2 border-accent/30 shadow-xl hover:shadow-2xl smooth-transition bg-card/50 backdrop-blur-sm">
                <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-accent/20 to-transparent rounded-3xl" />
                <h3 className="text-2xl font-bold mb-4 text-foreground relative">Professional Summary</h3>
                <p className="text-muted-foreground leading-relaxed relative">
                  Dynamic and results-oriented IT Engineer with over <strong className="text-foreground">5 years of hands-on experience</strong> in designing, implementing, and managing complex IT infrastructures. Demonstrated expertise in virtualization, advanced firewall configuration, and cloud-based solutions.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4 relative">
                  Proven ability to enhance network security, drive operational excellence, and deliver scalable IT solutions. Skilled at troubleshooting critical technical challenges while ensuring minimal downtime and maintaining high user satisfaction.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4 relative">
                  Recognized for streamlining operations, improving organizational efficiency, and aligning IT strategies with business objectives through proactive support and strategic leadership.
                </p>
              </Card>
            </div>
          </div>

          {/* Creative Highlights Grid */}
          <div className="grid sm:grid-cols-2 gap-6 fade-in-up" style={{ animationDelay: "0.2s" }}>
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="relative group">
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-20 rounded-3xl blur-xl group-hover:blur-2xl transition-all`} />
                  <Card className="relative p-6 border-2 border-transparent hover:border-accent/50 smooth-transition bg-card/50 backdrop-blur-sm overflow-hidden h-full">
                    {/* Decorative Corner */}
                    <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl ${item.gradient} opacity-10 rounded-bl-[100px]`} />
                    
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mb-4 group-hover:scale-110 smooth-transition shadow-lg relative z-10`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h4 className="text-lg font-bold mb-2 text-foreground relative z-10">{item.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed relative z-10">{item.description}</p>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
