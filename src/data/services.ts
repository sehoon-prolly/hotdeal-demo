// Services 섹션 카드 데이터

export interface Service {
  icon: string; // Phosphor 아이콘 클래스 (regular)
  title: string;
  body: string;
  metric: { prefix: string; value: string; suffix: string }; // 하단 성과 지표
}

export const services: Service[] = [
  {
    icon: 'ph-lightning',
    title: '① 취소 감지 즉시 핫딜 알림 자동 발송',
    body: '노쇼·직전취소가 확인되면 3분 이내에 대기 고객에게 핫딜 알림이 자동으로 나갑니다. 문자 한 줄도 직접 쓸 필요 없습니다.',
    metric: { prefix: '핫딜 발송 후', value: '평균 26분', suffix: '내 슬롯 충전' },
  },
  {
    icon: 'ph-users',
    title: '② 관심 고객 풀 자동 적립·관리',
    body: '"자리 나면 알려줘" 한 번이면 끝입니다. 이후 빈 슬롯이 생길 때마다 자동으로 연결됩니다. 평소 예약 잡기 어려웠던 잠재 단골이 매장 팬으로 전환됩니다.',
    metric: { prefix: '알림 수신 고객의', value: '43%', suffix: '가 실제 예약 전환' },
  },
  {
    icon: 'ph-plugs',
    title: '③ 기존 예약 시스템 그대로 연동, 수작업 없는 모객',
    body: '네이버 예약, 카카오, 똑딱 등 지금 사용 중인 예약 시스템에 추가 설치 없이 연결됩니다. 사장님은 시술에만 집중하면 됩니다.',
    metric: { prefix: '월평균 모객 수작업', value: '4.2시간', suffix: '절감' },
  },
];
