
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://econverse.digital/',
})

export default api;