import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, GraduationCap, Calendar } from "lucide-react";

const Certifications = () => {
  const certifications = [
    {
      title: "CCNA Routing and Switching",
      issuer: "Cisco",
      category: "Networking",
      icon: "🌐",
      gradient: "from-primary to-secondary"
    },
    {
      title: "ITIL",
      issuer: "Axelos",
      category: "IT Service Management",
      icon: "📊",
      gradient: "from-secondary to-accent"
    },
    {
      title: "CCC",
      issuer: "NIELIT",
      category: "Computer Concepts",
      icon: "💻",
      gradient: "from-accent to-muted"
    },
    {
      title: "Programming Certifications",
      issuer: "Multiple Institutions",
      category: "C, C++, Java, SQL",
      icon: "⚙️",
      gradient: "from-muted to-primary"
    },
    {
      title: "MS-CIT",
      issuer: "MKCL",
      category: "IT Literacy",
      icon: "🎓",
      gradient: "from-primary to-accent"
    }
  ];

  const education = [
    {
      degree: "Bachelor of Science in Information Technology",
      institution: "VIVA College",
      year: "April 2018",
      type: "Graduation",
      gradient: "from-primary to-secondary"
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      institution: "VIVA Junior College",
      year: "March 2014",
      type: "12th Grade",
      gradient: "from-secondary to-accent"
    },
    {
      degree: "Secondary School Certificate (SSC)",
      institution: "Nutan Vidyalaya",
      year: "March 2012",
      type: "10th Grade",
      gradient: "from-accent to-muted"
    }
  ];

  return (
    <section id="certifications" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto">
        <div className="text-center mb-12 sm:mb-16 fade-in-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 gradient-text">Certifications & Education</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-accent to-muted rounded-full mx-auto mb-6" />
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto px-4">
            Continuous learning and professional development
          </p>
        </div>

        {/* Certifications */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8 fade-in-up">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-accent to-muted flex items-center justify-center shadow-lg">
              <Award className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-3xl font-bold text-foreground">Professional Certifications</h3>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="relative group">
                <div className={`absolute inset-0 bg-gradient-to-br ${cert.gradient} opacity-20 rounded-3xl blur-xl group-hover:blur-2xl transition-all`} />
                
                <Card 
                  className="relative p-6 border-2 border-accent/30 hover:border-accent/60 smooth-transition hover:shadow-xl bg-card/50 backdrop-blur-sm overflow-hidden fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Decorative Corner */}
                  <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl ${cert.gradient} opacity-10 rounded-bl-[80px]`} />
                  
                  <div className="relative flex items-start justify-between mb-4">
                    <div className="text-5xl group-hover:scale-110 smooth-transition">{cert.icon}</div>
                    <Badge variant="secondary" className="text-xs border border-accent/30">
                      {cert.category}
                    </Badge>
                  </div>
                  <h4 className="relative text-lg font-bold mb-2 text-foreground group-hover:text-primary smooth-transition">
                    {cert.title}
                  </h4>
                  <p className="relative text-sm text-muted-foreground">{cert.issuer}</p>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div>
          <div className="flex items-center gap-3 mb-8 fade-in-up">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-secondary to-accent flex items-center justify-center shadow-lg">
              <GraduationCap className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-3xl font-bold text-foreground">Education</h3>
          </div>

          <div className="space-y-6 max-w-4xl mx-auto">
            {education.map((edu, index) => (
              <div key={index} className="relative group">
                <div className={`absolute inset-0 bg-gradient-to-r ${edu.gradient} opacity-20 rounded-3xl blur-xl group-hover:blur-2xl transition-all`} />
                
                <Card 
                  className="relative p-6 border-2 border-accent/30 hover:border-accent/60 smooth-transition hover:shadow-lg bg-card/50 backdrop-blur-sm overflow-hidden fade-in-up"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  {/* Decorative Line */}
                  <div className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b ${edu.gradient}`} />
                  
                  <div className="relative flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div className="space-y-2">
                      <h4 className="text-xl font-bold text-foreground">{edu.degree}</h4>
                      <p className="text-muted-foreground">{edu.institution}</p>
                    </div>
                    <div className="flex flex-col sm:items-end gap-2">
                      <Badge variant="secondary" className="w-fit border border-accent/30">
                        <Calendar className="w-3 h-3 mr-1" />
                        {edu.year}
                      </Badge>
                      <Badge className="w-fit bg-accent/20 text-primary hover:bg-accent/30 border border-accent/40">
                        {edu.type}
                      </Badge>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
