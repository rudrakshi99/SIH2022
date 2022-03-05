import axios from 'axios';
const instance = axios.create({
  baseURL: 'https://krishi-sadhan-app.herokuapp.com',
  // baseURL: 'http://localhost:5000/',
});
export default instance;