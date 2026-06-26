import { useNavigate, useLocation } from 'react-router-dom';

const TABS = [
  { path: '/home',      label: '홈',       icon: '🏠' },
  { path: '/my',        label: '기록',     icon: '📅' },
  { path: '/feed',      label: '커뮤니티', icon: '👥' },
  { path: '/profile',   label: '마이',     icon: '👤' },
];

export default function BottomNav() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 flex justify-around py-2 z-50">
      {TABS.map(({ path, label, icon }) => (
        <button
          key={path}
          onClick={() => navigate(path)}
          className={`flex flex-col items-center text-xs gap-0.5 px-4 py-1 ${
            pathname === path ? 'text-primary' : 'text-gray-400'
          }`}
        >
          <span className="text-xl">{icon}</span>
          {label}
        </button>
      ))}
    </nav>
  );
}
