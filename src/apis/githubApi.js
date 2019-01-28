import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.github.com/',
    headers: {Authorization: 'Token e31e78ab1f41506363608ddf05094b3f103d501e'}
})