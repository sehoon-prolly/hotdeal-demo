// Problem 섹션 카드 데이터

export interface Problem {
  icon: string; // Phosphor 아이콘 클래스 (regular)
  title: string;
  body: string;
  highlight: string; // 강조(진하게) 결론 문장
}

export const problems: Problem[] = [
  {
    icon: 'ph-receipt-x',
    title: '펑크 1건이 그날 매출 10만~18만 원을 통째로 지웁니다',
    body: '직전취소는 그 자리 매출을 즉시 지우고, 앞뒤 예약까지 막습니다.',
    highlight: '한 달에 3건만 발생해도 연간 손실은 180만 원을 넘습니다.',
  },
  {
    icon: 'ph-phone-call',
    title: '비는 시간이 주는 허탈함과 스트레스는 절대 작지 않습니다.',
    body: '하루 종일 허탈하지만, 서비스직이라 어쩔 수 없다며 참고 넘깁니다.',
    highlight: '취소되어 생기는 스트레스를 최대한 줄이는 방법이 필요합니다.',
  },
  {
    icon: 'ph-shield-warning',
    title: '예약금·위약금 정책은 충분하지 않습니다.',
    body: '예약금을 못 받거나, 결제금액에서 차감하거나, 결국 손님과 마찰을 겪습니다.',
    highlight: '더 효과적으로 빈 슬롯을 채울 방법이 따로 있습니다.',
  },
];
