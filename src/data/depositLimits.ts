// '예약금 솔루션의 한계' 섹션 데이터
// 예약금·위약금만으로는 빈자리 손실을 막지 못한다 → 앗취(빈자리 채우기)로의 다리.

export interface DepositLimit {
  icon: string; // Phosphor 클래스 (regular)
  title: string;
  body: string;
}

export const depositLimits: DepositLimit[] = [
  {
    icon: 'ph-armchair',
    title: '빈자리는 그대로',
    body: '예약금을 받아도 취소된 시간은 그대로 비어 있습니다. 그 시간의 매출은 결국 0원입니다.',
  },
  {
    icon: 'ph-hand-waving',
    title: '고객은 부담을 느낍니다',
    body: '예약금·위약금 요구는 신규는 물론 단골에게도 거부감을 줘, 예약 자체를 망설이게 만듭니다.',
  },
  {
    icon: 'ph-scales',
    title: '환불·변경 기준이 애매',
    body: '위약금 환불과 예약 변경 기준이 불명확해 분쟁과 악성 리뷰로 이어지기 쉽습니다.',
  },
];
