import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [location] = useLocation();

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navigation = [
    { name: "메인", path: "/" },
    { name: "소개", path: "/about" },
    { name: "프로그램", path: "/programs" },
    { name: "공지사항", path: "/news" },
    { name: "입시전략", path: "/strategies" },
    { name: "상담신청", path: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/60 backdrop-blur supports-[backdrop-filter]:bg-background/20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/">
            <div 
              className="cursor-pointer hover-elevate rounded px-2 py-1"
              data-testid="link-logo"
            >
              <div className="font-bold text-2xl text-primary leading-tight">
                스콜라시프트
              </div>
              <div className="text-xs text-primary/70 font-medium tracking-widest">
                SCHOLARSHIFT LAB
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navigation.map((item) => (
              <Link key={`desktop-${item.path}`} href={item.path}>
                <Button
                  variant="ghost"
                  size="sm"
                  data-testid={`button-nav-${item.path.replace("/", "") || "home"}`}
                  className={`text-foreground hover:text-primary ${
                    location === item.path ? "bg-primary/10 text-primary" : ""
                  }`}
                >
                  {item.name}
                </Button>
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col gap-2">
              {navigation.map((item) => (
                <Link key={`mobile-${item.path}`} href={item.path}>
                  <Button
                    variant="ghost"
                    className={`justify-start w-full ${
                      location === item.path ? "bg-primary/10 text-primary" : ""
                    }`}
                    onClick={closeMenu}
                    data-testid={`button-mobile-nav-${item.path.replace("/", "") || "home"}`}
                  >
                    {item.name}
                  </Button>
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}