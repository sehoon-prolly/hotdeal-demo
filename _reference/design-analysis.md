# FillEmpty 랜딩페이지 — 디자인 분석 & 섹션별 구현 가이드

> 분석 대상: variant.com 공유 디자인 (`9c86f510-…`)
> 실제 디자인 원본: `design-reference.html` (이 폴더에 저장됨, 56KB 단일 HTML)

---

## 0. 정체 & 기술 스택

variant.com 페이지는 Next.js 셸이고, **실제 디자인은 iframe으로 로드되는 단일 HTML 파일**입니다(`/design/{uuid}.html`). 그 안을 뜯어보면:

| 항목 | 내용 |
|---|---|
| CSS | **Tailwind CSS v3.4.17** 전체가 인라인됨 + 커스텀 `<style>` 블록 |
| 폰트 | Google Fonts **Inter**(라틴/숫자) + **Noto Sans KR**(한글) |
| 아이콘 | **Phosphor Icons** (`unpkg @phosphor-icons/web`, `ph` / `ph-fill`) |
| JS | **없음.** 모든 모션은 순수 CSS `@keyframes` |
| 구조 | `nav` → `main`(Hero) → `section` ×5 (Problem / Trust / Services / Testimonials / CTA) |

→ 즉 **Tailwind만 있으면 그대로 재현 가능**. 별도 프레임워크·빌드 불필요.

---

## 1. 글로벌 디자인 시스템

### 1-1. 색상 팔레트

| 역할 | 값 | 비고 |
|---|---|---|
| 배경 (전체) | `#FDFBF7` | 따뜻한 크림/아이보리 — 흰색 아님 |
| 본문 텍스트 | `#1A1A1A` | 순흑 아님(소프트 블랙) |
| **메인 포인트** | `#FF8B72` | peach-coral. CTA·강조·아이콘 |
| 보조 포인트 | `#E8AF55` | 골드. 히어로 배경 blur blob에만 |
| 포인트 틴트 | `#FF8B7215` (≈8%) / `#FF8B7210` (≈6%) | 뱃지 배경 / 아이콘 박스 배경 |
| 카드/패널 | `#FFFFFF`, 헤더 `#FBFBFB` | |
| 회색 스케일 | gray-400~900 (텍스트), gray-50/100 (보더/구분선) | Tailwind 기본값 |
| 상태색 | blue(Confirmed), green(매출/성공), purple, red/yellow/green-200(신호등 점) | 목업 디테일용 |
| 글래스 | `rgba(255,255,255,0.8)` + `backdrop-blur(12px)` | 플로팅 패널 |

핵심: **크림 배경 + 단일 코랄 포인트 + 무채색 본문**의 3색 절제 구성. 코랄은 "행동·강조"에만 점적으로.

### 1-2. 타이포그래피

- **폰트 스택**: `'Inter', 'Noto Sans KR', sans-serif` / 신뢰바 로고만 `font-serif`(Georgia 계열)
- **웨이트**: 300·400·500·600·700
- **스케일**

| 요소 | 크기(모바일→데스크톱) | 웨이트 |
|---|---|---|
| H1 (Hero) | 48px → 60px | 700 |
| H2 (섹션 제목) | 36px → 48px | 700 |
| H3 (카드 제목) | 20px | 700 |
| 본문 단락 | 18px → 20px | **300 (light)** + gray-500 |
| 통계 숫자 | 24px | 700 |
| 캡션/뱃지 | 12px (일부 10px) | 500~700, `uppercase tracking-wider` |

특징: **제목은 굵게(700, 행간 1.2~1.25), 본문은 가늘게(300, 회색)** 대비. 강조 수치는 코랄 bold. 영문 라벨은 대문자 + 자간 확대.

### 1-3. 레이아웃 · 스페이싱 · 형태

| 토큰 | 값 |
|---|---|
| 컨테이너 | `max-w-[1440px] mx-auto`, 좌우 패딩 `px-12`(48px) |
| 섹션 수직 여백 | `py-32`(128px) — 넉넉한 호흡 |
| 그리드 간격 | 카드 `gap-8`(32px), 히어로 `gap-16`(64px) |
| 카드 radius | **`rounded-[32px]`** (크고 부드러운 모서리가 시그니처) |
| 버튼 radius | `rounded-2xl`(16px) / 아웃라인은 `rounded-full` |
| 그림자 | 카드 `shadow-sm` → hover 시 대형 소프트 섀도우 / CTA는 코랄 글로우 |

