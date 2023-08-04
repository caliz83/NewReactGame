import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.rawg.io/api', 
    params: {
        key: '6fc632ef0f074ec1a736f4a37eec0d3c'
    }
})
