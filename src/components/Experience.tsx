import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Calendar, TrendingUp, CheckCircle } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      role: "IT Manager",
      company: "YMS Consulting Engineers",
      period: "Sep 2021 - Present",
      type: "Full-time",
      gradient: "from-primary to-secondary",
      achievements: [
        {
          problem: "Network downtime affecting enterprise applications (Tally Prime, AutoCAD, Revit)",
          solution: "Implemented proactive monitoring and efficient troubleshooting strategies",
          result: "Reduced network downtime by 30%"
        },
        {
          problem: "Limited scalability and high operational costs with on-premise systems",
          solution: "Led migration to cloud platforms (Microsoft Azure)",
          result: "Improved scalability and reduced infrastructure costs"
        },
        {
          problem: "Insufficient network security and compliance gaps",
          solution: "Deployed Fortinet and Sophos firewall solutions with optimized security protocols",
          result: "Significantly enhanced data security and achieved regulatory compliance"
        }
      ],
      responsibilities: [
        "Spearheaded IT infrastructure management including Windows Server (2010, 2012 R2, 2016) and Active Directory",
        "Configured and maintained CISCO routers, switches, and D-Link routers for seamless connectivity",
        "Managed Microsoft Admin Dashboard and Azure environments for user provisioning",
        "Administered Active Directory for user management, email distribution lists, and group configurations",
        "Provided technical guidance for antivirus installation and resolved network access issues"
      ]
    },
    {
      role: "Information Technology Support Engineer",
      company: "Megha Compusoft",
      period: "Feb 2019 - Aug 2021",
      type: "Full-time",
      gradient: "from-secondary to-accent",
      achievements: [
        {
          problem: "Inefficient IT operations and connectivity issues",
          solution: "Enhanced IT efficiency by resolving connectivity and SAP-related issues promptly",
          result: "Successfully streamlined user account management across Windows Server and Microsoft Azure environments"
        },
        {
          problem: "Limited IT infrastructure scalability and flexibility",
          solution: "Supported virtualization platforms such as VMware, Microsoft Virtual PC, and Oracle VM VirtualBox",
          result: "Improved IT infrastructure scalability and flexibility"
        }
      ],
      responsibilities: [
        "Provided day-to-day technical support for hardware, software, and network systems in a multi-user environment",
        "Installed and configured virtualization platforms such as VMware, Microsoft Virtual PC, and Oracle VM VirtualBox",
        "Configured and maintained network devices, including CISCO routers, switches, and D-Link routers",
        "Managed Microsoft Admin Dashboard, handling user account creation, deletion, and permission management",
        "Configured and supported Microsoft Outlook for email accounts, resolving access and configuration issues",
        "Diagnosed and resolved issues related to network connectivity, printer configurations, and user security settings",
        "Administered email distribution lists, user accounts, and email groups",
        "Assisted in SAP troubleshooting, providing tailored technical solutions to business users",
        "Delivered IT support for GSCALTEX INDIA Pvt. Ltd. at a residential site"
      ]
    }
  ];

  return (
    <section id="experience" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-12 sm:mb-16 fade-in-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 gradient-text">Professional Experience</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-accent to-muted rounded-full mx-auto mb-6" />
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto px-4">
            Proven track record of delivering enterprise-level IT solutions
          </p>
        </div>

        <div className="space-y-8 max-w-5xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={index} className="relative group">
              <div className={`absolute inset-0 bg-gradient-to-br ${exp.gradient} opacity-20 rounded-3xl blur-xl group-hover:blur-2xl transition-all`} />
              
              <Card 
                className="relative p-8 border-2 border-accent/30 hover:border-accent/60 smooth-transition hover:shadow-2xl bg-card/50 backdrop-blur-sm overflow-hidden fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Decorative Corner */}
                <div className={`absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl ${exp.gradient} opacity-10 rounded-bl-[150px]`} />
                
                {/* Header */}
                <div className="relative flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-foreground">{exp.role}</h3>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Building2 className="w-4 h-4" />
                      <span className="font-medium">{exp.company}</span>
                    </div>
                  </div>
                  <div className="flex flex-col sm:items-end gap-2">
                    <Badge variant="secondary" className="w-fit border border-accent/30">
                      <Calendar className="w-3 h-3 mr-1" />
                      {exp.period}
                    </Badge>
                    <Badge className="w-fit bg-accent/20 text-primary hover:bg-accent/30 border border-accent/40">
                      {exp.type}
                    </Badge>
                  </div>
                </div>

                {/* Key Achievements */}
                <div className="relative mb-6">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent to-muted flex items-center justify-center">
                      <TrendingUp className="w-4 h-4 text-white" />
                    </div>
                    <h4 className="text-lg font-bold text-foreground">Key Achievements</h4>
                  </div>
                  <div className="space-y-4">
                    {exp.achievements.map((achievement, achIndex) => (
                      <div key={achIndex} className="relative pl-6 border-l-4 border-accent/50 space-y-2 ml-4">
                        <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-accent border-2 border-background" />
                        <div>
                          <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Problem:</span>
                          <p className="text-foreground">{achievement.problem}</p>
                        </div>
                        <div>
                          <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Solution:</span>
                          <p className="text-foreground">{achievement.solution}</p>
                        </div>
                        <div>
                          <span className="text-xs font-semibold text-accent uppercase tracking-wider">Result:</span>
                          <p className="text-foreground font-medium">{achievement.result}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Responsibilities */}
                <div className="relative">
                  <h4 className="text-lg font-bold mb-3 text-foreground">Key Responsibilities</h4>
                  <ul className="space-y-2">
                    {exp.responsibilities.map((responsibility, respIndex) => (
                      <li key={respIndex} className="flex items-start gap-3 text-muted-foreground">
                        <CheckCircle className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                        <span>{responsibility}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
