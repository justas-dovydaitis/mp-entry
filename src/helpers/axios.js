import axios from 'axios';
import { API_ROOT, API_ACCESS_KEY } from '../setings.json';

const instance = axios.create({
    baseURL: API_ROOT,
    timeout: 1000,
    headers: { 'Authorization': API_ACCESS_KEY }
});

export default instance;