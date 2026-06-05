// Testimonials 섹션 데이터

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      '한 달에 노쇼가 4~5번씩 나는데, 그때마다 인스타 올리고 카카오 보내고... 그게 제일 스트레스였어요. 이거 쓰고 나서는 취소 뜨면 그냥 두면 되더라고요. 첫 달에 빈 슬롯 8건 중 7건을 채웠는데, 진짜 소름 돋았어요.',
    name: '이지수',
    role: '성수동 1인 네일샵 운영 3년차',
  },
  {
    quote:
      '펌·염색 손님이 직전취소하면 2~3시간이 통째로 비잖아요. 그게 제일 아까웠는데. 지금은 취소 알림 뜨는 순간 자동으로 핫딜이 나가니까 저는 다음 손님 준비만 해요. 지난달에 회수한 매출이 68만 원이에요.',
    name: '박민준',
    role: '강남구 헤어살롱 원장, 펌·염색 전문',
  },
];
