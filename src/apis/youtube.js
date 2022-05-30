import axios from 'axios';

const KEY = 'AIzaSyBjvDOcxff-b5d-afl-hnuk9j9pMzNm4Fw';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
});