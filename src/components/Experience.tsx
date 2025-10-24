import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Calendar, TrendingUp } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      role: "IT Manager",
      company: "YMS Consulting Engineers",
      period: "Sep 2021 - Present",
      type: "Full-time",
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
      company: "YMS Consulting Engineers",
      period: "Jul 2019 - Aug 2021",
      type: "Full-time",
      achievements: [
        {
          problem: "Slow and outdated legacy systems",
          solution: "Optimized and upgraded hardware and software infrastructure",
          result: "Enhanced operational efficiency across the organization"
        }
      ],
      responsibilities: [
        "Troubleshot and resolved hardware, software, and network-related issues",
        "Configured and maintained IP surveillance systems and access control",
        "Managed printer and scanner setups, ensuring optimal performance",
        "Provided end-user support for desktop applications and network connectivity",
        "Assisted in deployment and configuration of enterprise software solutions"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 gradient-text">Professional Experience</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-[hsl(16_100%_50%)] to-[hsl(16_100%_60%)] rounded-full mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Proven track record of delivering enterprise-level IT solutions
          </p>
        </div>

        <div className="space-y-8 max-w-5xl mx-auto">
          {experiences.map((exp, index) => (
            <Card 
              key={index}
              className="p-8 border-2 hover:border-primary smooth-transition hover:shadow-xl fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-foreground">{exp.role}</h3>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Building2 className="w-4 h-4" />
                    <span className="font-medium">{exp.company}</span>
                  </div>
                </div>
                <div className="flex flex-col sm:items-end gap-2">
                  <Badge variant="secondary" className="w-fit">
                    <Calendar className="w-3 h-3 mr-1" />
                    {exp.period}
                  </Badge>
                  <Badge className="w-fit bg-primary/10 text-primary hover:bg-primary/20">
                    {exp.type}
                  </Badge>
                </div>
              </div>

              {/* Key Achievements */}
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-4">
                  <TrendingUp className="w-5 h-5 text-primary" />
                  <h4 className="text-lg font-bold text-foreground">Key Achievements</h4>
                </div>
                <div className="space-y-4">
                  {exp.achievements.map((achievement, achIndex) => (
                    <div key={achIndex} className="border-l-4 border-primary pl-4 space-y-2">
                      <div>
                        <span className="text-sm font-semibold text-muted-foreground">Problem:</span>
                        <p className="text-foreground">{achievement.problem}</p>
                      </div>
                      <div>
                        <span className="text-sm font-semibold text-muted-foreground">Solution:</span>
                        <p className="text-foreground">{achievement.solution}</p>
                      </div>
                      <div>
                        <span className="text-sm font-semibold text-primary">Result:</span>
                        <p className="text-foreground font-medium">{achievement.result}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Responsibilities */}
              <div>
                <h4 className="text-lg font-bold mb-3 text-foreground">Key Responsibilities</h4>
                <ul className="space-y-2">
                  {exp.responsibilities.map((responsibility, respIndex) => (
                    <li key={respIndex} className="flex items-start gap-3 text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span>{responsibility}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
