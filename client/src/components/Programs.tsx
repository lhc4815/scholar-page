import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  FileText, 
  Search, 
  MessageCircle, 
  Target, 
  TrendingUp, 
  Compass, 
  GraduationCap, 
  BookOpen, 
  CheckCircle 
} from "lucide-react";
import { programs } from "@/data/programs";

export default function Programs() {
  const getIcon = (iconName: string) => {
    const iconProps = { className: "w-8 h-8" };
    switch (iconName) {
      case "FileText": return <FileText {...iconProps} />;
      case "Search": return <Search {...iconProps} />;
      case "MessageCircle": return <MessageCircle {...iconProps} />;
      case "Target": return <Target {...iconProps} />;
      case "TrendingUp": return <TrendingUp {...iconProps} />;
      case "Compass": return <Compass {...iconProps} />;
      case "GraduationCap": return <GraduationCap {...iconProps} />;
      case "BookOpen": return <BookOpen {...iconProps} />;
      case "CheckCircle": return <CheckCircle {...iconProps} />;
      default: return <FileText {...iconProps} />;
    }
  };

  const navigateToContact = () => {
    window.location.href = "/contact";
  };

  return (
    <section id="programs" className="py-16 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            전문 프로그램
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            학생 개인의 목표와 특성에 맞춘 9가지 전문 프로그램으로<br />
            체계적이고 효과적인 입시 준비를 도와드립니다
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {programs.map((program, index) => (
            <Card 
              key={program.id} 
              className="overflow-hidden hover-elevate transition-all duration-300 cursor-pointer group"
              data-testid={`card-program-${index}`}
              onClick={() => window.location.href = `/programs/${program.id}`}
            >
              <div className="aspect-video bg-muted relative overflow-hidden">
                <img 
                  src={program.image} 
                  alt={program.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-2 left-2 bg-primary text-primary-foreground px-2 py-1 rounded text-xs font-medium">
                  {program.category}
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 bg-primary/10 rounded flex items-center justify-center text-primary mr-3">
                    {getIcon(program.iconName)}
                  </div>
                  <h3 className="font-bold text-lg text-card-foreground group-hover:text-primary transition-colors line-clamp-1">
                    {program.title}
                  </h3>
                </div>
                
                <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                  {program.shortDescription}
                </p>
                
                <div className="mt-4 pt-4 border-t">
                  <Button 
                    variant="ghost" 
                    size="sm"
                    className="p-0 h-auto text-primary hover:text-primary/80"
                    onClick={(e) => {
                      e.stopPropagation();
                      window.location.href = `/programs/${program.id}`;
                    }}
                  >
                    자세히 보기 →
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button 
            size="lg"
            onClick={navigateToContact}
            data-testid="button-program-consultation"
            className="px-8 py-6 text-lg"
          >
            프로그램 상담받기
          </Button>
        </div>
      </div>
    </section>
  );
}