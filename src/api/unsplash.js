import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID 6cc3d6979c8c49954f7c781a1f96f979ab6ef67975fa8bdbd312b259a6746ab5'
  }
});