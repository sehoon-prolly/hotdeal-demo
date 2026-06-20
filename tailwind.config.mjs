/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}'],
  theme: {
    extend: {
      // ── 디자인 토큰 (리브랜딩은 여기 한 곳만 고치면 됩니다) ──
      colors: {
        cream: '#FDFBF7', // 배경 A (따뜻한 아이보리)
        sand: '#F5EFE5', // 배경 B (섹션 교차용 — 한 톤 깊은 샌드)
        ink: '#1A1A1A', // 본문 텍스트 (소프트 블랙)
        coral: {
          DEFAULT: '#FF8B72', // 강조·아이콘 액센트
          dark: '#FF6B4A', // CTA 버튼 전용 (한 단계 진한 코랄)
        },
        gold: '#E8AF55', // 보조 포인트 (히어로 blob)
      },
      fontFamily: {
        sans: ['Inter', '"Noto Sans KR"', 'sans-serif'],
      },
      borderRadius: {
        '4xl': '32px', // 카드 시그니처 라운드
      },
      maxWidth: {
        container: '1440px', // 콘텐츠 최대 폭
      },
      boxShadow: {
        card: '0 32px 64px -12px rgba(0, 0, 0, 0.1)', // 대형 카드
        'card-hover': '0 20px 40px -10px rgba(0, 0, 0, 0.05)', // 카드 hover
        // 히어로 목업 전용 — 다층 그림자로 '떠 있는' elevation
        float: '0 50px 100px -20px rgba(0, 0, 0, 0.18), 0 24px 48px -24px rgba(0, 0, 0, 0.12)',
      },
    },
  },
  plugins: [],
};
