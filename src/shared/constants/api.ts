export const API_HOST = 'https://ya-praktikum.tech/api/v2';
export const WSS_HOST = 'wss://ya-praktikum.tech/ws';

export const servicesUrls = {
  signUp: `${API_HOST}/auth/signup`,
  logIn: `${API_HOST}/auth/signin`,
  logOut: `${API_HOST}/auth/logout`,
  userInfo: `${API_HOST}/auth/user`,
  searchUser: `${API_HOST}/user/search`,
  media: `${API_HOST}/resources`,
  chats: `${API_HOST}/chats`,
  chatUsers: `${API_HOST}/chats/users`,
  userProfile: `${API_HOST}/user/profile`,
  password: `${API_HOST}/user/password`,
  avatar: `${API_HOST}/user/profile/avatar`,
  chatToken: `${API_HOST}/chats/token`,
  messages: `${WSS_HOST}/chats`,
};
