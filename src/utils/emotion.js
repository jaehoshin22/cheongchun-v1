// emotion 숫자 → 이미지 파일명 매핑
// public/assets/ 에 실제 파일 넣으면 됨
export const EMOTION_IMAGE = {
  100: '/assets/bear-very-good.png',
  75:  '/assets/bear-good.png',
  50:  '/assets/bear-normal.png',
  25:  '/assets/bear-bad.png',
  0:   '/assets/bear-very-bad.png',
};

export const EMOTION_OPTIONS = [
  { value: 100, label: '매우 좋아요' },
  { value: 75,  label: '좋아요' },
  { value: 50,  label: '보통이에요' },
  { value: 25,  label: '별로에요' },
  { value: 0,   label: '힘들어요' },
];
