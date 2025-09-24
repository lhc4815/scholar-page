import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Eye, BookOpen, GraduationCap } from "lucide-react";

export default function Strategies() {
  // todo: remove mock functionality - replace with real strategy blog posts
  const blogPosts = [
    {
      title: "2025 고교학점제 완전정복: 새로운 입시 패러다임",
      category: "고교학점제",
      date: "2024.03.15",
      excerpt: "2025년부터 전면 시행되는 고교학점제의 핵심 내용과 대학 입시에 미치는 영향을 상세히 분석합니다.",
      readTime: "5분",
      image: "https://via.placeholder.com/400x250?text=고교학점제+가이드"
    },
    {
      title: "학생부종합전형 합격 전략: 진짜 차별화 포인트",
      category: "학생부종합전형", 
      date: "2024.03.10",
      excerpt: "단순한 스펙이 아닌 진정한 전공적합성과 발전가능성을 보여주는 학생부 작성 전략을 공개합니다.",
      readTime: "7분",
      image: "https://via.placeholder.com/400x250?text=학종+전략"
    },
    {
      title: "고교학점제 시대, 선택과목 조합의 모든 것",
      category: "고교학점제",
      date: "2024.03.05", 
      excerpt: "진로에 맞는 최적의 선택과목 조합과 대학별 반영 방식을 알아보고 전략적 선택 방법을 제시합니다.",
      readTime: "6분",
      image: "https://via.placeholder.com/400x250?text=선택과목+조합"
    },
    {
      title: "학생부종합전형 면접의 새로운 트렌드",
      category: "학생부종합전형",
      date: "2024.02.28",
      excerpt: "최근 학종 면접에서 중요하게 다뤄지는 질문 유형과 효과적인 답변 전략을 실제 사례와 함께 설명합니다.",
      readTime: "4분", 
      image: "https://via.placeholder.com/400x250?text=학종+면접"
    }
  ];

  const promotionalImages = [
    {
      title: "2024 입시설명회 안내",
      image: "https://via.placeholder.com/300x400?text=입시설명회+포스터",
      description: "스콜라시프트 입시설명회"
    },
    {
      title: "생기부 특강 홍보",
      image: "https://via.placeholder.com/300x400?text=생기부+특강",
      description: "생활기록부 관리 특강"
    },
    {
      title: "면접 대비 프로그램",
      image: "https://via.placeholder.com/300x400?text=면접+프로그램",
      description: "대학별 면접 대비 프로그램"
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "고교학점제":
        return "bg-chart-1 text-primary-foreground";
      case "학생부종합전형":
        return "bg-chart-2 text-primary-foreground";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "고교학점제":
        return <GraduationCap className="w-4 h-4" />;
      case "학생부종합전형":
        return <BookOpen className="w-4 h-4" />;
      default:
        return <BookOpen className="w-4 h-4" />;
    }
  };

  return (
    <section id="strategies" className="py-16 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            입시전략
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            고교학점제와 학생부종합전형에 대한 최신 입시 동향과<br />
            전문가의 전략적 인사이트를 확인하세요
          </p>
        </div>

        {/* Blog Posts Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-foreground mb-8">전략 블로그</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogPosts.map((post, index) => (
              <Card 
                key={index} 
                className="overflow-hidden hover-elevate transition-all duration-300 cursor-pointer group"
                data-testid={`card-blog-post-${index}`}
                onClick={() => console.log('Read blog post:', post.title)}
              >
                <div className="aspect-video bg-muted relative overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className={`px-2 py-1 rounded text-xs font-medium flex items-center gap-1 ${getCategoryColor(post.category)}`}>
                      {getCategoryIcon(post.category)}
                      {post.category}
                    </span>
                    <div className="flex items-center text-xs text-muted-foreground">
                      <Calendar className="w-3 h-3 mr-1" />
                      {post.date}
                    </div>
                    <span className="text-xs text-muted-foreground">
                      {post.readTime} 읽기
                    </span>
                  </div>
                  
                  <h3 className="font-bold text-lg mb-2 text-card-foreground group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex justify-between items-center mt-4">
                    <Button 
                      variant="ghost" 
                      size="sm"
                      className="p-0 h-auto text-primary hover:text-primary/80"
                      onClick={(e) => {
                        e.stopPropagation();
                        console.log('Read more:', post.title);
                      }}
                    >
                      더 읽어보기 →
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={(e) => {
                        e.stopPropagation();
                        console.log('Quick view:', post.title);
                      }}
                      className="flex items-center gap-1"
                    >
                      <Eye className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Promotional Images Gallery */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-foreground mb-8">홍보 자료</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {promotionalImages.map((item, index) => (
              <Card 
                key={index} 
                className="overflow-hidden hover-elevate transition-all duration-300 cursor-pointer group"
                data-testid={`card-promotional-${index}`}
                onClick={() => console.log('View promotional material:', item.title)}
              >
                <div className="aspect-[3/4] bg-muted relative overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <h4 className="font-semibold text-card-foreground group-hover:text-primary transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-sm text-muted-foreground mt-1">
                    {item.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>

        <div className="bg-card rounded-lg p-8 text-center border">
          <h3 className="text-xl font-bold text-card-foreground mb-4">
            개인 맞춤형 입시 전략이 필요하신가요?
          </h3>
          <p className="text-muted-foreground mb-6">
            전문 컨설턴트와의 상담을 통해 학생별 맞춤 전략을 수립해드립니다
          </p>
          <Button 
            size="lg"
            onClick={() => window.location.href = "/contact"}
            data-testid="button-consultation-strategy"
          >
            전략 상담받기
          </Button>
        </div>
      </div>
    </section>
  );
}