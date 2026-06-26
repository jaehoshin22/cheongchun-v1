import { useNavigate } from 'react-router-dom';
import { EMOTION_IMAGE } from '../../utils/emotion';

export default function DiaryCard({ diary }) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/diary/${diary.id}`)}
      className="bg-white rounded-2xl p-4 mb-3 shadow-sm cursor-pointer active:opacity-80"
    >
      <div className="flex items-center gap-2 mb-2">
        <div className="w-8 h-8 rounded-full bg-primary-light flex items-center justify-center text-xs font-bold text-primary">
          {diary.nickname?.[0]}
        </div>
        <div className="flex-1">
          <p className="text-sm font-medium">{diary.nickname}</p>
          <p className="text-xs text-gray-400">{diary.diaryDate}</p>
        </div>
        {diary.emotion != null && (
          <img src={EMOTION_IMAGE[diary.emotion]} alt="emotion" className="w-7 h-7 object-contain" />
        )}
      </div>

      {diary.title && <p className="font-semibold text-sm mb-1">{diary.title}</p>}
      <p className="text-sm text-gray-600 line-clamp-2">{diary.content}</p>

      <div className="flex gap-4 mt-3 text-xs text-gray-400">
        <span>❤️ {diary.empathyCount}</span>
        <span>💬 {diary.commentCount}</span>
      </div>
    </div>
  );
}
