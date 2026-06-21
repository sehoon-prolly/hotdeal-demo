// Services 섹션 데이터 (손실을 막는 3단계 프로세스)
// 각 스텝의 '화면'은 Services.astro에 HTML/CSS 목업으로 직접 그린다
//  → 여기엔 스텝 라벨·제목·짧은 캡션(줄글 대체)만 둔다.

export interface Service {
  step: string; // 스텝 배지
  title: string; // 스텝 제목
  caption: string; // 한 줄 설명 (긴 줄글 대신)
}

export const services: Service[] = [
  {
    step: 'STEP 1',
    title: '취소되면 카카오톡 한 줄',
    caption: '따로 설치할 앱·프로그램 없이, 카톡 한 줄이면 끝.',
  },
  {
    step: 'STEP 2',
    title: '신규 고객에게 핫딜 알림 발송',
    caption: "핫딜 가격 + '선입금'으로 노쇼 없이 빈자리를 채웁니다.",
  },
  {
    step: 'STEP 3',
    title: '시술 중간 바로 정산',
    caption: '받은 선입금은 저희가 보관, 시술 중 바로 정산해 드립니다.',
  },
];
