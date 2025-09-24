import { Button } from "@/components/ui/button";
import heroBackground from "@assets/generated_images/Professional_consulting_office_hero_background_7ef0e04a.png";

export default function Hero() {
  const navigateToContact = () => {
    window.location.href = "/contact";
  };

  const navigateToAbout = () => {
    window.location.href = "/about";
  };

  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center bg-gray-900"
      style={{
        backgroundImage: `url(${heroBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40"></div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 text-center text-white">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
          입시 전문가 집단<br />
          <span className="text-yellow-300">스콜라시프트</span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
          4인의 전문 컨설턴트와 체계적인 생기부 관리로<br />
          성공적인 대학 입시를 이끌어드립니다
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg"
            onClick={navigateToContact}
            data-testid="button-consultation"
            className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 text-primary-foreground border border-primary-border"
          >
            1:1 무료 상담 신청하기
          </Button>
          
          <Button 
            variant="outline"
            size="lg"
            onClick={navigateToAbout}
            data-testid="button-learn-more"
            className="text-lg px-8 py-6 bg-white/10 backdrop-blur border-white/30 text-white hover:bg-white/20"
          >
            자세히 알아보기
          </Button>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-yellow-300 mb-2">4인</div>
            <div className="text-lg">전문 컨설턴트</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-yellow-300 mb-2">9가지</div>
            <div className="text-lg">전문 프로그램</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-yellow-300 mb-2">1:1</div>
            <div className="text-lg">맞춤형 컨설팅</div>
          </div>
        </div>
      </div>
    </section>
  );
}