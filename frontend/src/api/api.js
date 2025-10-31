import axios from 'axios';

// Tạo instance để gọi backend
const API = axios.create({
  baseURL: 'http://localhost:5000/api', // URL backend
});

export default API;
