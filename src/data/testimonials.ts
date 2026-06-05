// Testimonials 섹션 데이터

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
}

export const testimonials: Testimonial[] = [
  {
    quote: '당일 취소는 사실 너무 많고요... 매출 순 손실이 가장 큰 문제예요',
    name: '',
    role: '8년차 헤어 디자이너',
  },
  {
    quote: '펌·염색 손님이 직전취소하면 2~3시간이 통째로 비잖아요. 다른 손님들이 그 시간대 앞뒤로 예약을 못하셔서 배로 손해를 보는 거죠',
    name: '',
    role: '3년차 헤어샵 원장',
  },
  {
    quote: '예약금을 걸고 노쇼를 하셔도 서비스직이다보니 나중에 결제금액에 반영해드리는 경우가 많고, 직전에 예약을 변경을 하시면 환불같은게 되게 애매해요.',
    name: '',
    role: '4년차 헤어샵 원장',
  },
  {
    quote: '(노쇼나 직전 취소가 생기면) 어쩔 수가 없죠. 그냥 스트레스 받아서 잠깐 나가서 바람좀 쐬고 오는 것 같아요.',
    name: '',
    role: '7년차 헤어 디자이너',
  },
];
