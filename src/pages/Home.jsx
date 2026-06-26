import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getTodayMood } from '../api';
import { EMOTION_IMAGE } from '../utils/emotion';
import BottomNav from '../components/common/BottomNav';
import useAuthStore from '../store/authStore';

const MOOD_COLORS = {
  ratio100: '#4A90D9',
  ratio75:  '#67b3f5',
  ratio50:  '#a0c4e8',
  ratio25:  '#f5a623',
  ratio0:   '#e74c3c',
};

export default function Home() {
  const navigate = useNavigate();
  const user = useAuthStore((s) => s.user);
  const [mood, setMood] = useState(null);

  useEffect(() => {
    getTodayMood().then((res) => setMood(res.data)).catch(() => {});
  }, []);

  return (
    <div className="min-h-screen bg-white pb-20">
      <header className="px-5 pt-10 pb-4 flex items-center justify-between">
        <div>
          <p className="text-gray-400 text-sm">안녕하세요, 👋</p>
          <h1 className="text-xl font-bold">오늘의 감정을 기록해볼까요?</h1>
        </div>
      </header>

      {/* Today's Vibe */}
      {mood && (
        <section className="mx-5 bg-primary-light rounded-2xl p-5 mb-6">
          <p className="text-sm font-medium text-primary mb-3">Today's Vibe</p>
          <div className="flex items-center gap-4 mb-4">
            <img
              src={EMOTION_IMAGE[mood.representativeEmotion]}
              alt="today mood"
              className="w-16 h-16 object-contain"
            />
            <div className="flex-1">
              <div className="flex h-3 rounded-full overflow-hidden w-full mb-2">
                {Object.entries(MOOD_COLORS).map(([key, color]) => (
                  <div key={key} style={{ width: `${mood[key]}%`, background: color }} />
                ))}
              </div>
              <p className="text-xs text-gray-500">
                긍정 {mood.ratio100 + mood.ratio75}% / 부정 {mood.ratio25 + mood.ratio0}%
              </p>
            </div>
          </div>
          <p className="text-xs text-gray-400">오늘의 작은 노력이 큰 변화를 만들어요.</p>
        </section>
      )}

      {/* Write button */}
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
