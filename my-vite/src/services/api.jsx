// src/services/api.jsx

const BASE_URL = "http://hostname";

export const fetchtopUser = async () => {
  const res = await fetch(`${BASE_URL}/users`);
  return res.json();
};

export const fetchpost = async (type = "latest") => {
  const res = await fetch(`${BASE_URL}/posts?type=${type}`);
  return res.json();
};
