import { Card } from "@/components/ui/card";
import consultantImage1 from "@assets/generated_images/Korean_male_consultant_headshot_988218be.png";
import consultantImage2 from "@assets/generated_images/Korean_female_consultant_headshot_624ff291.png";
import consultantImage3 from "@assets/generated_images/Young_Korean_male_consultant_headshot_4d6c54fe.png";
import consultantImage4 from "@assets/generated_images/Experienced_Korean_male_consultant_headshot_87afdd1e.png";

export default function About() {
  const consultants = [
    {
      name: "이충훈",
      title: "센터장",
      education: "연세대학교/경상대의전원",
      experience: "대치동 입시센터장, 메가스터디/대성 컨설턴트",
      description: "입시전문가 집단 스콜라시프트의 설립자",
      image: consultantImage1
    },
    {
      name: "구민규",
      title: "소장",
      education: "Scholar Shift Lab 소장",
      experience: "타임입시 교육 컨설팅실장, 메가스터디/하늘교육 입시 전문가",
      description: "입시/학생부관리 전문가",
      image: consultantImage2
    },
    {
      name: "김상현",
      title: "소장",
      education: "연세대학교 경영대학",
      experience: "더블코일 컨설팅 소장, 대형학원(대치) 컨설팅 전문가",
      description: "스콜라시프트 연구소장",
      image: consultantImage3
    },
    {
      name: "이희창",
      title: "컨설턴트",
      education: "고려대학교 전기전자공학부, KAIST 대학원",
      experience: "스콜라시프트 전임 컨설턴트",
      description: "현재 스콜라시프트 전임 컨설턴트로 활동 중",
      image: consultantImage4
    }
  ];

  return (
    <section id="about" className="py-16 bg-background">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            스콜라시프트 소개
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            혁신적인 프로그램과 종합 학습 및 진로 개발 기회를 통해<br />
            학생들의 성공적인 미래를 설계합니다
          </p>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-12 text-foreground">
            4인의 전문 컨설턴트
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {consultants.map((consultant, index) => (
              <Card 
                key={index} 
                className="p-6 text-center hover-elevate transition-all duration-300"
                data-testid={`card-consultant-${index}`}
              >
                <div className="mb-4">
                  <img 
                    src={consultant.image} 
                    alt={`${consultant.name} ${consultant.title}`}
                    className="w-24 h-24 rounded-full mx-auto object-cover border-2 border-border"
                    data-testid={`img-consultant-${index}`}
                  />
                </div>
                
                <h4 className="font-bold text-lg mb-1 text-foreground" data-testid={`text-name-${index}`}>
                  {consultant.name}
                </h4>
                <div className="text-primary font-medium mb-3" data-testid={`text-title-${index}`}>
                  {consultant.title}
                </div>
                
                <div className="text-sm text-muted-foreground space-y-2">
                  <div data-testid={`text-education-${index}`}>
                    <strong>학력:</strong> {consultant.education}
                  </div>
                  <div data-testid={`text-experience-${index}`}>
                    <strong>경력:</strong> {consultant.experience}
                  </div>
                  <div className="text-xs pt-2 border-t" data-testid={`text-description-${index}`}>
                    {consultant.description}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        <div className="bg-card rounded-lg p-8 border">
          <h3 className="text-2xl font-bold text-center mb-6 text-card-foreground">
            우리의 철학
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-foreground">전</span>
              </div>
              <h4 className="font-semibold mb-2 text-card-foreground">전문성</h4>
              <p className="text-sm text-muted-foreground">
                각 분야별 전문 컨설턴트의 체계적이고 전문적인 관리
              </p>
            </div>
            <div>
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-foreground">신</span>
              </div>
              <h4 className="font-semibold mb-2 text-card-foreground">신뢰성</h4>
              <p className="text-sm text-muted-foreground">
                투명하고 정직한 상담을 통한 학생과 학부모의 신뢰 구축
              </p>
            </div>
            <div>
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-foreground">맞</span>
              </div>
              <h4 className="font-semibold mb-2 text-card-foreground">맞춤성</h4>
              <p className="text-sm text-muted-foreground">
                개별 학생의 특성과 목표에 맞춘 1:1 맞춤형 컨설팅
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}