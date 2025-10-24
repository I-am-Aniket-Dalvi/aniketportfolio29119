import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Monitor, Network, Shield, Cloud, Database, Wrench } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: Monitor,
      category: "Operating Systems",
      skills: ["Windows Server 2003/2008/2012/2016", "Mac OS", "Ubuntu", "Windows XP/7/8/10/11"],
      color: "from-primary to-primary/80"
    },
    {
      icon: Network,
      category: "Hardware & Networking",
      skills: ["CISCO Routers", "D-Link Switches", "IP Surveillance", "Access Points", "Network Configuration"],
      color: "from-secondary to-secondary/80"
    },
    {
      icon: Shield,
      category: "Security Solutions",
      skills: ["Fortinet Firewall", "Sophos Firewall", "Seqrite Endpoint Security", "Network Security", "Compliance"],
      color: "from-accent to-accent/80"
    },
    {
      icon: Cloud,
      category: "Virtualization & Cloud",
      skills: ["VMware", "Microsoft Virtual PC", "Oracle VM VirtualBox", "Hyper-V", "AWS", "Azure", "P-Cloud"],
      color: "from-muted to-muted/80"
    },
    {
      icon: Database,
      category: "Enterprise Software",
      skills: ["Tally Prime", "AutoCAD", "Revit", "ZW CAD", "Gstar CAD", "SAP", "Microsoft 365"],
      color: "from-primary to-secondary"
    },
    {
      icon: Wrench,
      category: "Core Competencies",
      skills: ["Network Troubleshooting", "Hardware Performance", "System Optimization", "Active Directory", "Microsoft Azure"],
      color: "from-secondary to-muted"
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 gradient-text">Technical Expertise</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-[hsl(16_100%_50%)] to-[hsl(16_100%_60%)] rounded-full mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Comprehensive skill set spanning infrastructure, security, cloud, and enterprise solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card 
                key={index}
                className="p-6 border-2 hover:border-primary smooth-transition hover:shadow-xl group fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Icon Header */}
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-4 group-hover:scale-110 smooth-transition shadow-lg`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>

                {/* Category Title */}
                <h3 className="text-xl font-bold mb-4 text-foreground">{category.category}</h3>

                {/* Skills Badges */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex}
                      variant="secondary"
                      className="text-xs smooth-transition hover:bg-primary hover:text-primary-foreground cursor-default"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
