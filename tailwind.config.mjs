/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}'],
  theme: {
    extend: {
      // ── 디자인 토큰 (리브랜딩은 여기 한 곳만 고치면 됩니다) ──
      colors: {
        cream: '#FDFBF7', // 배경 (따뜻한 아이보리)
        ink: '#1A1A1A', // 본문 텍스트 (소프트 블랙)
        coral: '#FF8B72', // 메인 포인트 (CTA·강조·아이콘)
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
        card: '0 32px 64px -12px rgba(0, 0, 0, 0.1)', // 히어로 목업/대형 카드
        'card-hover': '0 20px 40px -10px rgba(0, 0, 0, 0.05)', // 카드 hover
      },
    },
  },
  plugins: [],
};
