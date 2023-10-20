import axios from "axios";

const api = axios.create({
    baseURL: 'http://ec2-13-58-187-60.us-east-2.compute.amazonaws.com',
});

export default api;