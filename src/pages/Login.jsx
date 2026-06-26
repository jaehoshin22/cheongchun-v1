export default function Login() {
  const handleKakaoLogin = () => {
    window.location.href = 'https://gksruf.store/oauth2/authorization/kakao';
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-6">
      <h1 className="text-3xl font-bold text-primary mb-2">청춘잇다</h1>
      <p className="text-gray-500 text-sm mb-12">오늘의 감정을 기록하고, 나만의 공간을 시작해보세요.</p>
      <button
        onClick={handleKakaoLogin}
        className="w-full max-w-xs bg-[#FEE500] text-gray-900 font-semibold py-3 rounded-xl flex items-center justify-center gap-2"
      >
        카카오로 시작하기
      </button>
    </div>
  );
}