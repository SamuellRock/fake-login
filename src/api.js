const API_URL = 'http://localhost:3001/users';

export async function loginUser(username, password) {
  const res = await fetch(`${API_URL}?username=${username}&password=${password}`);
  const users = await res.json();
  return users.length > 0 ? users[0] : null;
}
