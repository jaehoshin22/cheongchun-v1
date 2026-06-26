import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createDiary, updateEmotion } from '../api';
import EmotionModal from '../components/diary/EmotionModal';

export default function Write() {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [isPublic, setIsPublic] = useState(true);
  const [error, setError] = useState('');
  const [createdId, setCreatedId] = useState(null);
  const [showEmotion, setShowEmotion] = useState(false);

  const handleSubmit = async () => {
    if (!title.trim()) return setError('제목을 입력해주세요.');
    if (content.length < 100) return setError('내용은 100자 이상 입력해주세요.');
    setError('');

    try {
      const res = await createDiary({ title, content, isPublic });
      setCreatedId(res.data.id);
      setShowEmotion(true);
    } catch (err) {
      setError(err.response?.data?.message || '오류가 발생했습니다.');
    }
  };

  const handleSelectEmotion = async (emotion) => {
    try {
      await updateEmotion(createdId, emotion);
    } finally {
      navigate('/home');
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <header className="flex items-center justify-between px-5 pt-10 pb-4">
        <button onClick={() => navigate(-1)} className="text-gray-400 text-sm">← 뒤로</button>
        <h1 className="font-bold">일기 작성</h1>
        <button onClick={handleSubmit} className="text-primary font-semibold text-sm">저장</button>
      </header>

      <div className="flex-1 px-5 space-y-4">
        <input
          className="w-full border-b border-gray-200 py-2 text-lg font-semibold outline-none"
          placeholder="제목 (최대 50자)"
          maxLength={50}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          className="w-full min-h-[300px] text-sm text-gray-700 outline-none resize-none"
          placeholder="오늘 하루를 기록해보세요. (100자 이상)"
          maxLength={500}
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />

        <div className="flex items-center justify-between text-sm text-gray-400">
          <span>{content.length}/500</span>
          <label className="flex items-center gap-2 cursor-pointer">
            <span>공개</span>
            <input type="checkbox" checked={isPublic} onChange={(e) => setIsPublic(e.target.checked)} />
          </label>
        </div>

        {error && <p className="text-red-500 text-xs">{error}</p>}
      </div>

      {showEmotion && <EmotionModal onSelect={handleSelectEmotion} />}
    </div>
  );
}
