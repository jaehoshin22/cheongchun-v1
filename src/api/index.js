import axios from 'axios';

const api = axios.create({
  baseURL: 'https://gksruf.store',
  headers: { 'Content-Type': 'application/json' },
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

api.interceptors.response.use(
  (res) => res.data,
  (err) => Promise.reject(err)
);

export default api;

// ── Auth ──────────────────────────────────────────
export const getMe = () => api.get('/api/auth/me');
export const logout = () => api.post('/api/auth/logout');

// ── Member ────────────────────────────────────────
export const updateNickname = (nickname) => api.patch('/api/members/me/nickname', { nickname });
export const updateAge = (age) => api.patch('/api/members/me/age', { age });
export const toggleNotification = () => api.patch('/api/members/me/notification');
export const getProfile = () => api.get('/api/members/me/profile');

// ── Diary ─────────────────────────────────────────
export const createDiary = (body) => api.post('/api/diaries', body);
export const updateEmotion = (id, emotion) => api.patch(`/api/diaries/${id}/emotion`, { emotion });
export const getDiary = (id) => api.get(`/api/diaries/${id}`);
export const updateDiary = (id, body) => api.patch(`/api/diaries/${id}`, body);
export const deleteDiary = (id) => api.delete(`/api/diaries/${id}`);
export const getFeed = (sort = 'latest') => api.get(`/api/diaries/feed?sort=${sort}`);
export const getHotFeed = () => api.get('/api/diaries/hot');
export const getMyDiaries = (year, month, visibility = 'all') =>
  api.get(`/api/diaries/me?year=${year}&month=${month}&visibility=${visibility}`);
export const searchDiaries = (keyword) => api.get(`/api/diaries/search?keyword=${keyword}`);
export const getTodayMood = () => api.get('/api/diaries/today-mood');

// ── Comment ───────────────────────────────────────
export const getComments = (diaryId) => api.get(`/api/diaries/${diaryId}/comments`);
export const createComment = (diaryId, content) =>
  api.post(`/api/diaries/${diaryId}/comments`, { content });
export const deleteComment = (commentId) => api.delete(`/api/comments/${commentId}`);

// ── Empathy ───────────────────────────────────────
export const getEmpathy = (diaryId) => api.get(`/api/diaries/${diaryId}/empathy`);
export const toggleEmpathy = (diaryId) => api.post(`/api/diaries/${diaryId}/empathy`);

// ── Report ────────────────────────────────────────
export const report = (targetId, reportType, reason) =>
  api.post('/api/reports', { targetId, reportType, reason });
