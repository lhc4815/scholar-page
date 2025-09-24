# Design Guidelines for 스콜라시프트 Educational Consulting Website

## Design Approach
**Reference-Based Approach**: Drawing inspiration from professional educational consulting and service-oriented websites, emphasizing trust, expertise, and accessibility for Korean parents and students.

## Core Design Elements

### A. Color Palette
**Primary Colors (서울대학교 공식 색상 기반):**
- SNU Blue: 219 100% 26% (#003087) - 메인 브랜드 색상, 신뢰감과 전문성
- SNU Gold: 36 32% 47% (#9F8052) - 포인트 색상, 전통과 권위, 고급스러움
- Background Light: 210 20% 98% (가독성 향상)
- Text Dark: 220 39% 11% (편안한 읽기)

**Dark Mode:**
- Background: 220 39% 11%
- Surface: 215 25% 15%
- Text: 210 20% 98%
- SNU Blue (Dark): 219 100% 35%
- SNU Gold (Dark): 36 25% 25%

### B. Typography
**Font Family:** Noto Sans KR via Google Fonts CDN
- Headings: 700-900 weight for strong hierarchy
- Body text: 400-500 weight for readability
- Captions: 300 weight for subtle information
- Korean-optimized spacing and line heights

### C. Layout System
**Spacing Units:** Tailwind units of 4, 6, 8, 12, 16, 24
- Section padding: py-16 px-4
- Component margins: mb-8, mt-12
- Element spacing: gap-6, space-y-4
- Container max-width: max-w-6xl mx-auto

### D. Component Library

**Navigation:**
- Fixed header with smooth scroll navigation
- Clean horizontal menu with hover states
- Mobile hamburger menu for responsive design

**Hero Section:**
- Full viewport height with gradient overlay
- Large typography hierarchy (text-4xl to text-6xl)
- Prominent CTA button for consultation requests
- Professional imagery or subtle background pattern

**Content Cards:**
- Consultant profiles with photos and credentials
- Program service cards with clear descriptions
- Clean white backgrounds with subtle shadows
- Hover effects with gentle lift animations

**Forms:**
- Consultation request form with Korean labels
- Input fields with proper validation styling
- Professional button styling matching brand colors

**Data Displays:**
- Grid layouts for programs (3-column desktop, 1-column mobile)
- Timeline or process flow for consultation steps
- Statistics or achievement highlights

## Specific Sections

### Hero Section
- Large background image featuring professional consulting environment
- Overlay gradient for text readability
- Centered layout with company logo and main value proposition
- "1:1 무료 상담 신청하기" primary CTA button

### Company Introduction
- Professional headshots of 4 consultants in consistent style
- Credential listings with university logos where appropriate
- Clean card-based layout with consistent spacing

### Programs Section
- 9 service cards in responsive grid
- Each card with icon, title, and brief description
- Consistent hover states and visual hierarchy

### Contact Form
- Clean, professional form design
- Korean placeholder text and labels
- Success/error state styling
- Privacy notice and terms acceptance

## Images
**Required Images:**
1. **Hero Background**: Professional office or consultation setting (1920x1080)
2. **Consultant Photos**: High-quality headshots of 4 team members (400x400)
3. **Program Icons**: Simple line icons for each of the 9 services
4. **Company Logo**: SVG format for crisp scaling
5. **Background Patterns**: Subtle geometric patterns for section dividers

**Hero Image**: Yes - large hero background image featuring a professional educational consulting environment with gradient overlay for text readability.

## Animations
- Minimal, purposeful animations only
- Smooth scroll navigation between sections
- Subtle hover effects on cards and buttons
- Fade-in animations for content sections on scroll

## Accessibility & Responsiveness
- Full responsive design from mobile (320px) to desktop (1920px+)
- High contrast ratios for Korean text readability
- Touch-friendly button sizes (44px minimum)
- Semantic HTML structure for screen readers
- Consistent dark mode implementation across all components