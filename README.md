# FillEmpty 랜딩페이지

미용실·네일샵용 노쇼/직전취소 핫딜 알림 서비스 랜딩페이지.
**Astro + Tailwind CSS** 정적 사이트 (런타임 JS 0 — 모션은 순수 CSS).

## 명령어

```bash
npm install      # 의존성 설치 (최초 1회)
npm run dev      # 개발 서버 (http://localhost:4321)
npm run build    # 정적 빌드 → dist/
npm run preview  # 빌드 결과 미리보기
```

## 무엇을 어디서 고치나

| 하고 싶은 것 | 고칠 파일 |
|---|---|
| **문구(카피) 수정** | `src/data/*.ts` — 마크업은 안 건드려도 됨 |
| ├ 브랜드·내비·히어로·CTA·푸터 | `src/data/site.ts` |
| ├ 문제 카드 | `src/data/problems.ts` |
| ├ 서비스 카드 | `src/data/services.ts` |
| └ 고객 후기 | `src/data/testimonials.ts` |
| **색·폰트·라운드 (디자인 토큰)** | `tailwind.config.mjs` |
| **애니메이션·글로우·글래스 효과** | `src/styles/global.css` |
| **섹션 순서·추가·삭제** | `src/pages/index.astro` |
| **섹션 제목/구조** | `src/sections/*.astro` |
| **공통 카드/버튼 모양** | `src/components/*.astro` |
| **메타/OG/폰트 로드** | `src/layouts/Base.astro` |

## 폴더 구조

```
src/
├─ pages/index.astro     페이지 조립
├─ layouts/Base.astro    <head>·메타·폰트·아이콘
├─ sections/             섹션 1개 = 파일 1개 (Nav~Footer)
├─ components/           재사용 UI (Section/Button/FeatureCard/DashboardMockup 등)
├─ data/                 콘텐츠(카피) — 글은 여기만 수정
└─ styles/global.css     Tailwind + 커스텀 애니메이션
public/                  favicon, og-image, 로고
_reference/              디자인 분석본·원본 (빌드 제외, 대조용)
```

## 디자인 토큰 (tailwind.config.mjs)

| 토큰 | 값 | 클래스 예 |
|---|---|---|
| `coral` | `#FF8B72` | `bg-coral` `text-coral` `border-coral` |
| `cream` | `#FDFBF7` | `bg-cream` |
| `ink` | `#1A1A1A` | `text-ink` |
| `gold` | `#E8AF55` | `bg-gold` |
| `rounded-4xl` | 32px | 카드 라운드 |
| `max-w-container` | 1440px | 콘텐츠 최대 폭 |

## 배포 전 체크리스트

- [ ] `astro.config.mjs`의 `site`를 실제 도메인으로 변경
- [ ] `public/og-image.png` 추가 (링크 공유 썸네일, 권장 1200×630)
- [ ] CTA/로그인/파트너 버튼의 `href`(`#apply`, `#login`)를 실제 링크로 연결
- [ ] `src/data/site.ts` 푸터의 사업자 정보 실제 값으로 교체
- [ ] 신뢰바 로고를 실제 고객사 로고로 교체 (`src/data/site.ts` `trustBar`)

정적 빌드라 Vercel·Netlify·Cloudflare Pages·GitHub Pages 등 어디서나 `dist/`를 배포하면 됩니다.
