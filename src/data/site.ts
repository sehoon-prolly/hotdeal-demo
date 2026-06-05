// 사이트 전역 콘텐츠 — 브랜드, 내비게이션, 히어로, 신뢰바, CTA, 푸터
// 문구를 바꾸려면 이 파일만 수정하세요. (마크업은 건드릴 필요 없음)

export const brand = {
  name: 'FillEmpty',
  icon: 'ph-calendar-check', // Phosphor (fill)
};

export const nav = {
  links: [
    { label: '주요 기능', href: '#services' },
    { label: '성공 사례', href: '#testimonials' },
    { label: '요금제', href: '#pricing' },
    { label: '도움말', href: '#help' },
  ],
  loginLabel: '로그인',
  ctaLabel: '파트너 신청하기',
};

export const hero = {
  badge: 'Automated Booking AI',
  // 제목은 줄바꿈/강조 제어를 위해 조각으로 분리
  titlePre: '노쇼가 뜨는 순간,',
  titleHighlight: '30분 안에',
  titlePost: ' 예약이 채워집니다.',
  description:
    '직전취소·노쇼가 발생하면 알림 한 번으로 대기 고객이 스스로 예약합니다. 인스타 올리고, 단골한테 전화 돌리고, 그래도 결국 비는 그 2시간 — 이제 시스템이 대신합니다.',
  ctaLabel: '14일 무료로 시작하기',
  avatars: ['S', 'J', 'M'],
  social: '500+ 스튜디오가 선택함',
  stats: [
    { value: '98%', label: '노쇼 예약 복구율' },
    { value: '2.4시간', label: '하루 평균 절약 시간' },
    { value: '120%', label: '매출 성장 평균' },
  ],
};

export const trustBar = {
  // 실제 고객사 로고로 교체 예정 (현재는 Phosphor 아이콘 플레이스홀더)
  logos: [
    { icon: 'ph-camera-rotate', name: 'Aura Studio' },
    { icon: 'ph-scissors', name: 'Maison De Bloom' },
    { icon: 'ph-sparkle', name: 'Vogue Hair' },
    { icon: 'ph-flower-lotus', name: 'Pure Spa' },
    { icon: 'ph-aperture', name: 'Frame 24' },
  ],
};

export const cta = {
  badge: '05 CTA',
  titlePre: '빈 슬롯으로 매출을 잃는 건,',
  titlePost: '오늘이 마지막입니다.',
  sub1: '14일 무료 체험 동안 직접 확인해 보세요.',
  sub2: '별도 설치 없이, 지금 쓰는 예약 시스템 그대로 시작할 수 있습니다.',
  buttonLabel: '14일 무료로 시작하기',
  badges: ['신용카드 불필요', '언제든 취소 가능', '지금 바로 30초 설정'],
};

export const footer = {
  tagline: '노쇼·직전취소로 비는 슬롯을, 알림 한 번으로 다시 채웁니다.',
  columns: [
    {
      title: '서비스',
      links: [
        { label: '주요 기능', href: '#services' },
        { label: '요금제', href: '#pricing' },
        { label: '성공 사례', href: '#testimonials' },
      ],
    },
    {
      title: '회사',
      links: [
        { label: '소개', href: '#' },
        { label: '블로그', href: '#' },
        { label: '채용', href: '#' },
      ],
    },
    {
      title: '지원',
      links: [
        { label: '도움말', href: '#help' },
        { label: '문의하기', href: '#' },
        { label: '이용약관', href: '#' },
        { label: '개인정보처리방침', href: '#' },
      ],
    },
  ],
  business: '상호: (주)필엠티 · 대표: 홍길동 · 사업자등록번호: 000-00-00000',
  copyright: `© ${new Date().getFullYear()} FillEmpty. All rights reserved.`,
};