### 1-4. 인터랙션 & 모션 (전부 CSS)

| 이름 | 동작 |
|---|---|
| `.cta-glow:hover` | `translateY(-2px)` + 코랄 그림자 강화 |
| `.problem-card:hover` | `translateY(-4px)` + 소프트 섀도우 (모든 카드 공통) |
| `pulseEmpty` | 빈 슬롯 점선 테두리 2s 무한 점멸 |
| `fillBooking` | 빈 슬롯 → 예약 카드가 **2s 후** scale+fade 등장 |
| earnings 패널 | **2.8s 후** 슬라이드업 등장 (`+128,000원 복구완료`) |
| nav 링크 | hover 시 코랄 컬러 전환 |
| 신뢰바 | 기본 `grayscale + opacity-60` → hover 시 풀컬러 |
| 뱃지 점 | `animate-ping` (라이브 신호) |

→ 히어로 목업은 "취소 발생 → 알림 → 재예약 → 매출복구"를 **3단계 자동 재생**으로 보여주는 스토리텔링 애니메이션이 핵심.

---

## 2. 섹션별 분석 & 구현

### ① Nav (`<nav>`)
- **레이아웃**: `flex justify-between`, 좌측 로고 / 중앙 메뉴 / 우측 버튼 2개. 패딩 `px-12 py-8`.
- **콘텐츠**: 로고(코랄 라운드 박스 `w-10 h-10` + `ph-fill ph-calendar-check` 흰 아이콘 + **FillEmpty** 워드마크) / 링크: 주요 기능·성공 사례·요금제·도움말 / 버튼: 로그인(텍스트), 파트너 신청하기(아웃라인 pill, hover 시 반전).
- **반응형**: 메뉴는 `hidden md:flex`(모바일 숨김). ⚠️ **햄버거 대체 없음** → 모바일에서 우측 버튼이 찌그러져 줄바꿈 깨짐(개선 필요).
- **구현**: flex 한 줄. 모바일용 햄버거 + 드로어를 추가로 만들어야 함.

### ② Hero (`<main>`, 2단 그리드)
- **레이아웃**: `grid lg:grid-cols-2 gap-16`, 좌=카피 / 우=대시보드 목업. 모바일 1열.
- **좌측**: 라이브 뱃지(`AUTOMATED BOOKING AI` + ping 점) → H1(코랄 강조 "30분 안에") → light 본문 → CTA(`14일 무료로 시작하기 →`, 코랄+글로우) + 아바타 스택(S·J·M) "500+ 스튜디오가 선택함" → 상단 보더로 구분된 통계 3개(98% / 2.4시간 / 120%).
- **우측 목업**(가장 공들인 부분): 흰 카드(`rounded-[32px]`, 대형 섀도우) 안에
  - 헤더: mac 신호등 점 3개 + 날짜 + 좌우 캐럿
  - 타임라인: 시간축(11시~3시) + 예약 카드들 — 김서연(Confirmed, 블루) / **빈 슬롯(점멸) → 이민지 코랄 카드(AI AUTOMATED, RE-BOOKED) 자동 등장** / 박지호(흐림)
  - 배경 blur blob 2개(코랄·골드), 우하단 글래스 매출 패널(`+128,000원`)
- **구현**: 목업을 이미지로 박지 말고 **실제 HTML+CSS로** 만들어야 애니메이션·반응형·선명도가 산다. 가장 시간 많이 드는 컴포넌트.

### ③ Problem (`section` 02)
- **구조**: 좌측 정렬 헤더(코랄 뱃지 `02 Problem` + H2 "월 노쇼 3건… 괜찮으신가요?") + **3열 카드 그리드**(`lg:grid-cols-3`).
- **카드**: 흰 배경 `rounded-[32px] p-10`, 상단 코랄 틴트 아이콘 박스(`ph-receipt-x`·`ph-phone-call`·`ph-shield-warning`), H3, 본문(light gray) + **결론 문장만 진하게(font-semibold)**.
- **UX**: hover 시 카드 살짝 떠오름. 문제를 ①②③ 번호로 구조화.
- **구현**: 카드 1개 컴포넌트 + 데이터 배열 map. 가장 재사용 많은 패턴(Services·Testimonials와 동일 카드 베이스).

