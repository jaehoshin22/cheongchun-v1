# cheongchun-v1

## 시작하기

```bash
npm install
npm run dev
```

## 폴더 구조

```
src/
├── api/index.js          ← 모든 API 요청 함수
├── store/authStore.js    ← 로그인 상태 전역 관리 (Zustand)
├── utils/emotion.js      ← 감정 이미지 매핑
├── pages/                ← 화면별 컴포넌트
└── components/
    ├── common/           ← BottomNav 등 공통
    └── diary/            ← 일기 관련 (DiaryCard, EmotionModal)
```

## 감정 이미지 파일 넣는 법

`public/assets/` 폴더에 아래 5개 파일 넣으면 됨:

- `bear-very-good.png` (emotion: 100)
- `bear-good.png`      (emotion: 75)
- `bear-normal.png`    (emotion: 50)
- `bear-bad.png`       (emotion: 25)
- `bear-very-bad.png`  (emotion: 0)

## Vercel 배포 후 할 일

1. Vercel 배포 주소 → 백엔드에 CORS 등록 요청
2. 카카오 앱 리다이렉트 URI에 `https://xxx.vercel.app/oauth/callback` 추가 요청
