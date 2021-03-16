import axios from 'axios';

const api = axios.create({
  baseURL: process.env.URL_REQUEST,
});

export default api;