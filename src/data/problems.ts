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
    body: '젤네일 1건(4~8만 원), 펌·염색 1건(12~18만 원) — 직전취소가 바로 삭제하는 매출입니다.',
    highlight: '한 달에 3건만 노쇼가 나도 연간 손실은 180만 원을 넘습니다.',
  },
  {
    icon: 'ph-phone-call',
    title: '② 빈 슬롯을 채우려고 인스타 스토리·전화 3통… 결국 그냥 비는 날이 생깁니다',
    body: '취소 연락을 받고 인스타를 올려도 반응은 2~3시간 뒤에 오거나 없습니다. 그 사이 슬롯은 그냥 지나갑니다.',
    highlight: '사장님 혼자 월평균 4시간 이상을 이 수작업에 씁니다.',
  },
  {
    icon: 'ph-shield-warning',
    title: '③ 예약금·위약금 정책은 고객이 떠날까봐 못 쓰고 있습니다',
    body: '헤어·네일 업장 10곳 중 7곳이 노쇼를 인지하면서도 예약금 정책을 도입하지 못하고 있습니다. 고객 마찰이 두렵기 때문입니다.',
    highlight: '패널티 없이, 고객 마찰 없이도 빈 슬롯을 채울 방법이 따로 있습니다.',
  },
];