### ④ Trust Bar (`section`)
- **구조**: `flex flex-wrap justify-center gap-12~24`, 가상 스튜디오 5곳(Aura Studio·Maison De Bloom·Vogue Hair·Pure Spa·Frame 24) = Phosphor 아이콘 + **serif** 워드마크.
- **UX**: 전체 `opacity-60 grayscale` → hover 시 `grayscale-0` 풀컬러(`duration-700`). 위아래 얇은 보더로 띠 구분.
- **구현**: 매우 단순. 로고가 실제 고객사 로고 이미지로 바뀔 자리(현재는 플레이스홀더).

### ⑤ Services (`section` 03)
- **구조**: 헤더(`03 Services` + H2 "세 가지 방식으로…") + **3열 카드**(Problem과 동일 카드 베이스).
- **카드 차이점**: 하단에 **구분선 + 성과 지표** 한 줄(예: "핫딜 발송 후 **평균 26분** 내 충전" / **43%** 전환 / **4.2시간** 절감) — 숫자만 코랄 bold·대형.
- **아이콘**: `ph-lightning`·`ph-users`·`ph-plugs`.
- **구현**: Problem 카드 컴포넌트에 "지표 슬롯"만 추가한 변형.

### ⑥ Testimonials (`section` 04)
- **구조**: 헤더(`04 Testimonials` + H2 "실제 사장님들의 이야기") + **2열 카드**(`lg:grid-cols-2`).
- **카드**: 코랄 `ph-quotes` 아이콘 → `blockquote`(20px medium) → 하단 구분선 + 이름(bold) + 소속(gray sm). 인물: 이지수(성수동 네일), 박민준(강남 헤어).
- **구현**: 동일 카드 베이스 + 인용 데이터. 후기 카드 컴포넌트화.

### ⑦ CTA (`section` 05)
- **구조**: **중앙 정렬**(`text-center`, `max-w-3xl mx-auto`). 코랄 뱃지(`05 CTA`) + H2 "빈 슬롯으로 매출을 잃는 건, 오늘이 마지막입니다." + 2단 보조문 + 중앙 CTA 버튼 + 신뢰 배지 3개(`ph-check-circle` 코랄 + 신용카드 불필요/언제든 취소/30초 설정).
- **구현**: 히어로 CTA 버튼 재사용, 가운데 정렬만 다름.

> ⚠️ **Footer 없음.** 원본 디자인엔 푸터가 없습니다("Designed in Variant" 칩은 variant 측 래퍼). 실제 서비스엔 회사정보·약관·문의 푸터를 추가해야 함.

---

## 3. 반응형 정리

| 분기 | 동작 |
|---|---|
| `lg` (1024px) | 히어로 2열, Problem/Services 3열, Testimonials 2열 |
| `md` (768px) | nav 메뉴 표시/숨김 경계 |
| `sm` (640px) | 히어로 CTA 영역 `flex-col → flex-row` |
| 모바일 | 전부 1열 스택, H1 48px |

**개선 필요점**
1. 모바일 햄버거 메뉴 부재 → nav 버튼 깨짐(실측 확인됨).
2. 섹션 좌우 `px-12`(48px)는 모바일에선 과함 → `px-6` 권장.
3. `py-32`(128px) 모바일에선 다소 큼 → `py-20` 정도로 축소 권장.

---

## 4. 구현 권장안

1. **스택**: 디자인이 이미 Tailwind라 Tailwind 그대로가 최단경로. 정적이면 단일 HTML+Tailwind CDN로도 충분, 확장하려면 Astro/Next + 컴포넌트화.
2. **디자인 토큰화**: 코랄(`#FF8B72`), 크림(`#FDFBF7`), radius 32px, 폰트 스택을 `tailwind.config` theme.extend에 등록.
3. **카드 컴포넌트 1개**로 Problem/Services/Testimonials 공통 처리(아이콘·제목·본문·옵션 지표/지표 슬롯).
4. **히어로 목업**은 HTML/CSS로 구현 + CSS keyframes 3단 시퀀스 유지(이 페이지의 "와우 포인트").
5. **보완**: footer 추가, 모바일 메뉴, 폼/실제 링크 연결, 이미지 `alt`·버튼 `aria-label`, 색대비 점검(코랄 위 흰 글씨는 대비 충분, gray-400 캡션은 작은 글씨 주의).
6. **콘텐츠 일치**: 디자인 카피 = 폴더의 `copy.md`와 동일(노쇼/직전취소 핫딜 서비스). 그대로 사용 가능.
