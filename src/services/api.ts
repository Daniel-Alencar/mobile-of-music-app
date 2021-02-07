import { create } from 'apisauce';

const api = create({
  baseURL: `http://127.0.0.1:3000/clients`,
});

export default api;