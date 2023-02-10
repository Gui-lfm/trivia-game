import { MD5 } from 'crypto-js';

export function getHashFromLocalStorage() {
  const hash = localStorage.getItem('hashGravatar');
  return `https://www.gravatar.com/avatar/${hash}`;
}
export function saveHashtoLocalStorage(email) {
  const hash = MD5(email).toString();
  localStorage.setItem('hashGravatar', hash);
}
