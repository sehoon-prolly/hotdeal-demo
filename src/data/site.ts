// 사이트 전역 콘텐츠 — 브랜드, 내비게이션, 히어로, 신뢰바, CTA, 푸터
// 문구를 바꾸려면 이 파일만 수정하세요. (마크업은 건드릴 필요 없음)

// 문의/리드 수집 폼 (Tally) — 모든 '문의하기'·'파트너 신청하기' CTA가 이 주소로 새 탭 연결됩니다.
export const contactFormUrl = 'https://tally.so/r/0QGe5j';

export const brand = {
  name: '앗취',
  tagline: '- 앗, 취소됐다!',
  icon: 'ph-calendar-check', // Phosphor (fill)
};

export const nav = {
  links: [
    { label: '프로세스', href: '#services' },
    { label: '도움말', href: '#help' },
    { label: '문의하기', href: contactFormUrl },
  ],
  loginLabel: '로그인',
  ctaLabel: '문의하기',
};

export const hero = {
  badge: '미용실·네일샵 빈자리 자동 채움',
  // 제목은 줄바꿈/강조 제어를 위해 조각으로 분리 (3줄, accent만 코랄)
  titleLine1: '취소·변경된 예약',
  titleLine2: '다시 채워드립니다',
  titleAccent: '30분 안에',
  description: '사라지는 수익, 카톡 한줄로 채워드립니다.',
  ctaLabel: '손실 빠르게 메우기',
  stats: [
    { value: '월 평균 6건', label: '노쇼·직전취소 발생' },
    { value: '건당 평균 2시간', label: '매출 공백 발생' },
    { value: '연 500만원 이상', label: '취소 시간 앞뒤의 잠재 손실 포함' },
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
  titlePre: '매출을 잃는 건,',
  titlePost: '오늘이 마지막입니다.',
  sub1: '별도 설치 없이, 지금 쓰는 예약 시스템 그대로 시작할 수 있습니다.',
  buttonLabel: '손실 빠르게 메우기',
  badges: ['안 채워지면 비용 0원', '약정 없음 · 해지 자유', '선입금 안전 보관', '설치 불필요'],
  closing: '사라지는 수익, 카톡 한줄로 채워드립니다.',
};

export const footer = {
  tagline: '사라지는 수익, 카톡 한줄로 채워드립니다.',
  columns: [
    {
      title: '서비스',
      links: [
        { label: '주요 기능', href: '#services' },
        { label: '요금제', href: '#pricing' },
        { label: '리뷰', href: '#testimonials' },
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
  business: '상호: 앗취 · 대표:  · 사업자등록번호: ',
  copyright: `© ${new Date().getFullYear()} 앗취. All rights reserved.`,
};
