import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getTodayMood } from '../api';
import { EMOTION_IMAGE } from '../utils/emotion';
import BottomNav from '../components/common/BottomNav';

export default function Home() {
  const navigate = useNavigate();
  const [mood, setMood] = useState(null);

  useEffect(() => {
    getTodayMood().then((res) => setMood(res.data)).catch(() => {});
  }, []);

  return (
    <div className="min-h-screen bg-white pb-20">
      {/* 배경 + 헤더 + 곰돌이 한 덩어리 */}
      <div
        className="relative pt-10 pb-48"
        style={{
          backgroundImage: 'url(/assets/background.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
        }}
      >
        {/* 헤더 */}
        <header className="px-5 flex items-start justify-between">
          <div>
            <p className="text-gray-600 text-sm">안녕하세요, 👋</p>
            <h1 className="text-xl font-bold text-gray-800">오늘의 감정을 기록해볼까요?</h1>
            <p className="text-sm text-gray-400 mt-1">
              {new Date().toLocaleDateString('ko-KR', { year: 'numeric', month: 'long', day: 'numeric', weekday: 'short' })}
            </p>
          </div>
          <button className="text-gray-500 text-xl">🔔</button>
        </header>

        {/* 곰돌이 */}
        {mood && (
          <img
            src={EMOTION_IMAGE[mood.representativeEmotion]}
            alt="bear"
            className="w-40 h-40 object-contain mx-auto mt-16"
            style={{ mixBlendMode: 'multiply' }}
          />
        )}
      </div>

      {/* Today's Vibe 카드 */}
      {mood && (
        <div className="mx-5 -mt-10 relative bg-white rounded-3xl shadow-lg p-5 mb-4">
          <p className="text-base font-bold text-center text-gray-800 mb-4">
            오늘의 작은 노력이<br />큰 변화를 만들어요.
          </p>
          <div className="flex justify-between text-sm font-bold mb-2">
            <span className="text-primary">긍정 {mood.ratio100 + mood.ratio75}%</span>
            <span className="text-red-400">부정 {mood.ratio25 + mood.ratio0}%</span>
          </div>
          <div className="flex h-3 rounded-full overflow-hidden">
            <div style={{ width: `${mood.ratio100}%`, background: '#7C5CFC' }} />
            <div style={{ width: `${mood.ratio75}%`, background: '#9B7FFF' }} />
            <div style={{ width: `${mood.ratio50}%`, background: '#C4B5FD' }} />
            <div style={{ width: `${mood.ratio25}%`, background: '#FCA5A5' }} />
            <div style={{ width: `${mood.ratio0}%`, background: '#EF4444' }} />
          </div>
        </div>
      )}

      {/* 작성 버튼 */}
      <button
        onClick={() => navigate('/write')}
        className="fixed right-5 bottom-24 bg-primary text-white w-14 h-14 rounded-full text-2xl shadow-lg"
      >
        +
      </button>

      <BottomNav />
    </div>
  );
}