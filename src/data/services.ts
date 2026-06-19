// Services 섹션 카드 데이터 (손실을 막는 3단계 프로세스)

export interface Service {
  icon: string; // Phosphor 아이콘 클래스 (regular)
  step: string; // 아이콘 옆 STEP 배지
  title: string;
  body: string;
  example?: string; // 샘플 메시지 말풍선 (선택)
}

export const services: Service[] = [
  {
    icon: 'ph-paper-plane-tilt',
    step: 'STEP1',
    title: '① 취소 발생 시 카카오톡 한 줄 발송',
    body: '카톡 한 줄만 보내주세요. 따로 설치할 어플이나 프로그램은 없습니다.',
    example: '오늘 오후 1시~3시 타임 취소됐습니다',
  },
  {
    icon: 'ph-megaphone',
    step: 'STEP2',
    title: "② 신규 고객 위주의 '핫딜 모객 알림' 발송",
    body: "핫딜 가격에 빈 슬롯 알람을 고객들에게 발송합니다. 이 가격은 반드시 '선입금'을 받습니다. (고객 환불 불가)",
  },
  {
    icon: 'ph-wallet',
    step: 'STEP3',
    title: '③ 시술 중간 바로 정산',
    body: 'STEP 2에서 받은 금액은 저희측에서 보관하며, 시술 중간에 바로 정산 드립니다.',
  },
];
