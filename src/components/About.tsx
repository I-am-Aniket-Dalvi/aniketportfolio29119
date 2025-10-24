import { Card } from "@/components/ui/card";
import { Code2, Server, Shield, Cloud } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Server,
      title: "Infrastructure",
      description: "Expert in Windows Server, Active Directory, and enterprise IT management"
    },
    {
      icon: Shield,
      title: "Security",
      description: "Fortinet & Sophos firewall implementation with compliance expertise"
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description: "AWS, Azure, and P-Cloud management for scalable operations"
    },
    {
      icon: Code2,
      title: "Virtualization",
      description: "VMware, Hyper-V, and VirtualBox deployment specialist"
    }
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 gradient-text">About Me</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-[hsl(16_100%_50%)] to-[hsl(16_100%_60%)] rounded-full mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Driving Innovation Through Technical Excellence
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Professional Summary */}
          <div className="space-y-6 fade-in-up">
            <Card className="p-8 border-2 shadow-lg hover:shadow-xl smooth-transition">
              <h3 className="text-2xl font-bold mb-4 text-foreground">Professional Summary</h3>
              <p className="text-muted-foreground leading-relaxed">
                Dynamic and results-oriented IT Engineer with over <strong className="text-foreground">5 years of hands-on experience</strong> in designing, implementing, and managing complex IT infrastructures. Demonstrated expertise in virtualization, advanced firewall configuration, and cloud-based solutions.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Proven ability to enhance network security, drive operational excellence, and deliver scalable IT solutions. Skilled at troubleshooting critical technical challenges while ensuring minimal downtime and maintaining high user satisfaction.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Recognized for streamlining operations, improving organizational efficiency, and aligning IT strategies with business objectives through proactive support and strategic leadership.
              </p>
            </Card>
          </div>

          {/* Key Highlights Grid */}
          <div className="grid sm:grid-cols-2 gap-6 fade-in-up" style={{ animationDelay: "0.2s" }}>
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <Card 
                  key={index}
                  className="p-6 border-2 hover:border-primary smooth-transition hover:shadow-lg group"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 smooth-transition">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="text-lg font-bold mb-2 text-foreground">{item.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
