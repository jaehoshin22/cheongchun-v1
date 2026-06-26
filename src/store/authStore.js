import { create } from 'zustand';

const useAuthStore = create((set) => ({
  isLoggedIn: !!localStorage.getItem('token'),
  user: null,

  login: (token) => {
    localStorage.setItem('token', token);
    set({ isLoggedIn: true });
  },
  setUser: (user) => set({ user }),
  logout: () => {
    localStorage.removeItem('token');
    set({ isLoggedIn: false, user: null });
  },
}));

export default useAuthStore;
