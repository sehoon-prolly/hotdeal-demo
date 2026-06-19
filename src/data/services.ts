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
    body: '노쇼·직전취소가 확인되면 3분 이내에 대기 고객에게 핫딜 알림이 자동으로 나갑니다. 매장에선 카톡 한 줄이면 충분합니다.',
    metric: { prefix: '', value: '', suffix: '' },
  },
  {
    icon: 'ph-users',
    title: '② 소비자들을 최대한으로 끌어모으는 가격 결정 알고리즘',
    body: '디자이너분께서 결정한 최저 가격 이상을 보장하며 고객에겐 매력적인, 디자이너분께는 만족스러운 가격의 핫딜로 슬롯을 빠르게 채웁니다.',
    metric: { prefix: '', value: '', suffix: '' },
  },
  {
    icon: 'ph-plugs',
    title: '③ 기존 예약 시스템 그대로 연동, 수작업 없는 모객',
    body: '네이버 예약, 카카오 등 기존 사용 중인 예약 시스템에 추가 설치 없이 연결됩니다. 사장님은 시술에만 집중하면 됩니다.',
    metric: { prefix: '', value: '', suffix: '' },
  },
];
