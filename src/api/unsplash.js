import axios from 'axios';
export default axios.create({
    baseURL: 'https://api.unsplash.com/',
headers:{
                Authorization: 'Client-ID K_g8SsZSJvTSbc0rFzu-CQi4SCNvVfXJ5nDopaLzdBA'
            }
});