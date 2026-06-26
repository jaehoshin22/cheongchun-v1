import { EMOTION_OPTIONS, EMOTION_IMAGE } from '../../utils/emotion';

export default function EmotionModal({ onSelect }) {
  return (
    <div className="fixed inset-0 bg-black/40 flex items-end z-50">
      <div className="bg-white w-full rounded-t-3xl p-6">
        <h3 className="text-center font-bold text-lg mb-1">오늘의 감정은?</h3>
        <p className="text-center text-gray-400 text-sm mb-6">일기를 작성한 지금, 기분이 어때요?</p>
        <div className="flex justify-around">
          {EMOTION_OPTIONS.map(({ value, label }) => (
            <button
              key={value}
              onClick={() => onSelect(value)}
              className="flex flex-col items-center gap-2"
            >
              <img src={EMOTION_IMAGE[value]} alt={label} className="w-12 h-12 object-contain" />
              <span className="text-xs text-gray-500">{label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
