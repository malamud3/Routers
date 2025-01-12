import { redirect } from 'react-router-dom';

export const getTokenDuration = () => {
  const storeExpirationDate = localStorage.getItem('expiration');
  const expiration = new Date(storeExpirationDate);
  const now = new Date();

  const duration = expiration.getTime() - now.getTime();

  return duration;
};

export const getAuthToken = () => {
  const token = localStorage.getItem('token');
  const tokenD = getTokenDuration();

  if (!token) {
    return null;
  }

  if (tokenD < 0) {
    return 'EXPIRED';
  }
  return token;
};

export const tokenLoader = () => {
  return getAuthToken();
};

export function checkAuthLoader() {
  const token = getAuthToken();

  if (!token) {
    return redirect('/auth');
  }

  return null;
}
