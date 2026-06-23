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
    body: '예약금은 큰 규모로 받을 수 없습니다. 손해가 많이 줄어들지 않습니다.',
  },
  {
    icon: 'ph-hand-waving',
    title: '고객은 부담을 느낍니다',
    body: '예약금·위약금은 신규, 단골 모두에게도 거부감을 줘, 예약을 망설이게 합니다.',
  },
  {
    icon: 'ph-scales',
    title: '환불·변경 기준이 애매',
    body: '위약금, 예약 관련 분쟁과 악성 리뷰 문제가 다수 발생합니다.',
  },
];
