import axios from 'axios';
import { apiUrl } from '../../environment/environment';

const _axiosInstance = axios.create({
  baseURL: `${apiUrl}`, // Replace with your API base URL
  headers: {
    'Content-Type': 'application/json',
    // Add your authorization token here
    'x-access-token': `${localStorage.getItem('token')||null}`
  }
});

export default _axiosInstance;
