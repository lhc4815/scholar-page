import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    grade: "",
    inquiry: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // todo: remove mock functionality - implement real form submission
    console.log('Form submitted:', formData);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "상담 신청이 완료되었습니다!",
      description: "빠른 시일 내에 연락드리겠습니다. 감사합니다.",
    });
    
    setFormData({
      name: "",
      phone: "",
      email: "",
      grade: "",
      inquiry: ""
    });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <Phone className="w-5 h-5" />,
      title: "전화상담",
      content: "02-1234-5678",
      description: "평일 09:00 - 18:00"
    },
    {
      icon: <Mail className="w-5 h-5" />,
      title: "이메일",
      content: "info@scholarshift.co.kr",
      description: "24시간 접수 가능"
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      title: "오시는 길",
      content: "서울시 강남구 대치동",
      description: "지하철 2호선 역삼역 도보 5분"
    },
    {
      icon: <Clock className="w-5 h-5" />,
      title: "운영시간",
      content: "평일 09:00 - 18:00",
      description: "토요일 09:00 - 15:00"
    }
  ];

  return (
    <section id="contact" className="py-16 bg-background">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            상담 신청
          </h2>
          <p className="text-lg text-muted-foreground">
            전문 컨설턴트와의 1:1 무료 상담으로<br />
            성공적인 입시 전략을 수립하세요
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="p-8">
            <h3 className="text-2xl font-bold text-card-foreground mb-6">
              무료 상담 신청
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name" className="text-sm font-medium">
                    학생 이름 *
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="이름을 입력하세요"
                    required
                    data-testid="input-name"
                    className="mt-1"
                  />
                </div>
                
                <div>
                  <Label htmlFor="phone" className="text-sm font-medium">
                    연락처 *
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="010-0000-0000"
                    required
                    data-testid="input-phone"
                    className="mt-1"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="email" className="text-sm font-medium">
                    이메일
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="example@email.com"
                    data-testid="input-email"
                    className="mt-1"
                  />
                </div>
                
                <div>
                  <Label htmlFor="grade" className="text-sm font-medium">
                    학년
                  </Label>
                  <select
                    id="grade"
                    name="grade"
                    value={formData.grade}
                    onChange={handleChange}
                    data-testid="select-grade"
                    className="mt-1 w-full px-3 py-2 border border-border rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  >
                    <option value="">학년을 선택하세요</option>
                    <option value="중1">중학교 1학년</option>
                    <option value="중2">중학교 2학년</option>
                    <option value="중3">중학교 3학년</option>
                    <option value="고1">고등학교 1학년</option>
                    <option value="고2">고등학교 2학년</option>
                    <option value="고3">고등학교 3학년</option>
                    <option value="기타">기타</option>
                  </select>
                </div>
              </div>

              <div>
                <Label htmlFor="inquiry" className="text-sm font-medium">
                  문의 내용 *
                </Label>
                <Textarea
                  id="inquiry"
                  name="inquiry"
                  value={formData.inquiry}
                  onChange={handleChange}
                  placeholder="상담받고 싶은 내용이나 궁금한 점을 자세히 작성해주세요"
                  rows={4}
                  required
                  data-testid="textarea-inquiry"
                  className="mt-1"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                data-testid="button-submit-consultation"
                className="w-full"
              >
                {isSubmitting ? "신청 중..." : "무료 상담 신청하기"}
              </Button>
            </form>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="p-6">
              <h3 className="text-xl font-bold text-card-foreground mb-4">
                연락처 정보
              </h3>
              
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary flex-shrink-0">
                      {info.icon}
                    </div>
                    <div>
                      <div className="font-medium text-card-foreground">{info.title}</div>
                      <div className="text-sm text-primary font-medium">{info.content}</div>
                      <div className="text-xs text-muted-foreground">{info.description}</div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-bold text-card-foreground mb-4">
                상담 절차 안내
              </h3>
              
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">1</div>
                  <span className="text-sm">상담 신청서 작성</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">2</div>
                  <span className="text-sm">전화 연락 및 일정 조율</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">3</div>
                  <span className="text-sm">1:1 맞춤 상담 진행</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">4</div>
                  <span className="text-sm">맞춤형 컨설팅 계획 제안</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}