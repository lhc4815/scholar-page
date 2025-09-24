import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  Users, 
  TrendingUp, 
  Target, 
  Award, 
  Clock, 
  CheckCircle2,
  ArrowRight,
  BookOpen,
  MessageCircle,
  Calendar
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      
      {/* 성과 및 실적 섹션 */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              스콜라시프트의 성과
            </h2>
            <p className="text-lg text-muted-foreground">
              검증된 실력과 체계적인 시스템으로 이루어낸 성과입니다
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-6 text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <div className="text-2xl font-bold text-foreground mb-2">1,200+</div>
              <p className="text-muted-foreground text-sm">누적 수강생 수</p>
            </Card>

            <Card className="p-6 text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-6 h-6 text-primary" />
              </div>
              <div className="text-2xl font-bold text-foreground mb-2">95%</div>
              <p className="text-muted-foreground text-sm">만족도</p>
            </Card>

            <Card className="p-6 text-center">
              <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Target className="w-6 h-6 text-accent-foreground" />
              </div>
              <div className="text-2xl font-bold text-accent-foreground mb-2">88%</div>
              <p className="text-muted-foreground text-sm">목표 대학 합격률</p>
            </Card>

            <Card className="p-6 text-center">
              <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Award className="w-6 h-6 text-accent-foreground" />
              </div>
              <div className="text-2xl font-bold text-accent-foreground mb-2">15년</div>
              <p className="text-muted-foreground text-sm">전문 경력</p>
            </Card>
          </div>
        </div>
      </section>

      {/* 주요 서비스 요약 */}
      <section className="py-16 bg-background">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              주요 서비스
            </h2>
            <p className="text-lg text-muted-foreground">
              학생 개별 맞춤형 컨설팅으로 최적의 입시 결과를 만들어냅니다
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <Card className="p-6 hover-elevate transition-all duration-300 group">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <BookOpen className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-bold text-lg mb-3 group-hover:text-primary transition-colors">
                생기부 관리
              </h3>
              <p className="text-muted-foreground text-sm mb-4">
                체계적인 학교생활기록부 관리와 활동 설계
              </p>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3 h-3 text-primary" />
                  개인별 맞춤 활동 계획
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3 h-3 text-primary" />
                  정기적 피드백 제공
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3 h-3 text-primary" />
                  진로 연계 설계
                </li>
              </ul>
            </Card>

            <Card className="p-6 hover-elevate transition-all duration-300 group">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <MessageCircle className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-bold text-lg mb-3 group-hover:text-primary transition-colors">
                면접 대비
              </h3>
              <p className="text-muted-foreground text-sm mb-4">
                대학별 맞춤형 면접 준비와 실전 연습
              </p>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3 h-3 text-primary" />
                  실전 모의면접 실시
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3 h-3 text-primary" />
                  대학별 면접 분석
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3 h-3 text-primary" />
                  답변 스킬 향상
                </li>
              </ul>
            </Card>

            <Card className="p-6 hover-elevate transition-all duration-300 group">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-bold text-lg mb-3 group-hover:text-primary transition-colors">
                입시 컨설팅
              </h3>
              <p className="text-muted-foreground text-sm mb-4">
                수시/정시 배치부터 진로 설계까지
              </p>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3 h-3 text-primary" />
                  전략적 배치 계획
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3 h-3 text-primary" />
                  실시간 입시 동향 반영
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3 h-3 text-primary" />
                  개인별 맞춤 전략
                </li>
              </ul>
            </Card>
          </div>

          <div className="text-center">
            <Button 
              size="lg"
              onClick={() => window.location.href = "/programs"}
              className="flex items-center gap-2"
            >
              전체 프로그램 보기
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* 최신 소식 요약 */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                최신 소식
              </h2>
              <p className="text-lg text-muted-foreground">
                입시 동향과 스콜라시프트의 최신 소식을 확인하세요
              </p>
            </div>
            <Button 
              variant="outline"
              onClick={() => window.location.href = "/news"}
              className="flex items-center gap-2"
            >
              전체 보기
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="p-6 hover-elevate transition-all duration-300 cursor-pointer group"
                  onClick={() => window.location.href = "/news/1"}>
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-destructive text-destructive-foreground px-2 py-1 rounded text-xs font-medium">
                  중요
                </span>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Calendar className="w-3 h-3 mr-1" />
                  2024.03.15
                </div>
              </div>
              <h3 className="font-bold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                2025학년도 대입 전형 변경사항 안내
              </h3>
              <p className="text-muted-foreground text-sm line-clamp-2">
                2025학년도 주요 대학들의 입시 전형 변경사항과 대응 전략을 안내해드립니다.
              </p>
            </Card>

            <Card className="p-6 hover-elevate transition-all duration-300 cursor-pointer group"
                  onClick={() => window.location.href = "/news/2"}>
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-chart-2 text-primary-foreground px-2 py-1 rounded text-xs font-medium">
                  행사
                </span>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Calendar className="w-3 h-3 mr-1" />
                  2024.03.10
                </div>
              </div>
              <h3 className="font-bold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                생기부 관리 무료 특강 개최
              </h3>
              <p className="text-muted-foreground text-sm line-clamp-2">
                효과적인 생활기록부 관리 방법과 실전 노하우를 공유하는 무료 특강을 진행합니다.
              </p>
            </Card>

            <Card className="p-6 hover-elevate transition-all duration-300 cursor-pointer group"
                  onClick={() => window.location.href = "/news/3"}>
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-chart-3 text-primary-foreground px-2 py-1 rounded text-xs font-medium">
                  프로그램
                </span>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Calendar className="w-3 h-3 mr-1" />
                  2024.03.05
                </div>
              </div>
              <h3 className="font-bold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                면접 대비 모의면접 프로그램 신청 안내
              </h3>
              <p className="text-muted-foreground text-sm line-clamp-2">
                대학별 면접 특성을 반영한 모의면접 프로그램 신청이 시작됩니다.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* 상담 신청 CTA */}
      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="bg-card rounded-lg p-12 border">
            <h2 className="text-2xl md:text-3xl font-bold text-card-foreground mb-6">
              입시 성공의 첫걸음을 시작하세요
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              전문 컨설턴트와의 무료 상담을 통해<br />
              맞춤형 입시 전략을 세워보세요
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg"
                onClick={() => window.location.href = "/contact"}
                className="flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                무료 상담 신청
              </Button>
              <Button 
                variant="outline"
                size="lg"
                onClick={() => window.location.href = "/about"}
                className="flex items-center gap-2"
              >
                <Users className="w-4 h-4" />
                전문가 소개
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Contact />
      <Footer />
    </div>
  );
}