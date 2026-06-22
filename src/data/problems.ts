// Problem 섹션 카드 데이터

export interface Problem {
  icon: string; // Phosphor 아이콘 클래스 (regular)
  title: string;
  body?: string; // 선택 — 현재는 제목+highlight만 사용(간결화)
  highlight: string; // 강조(진하게) 결론 문장
}

export const problems: Problem[] = [
  {
    icon: 'ph-receipt-x',
    title: '펑크 1건 = 그날 10만~18만원 증발',
    highlight: '한 달에 3건만 발생해도 연간 손실은 500만 원을 넘습니다.',
  },
  {
    icon: 'ph-phone-call',
    title: '빈 시간의 허탈함과 스트레스',
    highlight: '취소되어 생기는 스트레스를 최대한 줄이는 방법이 필요합니다.',
  },
  {
    icon: 'ph-shield-warning',
    title: '예약금·위약금 정책은 충분하지 않습니다.',
    highlight: '더 효과적으로 빈 슬롯을 채울 방법이 따로 있습니다.',
  },
];
