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
    title: '① 노쇼 1건이 그날 매출 10만~18만 원을 통째로 지웁니다',
    body: '젤네일 1건(4~8만 원), 펌·염색 1건(12~18만 원) : 직전취소가 바로 삭제하는 매출. 앞뒤로 예약이 막혀서 실제 손실은 더욱 커집니다.',
    highlight: '한 달에 3건만 노쇼가 나도 연간 손실은 180만 원을 넘습니다.',
  },
  {
    icon: 'ph-phone-call',
    title: '② ',
    body: '',
    highlight: '',
  },
  {
    icon: 'ph-shield-warning',
    title: '③ 예약금·위약금 정책은 충분하지 않습니다.',
    body: '예약금을 도입하지 못하는 매장, 나중에 결제금액에서 차감해주는 매장, 직전 변경에 골머리앓는 매장. 이게 매장의 현실입니다.',
    highlight: '고객과의 관계를 걱정하지 않고 빈 슬롯을 채울 방법이 따로 있습니다.',
  },
];
