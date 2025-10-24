import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, GraduationCap, Calendar } from "lucide-react";

const Certifications = () => {
  const certifications = [
    {
      title: "CCNA Routing and Switching",
      issuer: "Cisco",
      category: "Networking",
      icon: "🌐"
    },
    {
      title: "ITIL",
      issuer: "Axelos",
      category: "IT Service Management",
      icon: "📊"
    },
    {
      title: "CCC",
      issuer: "NIELIT",
      category: "Computer Concepts",
      icon: "💻"
    },
    {
      title: "Programming Certifications",
      issuer: "Multiple Institutions",
      category: "C, C++, Java, SQL",
      icon: "⚙️"
    },
    {
      title: "MS-CIT",
      issuer: "MKCL",
      category: "IT Literacy",
      icon: "🎓"
    }
  ];

  const education = [
    {
      degree: "Bachelor of Science in Information Technology",
      institution: "VIVA College",
      year: "April 2018",
      type: "Graduation"
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      institution: "VIVA Junior College",
      year: "March 2014",
      type: "12th Grade"
    },
    {
      degree: "Secondary School Certificate (SSC)",
      institution: "Nutan Vidyalaya",
      year: "March 2012",
      type: "10th Grade"
    }
  ];

  return (
    <section id="certifications" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 gradient-text">Certifications & Education</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-[hsl(16_100%_50%)] to-[hsl(16_100%_60%)] rounded-full mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Continuous learning and professional development
          </p>
        </div>

        {/* Certifications */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8 fade-in-up">
            <Award className="w-8 h-8 text-primary" />
            <h3 className="text-3xl font-bold text-foreground">Professional Certifications</h3>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <Card 
                key={index}
                className="p-6 border-2 hover:border-primary smooth-transition hover:shadow-xl group fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="text-4xl group-hover:scale-110 smooth-transition">{cert.icon}</div>
                  <Badge variant="secondary" className="text-xs">
                    {cert.category}
                  </Badge>
                </div>
                <h4 className="text-lg font-bold mb-2 text-foreground group-hover:text-primary smooth-transition">
                  {cert.title}
                </h4>
                <p className="text-sm text-muted-foreground">{cert.issuer}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Education */}
        <div>
          <div className="flex items-center gap-3 mb-8 fade-in-up">
            <GraduationCap className="w-8 h-8 text-primary" />
            <h3 className="text-3xl font-bold text-foreground">Education</h3>
          </div>

          <div className="space-y-6 max-w-4xl mx-auto">
            {education.map((edu, index) => (
              <Card 
                key={index}
                className="p-6 border-2 hover:border-primary smooth-transition hover:shadow-lg fade-in-up"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div className="space-y-2">
                    <h4 className="text-xl font-bold text-foreground">{edu.degree}</h4>
                    <p className="text-muted-foreground">{edu.institution}</p>
                  </div>
                  <div className="flex flex-col sm:items-end gap-2">
                    <Badge variant="secondary" className="w-fit">
                      <Calendar className="w-3 h-3 mr-1" />
                      {edu.year}
                    </Badge>
                    <Badge className="w-fit bg-primary/10 text-primary hover:bg-primary/20">
                      {edu.type}
                    </Badge>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
