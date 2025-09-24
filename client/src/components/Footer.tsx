import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {

  return (
    <footer className="bg-muted/50 border-t">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8">
          {/* Company Info */}
          <div className="max-w-md">
            <h3 className="font-bold text-xl text-primary mb-4">
              스콜라시프트
            </h3>
            <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
              입시 전문가 집단 스콜라시프트는<br />
              4인의 전문 컨설턴트와 함께<br />
              성공적인 대학 입시를 지원합니다.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Phone className="w-4 h-4" />
                <span>02-1234-5678</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Mail className="w-4 h-4" />
                <span>info@scholarshift.co.kr</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="w-4 h-4" />
                <span>서울시 강남구 대치동</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t pt-6 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-muted-foreground">
              © 2024 스콜라시프트. All rights reserved.
            </div>
            <div className="flex gap-6 text-sm">
              <Button 
                variant="ghost" 
                size="sm"
                className="p-0 h-auto text-muted-foreground hover:text-primary"
                onClick={() => console.log('Privacy policy')}
                data-testid="button-privacy"
              >
                개인정보처리방침
              </Button>
              <Button 
                variant="ghost" 
                size="sm"
                className="p-0 h-auto text-muted-foreground hover:text-primary"
                onClick={() => console.log('Terms of service')}
                data-testid="button-terms"
              >
                이용약관
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}