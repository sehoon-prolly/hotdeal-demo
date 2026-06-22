// Testimonials 섹션 데이터

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
}

export const testimonials: Testimonial[] = [
  {
    quote: '당일 취소는 사실 너무 많고요... 매출 순손실이 가장 큰 문제예요',
    name: '',
    role: '8년차 헤어 디자이너',
  },
  {
    quote: '펑크가 나면 앞뒤 시간 예약도 막혀 손해가 배가 돼요.',
    name: '',
    role: '3년차 헤어샵 원장',
  },
  {
    quote: '예약금을 결제액에서 빼주는 경우가 많고, 예약변경은 환불도 애매해요.',
    name: '',
    role: '4년차 헤어샵 원장',
  },
  {
    quote: '노쇼가 나면 어쩔 수 없죠. 스트레스에 잠깐 바람 쐬고 와요.',
    name: '',
    role: '7년차 헤어 디자이너',
  },
];
