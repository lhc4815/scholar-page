import { Button } from "@/components/ui/button";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Calendar, Bell, Eye, Pin } from "lucide-react";

export default function News() {
  // todo: remove mock functionality - replace with real announcements system
  const announcements = [
    {
      id: 1,
      title: "2025학년도 대입 전형 변경사항 안내",
      date: "2024.03.15",
      type: "중요",
      author: "관리자",
      views: 245,
      isPinned: true,
      preview: "2025학년도 주요 대학들의 입시 전형 변경사항과 대응 전략을 안내해드립니다."
    },
    {
      id: 2,
      title: "생기부 관리 무료 특강 개최",
      date: "2024.03.10", 
      type: "행사",
      author: "스콜라시프트",
      views: 89,
      isPinned: false,
      preview: "효과적인 생활기록부 관리 방법과 실전 노하우를 공유하는 무료 특강을 진행합니다."
    },
    {
      id: 3,
      title: "면접 대비 모의면접 프로그램 신청 안내",
      date: "2024.03.05",
      type: "프로그램",
      author: "스콜라시프트",
      views: 156,
      isPinned: false,
      preview: "대학별 면접 특성을 반영한 모의면접 프로그램 신청이 시작됩니다."
    },
    {
      id: 4,
      title: "수시 배치 상담 예약 오픈",
      date: "2024.03.01",
      type: "프로그램",
      author: "관리자",
      views: 203,
      isPinned: false,
      preview: "3월 수시 배치 상담 예약이 오픈되었습니다."
    },
    {
      id: 5,
      title: "2024년 2월 합격 후기 모음",
      date: "2024.02.28",
      type: "일반",
      author: "스콜라시프트",
      views: 312,
      isPinned: false,
      preview: "2024년 2월 우리 수강생들의 합격 후기를 모았습니다."
    },
    {
      id: 6,
      title: "정시 최종 결과 발표 안내",
      date: "2024.02.25",
      type: "안내",
      author: "관리자",
      views: 178,
      isPinned: false,
      preview: "정시 최종 결과 발표일정과 추가모집 정보를 안내드립니다."
    },
    {
      id: 7,
      title: "진로진학 적성검사 프로그램 소개",
      date: "2024.02.20",
      type: "프로그램",
      author: "스콜라시프트",
      views: 95,
      isPinned: false,
      preview: "과학적인 적성검사를 통한 진로 설계 프로그램을 소개합니다."
    },
    {
      id: 8,
      title: "입시 설명회 개최 안내",
      date: "2024.02.15",
      type: "행사",
      author: "관리자",
      views: 267,
      isPinned: false,
      preview: "2025학년도 입시 전략 설명회를 개최합니다."
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case "중요":
        return "bg-destructive text-destructive-foreground";
      case "행사":
        return "bg-chart-2 text-primary-foreground";
      case "프로그램":
        return "bg-chart-3 text-primary-foreground";
      case "안내":
        return "bg-chart-1 text-primary-foreground";
      case "일반":
        return "bg-muted text-muted-foreground";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <section id="news" className="py-16 bg-background">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            공지사항
          </h2>
          <p className="text-lg text-muted-foreground">
            최신 입시 동향과 스콜라시프트의 소식을 확인하세요
          </p>
        </div>

        <div className="bg-card rounded-lg border overflow-hidden mb-12">
          <Table>
            <TableHeader>
              <TableRow className="bg-muted/50">
                <TableHead className="w-12 text-center">구분</TableHead>
                <TableHead className="min-w-0">제목</TableHead>
                <TableHead className="w-24 text-center">작성자</TableHead>
                <TableHead className="w-24 text-center">작성일</TableHead>
                <TableHead className="w-16 text-center">조회</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {announcements.map((announcement, index) => (
                <TableRow 
                  key={announcement.id}
                  className="hover:bg-muted/50 cursor-pointer transition-colors"
                  data-testid={`row-announcement-${index}`}
                  onClick={() => window.location.href = `/news/${announcement.id}`}
                >
                  <TableCell className="text-center">
                    <span className={`px-2 py-1 rounded text-xs font-medium whitespace-nowrap ${getTypeColor(announcement.type)}`}>
                      {announcement.type}
                    </span>
                  </TableCell>
                  
                  <TableCell className="min-w-0">
                    <div className="flex items-center gap-2">
                      {announcement.isPinned && (
                        <Pin className="w-3 h-3 text-primary flex-shrink-0" />
                      )}
                      <span className="font-medium text-foreground hover:text-primary transition-colors truncate">
                        {announcement.title}
                      </span>
                    </div>
                  </TableCell>
                  
                  <TableCell className="text-center text-sm text-muted-foreground">
                    {announcement.author}
                  </TableCell>
                  
                  <TableCell className="text-center text-sm text-muted-foreground">
                    {announcement.date}
                  </TableCell>
                  
                  <TableCell className="text-center text-sm text-muted-foreground">
                    {announcement.views}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        {/* Pagination */}
        <div className="flex justify-center mb-12">
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" disabled>이전</Button>
            <Button variant="default" size="sm">1</Button>
            <Button variant="outline" size="sm">2</Button>
            <Button variant="outline" size="sm">3</Button>
            <Button variant="outline" size="sm">다음</Button>
          </div>
        </div>

        <div className="bg-card rounded-lg p-8 text-center border">
          <Bell className="w-12 h-12 text-primary mx-auto mb-4" />
          <h3 className="text-xl font-bold text-card-foreground mb-4">
            알림 서비스 신청
          </h3>
          <p className="text-muted-foreground mb-6">
            중요한 입시 정보와 공지사항을 이메일로 받아보세요
          </p>
          <Button 
            variant="outline"
            data-testid="button-notification-signup"
            onClick={() => console.log('Sign up for notifications')}
          >
            알림 신청하기
          </Button>
        </div>
      </div>
    </section>
  );
}