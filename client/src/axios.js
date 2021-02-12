import axios from 'axios';

const instance = axios.create({
  // baseURL: 'http://localhost:8001'
  baseURL: 'https://xmeme-server3.herokuapp.com/'
});

export default instance;